import { useEffect, useState } from 'react';

const pad = (n) => String(n).padStart(2, '0');

function compute(target) {
  let diff = Math.max(0, target - Date.now());
  const d = Math.floor(diff / 864e5);
  diff -= d * 864e5;
  const h = Math.floor(diff / 36e5);
  diff -= h * 36e5;
  const m = Math.floor(diff / 6e4);
  diff -= m * 6e4;
  const s = Math.floor(diff / 1e3);
  return { d: pad(d), h: pad(h), m: pad(m), s: pad(s) };
}

export function useCountdown(target) {
  const [left, setLeft] = useState(() => compute(target));
  useEffect(() => {
    const id = setInterval(() => setLeft(compute(target)), 1000);
    return () => clearInterval(id);
  }, [target]);
  return left;
}
