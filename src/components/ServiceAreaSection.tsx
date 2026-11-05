import React from 'react';
import { Language, CITIES, TRANSLATIONS } from '../data/content';

interface ServiceAreaSectionProps {
  lang: Language;
}

export const ServiceAreaSection: React.FC<ServiceAreaSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="area">
      <div className="wrap">
        <h2>{t.ah}</h2>
        <p>{t.ap}</p>
        <ul className="cities" id="cities">
          {CITIES.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
