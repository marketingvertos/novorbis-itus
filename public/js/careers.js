(function () {
  'use strict';

  var JOBS = [
    { title: 'Jr Engineer — Testing and Production', dept: 'Manufacturing / Production', location: 'Pune Factory', type: 'Full-time', level: 'Junior',
      summary: 'Run bench and on-load testing for CarbonFree ESP units at the Kasurdi Kheba plant, and own the build quality of what ships.',
      responsibilities: ['Execute pre-dispatch electrical and PM-efficiency tests on ESP assemblies', 'Log test data and raise deviations against the production checklist', 'Support line assembly, wiring and HV insulation checks', 'Coordinate with design on field failures and rework'],
      skills: ['Diploma / BE Mechanical or Electrical', 'HV testing basics', 'Instrumentation', 'Shop-floor discipline'] },
    { title: 'ESG Analyst', dept: 'Quality & Compliance', location: 'Gurugram', type: 'Full-time', level: 'Mid-level',
      summary: 'Quantify the emissions our systems remove, and keep our reporting defensible against CPCB, CAQM and investor diligence.',
      responsibilities: ['Model avoided PM and CO₂ across the installed base', 'Maintain the ESG data set for investor and grant reporting', 'Track CAQM, CPCB and state pollution board directions', 'Prepare compliance documentation for customer audits'],
      skills: ['Environmental science / engineering', 'GHG accounting', 'Excel / Python', 'Regulatory research'] },
    { title: 'Design Engineer', dept: 'Design', location: 'Pune HQ', type: 'Full-time', level: 'Mid-level',
      summary: 'Design filterless APCD assemblies that retrofit onto existing DG sets and stacks without an engine load penalty.',
      responsibilities: ['Own 3D models and manufacturing drawings for ESP housings and internals', 'Size collector geometry against flue-gas profiles', 'Design for sheet-metal manufacturability and field retrofit', 'Release BOMs and drive design changes through production'],
      skills: ['SolidWorks / Creo', 'Sheet-metal design', 'GD&T', 'Flue-gas fundamentals'] },
    { title: 'High Voltage Electronics Engineer', dept: 'Engineering', location: 'Pune HQ', type: 'Full-time', level: 'Senior',
      summary: 'Own the HV power supply and control electronics at the core of the electrostatic stage.',
      responsibilities: ['Design and validate HV power supplies for precipitator stages', 'Tune corona current control and arc recovery logic', 'Debug field units and close the loop with production', 'Drive EMI/EMC and safety compliance'],
      skills: ['Power electronics', 'HV insulation design', 'Embedded C', 'Lab instrumentation'] },
    { title: 'Site Commissioning Engineer', dept: 'Operations', location: 'Gurugram', type: 'Full-time', level: 'Mid-level',
      summary: 'Install and commission retrofit APCD systems at customer sites, then prove the numbers on stack.',
      responsibilities: ['Lead site surveys and retrofit feasibility checks', 'Commission units and run stack emission tests', 'Train customer operators and hand over documentation', 'Own site issue resolution timelines'],
      skills: ['Field commissioning', 'Stack testing', 'Willing to travel', 'Customer handling'] },
    { title: 'Business Development Manager — Industrial', dept: 'Sales & Business Development', location: 'Gurugram', type: 'Full-time', level: 'Senior',
      summary: 'Sell compliance outcomes to plant heads and DG-set fleet owners across North India.',
      responsibilities: ['Build the pipeline across industrial and commercial DG operators', 'Translate CAQM 98 obligations into a retrofit business case', 'Run commercial negotiation to order close', 'Feed field requirements back to product'],
      skills: ['Capital equipment sales', 'Industrial B2B', 'Techno-commercial proposals', 'CRM discipline'] },
    { title: 'Production Planning Executive', dept: 'Manufacturing / Production', location: 'Pune Factory', type: 'Full-time', level: 'Mid-level',
      summary: 'Keep the line loaded and the vendor chain honest as unit volumes scale.',
      responsibilities: ['Plan weekly production against the order book', 'Manage vendor schedules for sheet metal and HV components', 'Track inventory and shortages against BOMs', 'Report OTIF and cycle-time metrics'],
      skills: ['Production planning', 'Vendor management', 'ERP', 'Fabrication know-how'] },
    { title: 'Quality Engineer — Incoming & In-process', dept: 'Quality & Compliance', location: 'Pune Factory', type: 'Full-time', level: 'Mid-level',
      summary: 'Hold the quality gates that decide whether a unit leaves the plant.',
      responsibilities: ['Define incoming inspection plans for critical components', 'Run in-process audits and CAPA on line defects', 'Maintain calibration and test records', 'Support ARAI and NPC documentation'],
      skills: ['QMS / ISO 9001', 'Inspection instruments', 'Root cause analysis', 'Documentation'] },
    { title: 'R&D Engineer — Electrostatics', dept: 'R&D', location: 'Pune HQ', type: 'Full-time', level: 'Senior',
      summary: 'Push collection efficiency further on cheaper, dirtier fuels.',
      responsibilities: ['Build and test electrostatic collection prototypes', 'Characterise particulate capture across fuel and load profiles', 'Simulate flow and field distribution', 'Document findings into product specification'],
      skills: ['Electrostatics / aerosol science', 'CFD', 'Experiment design', 'ME / MTech preferred'] },
    { title: 'Firmware Engineer — Controls', dept: 'Engineering', location: 'Pune HQ', type: 'Full-time', level: 'Mid-level',
      summary: 'Write the firmware that keeps a precipitator stable and monitorable in the field.',
      responsibilities: ['Develop controller firmware for HV and monitoring boards', 'Implement remote telemetry and fault reporting', 'Build test rigs and automated validation', 'Own OTA update reliability'],
      skills: ['Embedded C / C++', 'STM32 or similar', 'Modbus / CAN', 'IoT telemetry'] },
    { title: 'Finance Executive — Costing', dept: 'Finance', location: 'Gurugram', type: 'Full-time', level: 'Mid-level',
      summary: 'Cost every unit accurately so pricing and margin hold as we scale.',
      responsibilities: ['Maintain product costing and BOM cost roll-ups', 'Support monthly closing and MIS', 'Track capex, grants and subsidy claims', 'Assist statutory compliance and audit'],
      skills: ['CA Inter / MBA Finance', 'Product costing', 'Tally / ERP', 'MIS reporting'] },
    { title: 'HR Executive — Talent & Plant Admin', dept: 'HR & Admin', location: 'Pune HQ', type: 'Full-time', level: 'Mid-level',
      summary: 'Hire engineers fast and keep three sites running without friction.',
      responsibilities: ['Own end-to-end hiring for engineering and plant roles', 'Run onboarding, payroll inputs and statutory records', 'Manage plant administration and vendor contracts', 'Build the early culture practices'],
      skills: ['Technical recruitment', 'Labour compliance basics', 'HRMS tools', 'Bias for organisation'] }
  ];

  var PAGE_SIZE = 6;

  function init() {
    var list       = document.getElementById('crRoleList');
    var deptChips   = document.getElementById('crDeptChips');
    var locChips    = document.getElementById('crLocChips');
    var countLabel  = document.getElementById('crRoleCount');
    var moreBtn     = document.getElementById('crShowMore');
    var emptyState  = document.getElementById('crRoleEmpty');
    if (!list) return;

    var depts = ['All'].concat(unique(JOBS.map(function (j) { return j.dept; })));
    var locs  = ['All'].concat(unique(JOBS.map(function (j) { return j.location; })));

    var state = { dept: 'All', loc: 'All', visible: PAGE_SIZE, openId: null };

    function unique(arr) {
      var seen = {}, out = [];
      arr.forEach(function (v) { if (!seen[v]) { seen[v] = true; out.push(v); } });
      return out;
    }

    function filtered() {
      return JOBS.filter(function (j) {
        return (state.dept === 'All' || j.dept === state.dept) &&
               (state.loc === 'All' || j.location === state.loc);
      });
    }

    function renderChips(container, values, current) {
      container.innerHTML = '';
      values.forEach(function (v) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'cr-chip' + (v === current ? ' is-active' : '');
        btn.textContent = v;
        container.appendChild(btn);
      });
    }

    function renderRoles() {
      var jobs = filtered();
      var toShow = jobs.slice(0, state.visible);

      list.innerHTML = '';
      toShow.forEach(function (job, i) {
        var id = job.dept + '::' + job.title;
        var isOpen = state.openId === id;

        var article = document.createElement('article');
        article.className = 'cr-job' + (isOpen ? ' is-open' : '');

        var head = document.createElement('button');
        head.type = 'button';
        head.className = 'cr-job-head';
        head.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        head.innerHTML =
          '<span class="cr-job-head-main">' +
            '<span class="cr-job-title">' + job.title + '</span>' +
            '<span class="cr-job-meta">' +
              '<span class="cr-job-dept">' + job.dept + '</span>' +
              '<span class="cr-job-sep">|</span><span>' + job.location + '</span>' +
              '<span class="cr-job-sep">|</span><span>' + job.type + '</span>' +
              '<span class="cr-job-sep">|</span><span class="cr-job-level">' + job.level + '</span>' +
            '</span>' +
          '</span>' +
          '<span class="cr-job-chevron" aria-hidden="true">&#9662;</span>';
        head.addEventListener('click', function () {
          state.openId = isOpen ? null : id;
          renderRoles();
        });
        article.appendChild(head);

        if (isOpen) {
          var panel = document.createElement('div');
          panel.className = 'cr-job-panel';

          var respHtml = job.responsibilities.map(function (r) { return '<li>' + r + '</li>'; }).join('');
          var skillHtml = job.skills.map(function (s) { return '<span class="cr-job-skill">' + s + '</span>'; }).join('');

          panel.innerHTML =
            '<p class="cr-job-summary">' + job.summary + '</p>' +
            '<div class="cr-job-cols">' +
              '<div>' +
                '<div class="cr-job-label">What you\'ll do</div>' +
                '<ul class="cr-job-resp-list">' + respHtml + '</ul>' +
              '</div>' +
              '<div>' +
                '<div class="cr-job-label">You bring</div>' +
                '<div class="cr-job-skills">' + skillHtml + '</div>' +
              '</div>' +
            '</div>' +
            '<div class="cr-job-apply-row">' +
              '<button type="button" class="btn btn-primary cr-job-apply">Apply for this role <span class="arr">&rarr;</span></button>' +
            '</div>';

          panel.querySelector('.cr-job-apply').addEventListener('click', function () {
            applyForRole(job.title);
          });

          article.appendChild(panel);
        }

        list.appendChild(article);
      });

      var remaining = jobs.length - toShow.length;
      if (moreBtn) {
        moreBtn.hidden = remaining <= 0;
        moreBtn.textContent = 'Show ' + Math.min(remaining, PAGE_SIZE) + ' more';
      }
      if (emptyState) emptyState.hidden = jobs.length !== 0;
      if (countLabel) countLabel.textContent = jobs.length + (jobs.length === 1 ? ' role' : ' roles') + ' open';
    }

    function applyForRole(title) {
      var roleField = document.getElementById('cr-role');
      var target = document.getElementById('general');
      if (roleField) roleField.value = title;

      var tag = document.getElementById('crApplyingFor');
      if (tag) {
        tag.textContent = 'Applying for: ' + title;
        tag.hidden = false;
      }

      if (target) {
        if (window.lenis) {
          window.lenis.scrollTo(target, { offset: -24 });
        } else {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }

      window.setTimeout(function () {
        var nameField = document.getElementById('cr-name');
        if (nameField) nameField.focus();
      }, 500);
    }

    deptChips.addEventListener('click', function (e) {
      var btn = e.target.closest('.cr-chip');
      if (!btn) return;
      state.dept = btn.textContent;
      state.visible = PAGE_SIZE;
      renderChips(deptChips, depts, state.dept);
      renderRoles();
    });
    locChips.addEventListener('click', function (e) {
      var btn = e.target.closest('.cr-chip');
      if (!btn) return;
      state.loc = btn.textContent;
      state.visible = PAGE_SIZE;
      renderChips(locChips, locs, state.loc);
      renderRoles();
    });

    if (moreBtn) {
      moreBtn.addEventListener('click', function () {
        state.visible += PAGE_SIZE;
        renderRoles();
      });
    }

    renderChips(deptChips, depts, state.dept);
    renderChips(locChips, locs, state.loc);
    renderRoles();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
