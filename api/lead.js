// POST /api/lead — validate, store privately in Vercel Blob (if connected), else log. No SMS is sent from here.
import { put } from '@vercel/blob';

const clean = (s, n = 120) => String(s ?? '').replace(/[<>]/g, '').trim().slice(0, n);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'POST only' });

  let b = req.body || {};
  if (typeof b === 'string') {
    try { b = JSON.parse(b); } catch { b = {}; }
  }
  if (b.website) return res.status(200).json({ ok: true });

  const phone = String(b.phone || '').replace(/\D/g, '').replace(/^1(?=\d{10}$)/, '');
  const name = clean(b.name, 80);
  if (!name || phone.length !== 10) {
    return res.status(400).json({ ok: false, error: 'name_and_phone_required' });
  }

  const lead = {
    at: new Date().toISOString(),
    name,
    phone,
    city: clean(b.city, 40),
    need: clean(b.need, 60),
    when: clean(b.when, 20),
    notes: clean(b.notes, 500),
    lang: b.lang === 'es' ? 'es' : b.lang === 'pa' ? 'pa' : 'en',
    src: clean(b.src, 60),
    consent: {
      sms: b.smsConsent === true,
      text: clean(b.consentText, 600),
      ip: String(req.headers['x-forwarded-for'] || '').split(',')[0],
      ua: clean(req.headers['user-agent'], 200),
    },
  };

  console.log('LEAD', JSON.stringify({ ...lead, phone: '***' + phone.slice(-4) }));

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return res.status(200).json({ ok: true, stored: false });
  }

  try {
    await put(
      `leads/${lead.at.replace(/[:.]/g, '-')}-${phone.slice(-4)}.json`,
      JSON.stringify(lead),
      { access: 'private', contentType: 'application/json', addRandomSuffix: true },
    );
    return res.status(200).json({ ok: true, stored: true });
  } catch (e) {
    console.error('BLOB', e?.message);
    return res.status(200).json({ ok: true, stored: false });
  }
}
