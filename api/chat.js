// POST /api/chat — Flowie assistant (Gemini when GEMINI_API_KEY is set; otherwise EN/ES/PA fallbacks).
import { GoogleGenAI } from '@google/genai';

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
- Free 14-Point Home Safety Inspection: 100% Free with written report. Zero pressure, no hidden fees, nothing repaired or replaced without customer approval.
- Services Offered: Drain cleaning, main & sewer lines, video camera inspections, hydro-jetting, water heaters, leak detection, gas lines, fixtures.
- Written Promises: Upfront written pricing before work starts, "On my way" text before arrival, clean work guarantee.

Emergency & Advice Guidelines:
- If a user reports an active leak, flooding, burst pipe, or backup: give the DIY shut-off tip and tell them to text or call Justin at 209-779-7300 (text 24/7).
- If a user asks about prices: every job is quoted in writing before work starts; the 14-point walkthrough is free.
- Reply in the language the user speaks (English, Spanish, or Punjabi).
- Keep answers friendly, reassuring, clear, and concise (under 3-4 paragraphs).`;

function smartFallback(messages, lang) {
  const lastUserMsg = (messages[messages.length - 1]?.content || '').toLowerCase();
  if (lang === 'es' || lastUserMsg.includes('hola') || lastUserMsg.includes('precio') || lastUserMsg.includes('agua')) {
    if (lastUserMsg.includes('llave') || lastUserMsg.includes('cerrar') || lastUserMsg.includes('emergencia') || lastUserMsg.includes('fuga')) {
      return '🚨 **Cierre de emergencia de agua**: La llave de paso principal suele estar en la pared exterior frontal de su casa (junto a la llave de la manguera) o en la caja del medidor cerca de la banqueta. Gírela en sentido horario o perpendicular al tubo para cortar todo el flujo de agua inmediatamente.\n\n📲 **Mande un texto o llame a Justin las 24 horas, los 7 días de la semana (incluso tarde en la noche) al 209-779-7300**.';
    }
    if (lastUserMsg.includes('inspecc') || lastUserMsg.includes('gratis')) {
      return '📋 **Inspección de 14 Puntos 100% Gratis**: Justin revisa calentadores, fugas visibles, presión de agua, inodoros y drenajes. Le entrega un reporte escrito y nada se repara sin su aprobación.\n\n📲 Puede pedirla en el formulario de arriba o **enviar un texto a Justin a cualquier hora (24/7) al 209-779-7300**.';
    }
    if (lastUserMsg.includes('precio') || lastUserMsg.includes('cuanto') || lastUserMsg.includes('costo')) {
      return '💵 **Precios Claros**: Cada trabajo se presupuesta por escrito antes de empezar, sin sorpresas ni cobros ocultos. La inspección de 14 puntos es totalmente gratuita.\n\n📲 **Envíe un texto a Justin al 209-779-7300 a todas horas (24/7, incluso de noche)** para un presupuesto rápido.';
    }
    return '¡Hola! Soy Flowie, el asistente de Full Flow Mains and Drains. Justin Moreno ofrece inspecciones gratuitas de 14 puntos, desazolve de drenajes, calentadores de agua y plomería general en todo el Condado de Stanislaus.\n\n📲 **Puede enviar un texto o llamar a Justin a TODAS horas — servicio 24/7, incluso de noche, al 209-779-7300!**';
  }
  if (lang === 'pa' || lastUserMsg.includes('ਸਤਿ') || lastUserMsg.includes('ਪਾਣੀ') || lastUserMsg.includes('ਵਾਲਵ')) {
    if (lastUserMsg.includes('ਵਾਲਵ') || lastUserMsg.includes('ਬੰਦ') || lastUserMsg.includes('ਐਮਰਜੈਂਸੀ') || lastUserMsg.includes('ਲੀਕ')) {
      return "🚨 **ਐਮਰਜੈਂਸੀ ਪਾਣੀ ਬੰਦ ਕਰਨਾ**: ਮੇਨ ਪਾਣੀ ਦਾ ਵਾਲਵ ਘਰ ਦੀ ਸਾਹਮਣੇ ਵਾਲੀ ਕੰਧ 'ਤੇ ਬਾਹਰੀ ਟੂਟੀ ਦੇ ਨੇੜੇ ਜਾਂ ਸੜਕ ਕੰਢੇ ਮੀਟਰ ਬਾਕਸ ਵਿੱਚ ਹੁੰਦਾ ਹੈ। ਇਸਨੂੰ ਘੜੀ ਦੀ ਦਿਸ਼ਾ ਵਿੱਚ ਘੁਮਾ ਕੇ ਪਾਣੀ ਤੁਰੰਤ ਬੰਦ ਕਰੋ।\n\n📲 **ਜਸਟਿਨ ਨੂੰ ਕਿਸੇ ਵੀ ਸਮੇਂ, ਰਾਤ ਨੂੰ ਵੀ 24/7 ਟੈਕਸਟ ਜਾਂ ਕਾਲ ਕਰੋ: 209-779-7300**।";
    }
    if (lastUserMsg.includes('ਜਾਂਚ') || lastUserMsg.includes('ਮੁਫ਼ਤ')) {
      return "📋 **ਮੁਫ਼ਤ 14-ਨੁਕਾਤੀ ਹੋਮ ਸੇਫਟੀ ਇੰਸਪੈਕਸ਼ਨ**: ਅਸੀਂ ਵਾਟਰ ਹੀਟਰ, ਲੀਕੇਜ, ਪਾਣੀ ਪ੍ਰੈਸ਼ਰ, ਟਾਇਲਟ ਅਤੇ ਡਰੇਨਾਂ ਦੀ ਪੂਰੀ ਜਾਂਚ ਕਰਦੇ ਹਾਂ। ਤੁਹਾਨੂੰ ਲਿਖਤੀ ਰਿਪੋਰਟ ਮਿਲਦੀ ਹੈ ਅਤੇ ਬਿਨਾਂ ਮਨਜ਼ੂਰੀ ਕੁਝ ਨਹੀਂ ਬਦਲਿਆ ਜਾਂਦਾ।\n\n📲 **ਜਸਟਿਨ ਨੂੰ 24/7 ਕਿਸੇ ਵੀ ਸਮੇਂ ਟੈਕਸਟ ਕਰੋ: 209-779-7300** ਜਾਂ ਉੱਪਰ ਦਿੱਤਾ ਫਾਰਮ ਭਰੋ।";
    }
    return "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ Full Flow Mains and Drains ਦਾ ਸਹਾਇਕ ਹਾਂ। ਜਸਟਿਨ ਮੋਰੇਨੋ ਸਟੈਨਿਸਲੌਸ ਕਾਉਂਟੀ ਵਿੱਚ ਮੁਫ਼ਤ 14-ਨੁਕਾਤੀ ਜਾਂਚ, ਡਰੇਨ ਸਫ਼ਾਈ ਅਤੇ ਵਾਟਰ ਹੀਟਰ ਸੇਵਾਵਾਂ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।\n\n📲 **ਜਸਟਿਨ ਨੂੰ ਕਿਸੇ ਵੀ ਸਮੇਂ, ਰਾਤ ਨੂੰ ਵੀ 24/7 ਟੈਕਸਟ ਜਾਂ ਕਾਲ ਕਰੋ: 209-779-7300**।";
  }
  if (lastUserMsg.includes('shut') || lastUserMsg.includes('emergency') || lastUserMsg.includes('valve') || lastUserMsg.includes('leak') || lastUserMsg.includes('burst')) {
    return '🚨 **Emergency Water Shut-Off**: Your main water shut-off valve is typically located on the exterior front wall where the main pipe enters your home (right by the front hose spigot) or in a concrete meter box near the sidewalk/curb. Turn it clockwise (or perpendicular to the pipe) to immediately stop all water flow.\n\n📲 **For immediate emergency help, text or call Justin directly right now at 209-779-7300 — you can text him 24/7 at ALL hours, even late at night!**';
  }
  if (lastUserMsg.includes('inspect') || lastUserMsg.includes('free') || lastUserMsg.includes('14')) {
    return '📋 **Free 14-Point Home Safety Inspection**: Justin inspects your water heater, visible leaks, water pressure, fixtures, exposed pipes, and drainage, then hands you a clear written checklist. Zero pressure, and nothing is touched or billed without your authorization!\n\n📲 Book it in the form above or **text Justin directly 24/7 at 209-779-7300** (he answers at all hours, even late at night).';
  }
  if (lastUserMsg.includes('price') || lastUserMsg.includes('cost') || lastUserMsg.includes('rate')) {
    return '💵 **Straight Answers on Pricing**: Every single job is quoted in writing with upfront pricing before any work starts—no surprise charges or hidden trip fees. The 14-point safety walkthrough is completely free.\n\n📲 **Text Justin directly 24/7 at 209-779-7300** (even late at night) for an upfront quote or emergency advice.';
  }
  return "Hi! I'm Flowie, Justin Moreno's assistant at Full Flow Mains and Drains. We specialize in residential drains, sewer lines, water heaters, and free 14-point home safety inspections throughout Stanislaus County (Turlock, Modesto, Ceres, and surrounding cities).\n\n📲 **Need service or have a question? Text Justin directly at 209-779-7300 at ALL hours — 24/7 emergency service, even late at night!**";
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'POST only' });

  let body = req.body || {};
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  const { messages, lang } = body;
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ ok: false, error: 'Messages array is required' });
  }

  try {
    if (!process.env.GEMINI_API_KEY) {
      return res.status(200).json({ ok: true, reply: smartFallback(messages, lang) });
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: { headers: { 'User-Agent': 'aistudio-build' } },
    });

    const contents = messages.map((m) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: String(m.content || '').slice(0, 2000) }],
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents,
      config: { systemInstruction: SYSTEM_INSTRUCTION },
    });

    const reply =
      response.text ||
      "I'm here to help with all your residential plumbing questions. Feel free to call or text Justin at 209-779-7300!";
    return res.status(200).json({ ok: true, reply });
  } catch (err) {
    console.warn('Gemini API note:', err?.message);
    return res.status(200).json({ ok: true, reply: smartFallback(messages, lang) });
  }
}
