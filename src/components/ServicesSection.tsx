import React from 'react';
import { Language, SVC, TRANSLATIONS } from '../data/content';

interface ServicesSectionProps {
  lang: Language;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const services = SVC[lang];

  return (
    <section id="services">
      <div className="wrap">
        <h2>{t.sh}</h2>
        <div className="grid" id="svc">
          {services.map(([title, desc], index) => (
            <div className="card" key={index}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
