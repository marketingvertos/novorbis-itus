// Runs the site's classic page scripts (public/js/*.js) after React has put the
// page markup in the DOM. Those scripts were written for normal page loads, so
// DOMContentLoaded / load listeners registered after the page is ready are
// called straight away instead of never firing.

let patched = false;
function patchReadyEvents() {
  if (patched) return;
  patched = true;
  const call = (fn: EventListenerOrEventListenerObject, type: string) =>
    setTimeout(() => {
      const ev = new Event(type);
      if (typeof fn === "function") fn.call(document, ev);
      else fn.handleEvent(ev);
    }, 0);

  const docAdd = document.addEventListener.bind(document);
  document.addEventListener = ((type: string, fn: EventListenerOrEventListenerObject, opts?: boolean | AddEventListenerOptions) => {
    if (type === "DOMContentLoaded" && document.readyState !== "loading" && fn) return call(fn, type);
    return docAdd(type, fn, opts);
  }) as typeof document.addEventListener;

  const winAdd = window.addEventListener.bind(window);
  window.addEventListener = ((type: string, fn: EventListenerOrEventListenerObject, opts?: boolean | AddEventListenerOptions) => {
    if (type === "load" && document.readyState === "complete" && fn) return call(fn, type);
    return winAdd(type, fn, opts);
  }) as typeof window.addEventListener;
}

const loaded = new Set<string>();

function loadOne(src: string) {
  return new Promise<void>((resolve) => {
    const s = document.createElement("script");
    s.src = src;
    s.async = false;
    s.onload = () => resolve();
    s.onerror = () => {
      console.warn(`[scripts] failed to load ${src}`);
      resolve();
    };
    document.body.appendChild(s);
  });
}

/** Load scripts in order, each once per page load. */
export async function loadScripts(srcs: string[]) {
  patchReadyEvents();
  for (const src of srcs) {
    if (loaded.has(src)) continue;
    loaded.add(src);
    // Turnstile is independent of the others; don't block on it.
    if (src.includes("challenges.cloudflare.com")) void loadOne(src);
    else await loadOne(src);
  }
}
