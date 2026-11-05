import React from 'react';
import { Link } from 'react-router-dom';
import { Language, CHECKS, TRANSLATIONS } from '../data/content';

interface InspectionSectionProps {
  lang: Language;
}

export const InspectionSection: React.FC<InspectionSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const items = CHECKS[lang];

  return (
    <section id="inspect">
      <div className="wrap">
        <div className="kick">{t.ik}</div>
        <h2>{t.ih}</h2>
        <p>{t.ip}</p>
        <ul className="checks" id="checks">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>
          <Link to="/inspection">{t.ilink}</Link>
        </p>
      </div>
    </section>
  );
};
