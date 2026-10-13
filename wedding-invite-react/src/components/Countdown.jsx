import { useLang } from '../LangContext.jsx';
import { useCountdown } from '../lib/useCountdown.js';
import { ExternalIcon, PinIcon } from './Icons.jsx';
import { MAP_HALL } from '../content.js';

// Wedding start: 1 Nov 2026, 6:00 AM IST
const TARGET = new Date('2026-11-01T06:00:00+05:30').getTime();

export default function Countdown() {
  const { t } = useLang();
  const { d, h, m, s } = useCountdown(TARGET);

  return (
    <section className="count">
      <p className="kicker">{t('Counting every moment', 'நாட்கள் நெருங்குகின்றன')}</p>
      <div className="timer" role="timer" aria-live="off">
        <div>
          <strong>{d}</strong>
          <span>{t('DAYS', 'நாள்')}</span>
        </div>
        <div>
          <strong>{h}</strong>
          <span>{t('HRS', 'மணி')}</span>
        </div>
        <div>
          <strong>{m}</strong>
          <span>{t('MIN', 'நிமிடம்')}</span>
        </div>
        <div>
          <strong>{s}</strong>
          <span>{t('SEC', 'விநாடி')}</span>
        </div>
      </div>

      <div className="venue">
        <p className="kicker">
          <PinIcon className="pin" />
          <span>{t('Venue', 'இடம்')}</span>
        </p>
        <h2>{t('Palani Gounder Thirumana Mandapam', 'பழனி கவுண்டர் திருமண மண்டபம்')}</h2>
        <p>
          {t(
            'Jalakandapuram road, Idappadi, Salem - 637101',
            'ஜலகண்டாபுரம் சாலை, இடைப்பாடி, சேலம் - 637101'
          )}
        </p>
        <a className="btn" href={MAP_HALL} target="_blank" rel="noopener noreferrer">
          <ExternalIcon />
          <span>{t('Get Directions', 'வழிகாட்டி')}</span>
        </a>
      </div>
    </section>
  );
}
