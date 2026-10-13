import { useLang } from '../LangContext.jsx';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer>
      <div className="seal">R &amp; D</div>
      <p>
        {t(
          'May the divine bless this sacred union with love, prosperity and joy.',
          'இந்தப் புனித இணைப்பை இறைவன் அன்பும் செழிப்பும் மகிழ்ச்சியும் அளித்து ஆசீர்வதிக்கட்டும்.'
        )}
      </p>
    </footer>
  );
}
