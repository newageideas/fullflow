import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const QrPage: React.FC = () => {
  useEffect(() => {
    document.title = "QR Cards | Full Flow Mains and Drains";
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const cards = Array.from({ length: 10 });

  return (
    <div className="qr-page">
      <div className="qr-tools noprint">
        <Link to="/" style={{ marginRight: '14px', fontWeight: 'bold' }}>
          ← Back
        </Link>
        <button onClick={handlePrint}>🖨 Print cards</button>
        <a href="/assets/qr-fullflow.png" download>
          QR PNG
        </a>
        <a href="/assets/qr-fullflow.svg" download>
          QR SVG
        </a>{' '}
        · QR opens https://fullflowmainsanddrains.vercel.app/?src=qr{' '}
        <span style={{ color: '#a00' }}>· Referral reward: placeholder</span>
      </div>

      <div className="qr-sheet">
        {cards.map((_, i) => (
          <div className="qr-card" key={i}>
            <img
              src="/assets/qr-fullflow.svg"
              alt="QR code to fullflowmainsanddrains.vercel.app"
            />
            <div>
              <b>
                FULL <span>FLOW</span>
              </b>
              <div className="g">MAINS AND DRAINS · FAST. CLEAN. RELIABLE.</div>
              <div className="s">
                FREE 14-point Home Safety Inspection
                <br />
                Scan to book · Se habla español · ਪੰਜਾਬੀ
              </div>
              <div className="p">209-779-7300</div>
              <div className="s">Call or text · Referred by: ________</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
