import React from 'react';
import { Link } from 'react-router-dom';
import { Language, TRANSLATIONS } from '../data/content';

interface RealtorsSectionProps {
  lang: Language;
}

export const RealtorsSection: React.FC<RealtorsSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="realtors">
      <div className="wrap">
        <div className="grid">
          <div className="card">
            <h3>{t.rh}</h3>
            <p>{t.rp}</p>
            <p>
              <a
                className="btn ghost"
                style={{ marginTop: '10px' }}
                href="sms:+12097797300?&body=Hi%20Full%20Flow%2C%20I%27m%20a%20realtor%2Flandlord%20and%20want%20info%20on%20the%20inspection%20package."
              >
                {t.rb}
              </a>
            </p>
          </div>

          <div className="card">
            <h3>{t.refh}</h3>
            <p>{t.refp}</p>
            <div className="ph">
              <b>{t.phd}</b> — <span>{t.refx}</span>
            </div>
            <p>
              <Link to="/qr">{t.refq}</Link>
            </p>
          </div>

          <div className="card">
            <h3>{t.revh}</h3>
            <p>{t.revp}</p>
            <div className="ph">
              <b>{t.phd}</b> — <span>{t.revx}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
