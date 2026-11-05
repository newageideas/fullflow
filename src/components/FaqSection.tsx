import React, { useState } from 'react';
import { Language, FAQ_DATA } from '../data/content';

interface FaqSectionProps {
  lang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang }) => {
  const data = FAQ_DATA[lang];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq">
      <div className="wrap" style={{ maxWidth: '820px' }}>
        <div className="kick">FAQ</div>
        <h2>{data.title}</h2>
        <p className="lead" style={{ marginBottom: '24px' }}>
          {data.subtitle}
        </p>

        <div className="faq-list">
          {data.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`faq-card ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-q-text">{item.q}</span>
                  <span className="faq-toggle-icon">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
