import React from 'react';
import { Language, TRANSLATIONS } from '../data/content';

interface PlumberSectionProps {
  lang: Language;
}

export const PlumberSection: React.FC<PlumberSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="plumber">
      <div className="wrap">
        <h2>{t.mh}</h2>
        <div className="plumber">
          <div className="avatar" role="img" aria-label="Photo coming soon">
            JM
          </div>
          <div>
            <h3 style={{ margin: 0 }}>Justin Moreno</h3>
            <p style={{ color: 'var(--lime)', margin: '0.2em 0' }}>{t.mrole}</p>
            <p>{t.mbio}</p>
            <p className="ph">
              <b>{t.lic} </b>
              <span>{t.lic2}</span>
            </p>
          </div>
        </div>
        <div className="grid" style={{ marginTop: '18px' }}>
          <div className="card">
            <h3>{t.g1h}</h3>
            <div className="ph">
              <b>{t.phd}</b> — <span>{t.g1}</span>
            </div>
          </div>
          <div className="card">
            <h3>{t.g2h}</h3>
            <p>{t.g2}</p>
          </div>
          <div className="card">
            <h3>{t.g3h}</h3>
            <p>{t.g3}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
