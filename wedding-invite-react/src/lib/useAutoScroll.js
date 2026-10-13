import { useEffect } from 'react';

const EVENTS = ['touchstart', 'wheel', 'keydown', 'mousedown'];
const SPEED = 0.042; // px per ms  (= 42px per second)
const MOBILE_QUERY = '(max-width: 600px)';

/** Mobile only: slowly scrolls the page down once `active` is true. Any touch / wheel / key press stops it. */
export function useAutoScroll(active, delay = 1800) {
  useEffect(() => {
    if (!active) return undefined;
    // phones only – desktop / tablet visitors scroll on their own
    if (!window.matchMedia || !window.matchMedia(MOBILE_QUERY).matches) return undefined;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const root = document.documentElement;
    let raf = 0;
    let running = false;

    const stop = () => {
      if (!running) return;
      running = false;
      cancelAnimationFrame(raf);
      EVENTS.forEach((ev) => window.removeEventListener(ev, stop));
      root.style.scrollBehavior = '';
    };

    const timer = setTimeout(() => {
      running = true;
      root.style.scrollBehavior = 'auto';
      EVENTS.forEach((ev) => window.addEventListener(ev, stop, { passive: true }));
      let last = null;
      let y = window.scrollY;
      const step = (ts) => {
        if (!running) return;
        if (last === null) last = ts;
        const dt = Math.min(100, ts - last);
        last = ts;
        y += dt * SPEED;
        const max = root.scrollHeight - window.innerHeight;
        if (y >= max) {
          window.scrollTo(0, max);
          stop();
          return;
        }
        window.scrollTo(0, y);
        raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timer);
      stop();
    };
  }, [active, delay]);
}
