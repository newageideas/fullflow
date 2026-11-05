import React from 'react';
import { Language, TRANSLATIONS } from '../data/content';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <>
      <div className="wave" aria-hidden="true" />
      <div className="hero" id="top">
        <div className="wrap">
          <div className="kick">{t.hk}</div>
          <h1>
            {t.h1}
            <em>{t.h1Em}</em>
          </h1>
          <p className="lead">
            {t.hlPre}
            <b>{t.hlBold}</b>
            {t.hlPost}
          </p>
          <div className="btns">
            <a className="btn call" href="tel:+12097797300" data-track="call">
              📞 <span>{t.call}</span>
            </a>
            <a
              className="btn text"
              href="sms:+12097797300?&body=Hi%20Full%20Flow%2C%20I%27d%20like%20a%20free%20home%20safety%20inspection."
              data-track="text"
            >
              💬 <span>{t.text}</span>
            </a>
            <a className="btn ghost" href="#request">
              {t.book}
            </a>
          </div>
          <ul className="trust">
            <li>{t.t1}</li>
            <li>{t.t2}</li>
            <li>{t.t3}</li>
            <li>{t.t4}</li>
          </ul>
        </div>
      </div>
    </>
  );
};
