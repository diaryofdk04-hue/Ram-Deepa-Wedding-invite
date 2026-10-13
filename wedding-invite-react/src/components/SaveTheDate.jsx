import { useLang } from '../LangContext.jsx';
import { CalendarIcon } from './Icons.jsx';
import { CAL_RECEPTION, CAL_WEDDING } from '../content.js';

export default function SaveTheDate() {
  const { t } = useLang();
  return (
    <section className="save">
      <p className="kicker">{t('Save the date', 'நாளைக் குறித்துக் கொள்ளுங்கள்')}</p>
      <div className="cal">
        <a className="calbtn" href={CAL_RECEPTION} target="_blank" rel="noopener noreferrer">
          <CalendarIcon />
          <span>{t('Add reception to calendar', 'வரவேற்பை நாட்காட்டியில் சேர்க்க')}</span>
        </a>
        <a className="calbtn" href={CAL_WEDDING} target="_blank" rel="noopener noreferrer">
          <CalendarIcon />
          <span>{t('Add wedding to calendar', 'திருமணத்தை நாட்காட்டியில் சேர்க்க')}</span>
        </a>
      </div>
    </section>
  );
}
