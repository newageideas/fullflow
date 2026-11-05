import React from 'react';
import { Language, TRANSLATIONS } from '../data/content';

interface StickyActionsProps {
  lang: Language;
}

export const StickyActions: React.FC<StickyActionsProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="sticky">
      <a className="btn call" href="tel:+12097797300" data-track="call-sticky">
        📞 <span>{t.cs}</span>
      </a>
      <a className="btn text" href="sms:+12097797300" data-track="text-sticky">
        💬 <span>{t.ts}</span>
      </a>
    </div>
  );
};
