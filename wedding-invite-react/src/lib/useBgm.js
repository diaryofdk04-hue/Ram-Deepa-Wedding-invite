import { useCallback, useEffect, useRef, useState } from 'react';

const VOLUME = 0.6;

/** Background music. start() must be called from a user gesture (the open button). */
export function useBgm(src) {
  const audioRef = useRef(null);
  const fadeRef = useRef(null);
  const startedRef = useRef(false);
  const mutedRef = useRef(false);
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const a = new Audio(src);
    a.loop = true;
    a.preload = 'auto';
    a.volume = 0;
    audioRef.current = a;
    return () => {
      clearInterval(fadeRef.current);
      a.pause();
      audioRef.current = null;
    };
  }, [src]);

  const fadeTo = useCallback((v, ms) => {
    const a = audioRef.current;
    if (!a) return;
    clearInterval(fadeRef.current);
    const from = a.volume;
    const t0 = Date.now();
    fadeRef.current = setInterval(() => {
      const k = Math.min(1, (Date.now() - t0) / ms);
      a.volume = Math.max(0, Math.min(1, from + (v - from) * k));
      if (k >= 1) {
        clearInterval(fadeRef.current);
        if (v === 0 && mutedRef.current) a.pause();
      }
    }, 50);
  }, []);

  const start = useCallback(() => {
    const a = audioRef.current;
    if (!a || startedRef.current) return;
    startedRef.current = true;
    setStarted(true);
    const p = a.play();
    if (p && p.then) {
      p.then(() => fadeTo(VOLUME, 2500)).catch(() => {
        startedRef.current = false;
        setStarted(false);
      });
    } else {
      fadeTo(VOLUME, 2500);
    }
  }, [fadeTo]);

  const toggle = useCallback(() => {
    const a = audioRef.current;
    const next = !mutedRef.current;
    mutedRef.current = next;
    setMuted(next);
    if (!a || !startedRef.current) return;
    if (next) {
      fadeTo(0, 300);
    } else {
      a.play().catch(() => {});
      fadeTo(VOLUME, 800);
    }
  }, [fadeTo]);

  // pause when the tab / app is hidden
  useEffect(() => {
    const onVis = () => {
      const a = audioRef.current;
      if (!a || !startedRef.current) return;
      if (document.hidden) a.pause();
      else if (!mutedRef.current) a.play().catch(() => {});
    };
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  return { start, toggle, muted, started };
}
