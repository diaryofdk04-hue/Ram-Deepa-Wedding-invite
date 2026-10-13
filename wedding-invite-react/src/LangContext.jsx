import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const LangContext = createContext({ lang: 'en', t: (en) => en, toggle: () => {} });

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('lang') === 'ta' ? 'ta' : 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem('lang', lang);
    } catch {
      /* storage unavailable */
    }
  }, [lang]);

  const toggle = useCallback(() => setLang((l) => (l === 'en' ? 'ta' : 'en')), []);
  const t = useCallback((en, ta) => (lang === 'ta' ? ta : en), [lang]);
  const value = useMemo(() => ({ lang, t, toggle }), [lang, t, toggle]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
