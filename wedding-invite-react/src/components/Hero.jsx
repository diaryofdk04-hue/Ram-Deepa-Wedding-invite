import { useLang } from '../LangContext.jsx';

export default function Hero() {
  const { t } = useLang();
  return (
    <header className="hero">
      <div className="diya-row">
        <i />
        <svg width="34" height="26" viewBox="0 0 34 26" aria-label="Diya">
          <path d="M17 0c4 5 4 9 0 13-4-4-4-8 0-13z" fill="#f2a53a" />
          <path d="M2 14h30c0 7-7 11-15 11S2 21 2 14z" fill="#9c3d22" />
        </svg>
        <i />
      </div>

      <h1 className="names">{t('Ram Kumar', 'ராம் குமார்')}</h1>
      <p className="parents">{t('Mr. Sekar & Mrs. Tamilarasi', 'திரு. சேகர் & திருமதி. தமிழரசி')}</p>
      <div className="amp">
        <b>✦</b>&amp;<b>✦</b>
      </div>
      <h1 className="names">{t('Deepa', 'தீபா')}</h1>
      <p className="parents">{t('Mr. Dhandapani & Mrs. Thangam', 'திரு. தண்டபாணி & திருமதி. தங்கம்')}</p>

      <div className="occasion">
        <span className="orule">
          <i />
          <b>✦</b>
          <i />
        </span>
        <span className="otxt">{t('Wedding Celebration', 'திருமண விழா')}</span>
        <span className="orule">
          <i />
          <b>✦</b>
          <i />
        </span>
      </div>

      <div className="datecard" role="group" aria-label="Wedding date">
        <div className="dc-side">
          <span>{t('November', 'நவம்பர்')}</span>
        </div>
        <div className="dc-day">01</div>
        <div className="dc-side">
          <span>2026</span>
        </div>
      </div>
    </header>
  );
}
