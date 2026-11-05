import React from 'react';
import { Language, PRICES, TRANSLATIONS } from '../data/content';

interface PricesSectionProps {
  lang: Language;
}

export const PricesSection: React.FC<PricesSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const prices = PRICES[lang];

  return (
    <section id="prices">
      <div className="wrap">
        <h2>{t.ph}</h2>
        <div className="ph" role="note">
          <b>{t.phx} </b>
          <span>{t.phx2}</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>{t.pt1}</th>
              <th>{t.pt2}</th>
            </tr>
          </thead>
          <tbody id="ptab">
            {prices.map(([job, range], idx) => (
              <tr key={idx}>
                <td>{job}</td>
                <td>{range}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="card" style={{ marginTop: '16px' }}>
          <h3>{t.fih}</h3>
          <div className="ph">
            <b>{t.fix} </b>
            <span>{t.fix2}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
