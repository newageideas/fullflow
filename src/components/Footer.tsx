import React from 'react';
import { Link } from 'react-router-dom';
import { Language, TRANSLATIONS } from '../data/content';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <footer>
      <div className="wrap">
        <p>
          <b>Full Flow Mains and Drains</b> · <span>{t.fta}</span> ·{' '}
          <a href="tel:+12097797300">209-779-7300</a> · <span>{t.lic}</span>
        </p>
        <p>
          Flow without worries. · <Link to="/privacy">{t.pl}</Link> ·{' '}
          <Link to="/inspection">{t.il}</Link> · <Link to="/qr">QR</Link>
        </p>
      </div>
    </footer>
  );
};
