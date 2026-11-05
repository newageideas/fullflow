import React, { useState } from 'react';
import { Language, DIAGNOSTIC_DATA } from '../data/content';

interface DiagnosticToolProps {
  lang: Language;
}

export const DiagnosticTool: React.FC<DiagnosticToolProps> = ({ lang }) => {
  const data = DIAGNOSTIC_DATA[lang];
  const [selectedId, setSelectedId] = useState(data.items[0].id);

  const selectedItem = data.items.find((item) => item.id === selectedId) || data.items[0];

  const handleSelectService = (need: string) => {
    const needSelect = document.getElementById('need') as HTMLSelectElement | null;
    if (needSelect) {
      needSelect.value = need;
      needSelect.dispatchEvent(new Event('change', { bubbles: true }));
    }
    const requestSec = document.getElementById('request');
    if (requestSec) {
      requestSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="diagnostics">
      <div className="wrap">
        <div className="kick">
          {lang === 'es'
            ? 'Guía Rápida para el Hogar'
            : lang === 'pa'
            ? 'ਘਰੇਲੂ ਪਲੰਬਿੰਗ ਸਹਾਇਤਾ'
            : 'Homeowner Quick Help'}
        </div>
        <h2>{data.title}</h2>
        <p className="lead" style={{ marginBottom: '22px' }}>
          {data.subtitle}
        </p>

        <div className="diag-container">
          <div className="diag-tabs">
            {data.items.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`diag-tab-btn ${item.id === selectedId ? 'active' : ''}`}
                onClick={() => setSelectedId(item.id)}
              >
                <span className={`urgency-dot ${item.urgency}`} />
                <span className="tab-title">{item.symptom}</span>
              </button>
            ))}
          </div>

          <div className="diag-card">
            <div className="diag-badge-row">
              <span className={`diag-badge ${selectedItem.urgency}`}>
                {selectedItem.urgency === 'high'
                  ? lang === 'es'
                    ? '⚠️ Alta Prioridad / Emergencia'
                    : lang === 'pa'
                    ? '⚠️ ਉੱਚ ਤਰਜੀਹ / ਐਮਰਜੈਂਸੀ'
                    : '⚠️ High Priority / Urgent'
                  : lang === 'es'
                  ? 'ℹ️ Atención Recomendada'
                  : lang === 'pa'
                  ? 'ℹ️ ਜਾਂਚ ਦੀ ਲੋੜ'
                  : 'ℹ️ Recommended Check'}
              </span>
              <span className="diag-location">Stanislaus County, CA</span>
            </div>

            <h3 className="diag-heading">{selectedItem.symptom}</h3>

            <div className="diag-block diy-block">
              <div className="block-title">
                {lang === 'es'
                  ? '🛡️ Qué hacer de inmediato (Consejo de Seguridad):'
                  : lang === 'pa'
                  ? '🛡️ ਤੁਰੰਤ ਕੀ ਕਰਨਾ ਹੈ (ਸੁਰੱਖਿਆ ਸੁਝਾਅ):'
                  : '🛡️ Immediate Action (Safety Tip):'}
              </div>
              <p>{selectedItem.quickTip}</p>
            </div>

            <div className="diag-block pro-block">
              <div className="block-title">
                {lang === 'es'
                  ? '🔧 Lo que Justin revisa en la inspección:'
                  : lang === 'pa'
                  ? '🔧 ਜਸਟਿਨ ਜਾਂਚ ਦੌਰਾਨ ਕੀ ਕਰੇਗਾ:'
                  : '🔧 What Justin inspects & fixes:'}
              </div>
              <p>{selectedItem.whatJustinDoes}</p>
            </div>

            <div className="diag-actions">
              <button
                type="button"
                className="btn call"
                onClick={() => handleSelectService(selectedItem.serviceNeed)}
              >
                📋 {lang === 'es' ? 'Pedir Revisión de esto' : lang === 'pa' ? 'ਇਸਦੀ ਜਾਂਚ ਬੁੱਕ ਕਰੋ' : 'Request Inspection for this'}
              </button>
              <a href="tel:+12097797300" className="btn ghost">
                📞 209-779-7300
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
