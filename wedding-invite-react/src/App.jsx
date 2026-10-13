import { useEffect, useRef, useState } from 'react';
import { LangProvider, useLang } from './LangContext.jsx';
import { useBgm } from './lib/useBgm.js';
import { useAutoScroll } from './lib/useAutoScroll.js';
import { burst, rain } from './lib/petals.js';
import Gate from './components/Gate.jsx';
import Hero from './components/Hero.jsx';
import Countdown from './components/Countdown.jsx';
import Program from './components/Program.jsx';
import Memories from './components/Memories.jsx';
import Footer from './components/Footer.jsx';
import { MusicIcon } from './components/Icons.jsx';

const reduceMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function Invitation() {
  const { lang, toggle: toggleLang } = useLang();
  const { start, toggle: toggleMusic, muted, started } = useBgm('/bgm.mp3');
  const [phase, setPhase] = useState('closed'); // closed | opening | closing | gone
  const petalsRef = useRef(null);
  const timers = useRef([]);

  // after the gate is gone, drift slowly down the invitation (touch / scroll stops it)
  useAutoScroll(phase === 'gone');

  // lock scrolling while the gate is showing
  useEffect(() => {
    document.documentElement.classList.toggle('gate-open', phase !== 'closing' && phase !== 'gone');
  }, [phase]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const handleOpen = (e) => {
    if (phase !== 'closed') return;
    const r = e.currentTarget.getBoundingClientRect();
    start();

    const reduce = reduceMotion();
    if (!reduce) {
      burst(petalsRef.current, r.left + r.width / 2, r.top + r.height / 2);
      rain(petalsRef.current, 36, 3200);
      setPhase('opening');
    }
    timers.current.push(
      setTimeout(() => {
        setPhase('closing');
        timers.current.push(setTimeout(() => setPhase('gone'), 850));
      }, reduce ? 0 : 650)
    );
  };

  return (
    <>
      <button className="langbtn" type="button" aria-label="Change language" onClick={toggleLang}>
        {lang === 'en' ? 'தமிழ்' : 'English'}
      </button>

      <div ref={petalsRef} className="petals" aria-hidden="true" />

      <button
        className={`music${started ? ' show' : ''}${muted ? ' muted' : ''}`}
        type="button"
        aria-label="Toggle background music"
        aria-pressed={!muted}
        onClick={toggleMusic}
      >
        <MusicIcon muted={false} />
        <MusicIcon muted />
      </button>

      {phase !== 'gone' && <Gate phase={phase} onOpen={handleOpen} />}

      <div className="wrap">
        <Hero />
        <Countdown />
        <Program />
        <Memories />
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <LangProvider>
      <Invitation />
    </LangProvider>
  );
}
