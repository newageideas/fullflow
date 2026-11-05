import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Language, CITIES, NEED, TRANSLATIONS, MSG } from '../data/content';

interface LeadFormProps {
  lang: Language;
}

export const LeadForm: React.FC<LeadFormProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const needOptions = NEED[lang];

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState(CITIES[0]);
  const [need, setNeed] = useState(NEED.en[0]);
  const [when, setWhen] = useState('asap');
  const [notes, setNotes] = useState('');
  const [website, setWebsite] = useState(''); // Honeypot
  const [smsConsent, setSmsConsent] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusText, setStatusText] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<'success' | 'error' | null>(null);
  const [smsFallbackBody, setSmsFallbackBody] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusText(null);
    setSmsFallbackBody(null);

    const cleanPhone = phone.replace(/\D/g, '');
    const isPhoneValid = cleanPhone.length === 10 || (cleanPhone.length === 11 && cleanPhone[0] === '1');

    if (!name.trim() || !isPhoneValid) {
      setStatusType('error');
      setStatusText(MSG[lang].bad);
      return;
    }

    let src = 'direct';
    try {
      const searchParams = new URLSearchParams(window.location.search);
      const paramSrc = searchParams.get('src');
      if (paramSrc) {
        src = paramSrc;
      } else if (document.referrer) {
        src = new URL(document.referrer).hostname || 'direct';
      }
    } catch {
      src = 'direct';
    }

    const payload = {
      name: name.trim(),
      phone: cleanPhone,
      city,
      need,
      when,
      notes: notes.trim(),
      website,
      lang,
      src,
      smsConsent,
      consentText: smsConsent ? t.consent : ''
    };

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (!response.ok || !data.ok) {
        throw new Error('Submission failed');
      }

      setStatusType('success');
      setStatusText(MSG[lang].ok);
      setName('');
      setPhone('');
      setCity(CITIES[0]);
      setNeed(NEED.en[0]);
      setWhen('asap');
      setNotes('');
      setWebsite('');
      setSmsConsent(false);
    } catch {
      setStatusType('error');
      setStatusText(MSG[lang].fail);
      setSmsFallbackBody(`${payload.name} - ${payload.need} - ${payload.city}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="request">
      <div className="wrap" style={{ maxWidth: '720px' }}>
        <h2>{t.fh}</h2>
        <form id="lead" noValidate onSubmit={handleSubmit}>
          <div className="row2">
            <div>
              <label htmlFor="name">{t.fn}</label>
              <input
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                required
              />
            </div>
            <div>
              <label htmlFor="phone">{t.fp}</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="tel"
                required
              />
            </div>
          </div>

          <div className="row2">
            <div>
              <label htmlFor="city">{t.fc}</label>
              <select
                id="city"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                {CITIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
                <option value={lang === 'es' ? 'Otra' : lang === 'pa' ? 'ਹੋਰ' : 'Other'}>
                  {lang === 'es' ? 'Otra' : lang === 'pa' ? 'ਹੋਰ' : 'Other'}
                </option>
              </select>
            </div>
            <div>
              <label htmlFor="need">{t.fneed}</label>
              <select
                id="need"
                name="need"
                value={need}
                onChange={(e) => setNeed(e.target.value)}
              >
                {needOptions.map((opt, i) => (
                  <option key={i} value={NEED.en[i]}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="when">{t.fw}</label>
            <select
              id="when"
              name="when"
              value={when}
              onChange={(e) => setWhen(e.target.value)}
            >
              <option value="asap">{t.w1}</option>
              <option value="morning">{t.w2}</option>
              <option value="afternoon">{t.w3}</option>
              <option value="evening">{t.w4}</option>
            </select>
          </div>

          <div>
            <label htmlFor="notes">{t.fnotes}</label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              maxLength={500}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          <input
            className="hp"
            tabIndex={-1}
            autoComplete="off"
            name="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            aria-hidden="true"
          />

          <label className="consent">
            <input
              type="checkbox"
              id="sms"
              name="sms"
              checked={smsConsent}
              onChange={(e) => setSmsConsent(e.target.checked)}
            />
            <span id="consentText">{t.consent}</span>
          </label>

          <p style={{ fontSize: '13px', color: 'var(--mut)', margin: 0 }}>
            {t.priv} <Link to="/privacy">{t.privLink}</Link>.
          </p>

          <button className="btn call" type="submit" disabled={isSubmitting}>
            {t.send}
          </button>

          {statusText && (
            <p
              id="status"
              role="status"
              aria-live="polite"
              style={{
                color: statusType === 'success' ? 'var(--lime)' : '#ff6b6b'
              }}
            >
              {statusText}{' '}
              {smsFallbackBody && (
                <a
                  href={`sms:+12097797300?&body=${encodeURIComponent(
                    smsFallbackBody
                  )}`}
                  aria-label="Text fallback"
                >
                  💬
                </a>
              )}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
