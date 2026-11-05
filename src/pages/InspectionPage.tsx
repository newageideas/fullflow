import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Language, CHECKS } from '../data/content';

export const InspectionPage: React.FC = () => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('ff-lang');
    if (saved === 'en' || saved === 'es' || saved === 'pa') return saved;
    return 'en';
  });

  useEffect(() => {
    document.title = "Home Safety Inspection Report | Full Flow Mains and Drains";
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const items = CHECKS[lang];

  return (
    <div className="inspection-page">
      <div className="inspection-container">
        <div className="noprint" style={{ marginBottom: '14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <Link to="/" className="back-link">
              ← Back to Full Flow
            </Link>
            <button onClick={handlePrint} className="print-btn">
              🖨 Print / Save PDF
            </button>
          </div>
          <div className="lang-switcher">
            <button
              type="button"
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => {
                setLang('en');
                localStorage.setItem('ff-lang', 'en');
              }}
              style={{ color: lang === 'en' ? '#001426' : '#0b1730', borderColor: '#1fa2ff' }}
            >
              English
            </button>
            <button
              type="button"
              className={`lang-btn ${lang === 'es' ? 'active' : ''}`}
              onClick={() => {
                setLang('es');
                localStorage.setItem('ff-lang', 'es');
              }}
              style={{ color: lang === 'es' ? '#001426' : '#0b1730', borderColor: '#1fa2ff' }}
            >
              Español
            </button>
            <button
              type="button"
              className={`lang-btn ${lang === 'pa' ? 'active' : ''}`}
              onClick={() => {
                setLang('pa');
                localStorage.setItem('ff-lang', 'pa');
              }}
              style={{ color: lang === 'pa' ? '#001426' : '#0b1730', borderColor: '#1fa2ff' }}
            >
              ਪੰਜਾਬੀ
            </button>
          </div>
        </div>

        <div className="top">
          <div>
            <h1>Home Safety Inspection Report</h1>
            <div className="tag">
              FULL FLOW MAINS AND DRAINS · FAST. CLEAN. RELIABLE.
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <b>209-779-7300</b>
            <br />
            fullflowmainsanddrains.vercel.app
          </div>
        </div>

        <div className="f">
          <div>{lang === 'es' ? 'Nombre del cliente' : lang === 'pa' ? 'ਗਾਹਕ ਦਾ ਨਾਮ (Customer name)' : 'Customer name'}</div>
          <div>{lang === 'es' ? 'Fecha' : lang === 'pa' ? 'ਤਾਰੀਖ (Date)' : 'Date'}</div>
          <div>{lang === 'es' ? 'Dirección' : lang === 'pa' ? 'ਪਤਾ (Address)' : 'Address'}</div>
          <div>{lang === 'es' ? 'Teléfono' : lang === 'pa' ? 'ਫ਼ੋਨ (Phone)' : 'Phone'}</div>
          <div>{lang === 'es' ? 'Edad / tipo de casa' : lang === 'pa' ? 'ਘਰ ਦੀ ਉਮਰ / ਕਿਸਮ (Home age/type)' : 'Home age / type'}</div>
          <div>Inspected by: Justin Moreno</div>
        </div>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>{lang === 'es' ? 'Punto revisado' : lang === 'pa' ? 'ਜਾਂਚਿਆ ਗਿਆ ਭਾਗ (Item checked)' : 'Item checked'}</th>
              <th>OK</th>
              <th>{lang === 'es' ? 'Atención' : lang === 'pa' ? 'ਨਿਗਰਾਨੀ (Watch)' : 'Watch'}</th>
              <th>{lang === 'es' ? 'Requiere reparación' : lang === 'pa' ? 'ਮੁਰੰਮਤ ਲੋੜੀਂਦੀ (Needs repair)' : 'Needs repair'}</th>
              <th>{lang === 'es' ? 'Notas' : lang === 'pa' ? 'ਨੋਟਸ (Notes)' : 'Notes'}</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item}</td>
                <td className="c">☐</td>
                <td className="c">☐</td>
                <td className="c">☐</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="note">
          {lang === 'es'
            ? 'Recomendaciones / presupuesto (el cliente decide lo que se hace):'
            : lang === 'pa'
            ? 'ਸਿਫ਼ਾਰਸ਼ਾਂ / ਅੰਦਾਜ਼ਾ (ਗਾਹਕ ਚੁਣਦਾ ਹੈ ਕਿ ਕੀ ਕੀਤਾ ਜਾਣਾ ਹੈ):'
            : 'Recommendations / estimate (customer chooses what is done):'}
        </div>

        <p className="ph">
          {lang === 'es'
            ? "Nada en este reporte fue reemplazado o reparado sin la aprobación del cliente. Licencia # próximamente. · Términos de garantía: pendiente — por definir por Justin."
            : lang === 'pa'
            ? "ਇਸ ਰਿਪੋਰਟ 'ਤੇ ਕੁਝ ਵੀ ਗਾਹਕ ਦੀ ਮਨਜ਼ੂਰੀ ਤੋਂ ਬਿਨਾਂ ਨਹੀਂ ਬਦਲਿਆ ਜਾਂ ਮੁਰੰਮਤ ਕੀਤਾ ਗਿਆ। ਲਾਇਸੈਂਸ # ਜਲਦੀ ਆ ਰਿਹਾ ਹੈ। · ਵਾਰੰਟੀ ਦੀਆਂ ਸ਼ਰਤਾਂ: ਬਕਾਇਆ — ਜਸਟਿਨ ਦੁਆਰਾ ਨਿਰਧਾਰਤ ਕੀਤੀਆਂ ਜਾਣਗੀਆਂ।"
            : "Nothing on this report was replaced or repaired without the customer's approval. License # coming. · Guarantee terms: placeholder — to be set by Justin."}
        </p>

        <div className="f">
          <div>{lang === 'es' ? 'Firma del cliente' : lang === 'pa' ? 'ਗਾਹਕ ਦੇ ਦਸਤਖਤ (Customer signature)' : 'Customer signature'}</div>
          <div>{lang === 'es' ? 'Firma del técnico' : lang === 'pa' ? 'ਤਕਨੀਸ਼ੀਅਨ ਦੇ ਦਸਤਖਤ (Technician signature)' : 'Technician signature'}</div>
        </div>
      </div>
    </div>
  );
};
