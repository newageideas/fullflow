import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { put } from '@vercel/blob';
import { GoogleGenAI } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production';
const PORT = 3000;

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

const SYSTEM_INSTRUCTION = `You are "Flowie", the virtual plumbing assistant and emergency dispatcher for Full Flow Mains and Drains, owned and operated by Justin Moreno in Turlock, California.
Your primary role is to help homeowners, landlords, and realtors across Stanislaus County get fast, reliable plumbing solutions, and connect them directly with Justin.

CRITICAL DIRECTIVE ON DIRECT TEXTING & 24/7 SERVICE:
- Justin Moreno is available 24/7 for residential plumbing emergencies, service calls, and bookings.
- ALWAYS inform clients that they can TEXT Justin directly at 209-779-7300 at ALL hours — day or night, 24/7 emergency service, even late at night!
- Texting 209-779-7300 is the fastest way to get in touch with Justin directly (he is the technician and owner who answers and does the work).

Core Knowledge from Full Flow Mains and Drains Webpage:
- Business: Full Flow Mains and Drains
- Master Plumber & Owner: Justin Moreno
- Phone for Call or Text: 209-779-7300 (Text anytime 24/7, even late at night!)
- Location: Turlock, CA
- Motto: "Fast. Clean. Reliable." · "Flow without worries."
- Service Area: Turlock, Modesto, Ceres, Keyes, Denair, Hughson, Delhi, Livingston, Atwater, Merced across Stanislaus County and surrounding Central Valley communities.
- Free 14-Point Home Safety Inspection: 100% Free with written report. Zero pressure, no hidden fees, nothing repaired or replaced without customer approval. Checks: water heater condition, visible leaks, water pressure (psi), toilet operation, faucets & fixtures, under-sink plumbing, exposed pipe condition, main water shut-off valve, outdoor hose bibs, supply lines, drainage/venting, signs of corrosion, general safety, written recommendations. Printable report available on-site (/inspection).
- Services Offered: Drain cleaning (clearing kitchen, bath, laundry, floor drains), main & sewer lines (backups, tree roots, main stoppages), video camera inspections, hydro-jetting (high-pressure scouring), water heaters (repair and replacement, tank and tankless), leak detection (pipes, under-sink, slab leak concerns), gas lines, fixtures (faucets, toilets, disposals, shut-offs).
- Written Promises: Upfront written pricing before work starts, "On my way" text before arrival with arrival window, clean work guarantee (shoe covers, drop cloths, thorough cleanup).
- Realtors & Landlords: Pre-sale and move-in inspection packages with printable reports for listings, escrow, or rental files. Printable QR referral cards on-site (/qr).

Emergency & Advice Guidelines:
- If a user reports an active leak, flooding, burst pipe, or backup: Immediately give the step-by-step DIY shut-off tip (shut the main valve near the front exterior hose bib or at the street meter box), and tell them to text or call Justin right now at 209-779-7300 (text 24/7 at all hours, even late at night).
- If a user asks about prices: Explain that every job is quoted in writing with upfront pricing before any work starts, and the 14-point safety walkthrough is completely free.
- Fluently reply in the language the user speaks:
  - English: "You can text Justin directly at 209-779-7300 at all hours — 24/7 emergency service, even late at night!"
  - Spanish: "¡Puede enviar un mensaje de texto o llamar a Justin directamente al 209-779-7300 a TODAS horas — servicio 24/7, incluso de noche!"
  - Punjabi: "ਤੁਸੀਂ ਕਿਸੇ ਵੀ ਸਮੇਂ, ਰਾਤ ਨੂੰ ਵੀ, ਜਸਟਿਨ ਨੂੰ 209-779-7300 'ਤੇ 24/7 ਟੈਕਸਟ ਜਾਂ ਕਾਲ ਕਰ ਸਕਦੇ ਹੋ!"
- Keep answers friendly, reassuring, clear, and concise (under 3-4 paragraphs).`;

async function startServer() {
  const app = express();
  app.use(express.json());

  const clean = (s: unknown, n = 120) => String(s ?? '').replace(/[<>]/g, '').trim().slice(0, n);

  // In-memory leads storage for when Blob token is not configured
  const inMemoryLeads: Record<string, unknown>[] = [];

  app.post('/api/lead', async (req, res) => {
    let b = req.body || {};
    if (typeof b === 'string') {
      try {
        b = JSON.parse(b);
      } catch {
        b = {};
      }
    }
    // Honeypot check
    if (b.website) {
      res.status(200).json({ ok: true });
      return;
    }

    const phone = String(b.phone || '').replace(/\D/g, '').replace(/^1(?=\d{10}$)/, '');
    const name = clean(b.name, 80);
    if (!name || phone.length !== 10) {
      res.status(400).json({ ok: false, error: 'name_and_phone_required' });
      return;
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
        ip: String(req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').split(',')[0],
        ua: clean(req.headers['user-agent'], 200)
      }
    };

    console.log('LEAD', JSON.stringify({ ...lead, phone: '***' + phone.slice(-4) }));
    inMemoryLeads.push(lead);

    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      res.status(200).json({ ok: true, stored: false });
      return;
    }

    try {
      await put(`leads/${lead.at.replace(/[:.]/g, '-')}-${phone.slice(-4)}.json`, JSON.stringify(lead), {
        access: 'private',
        contentType: 'application/json',
        addRandomSuffix: true
      });
      res.status(200).json({ ok: true, stored: true });
    } catch (e: unknown) {
      const err = e as Error;
      console.error('BLOB', err?.message);
      res.status(200).json({ ok: true, stored: false });
    }
  });

  // AI Chatbot endpoint powered by Gemini 3.8 Flash
  app.post('/api/chat', async (req, res) => {
    const { messages, lang } = req.body || {};
    if (!Array.isArray(messages) || messages.length === 0) {
      res.status(400).json({ ok: false, error: 'Messages array is required' });
      return;
    }

    try {

      if (!process.env.GEMINI_API_KEY) {
        const lastUserMsg = (messages[messages.length - 1]?.content || '').toLowerCase();
        let fallbackText = "Hello! I'm the Full Flow Mains and Drains assistant. Justin Moreno is ready to help with drains, water heaters, leaks, and your free 14-point safety inspection. Call or text 209-779-7300 anytime!";
        if (lang === 'es' || lastUserMsg.includes('hola') || lastUserMsg.includes('precio')) {
          fallbackText = "¡Hola! Soy el asistente de Full Flow Mains and Drains. Justin Moreno está disponible para ayudarle con drenajes, calentadores y la inspección gratis de 14 puntos. ¡Llame o envíe un texto al 209-779-7300!";
        } else if (lang === 'pa' || lastUserMsg.includes('ਸਤਿ') || lastUserMsg.includes('ਪਾਣੀ')) {
          fallbackText = "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ Full Flow Mains and Drains ਦਾ ਸਹਾਇਕ ਹਾਂ। ਜਸਟਿਨ ਮੋਰੇਨੋ ਡਰੇਨਾਂ, ਵਾਟਰ ਹੀਟਰਾਂ ਅਤੇ ਮੁਫ਼ਤ 14-ਨੁਕਾਤੀ ਸੁਰੱਖਿਆ ਜਾਂਚ ਲਈ ਮਦਦ ਲਈ ਤਿਆਰ ਹੈ। 209-779-7300 'ਤੇ ਕਾਲ ਜਾਂ ਟੈਕਸਟ ਕਰੋ!";
        }
        res.json({ ok: true, reply: fallbackText });
        return;
      }

      const contents = messages.map((m: { role: string; content: string }) => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: String(m.content || '').slice(0, 2000) }]
      }));

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        }
      });

      const reply = response.text || "I'm here to help with all your residential plumbing questions. Feel free to call or text Justin at 209-779-7300!";
      res.json({ ok: true, reply });
    } catch (err: unknown) {
      const error = err as Error;
      console.warn('Gemini API note:', error?.message);

      // Resilient webpage-analyzing fallback in EN, ES, and PA
      const lastUserMsg = (messages[messages.length - 1]?.content || '').toLowerCase();
      let smartReply = "";

      if (lang === 'es' || lastUserMsg.includes('hola') || lastUserMsg.includes('precio') || lastUserMsg.includes('agua')) {
        if (lastUserMsg.includes('llave') || lastUserMsg.includes('cerrar') || lastUserMsg.includes('emergencia') || lastUserMsg.includes('fuga')) {
          smartReply = "🚨 **Cierre de emergencia de agua**: La llave de paso principal suele estar en la pared exterior frontal de su casa (junto a la llave de la manguera) o en la caja del medidor cerca de la banqueta. Gírela en sentido horario o perpendicular al tubo para cortar todo el flujo de agua inmediatamente.\n\n📲 **Mande un texto o llame a Justin las 24 horas, los 7 días de la semana (incluso tarde en la noche) al 209-779-7300**.";
        } else if (lastUserMsg.includes('inspecc') || lastUserMsg.includes('gratis')) {
          smartReply = "📋 **Inspección de 14 Puntos 100% Gratis**: Justin revisa calentadores, fugas visibles, presión de agua, inodoros y drenajes. Le entrega un reporte escrito y nada se repara sin su aprobación.\n\n📲 Puede pedirla en el formulario de arriba o **enviar un texto a Justin a cualquier hora (24/7) al 209-779-7300**.";
        } else if (lastUserMsg.includes('precio') || lastUserMsg.includes('cuanto') || lastUserMsg.includes('costo')) {
          smartReply = "💵 **Precios Claros**: Cada trabajo se presupuesta por escrito antes de empezar, sin sorpresas ni cobros ocultos. La inspección de 14 puntos es totalmente gratuita.\n\n📲 **Envíe un texto a Justin al 209-779-7300 a todas horas (24/7, incluso de noche)** para un presupuesto rápido.";
        } else {
          smartReply = "¡Hola! Soy Flowie, el asistente de Full Flow Mains and Drains. Justin Moreno ofrece inspecciones gratuitas de 14 puntos, desazolve de drenajes, calentadores de agua y plomería general en todo el Condado de Stanislaus.\n\n📲 **Puede enviar un texto o llamar a Justin a TODAS horas — servicio 24/7, incluso de noche, al 209-779-7300!**";
        }
      } else if (lang === 'pa' || lastUserMsg.includes('ਸਤਿ') || lastUserMsg.includes('ਪਾਣੀ') || lastUserMsg.includes('ਵਾਲਵ')) {
        if (lastUserMsg.includes('ਵਾਲਵ') || lastUserMsg.includes('ਬੰਦ') || lastUserMsg.includes('ਐਮਰਜੈਂਸੀ') || lastUserMsg.includes('ਲੀਕ')) {
          smartReply = "🚨 **ਐਮਰਜੈਂਸੀ ਪਾਣੀ ਬੰਦ ਕਰਨਾ**: ਮੇਨ ਪਾਣੀ ਦਾ ਵਾਲਵ ਘਰ ਦੀ ਸਾਹਮਣੇ ਵਾਲੀ ਕੰਧ 'ਤੇ ਬਾਹਰੀ ਟੂਟੀ ਦੇ ਨੇੜੇ ਜਾਂ ਸੜਕ ਕੰਢੇ ਮੀਟਰ ਬਾਕਸ ਵਿੱਚ ਹੁੰਦਾ ਹੈ। ਇਸਨੂੰ ਘੜੀ ਦੀ ਦਿਸ਼ਾ ਵਿੱਚ ਘੁਮਾ ਕੇ ਪਾਣੀ ਤੁਰੰਤ ਬੰਦ ਕਰੋ।\n\n📲 **ਜਸਟਿਨ ਨੂੰ ਕਿਸੇ ਵੀ ਸਮੇਂ, ਰਾਤ ਨੂੰ ਵੀ 24/7 ਟੈਕਸਟ ਜਾਂ ਕਾਲ ਕਰੋ: 209-779-7300**।";
        } else if (lastUserMsg.includes('ਜਾਂਚ') || lastUserMsg.includes('ਮੁਫ਼ਤ')) {
          smartReply = "📋 **ਮੁਫ਼ਤ 14-ਨੁਕਾਤੀ ਹੋਮ ਸੇਫਟੀ ਇੰਸਪੈਕਸ਼ਨ**: ਅਸੀਂ ਵਾਟਰ ਹੀਟਰ, ਲੀਕੇਜ, ਪਾਣੀ ਪ੍ਰੈਸ਼ਰ, ਟਾਇਲਟ ਅਤੇ ਡਰੇਨਾਂ ਦੀ ਪੂਰੀ ਜਾਂਚ ਕਰਦੇ ਹਾਂ। ਤੁਹਾਨੂੰ ਲਿਖਤੀ ਰਿਪੋਰਟ ਮਿਲਦੀ ਹੈ ਅਤੇ ਬਿਨਾਂ ਮਨਜ਼ੂਰੀ ਕੁਝ ਨਹੀਂ ਬਦਲਿਆ ਜਾਂਦਾ।\n\n📲 **ਜਸਟਿਨ ਨੂੰ 24/7 ਕਿਸੇ ਵੀ ਸਮੇਂ ਟੈਕਸਟ ਕਰੋ: 209-779-7300** ਜਾਂ ਉੱਪਰ ਦਿੱਤਾ ਫਾਰਮ ਭਰੋ।";
        } else {
          smartReply = "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ Full Flow Mains and Drains ਦਾ ਸਹਾਇਕ ਹਾਂ। ਜਸਟਿਨ ਮੋਰੇਨੋ ਸਟੈਨਿਸਲੌਸ ਕਾਉਂਟੀ ਵਿੱਚ ਮੁਫ਼ਤ 14-ਨੁਕਾਤੀ ਜਾਂਚ, ਡਰੇਨ ਸਫ਼ਾਈ ਅਤੇ ਵਾਟਰ ਹੀਟਰ ਸੇਵਾਵਾਂ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।\n\n📲 **ਜਸਟਿਨ ਨੂੰ ਕਿਸੇ ਵੀ ਸਮੇਂ, ਰਾਤ ਨੂੰ ਵੀ 24/7 ਟੈਕਸਟ ਜਾਂ ਕਾਲ ਕਰੋ: 209-779-7300**।";
        }
      } else {
        if (lastUserMsg.includes('shut') || lastUserMsg.includes('emergency') || lastUserMsg.includes('valve') || lastUserMsg.includes('leak') || lastUserMsg.includes('burst')) {
          smartReply = "🚨 **Emergency Water Shut-Off**: Your main water shut-off valve is typically located on the exterior front wall where the main pipe enters your home (right by the front hose spigot) or in a concrete meter box near the sidewalk/curb. Turn it clockwise (or perpendicular to the pipe) to immediately stop all water flow.\n\n📲 **For immediate emergency help, text or call Justin directly right now at 209-779-7300 — you can text him 24/7 at ALL hours, even late at night!**";
        } else if (lastUserMsg.includes('inspect') || lastUserMsg.includes('free') || lastUserMsg.includes('14')) {
          smartReply = "📋 **Free 14-Point Home Safety Inspection**: Justin inspects your water heater, visible leaks, water pressure, fixtures, exposed pipes, and drainage, then hands you a clear written checklist. Zero pressure, and nothing is touched or billed without your authorization!\n\n📲 Book it in the form above or **text Justin directly 24/7 at 209-779-7300** (he answers at all hours, even late at night).";
        } else if (lastUserMsg.includes('price') || lastUserMsg.includes('cost') || lastUserMsg.includes('rate')) {
          smartReply = "💵 **Straight Answers on Pricing**: Every single job is quoted in writing with upfront pricing before any work starts—no surprise charges or hidden trip fees. The 14-point safety walkthrough is completely free.\n\n📲 **Text Justin directly 24/7 at 209-779-7300** (even late at night) for an upfront quote or emergency advice.";
        } else {
          smartReply = "Hi! I'm Flowie, Justin Moreno's assistant at Full Flow Mains and Drains. We specialize in residential drains, sewer lines, water heaters, and free 14-point home safety inspections throughout Stanislaus County (Turlock, Modesto, Ceres, and surrounding cities).\n\n📲 **Need service or have a question? Text Justin directly at 209-779-7300 at ALL hours — 24/7 emergency service, even late at night!**";
        }
      }

      res.json({
        ok: true,
        reply: smartReply
      });
    }
  });

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true, host: '0.0.0.0', port: PORT },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
