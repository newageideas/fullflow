import React from 'react';
import { Language, TRANSLATIONS } from '../data/content';

interface HeaderProps {
  lang: Language;
  onSetLang: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, onSetLang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header>
        <div className="wrap">
          <div className="bar">
            <a className="logo" href="/#top">
              FULL <b>FLOW</b>
              <small>{t.tag}</small>
            </a>
            <div className="lang-switcher" role="group" aria-label="Select language">
              <button
                type="button"
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => onSetLang('en')}
                aria-pressed={lang === 'en'}
                aria-label="Switch to English"
              >
                English
              </button>
              <button
                type="button"
                className={`lang-btn ${lang === 'es' ? 'active' : ''}`}
                onClick={() => onSetLang('es')}
                aria-pressed={lang === 'es'}
                aria-label="Cambiar a español"
              >
                Español
              </button>
              <button
                type="button"
                className={`lang-btn ${lang === 'pa' ? 'active' : ''}`}
                onClick={() => onSetLang('pa')}
                aria-pressed={lang === 'pa'}
                aria-label="ਪੰਜਾਬੀ ਵਿੱਚ ਬਦਲੋ"
              >
                ਪੰਜਾਬੀ
              </button>
            </div>
          </div>
          <nav aria-label="Main">
            <ul>
              <li>
                <a href="/#inspect">{t.n1}</a>
              </li>
              <li>
                <a href="/#services">{t.n2}</a>
              </li>
              <li>
                <a href="/#diagnostics">{lang === 'es' ? 'Diagnóstico' : lang === 'pa' ? 'ਸਮੱਸਿਆ ਜਾਂਚ' : 'Diagnostics'}</a>
              </li>
              <li>
                <a href="/#prices">{t.n3}</a>
              </li>
              <li>
                <a href="/#faq">FAQ</a>
              </li>
              <li>
                <a href="/#plumber">{t.n4}</a>
              </li>
              <li>
                <a href="/#area">{t.n5}</a>
              </li>
              <li>
                <a href="/#realtors">{t.n6}</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
