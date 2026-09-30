const $=id=>document.getElementById(id);
const num=v=>{const n=parseFloat(String(v).replace(/,/g,''));return isFinite(n)?n:0;};

let MODE='dg';
let plant={};
let asm={};
let dirty=new Set();

const FUELS={
  diesel:   {label:'Diesel (HSD)',         pmRaw:350,   sfc:0.21},
  hfo:      {label:'Furnace Oil (HFO)',    pmRaw:450,   sfc:0.23},
  coal:     {label:'Coal (steam coal)',    pmRaw:9000,  q_per_ton:1400},
  biomass:  {label:'Biomass / agri-residue',pmRaw:5000, q_per_ton:1600},
  boilerHFO:{label:'Furnace Oil (HFO)',    pmRaw:380,   q_per_ton:1200},
  png:      {label:'PNG / Natural gas',    pmRaw:30,    q_per_ton:1100},
};
const DG_FUELS=['diesel','hfo'];
const BOILER_FUELS=['coal','biomass','boilerHFO','png'];

const ANCHORS={
  dg:    {size:750, bagCapex:800000,  espCapex:1400000, exp:0.65},
  boiler:{size:10,  bagCapex:3500000, espCapex:5500000, exp:0.65},
};

const HEUR={
  dgSAR:7, dgLF:0.7,
  bagDp_kPa:1.5, fanEff:0.65,
  espW_per_Q:0.7, espCleanFactor:0.012,
  bagLifeMo:{diesel:36,hfo:24,coal:15,biomass:12,boilerHFO:24,png:42},
  bagMediaCostPerCMH_dg:7,
  bagMediaCostPerCMH_boiler:14,
  bagSwapLabourFactor:0.35,
  dgBackpressurePctPerKPa:0.4,
  dieselPrice:90,
};

function buildForm(){
  const isDG=MODE==='dg';
  const fuels=isDG?DG_FUELS:BOILER_FUELS;
  const sizeLab=isDG?'Generator capacity':'Boiler steam capacity';
  const sizeUnit=isDG?'kVA':'TPH';
  const sizeNote=isDG?'nameplate kVA (e.g. 250, 500, 750, 1000)':'tonnes of steam per hour';
  $('plantForm').innerHTML=`
    <div class="sechead">Plant</div>
    <div class="q"><div class="lab">${sizeLab} <span class="nt">${sizeNote}</span></div>
      <input id="size" inputmode="decimal" placeholder="${sizeUnit}"></div>
    <div class="q"><div class="lab">Primary fuel <span class="nt">drives PM load and bag life</span></div>
      <select id="fuel">${fuels.map(f=>`<option value="${f}">${FUELS[f].label}</option>`).join('')}</select></div>
    ${isDG?`<div class="q"><div class="lab">Typical load factor <span class="nt">average % of rated kVA</span></div>
      <input id="lf" inputmode="decimal" value="70"></div>`:''}
    <div class="sechead">Operating profile</div>
    <div class="q"><div class="lab">Annual run-hours <span class="nt">how often the unit operates</span></div>
      <input id="hours" inputmode="numeric"></div>
    <div class="q"><div class="lab">Electricity tariff <span class="nt">site rate, ₹/kWh</span></div>
      <input id="tariff" inputmode="decimal" value="9"></div>
    ${isDG?`<div class="q"><div class="lab">Diesel price <span class="nt">for backpressure fuel penalty, ₹/litre</span></div>
      <input id="fuelPrice" inputmode="decimal" value="${HEUR.dieselPrice}"></div>`:''}
    <div class="q"><div class="lab">Horizon <span class="nt">comparison window, years</span></div>
      <input id="years" value="10" inputmode="numeric"></div>
  `;
  $('plantForm').querySelectorAll('input,select').forEach(el=>el.addEventListener('input',()=>{readPlant();recompute();}));
  if(isDG){$('size').value=750;$('hours').value=2000;}
  else {$('size').value=10;$('hours').value=6000;}
  readPlant();
}

function readPlant(){
  plant={
    mode:MODE,
    size:num($('size')?.value),
    fuel:$('fuel')?.value,
    lf:MODE==='dg'?num($('lf')?.value)/100:1,
    hours:num($('hours')?.value),
    tariff:num($('tariff')?.value),
    fuelPrice:num($('fuelPrice')?.value)||HEUR.dieselPrice,
    years:num($('years')?.value)||10,
  };
}

function computeDefaults(){
  const p=plant;
  const f=FUELS[p.fuel]||FUELS.diesel;
  let Q=0;
  if(p.mode==='dg'){
    const kW=p.size*0.8;
    Q=kW*p.lf*HEUR.dgSAR;
  }else{
    Q=p.size*(f.q_per_ton||1400);
  }
  const a=ANCHORS[p.mode];
  const scale=p.size>0?Math.pow(p.size/a.size,a.exp):1;
  const capB=Math.round(a.bagCapex*scale/1000)*1000;
  const capE=Math.round(a.espCapex*scale/1000)*1000;
  const lifeMo=HEUR.bagLifeMo[p.fuel]||30;
  const hrep=p.hours>0?Math.round(p.hours*(lifeMo/12)):0;
  const cmediaCoeff=(p.mode==='dg')?HEUR.bagMediaCostPerCMH_dg:HEUR.bagMediaCostPerCMH_boiler;
  const Cmedia=Math.round(Q*cmediaCoeff);
  const Cswap=Math.round(Cmedia*HEUR.bagSwapLabourFactor);
  const fanKW_bag=Q/3600*HEUR.bagDp_kPa/HEUR.fanEff;
  const kw_esp=Q*HEUR.espW_per_Q/1000;
  const cleanE_year=Math.round(capE*HEUR.espCleanFactor);
  const cleanB_year=Math.round(capB*0.008);
  let Cbp=0;
  if(p.mode==='dg'){
    const pctLoss=HEUR.dgBackpressurePctPerKPa*HEUR.bagDp_kPa/100;
    const kg_hr=p.size*0.8*p.lf*FUELS.diesel.sfc;
    const lit_hr=kg_hr/0.84;
    Cbp=Math.round(lit_hr*p.fuelPrice*pctLoss);
  }
  return {Q,capB,capE,Cmedia,Cswap,hrep,fanKW_bag,kw_esp,cleanB_year,cleanE_year,Cbp,lifeMo};
}

function unitsRowDefs(){
  const fuelLabel=(FUELS[plant.fuel]||{}).label||'';
  const isDG=plant.mode==='dg';
  const rows=[
    {grp:'Derived from your plant size & fuel'},
    {k:'Q', label:'Flue-gas flow rate', unit:'Nm³/hr',
      src: isDG ? `CPCB DG norms 2014 · ${HEUR.dgSAR} Nm³/hr per kW × load factor`
                : `Stoichiometric combustion for ${fuelLabel}`,
      bag:true, esp:true, shared:true, dp:0},
    {k:'capB', label:'CAPEX', unit:'₹', src:`Industry mid-band, six-tenths scaling on ${ANCHORS[plant.mode].size} ${isDG?'kVA':'TPH'} anchor`, bag:true, esp:false, dp:0, money:true},
    {k:'capE', label:'CAPEX', unit:'₹', src:`Industry mid-band, six-tenths scaling on ${ANCHORS[plant.mode].size} ${isDG?'kVA':'TPH'} anchor`, bag:false, esp:true, dp:0, money:true},
    {grp:'Bag filter — operating parameters'},
    {k:'lifeMo', label:'Bag replacement interval', unit:'months', src:`Industry standard for ${fuelLabel}: ${HEUR.bagLifeMo[plant.fuel]} months`, bag:true, esp:false, dp:0},
    {k:'hrep', label:'Bag replacement interval', unit:'run-hours', src:'Lifetime months × your annual run-hours / 12', bag:true, esp:false, dp:0},
    {k:'Cmedia', label:'Cost per media change', unit:'₹', src:`₹${(plant.mode==='dg'?HEUR.bagMediaCostPerCMH_dg:HEUR.bagMediaCostPerCMH_boiler)} per Nm³/hr × Q (bags + cages + handling)`, bag:true, esp:false, money:true},
    {k:'Cswap', label:'Labour + downtime per change', unit:'₹', src:`${(HEUR.bagSwapLabourFactor*100).toFixed(0)}% of media cost (typical site rate)`, bag:true, esp:false, money:true},
    {k:'fanKW_bag', label:'Fan kW penalty (avg)', unit:'kW', src:`Δp ${HEUR.bagDp_kPa} kPa / fan η ${HEUR.fanEff} (textbook)`, bag:true, esp:false, dp:1},
    {k:'cleanB_year', label:'Pulse-clean upkeep', unit:'₹/yr', src:'~0.8% of CAPEX (pulse valves, diaphragms, compressed air)', bag:true, esp:false, money:true},
    {grp:'Filterless ESP — operating parameters'},
    {k:'kw_esp', label:'HV field power draw', unit:'kW', src:`${HEUR.espW_per_Q} W per Nm³/hr (industrial ESP textbook)`, bag:false, esp:true, dp:2},
    {k:'cleanE_year', label:'Plate cleaning', unit:'₹/yr', src:'~1.2% of CAPEX (periodic plate cleaning)', bag:false, esp:true, money:true},
  ];
  if(isDG) rows.push(
    {grp:'DG-specific — backpressure penalty'},
    {k:'Cbp', label:'Backpressure fuel penalty', unit:'₹/run-hr', src:`Cummins/CAT exhaust manuals · ~${HEUR.dgBackpressurePctPerKPa}% engine output loss per kPa of exhaust Δp`, bag:true, esp:false, money:true},
  );
  return rows;
}

function recompute(){
  const def=computeDefaults();
  const rows=unitsRowDefs().filter(r=>!r.grp);
  rows.forEach(r=>{
    if(r.shared){
      if(!dirty.has(r.k+':bag')) asm[r.k+':bag']=def[r.k];
    } else {
      if(r.bag && !dirty.has(r.k+':bag')) asm[r.k+':bag']=def[r.k];
      if(r.esp && !dirty.has(r.k+':esp')) asm[r.k+':esp']=def[r.k];
    }
  });
  renderAssumptions();
  renderResults();
}

function fmtNumber(v,dp,money){
  if(v===undefined||v===null||!isFinite(v)) return '—';
  if(money) return Math.round(v).toLocaleString('en-IN');
  return Number(v).toFixed(dp||0);
}

function renderAssumptions(){
  const rows=unitsRowDefs();
  const t=$('asmTable');
  let h='';
  rows.forEach(r=>{
    if(r.grp){h+=`<tr class="grp"><td colspan="3">${r.grp}</td></tr>`;return;}
    const cellHtml=(col,shown)=>{
      if(!shown) return `<td class="r" style="color:var(--d-dim)">—</td>`;
      const v=asm[r.k+':'+col];
      const isDirty=dirty.has(r.k+':'+col);
      const val=fmtNumber(v,r.dp,r.money);
      return `<td class="r"><input class="ed ${isDirty?'dirty':''}" data-k="${r.k}" data-col="${col}" value="${val}"><span class="u">${r.unit}</span></td>`;
    };
    const lhs=`<div>${r.label}</div><div class="src">${r.src}</div>`;
    if(r.shared){
      const v=asm[r.k+':bag']; const isDirty=dirty.has(r.k+':bag');
      const val=fmtNumber(v,r.dp,r.money);
      h+=`<tr><td>${lhs}</td><td class="r" colspan="2"><input class="ed ${isDirty?'dirty':''}" data-k="${r.k}" data-col="bag" value="${val}"><span class="u">${r.unit}</span></td></tr>`;
    } else {
      h+=`<tr><td>${lhs}</td>${cellHtml('bag',r.bag)}${cellHtml('esp',r.esp)}</tr>`;
    }
  });
  t.innerHTML=h;
  $('dirtyCount').textContent=dirty.size;
  t.querySelectorAll('input.ed').forEach(inp=>{
    inp.addEventListener('input',e=>{
      const k=e.target.dataset.k, col=e.target.dataset.col;
      const val=parseFloat(e.target.value.replace(/,/g,''))||0;
      asm[k+':'+col]=val;
      dirty.add(k+':'+col);
      e.target.classList.add('dirty');
      if(k==='lifeMo' && col==='bag' && plant.hours>0){
        const newHrep=Math.round(plant.hours*(val/12));
        asm['hrep:bag']=newHrep;
        dirty.add('hrep:bag');
        const hrepInp=t.querySelector('input.ed[data-k="hrep"][data-col="bag"]');
        if(hrepInp){hrepInp.value=newHrep.toLocaleString('en-IN');hrepInp.classList.add('dirty');}
      } else if(k==='hrep' && col==='bag' && plant.hours>0){
        const newLife=+(val/plant.hours*12).toFixed(1);
        asm['lifeMo:bag']=newLife;
        dirty.add('lifeMo:bag');
        const lifeInp=t.querySelector('input.ed[data-k="lifeMo"][data-col="bag"]');
        if(lifeInp){lifeInp.value=newLife;lifeInp.classList.add('dirty');}
      }
      $('dirtyCount').textContent=dirty.size;
      renderResults();
    });
  });
}
$('resetAsm').onclick=()=>{dirty.clear();recompute();};

function pack(){
  const p=plant;
  const A=k=>asm[k+':bag']||0;
  const B=k=>asm[k+':esp']||0;
  const hcleanB=p.hours||1, hcleanE=p.hours||1;
  return {
    capB:A('capB'),capE:B('capE'),
    cmedia:A('Cmedia'),hrep:A('hrep'),cswap:A('Cswap'),
    ccleanB:A('cleanB_year'),ccleanE:B('cleanE_year'),
    hcleanB,hcleanE,
    kw:B('kw_esp'),rkwh:p.tariff,
    cbp: A('Cbp') + A('fanKW_bag')*p.tariff,
    H:p.hours, Y:p.years||10,
    npv:$('npv').checked, disc:num($('disc').value), stepped:$('stepped').checked,
  };
}

function nominal(p){
  const HY=p.H*p.Y;
  const reps=p.hrep>0?HY/p.hrep:0;
  const clB=p.hcleanB>0?HY/p.hcleanB:0;
  const clE=p.hcleanE>0?HY/p.hcleanE:0;
  const consum=reps*(p.cmedia+p.cswap);
  const cleanB=clB*p.ccleanB, cleanE=clE*p.ccleanE;
  const energy=p.kw*HY*p.rkwh;
  const bp=p.cbp*HY;
  const tcoBag=p.capB+consum+cleanB+bp;
  const tcoEsp=p.capE+cleanE+energy;
  const rBag=HY>0?(consum+cleanB+bp)/HY:0;
  const rEsp=HY>0?(cleanE+energy)/HY:0;
  return {reps,clB,clE,consum,cleanB,cleanE,energy,bp,tcoBag,tcoEsp,rBag,rEsp,HY};
}
function series(p){
  const N=2400, dt=p.Y/N, hstep=p.H*dt;
  const mediaRate=p.hrep>0?(p.cmedia+p.cswap)/p.hrep:0;
  const clRateB=p.hcleanB>0?p.ccleanB/p.hcleanB:0;
  const clRateE=p.hcleanE>0?p.ccleanE/p.hcleanE:0;
  let bag=p.capB,esp=p.capE,pRep=0,pClB=0,pClE=0;
  const pts=[{t:0,bag,esp}];
  for(let i=1;i<=N;i++){
    const t=i*dt,hrs=p.H*t,d=p.npv?Math.pow(1+p.disc/100,-t):1;
    let bI=p.cbp*hstep, eI=p.kw*p.rkwh*hstep;
    if(p.stepped){
      const rep=p.hrep>0?Math.floor(hrs/p.hrep):0;bI+=(rep-pRep)*(p.cmedia+p.cswap);pRep=rep;
      const cb=p.hcleanB>0?Math.floor(hrs/p.hcleanB):0;bI+=(cb-pClB)*p.ccleanB;pClB=cb;
      const ce=p.hcleanE>0?Math.floor(hrs/p.hcleanE):0;eI+=(ce-pClE)*p.ccleanE;pClE=ce;
    }else{
      bI+=(mediaRate+clRateB)*hstep; eI+=clRateE*hstep;
    }
    bag+=bI*d; esp+=eI*d;
    pts.push({t,bag,esp});
  }
  return pts;
}
function crossover(pts){
  const first=pts[0];
  if(first.bag>=first.esp) return {status:'fromStart'};
  for(let i=1;i<pts.length;i++){
    if(pts[i].bag>=pts[i].esp){
      const a=pts[i-1],b=pts[i],da=a.bag-a.esp,db=b.bag-b.esp;
      const f=da/(da-db); return {status:'cross',t:a.t+(b.t-a.t)*f};
    }
  }
  return {status:'never'};
}

function money(v,frac=0){return '₹'+new Intl.NumberFormat('en-IN',{maximumFractionDigits:frac}).format(Math.round(v*Math.pow(10,frac))/Math.pow(10,frac));}
function compact(v){
  if(Math.abs(v)>=1e7)return '₹'+(v/1e7).toFixed(2).replace(/\.?0+$/,'')+' Cr';
  if(Math.abs(v)>=1e5)return '₹'+(v/1e5).toFixed(2).replace(/\.?0+$/,'')+' L';
  return '₹'+Math.round(v).toLocaleString('en-IN');
}

function renderResults(){
  const p=pack();
  const nom=nominal(p);
  const pts=series(p);
  const cr=crossover(pts);
  const tcoBag=pts[pts.length-1].bag, tcoEsp=pts[pts.length-1].esp;

  $('modeNote').textContent=(p.npv?`Discounted to NPV @ ${p.disc||0}% p.a.`:'Nominal cash, undiscounted')
    +' · '+(p.stepped?'as-incurred change-outs':'averaged consumables');

  $('tcoBag').textContent=compact(tcoBag);
  $('tcoEsp').textContent=compact(tcoEsp);
  const diff=tcoBag-tcoEsp;
  $('tcoBagSub').textContent=p.npv?'present value':`over ${p.Y||10} years`;
  $('tcoEspSub').textContent=(diff>0?'saves ':'costs ')+compact(Math.abs(diff))+(diff>0?' vs bag':' more');

  $('rBag').innerHTML=money(nom.rBag,nom.rBag<100?2:0)+'<small>/hr</small>';
  $('rEsp').innerHTML=money(nom.rEsp,nom.rEsp<100?2:0)+'<small>/hr</small>';

  let crHrs=null,crYrs=null;
  if(cr.status==='cross'){crYrs=cr.t;crHrs=p.H*cr.t;
    $('crH').innerHTML=Math.round(crHrs).toLocaleString('en-IN')+'<small> hrs</small>';
    $('crY').innerHTML=crYrs.toFixed(1)+'<small> yrs</small>';
  }else if(cr.status==='fromStart'){
    $('crH').innerHTML='0<small> hrs</small>';$('crY').innerHTML='0<small> yrs</small>';
  }else{$('crH').innerHTML='—';$('crY').innerHTML='&gt;'+(p.Y||10)+'<small> yrs</small>';}

  const v=$('verdict'),vt=$('verdictText'),vi=v.querySelector('.vi');
  v.className='verdict';
  const sizeOK=plant.size>0, hoursOK=p.H>0;
  if(!sizeOK){v.classList.add('warn');vi.textContent='!';vt.innerHTML=`Enter your <b>${plant.mode==='dg'?'generator kVA':'boiler TPH'}</b> to run the comparison.`;}
  else if(!hoursOK){v.classList.add('warn');vi.textContent='!';vt.innerHTML='Enter your <b>annual run-hours</b> to run the comparison.';}
  else if(cr.status==='cross'){v.classList.add('win');vi.textContent='✓';
    const yrLab=crYrs<1?`${Math.round(crYrs*12)} months`:`${crYrs.toFixed(1)} years`;
    vt.innerHTML=`Filterless ESP becomes the cheaper option after <b>~${Math.round(crHrs).toLocaleString('en-IN')} run-hours</b> (≈ <b>${yrLab}</b> at ${p.H.toLocaleString('en-IN')} hrs/yr). Run the unit longer than that and filterless wins on lifetime cost.`;
  } else if(cr.status==='fromStart'){v.classList.add('win');vi.textContent='✓';vt.innerHTML='Under these inputs filterless is cheaper to buy <b>and</b> to run — it wins from day one.';}
  else{
    if(nom.rEsp>=nom.rBag&&p.capE>p.capB){v.classList.add('lose');vi.textContent='✕';
      vt.innerHTML='Under these inputs filterless costs more upfront and per hour. Check the run-hours and tariff — and the bag-filter replacement interval in the assumptions panel.';}
    else{v.classList.add('warn');vi.textContent='~';
      vt.innerHTML=`Over ${p.Y||10} years the bag filter stays cheaper here. The two cells that most often flip this: <b>bag replacement interval</b> and <b>backpressure penalty</b> — adjust them in the assumptions panel if you have site data.`;}
  }
  drawChart(pts,cr,p);
  drawBreakdown(nom,p);
}

function drawChart(pts,cr,p){
  const W=920,Hh=440,mL=64,mR=20,mT=20,mB=44;
  const pw=W-mL-mR, ph=Hh-mT-mB;
  let ymax=0;pts.forEach(d=>{ymax=Math.max(ymax,d.bag,d.esp)});ymax=ymax*1.08||1;
  const X=t=>mL+(t/(p.Y||10))*pw;
  const Y=v=>mT+ph-(v/ymax)*ph;
  const path=k=>'M'+pts.map(d=>X(d.t).toFixed(1)+','+Y(d[k]).toFixed(1)).join(' L');
  let g='';
  for(let i=0;i<=4;i++){const yy=mT+ph-(i/4)*ph;const val=ymax*i/4;
    g+=`<line x1="${mL}" y1="${yy}" x2="${W-mR}" y2="${yy}" stroke="rgba(255,255,255,0.06)"/>`;
    g+=`<text x="${mL-8}" y="${yy+4}" text-anchor="end" fill="rgba(246,246,248,0.36)" font-family="DM Sans, system-ui, sans-serif" font-size="11">${compact(val)}</text>`;}
  g+=`<line x1="${mL}" y1="${mT}" x2="${mL}" y2="${mT+ph}" stroke="rgba(255,255,255,0.10)"/>`;
  g+=`<line x1="${mL}" y1="${mT+ph}" x2="${W-mR}" y2="${mT+ph}" stroke="rgba(255,255,255,0.10)"/>`;
  const yrs=p.Y||10;const xt=yrs<=10?2:Math.ceil(yrs/5);
  for(let yv=0;yv<=yrs;yv+=xt){g+=`<text x="${X(yv)}" y="${mT+ph+22}" text-anchor="middle" fill="rgba(246,246,248,0.36)" font-family="DM Sans, system-ui, sans-serif" font-size="11">${yv===0?'YR 0':yv}</text>`;}
  g+=`<defs>
    <linearGradient id="bf" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F0913E" stop-opacity=".22"/><stop offset="1" stop-color="#F0913E" stop-opacity="0"/></linearGradient>
    <linearGradient id="ef" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3ddca4" stop-opacity=".20"/><stop offset="1" stop-color="#3ddca4" stop-opacity="0"/></linearGradient>
    <linearGradient id="el" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#5aa7ff"/><stop offset="1" stop-color="#3ddca4"/></linearGradient></defs>`;
  g+=`<path d="${path('bag')} L${X(pts[pts.length-1].t)},${mT+ph} L${mL},${mT+ph} Z" fill="url(#bf)"/>`;
  g+=`<path d="${path('esp')} L${X(pts[pts.length-1].t)},${mT+ph} L${mL},${mT+ph} Z" fill="url(#ef)"/>`;
  g+=`<path d="${path('esp')}" fill="none" stroke="url(#el)" stroke-width="3" stroke-linejoin="round"/>`;
  g+=`<path d="${path('bag')}" fill="none" stroke="#F0913E" stroke-width="3" stroke-linejoin="round"/>`;
  if(cr.status==='cross'){
    const cx=X(cr.t);const cyv=pts.find(d=>d.t>=cr.t);const cy=Y(cyv?cyv.esp:0);
    g+=`<line x1="${cx}" y1="${cy}" x2="${cx}" y2="${mT}" stroke="rgba(255,255,255,0.12)" stroke-dasharray="3 4"/>`;
    g+=`<circle cx="${cx}" cy="${cy}" r="9" fill="none" stroke="#f6f6f8" stroke-width="2"/><circle cx="${cx}" cy="${cy}" r="3" fill="#f6f6f8"/>`;
    const anchor=cx>W-180?'end':'start';const tx=cx>W-180?cx-12:cx+12;
    g+=`<text x="${tx}" y="${mT+14}" text-anchor="${anchor}" fill="#f6f6f8" font-family="DM Sans, system-ui, sans-serif" font-size="12" font-weight="600">BREAK-EVEN ≈ YR ${cr.t.toFixed(1)}</text>`;
  }
  g+=`<rect x="${mL}" y="6" width="20" height="3" fill="#F0913E"/><text x="${mL+28}" y="11" fill="#f6f6f8" font-family="DM Sans, system-ui, sans-serif" font-size="11.5">Bag filter</text>`;
  g+=`<rect x="${mL+120}" y="6" width="20" height="3" fill="url(#el)"/><text x="${mL+148}" y="11" fill="#f6f6f8" font-family="DM Sans, system-ui, sans-serif" font-size="11.5">Filterless ESP</text>`;
  $('chart').innerHTML=g;
  $('chartcap').textContent='Cumulative cost of ownership over the horizon'
    +(p.npv?', discounted to present value':'')
    +(p.stepped?'. Steps mark each change-out / cleaning as incurred.':'. Consumables averaged to a smooth run-rate.');
}
function drawBreakdown(n,p){
  const isDG=plant.mode==='dg';
  const penaltyLabel=isDG?'Backpressure + fan penalty':'Fan kW penalty (rising Δp)';
  const rows=[
    ['CAPEX',money(p.capB),money(p.capE),''],
    ['Media replacements',money(n.consum),money(0),n.reps?`${n.reps.toFixed(1)} change-outs`:''],
    ['Cleaning / upkeep',money(n.cleanB),money(n.cleanE),`${n.clB.toFixed(1)} / ${n.clE.toFixed(1)} services`],
    ['Energy (HV field)',money(0),money(n.energy),''],
    [penaltyLabel,money(n.bp),money(0),''],
  ];
  let h='';
  rows.forEach(r=>{h+=`<tr><td class="lbl">${r[0]}${r[3]?` <span class="cnt">· ${r[3]}</span>`:''}</td><td class="bag">${r[1]}</td><td class="esp">${r[2]}</td></tr>`;});
  h+=`<tr class="total"><td>10-year total · nominal</td><td>${money(n.tcoBag)}</td><td>${money(n.tcoEsp)}</td></tr>`;
  $('bdBody').innerHTML=h;
}

document.querySelectorAll('.modetab').forEach(t=>t.addEventListener('click',()=>{
  document.querySelectorAll('.modetab').forEach(x=>x.classList.remove('active'));
  t.classList.add('active');
  MODE=t.dataset.mode;
  dirty.clear(); asm={};
  buildForm(); recompute();
}));

['npv','disc','stepped'].forEach(id=>$(id).addEventListener('input',renderResults));
function preparePrint(){
  const d=new Date();
  const fmt=d.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'});
  const mode=$('modeNote')?$('modeNote').textContent:'';
  const modeTab=document.querySelector('.modetab.active');
  $('phDate').textContent=fmt;
  $('phMode').textContent=modeTab?modeTab.textContent.trim():'';
}
$('printBtn').onclick=()=>{preparePrint();window.print();}
window.addEventListener('beforeprint',preparePrint);
$('asmToggle').onclick=()=>{$('asmToggle').classList.toggle('open');$('asmBody').classList.toggle('open');};

buildForm(); recompute();
