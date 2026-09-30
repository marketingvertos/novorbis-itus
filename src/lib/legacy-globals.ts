// The page scripts in public/js were written for CDN builds of these libraries
// and expect them on `window`. Expose the npm versions the same way.
import Lenis from "lenis";
import { gsap } from "gsap";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

declare global {
  interface Window {
    Lenis: typeof Lenis;
    gsap: typeof gsap;
    Swiper: typeof Swiper;
  }
}

window.Lenis = Lenis;
window.gsap = gsap;
window.Swiper = Swiper;
