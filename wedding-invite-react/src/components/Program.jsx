import { useLang } from '../LangContext.jsx';
import { PinIcon } from './Icons.jsx';
import { MAP_HALL, MAP_TEMPLE } from '../content.js';

function Loc({ href, children }) {
  return (
    <a className="loc" href={href} target="_blank" rel="noopener noreferrer">
      <PinIcon />
      <span>{children}</span>
    </a>
  );
}

export default function Program() {
  const { t } = useLang();
  const hall = t('Palani Gounder Thirumana Mandapam', 'பழனி கவுண்டர் திருமண மண்டபம்');

  return (
    <section className="program">
      <p className="kicker">{t('Program of celebrations', 'நிகழ்ச்சி நிரல்')}</p>
      <h1>{t('Wedding Celebrations', 'திருமண நிகழ்வுகள்')}</h1>

      <div className="outer">
        <div className="inner">
          <div className="ev">
            <p className="kicker">{t('Reception', 'வரவேற்பு')}</p>
            <h3>{t('Oct 31 | Saturday', 'அக்டோபர் 31 | சனிக்கிழமை')}</h3>
            <div className="slot">
              <h4>{t('7:00 PM – 9:00 PM', 'மாலை 7:00 – இரவு 9:00')}</h4>
              <Loc href={MAP_HALL}>{hall}</Loc>
            </div>
            <em>{t('Followed by dinner & celebration', 'தொடர்ந்து இரவு விருந்து & கொண்டாட்டம்')}</em>
          </div>

          <div className="div">
            <i />✦<i />
          </div>

          <div className="ev">
            <p className="kicker">{t('Marriage ceremony', 'திருமண விழா')}</p>
            <h3>{t('Nov 1 | Sunday', 'நவம்பர் 1 | ஞாயிற்றுக்கிழமை')}</h3>
            <div className="slot">
              <p className="kicker">{t('Muhurtham', 'முகூர்த்தம்')}</p>
              <h4>{t('6:00 AM – 7:15 AM', 'காலை 6:00 – 7:15')}</h4>
              <Loc href={MAP_TEMPLE}>
                {t('Sri Murkkarai Narasima Perumal kovil', 'ஸ்ரீ முருக்கரை நரசிம்ம பெருமாள் கோயில்')}
              </Loc>
            </div>
            <div className="slot">
              <p className="kicker">{t('Ceremony', 'திருமண வைபவம்')}</p>
              <h4>{t('7:15 AM – 10:00 AM', 'காலை 7:15 – 10:00')}</h4>
              <Loc href={MAP_HALL}>{hall}</Loc>
            </div>
            <em>{t('Followed by breakfast', 'தொடர்ந்து காலை உணவு')}</em>
          </div>
        </div>
      </div>
    </section>
  );
}
