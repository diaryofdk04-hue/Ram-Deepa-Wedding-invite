import { useLang } from '../LangContext.jsx';

const star = {
  background: 'none',
  border: 0,
  padding: 0,
  color: 'var(--saffron)',
  letterSpacing: 0,
  fontSize: 26,
};

export default function Memories() {
  const { t } = useLang();
  return (
    <section className="mem">
      <div className="memcard">
        <div className="tag">
          <span style={star}>✧</span>
          <span>{t('MEMORIES', 'நினைவுகள்')}</span>
          <span style={star}>✧</span>
        </div>
        <h2>{t('Moments of Love', 'அன்பின் தருணங்கள்')}</h2>
        <p>{t('Captured memories on our journey to forever', 'நம் வாழ்வுப் பயணத்தின் நினைவுகள்')}</p>
        <div className="frame">
          <img
            src="/couple.jpg"
            alt="The couple holding hands during the wedding ritual"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
