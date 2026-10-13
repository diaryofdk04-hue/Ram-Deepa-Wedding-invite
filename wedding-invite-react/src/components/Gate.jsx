import { useLang } from '../LangContext.jsx';

/** phase: 'closed' | 'opening' | 'closing'. Parent unmounts it afterwards. */
export default function Gate({ phase, onOpen }) {
  const { t } = useLang();
  const cls = ['gate', phase !== 'closed' && 'opening', phase === 'closing' && 'gone']
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cls} role="dialog" aria-modal="true" aria-label="Wedding invitation">
      <div className="gate-in">
        <svg className="gdiya" viewBox="0 0 120 100" aria-hidden="true">
          <defs>
            <radialGradient id="glow" cx="50%" cy="40%" r="50%">
              <stop offset="0" stopColor="#ffd37a" stopOpacity=".9" />
              <stop offset="1" stopColor="#ffd37a" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle className="halo" cx="60" cy="34" r="34" fill="url(#glow)" />
          <path className="flame" d="M60 8c10 12 10 24 0 36-10-12-10-24 0-36z" fill="#f2a53a" />
          <path d="M60 22c4 6 4 12 0 18-4-6-4-12 0-18z" fill="#fff1c2" />
          <path d="M14 52h92c0 20-20 34-46 34S14 72 14 52z" fill="#9c3d22" />
          <path d="M14 52h92" stroke="#c9792b" strokeWidth="3" />
        </svg>
        <p className="gk">{t('Wedding invitation', 'திருமண அழைப்பிதழ்')}</p>
        <h2 className="gn">{t('Ram Kumar & Deepa', 'ராம் குமார் & தீபா')}</h2>
        <button className="gbtn" type="button" onClick={onOpen}>
          {t('Tap to open', 'திறக்க தொடவும்')}
        </button>
      </div>
    </div>
  );
}
