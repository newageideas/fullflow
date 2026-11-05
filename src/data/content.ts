export type Language = 'en' | 'es' | 'pa';

export const CHECKS: Record<Language, string[]> = {
  en: [
    "Water heater condition",
    "Visible leaks",
    "Water pressure",
    "Toilet operation",
    "Faucet & fixture function",
    "Under-sink plumbing",
    "Exposed pipe condition",
    "Main water shut-off",
    "Hose bibs (outdoor spigots)",
    "Water supply lines",
    "Drainage & venting",
    "Signs of corrosion",
    "General plumbing safety",
    "Recommendations (if needed)"
  ],
  es: [
    "Estado del calentador de agua",
    "Fugas visibles",
    "Presión del agua",
    "Funcionamiento del inodoro",
    "Funcionamiento de llaves y accesorios",
    "Plomería debajo del fregadero",
    "Estado de tuberías expuestas",
    "Llave de paso principal",
    "Llaves de manguera (exteriores)",
    "Líneas de suministro de agua",
    "Drenaje y ventilación",
    "Señales de corrosión",
    "Seguridad general de plomería",
    "Recomendaciones (si es necesario)"
  ],
  pa: [
    "ਵਾਟਰ ਹੀਟਰ ਦੀ ਹਾਲਤ",
    "ਦਿਸਣ ਵਾਲੀਆਂ ਲੀਕੇਜ",
    "ਪਾਣੀ ਦਾ ਪ੍ਰੈਸ਼ਰ",
    "ਟਾਇਲਟ ਦਾ ਕੰਮਕਾਜ",
    "ਟੂਟੀਆਂ ਅਤੇ ਫਿਕਸਚਰ ਦੀ ਜਾਂਚ",
    "ਸਿੰਕ ਦੇ ਹੇਠਾਂ ਪਲੰਬਿੰਗ",
    "ਬਾਹਰੀ ਪਾਈਪਾਂ ਦੀ ਹਾਲਤ",
    "ਮੁੱਖ ਪਾਣੀ ਬੰਦ ਕਰਨ ਵਾਲਾ ਵਾਲਵ",
    "ਬਾਹਰਲੀਆਂ ਪਾਣੀ ਦੀਆਂ ਟੂਟੀਆਂ (ਹੋਜ਼ ਬਿਬ)",
    "ਪਾਣੀ ਸਪਲਾਈ ਦੀਆਂ ਲਾਈਨਾਂ",
    "ਨਿਕਾਸੀ ਅਤੇ ਹਵਾਦਾਰੀ (ਡਰੇਨੇਜ ਅਤੇ ਵੈਂਟਿੰਗ)",
    "ਜੰਗਾਲ ਜਾਂ ਖੋਰ ਦੇ ਲੱਛਣ",
    "ਆਮ ਪਲੰਬਿੰਗ ਸੁਰੱਖਿਆ",
    "ਸਿਫ਼ਾਰਸ਼ਾਂ (ਜੇਕਰ ਲੋੜ ਹੋਵੇ)"
  ]
};

export const SVC: Record<Language, [string, string][]> = {
  en: [
    ["Drain cleaning", "Kitchen, bath, laundry and floor drains cleared."],
    ["Main & sewer lines", "Backups, roots and main line stoppages."],
    ["Camera inspection", "See inside the line before deciding on any repair."],
    ["Hydro-jetting", "High-pressure cleaning for grease and roots."],
    ["Water heaters", "Repair and replacement, tank and tankless."],
    ["Leak detection & repair", "Pipes, supply lines, under-sink and slab concerns."],
    ["Gas lines", "Gas line repair and appliance hookups."],
    ["Fixtures", "Faucets, toilets, disposals, hose bibs, shut-offs."]
  ],
  es: [
    ["Limpieza de drenajes", "Drenajes de cocina, baño, lavandería y piso."],
    ["Líneas principales y de drenaje", "Tapones, raíces y bloqueos en la línea principal."],
    ["Inspección con cámara", "Vea dentro de la línea antes de decidir cualquier reparación."],
    ["Hidro-limpieza (hydro-jet)", "Limpieza a alta presión para grasa y raíces."],
    ["Calentadores de agua", "Reparación y reemplazo, de tanque y sin tanque."],
    ["Detección y reparación de fugas", "Tuberías, líneas de suministro, debajo del fregadero."],
    ["Líneas de gas", "Reparación de líneas de gas y conexión de aparatos."],
    ["Accesorios", "Llaves, inodoros, trituradores, llaves de manguera y de paso."]
  ],
  pa: [
    ["ਡਰੇਨ ਸਫ਼ਾਈ (Drain cleaning)", "ਰਸੋਈ, ਬਾਥਰੂਮ, ਲਾਂਡਰੀ ਅਤੇ ਫਰਸ਼ ਦੇ ਡਰੇਨ ਸਾਫ਼ ਕਰਨਾ।"],
    ["ਮੇਨ ਅਤੇ ਸੀਵਰ ਲਾਈਨਾਂ (Main & sewer lines)", "ਮੇਨ ਲਾਈਨ ਦੀ ਰੁਕਾਵਟ, ਜੜ੍ਹਾਂ ਅਤੇ ਸੀਵਰ ਬੈਕਅੱਪ ਦਾ ਪੱਕਾ ਹੱਲ।"],
    ["ਕੈਮਰਾ ਇੰਸਪੈਕਸ਼ਨ (Camera inspection)", "ਕੋਈ ਵੀ ਮੁਰੰਮਤ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਪਾਈਪ ਦੇ ਅੰਦਰ ਕੈਮਰੇ ਨਾਲ ਜਾਂਚ।"],
    ["ਹਾਈਡਰੋ-ਜੈੱਟਿੰਗ (Hydro-jetting)", "ਗਰੀਸ ਅਤੇ ਜੜ੍ਹਾਂ ਨੂੰ ਹਟਾਉਣ ਲਈ ਤੇਜ਼ ਪ੍ਰੈਸ਼ਰ ਵਾਲੀ ਪਾਣੀ ਦੀ ਸਫ਼ਾਈ।"],
    ["ਵਾਟਰ ਹੀਟਰ (Water heaters)", "ਟੈਂਕ ਅਤੇ ਟੈਂਕਲੈੱਸ ਵਾਟਰ ਹੀਟਰਾਂ ਦੀ ਮੁਰੰਮਤ ਅਤੇ ਨਵਾਂ ਲਗਾਉਣਾ।"],
    ["ਲੀਕ ਡਿਟੈਕਸ਼ਨ ਅਤੇ ਮੁਰੰਮਤ (Leak detection)", "ਪਾਈਪਾਂ, ਸਪਲਾਈ ਲਾਈਨਾਂ, ਸਿੰਕ ਹੇਠਾਂ ਅਤੇ ਸਲੈਬ ਲੀਕ ਦਾ ਪਤਾ ਲਗਾਉਣਾ।"],
    ["ਗੈਸ ਲਾਈਨਾਂ (Gas lines)", "ਗੈਸ ਲਾਈਨ ਦੀ ਮੁਰੰਮਤ ਅਤੇ ਘਰੇਲੂ ਉਪਕਰਣਾਂ ਦਾ ਸੁਰੱਖਿਅਤ ਕੁਨੈਕਸ਼ਨ।"],
    ["ਫਿਕਸਚਰ (Fixtures)", "ਟੂਟੀਆਂ, ਟਾਇਲਟ, ਕੂੜਾ ਡਿਸਪੋਜ਼ਲ, ਬਾਹਰੀ ਟੂਟੀਆਂ ਅਤੇ ਸ਼ੱਟ-ਆਫ ਵਾਲਵ।"]
  ]
};

export const PRICES: Record<Language, [string, string][]> = {
  en: [
    ["Home Safety Inspection (14-point)", "FREE"],
    ["Service call / diagnosis", "$XX – $XX (example)"],
    ["Clear a sink or tub drain", "$XXX – $XXX (example)"],
    ["Main line clearing", "$XXX – $XXX (example)"],
    ["Camera inspection", "$XXX (example)"],
    ["Water heater replacement", "$X,XXX – $X,XXX (example)"]
  ],
  es: [
    ["Inspección de seguridad (14 puntos)", "GRATIS"],
    ["Visita / diagnóstico", "$XX – $XX (ejemplo)"],
    ["Destapar fregadero o tina", "$XXX – $XXX (ejemplo)"],
    ["Destapar línea principal", "$XXX – $XXX (ejemplo)"],
    ["Inspección con cámara", "$XXX (ejemplo)"],
    ["Reemplazo de calentador", "$X,XXX – $X,XXX (ejemplo)"]
  ],
  pa: [
    ["ਹੋਮ ਸੇਫਟੀ ਇੰਸਪੈਕਸ਼ਨ (14 ਨੁਕਾਤੀ)", "ਮੁਫ਼ਤ (FREE)"],
    ["ਸੇਵਾ ਕਾਲ / ਜਾਂਚ (Service call)", "$XX – $XX (ਉਦਾਹਰਨ)"],
    ["ਸਿੰਕ ਜਾਂ ਟੱਬ ਡਰੇਨ ਖੋਲ੍ਹਣਾ", "$XXX – $XXX (ਉਦਾਹਰਨ)"],
    ["ਮੇਨ ਲਾਈਨ ਦੀ ਸਫ਼ਾਈ", "$XXX – $XXX (ਉਦਾਹਰਨ)"],
    ["ਕੈਮਰਾ ਇੰਸਪੈਕਸ਼ਨ", "$XXX (ਉਦਾਹਰਨ)"],
    ["ਵਾਟਰ ਹੀਟਰ ਬਦਲਣਾ", "$X,XXX – $X,XXX (ਉਦਾਹਰਨ)"]
  ]
};

export const CITIES = [
  "Turlock",
  "Modesto",
  "Ceres",
  "Keyes",
  "Denair",
  "Hughson",
  "Delhi",
  "Livingston",
  "Atwater",
  "Merced"
];

export const NEED: Record<Language, string[]> = {
  en: [
    "Free home safety inspection",
    "Clogged drain",
    "Main / sewer line",
    "Water heater",
    "Leak",
    "Gas line",
    "Fixture install/repair",
    "Realtor / landlord package",
    "Other"
  ],
  es: [
    "Inspección de seguridad gratis",
    "Drenaje tapado",
    "Línea principal / drenaje",
    "Calentador de agua",
    "Fuga",
    "Línea de gas",
    "Instalar/reparar accesorio",
    "Paquete para agentes / propietarios",
    "Otro"
  ],
  pa: [
    "ਮੁਫ਼ਤ ਹੋਮ ਸੇਫਟੀ ਇੰਸਪੈਕਸ਼ਨ (Free inspection)",
    "ਬੰਦ ਡਰੇਨ (Clogged drain)",
    "ਮੇਨ / ਸੀਵਰ ਲਾਈਨ (Main / sewer line)",
    "ਵਾਟਰ ਹੀਟਰ (Water heater)",
    "ਲੀਕੇਜ (Leak)",
    "ਗੈਸ ਲਾਈਨ (Gas line)",
    "ਫਿਕਸਚਰ ਲਗਾਉਣਾ/ਮੁਰੰਮਤ (Fixture install/repair)",
    "ਰੀਅਲਟਰ / ਮਕਾਨ ਮਾਲਕ ਪੈਕੇਜ (Realtor / landlord)",
    "ਹੋਰ (Other)"
  ]
};

export const TRANSLATIONS = {
  en: {
    tag: "FAST. CLEAN. RELIABLE.",
    n1: "Free inspection",
    n2: "Services",
    n3: "Prices",
    n4: "Your plumber",
    n5: "Service area",
    n6: "Realtors & landlords",
    hk: "Residential plumbing specialists · Stanislaus County",
    h1: "Drains, mains & water heaters — done ",
    h1Em: "right the first time.",
    hlPre: "Book a ",
    hlBold: "FREE 14-point Home Safety Inspection",
    hlPost: ". We'll catch small problems before they become costly repairs — and you choose what gets fixed. No pressure.",
    call: "Call 209-779-7300",
    text: "Text Justin 24/7 (Day or Night)",
    book: "Request free inspection",
    t1: "✓ Upfront price before work starts",
    t2: "✓ Text Justin 24/7 — fast emergency response",
    t3: "✓ Se habla español · ਪੰਜਾਬੀ ਬੋਲਦੇ ਹਾਂ",
    t4: "✓ Clean homes. Healthy families.",
    ik: "Peace of mind starts here",
    ih: "Free 14-Point Home Safety Inspection",
    ip: "We walk your home's plumbing and give you a written checklist report. Nothing is replaced without your OK.",
    ilink: "See the printable inspection report →",
    fh: "Request your free inspection or a quote",
    fn: "Name",
    fp: "Mobile phone",
    fc: "City",
    fneed: "What do you need?",
    fw: "Best time to reach you",
    w1: "As soon as possible",
    w2: "Morning",
    w3: "Afternoon",
    w4: "Evening",
    fnotes: "Details (optional)",
    consent: "Yes, Full Flow Mains and Drains may text me at this number about my request (appointment and \"on my way\" messages). Consent isn't required to get service. Msg & data rates may apply. Reply STOP to opt out, HELP for help.",
    priv: "We use your info only to contact you about this request. We never sell it.",
    privLink: "Privacy policy",
    send: "Send request",
    sh: "Services",
    ph: "Straight answers on price",
    phx: "EXAMPLE PRICES — NOT FINAL.",
    phx2: "These placeholder ranges are for layout only and must be confirmed by Justin before going public. Your exact price is always quoted in writing before work starts.",
    pt1: "Job",
    pt2: "Example range (to confirm)",
    fih: "Financing",
    fix: "PLACEHOLDER.",
    fix2: "Monthly payment options for bigger jobs (water heaters, sewer lines) — financing partner not chosen yet. Nothing is offered until a partner and its required terms are added.",
    mh: "Meet your plumber",
    mrole: "Owner · Full Flow Mains and Drains · Turlock",
    mbio: "You'll deal with me directly — the same person who answers your call shows up at your door, explains what I find, and quotes the price before I start.",
    lic: "License # coming.",
    lic2: "Placeholder photo and bio — to be replaced and confirmed by Justin.",
    g1h: "Our written promise",
    phd: "PLACEHOLDER",
    g1: "guarantee terms (workmanship warranty length) to be set by Justin.",
    g2h: "\"On my way\" text",
    g2: "You'll get a text before I head over, with an arrival window — no waiting around, no surprise knocks.",
    g3h: "Clean work",
    g3: "Shoe covers, drop cloths, and I clean up before I leave. Clean homes. Healthy families.",
    ah: "Service area",
    ap: "Stanislaus County & surrounding areas:",
    rh: "Realtors & landlords: pre-sale / move-in inspection package",
    rp: "The same 14-point checklist, with a printable report for your listing, escrow, or rental file. Ask about inspections for multiple units.",
    rb: "Text about the package",
    refh: "Refer a neighbor",
    refp: "Know someone with a slow drain or old water heater? Send them our way.",
    refx: "referral reward amount to be set by Justin.",
    refq: "Printable referral / QR cards →",
    revh: "Reviews",
    revp: "Happy with the work? A short review helps a small local business a lot.",
    revx: "Google review link coming. No reviews are shown until real ones exist.",
    fta: "Residential plumbing specialists serving Stanislaus County & surrounding areas",
    pl: "Privacy",
    il: "Inspection report",
    cs: "Call",
    ts: "Text"
  },
  es: {
    tag: "RÁPIDO. LIMPIO. CONFIABLE.",
    n1: "Inspección gratis",
    n2: "Servicios",
    n3: "Precios",
    n4: "Su plomero",
    n5: "Área de servicio",
    n6: "Agentes y propietarios",
    hk: "Especialistas en plomería residencial · Condado de Stanislaus",
    h1: "Drenajes, líneas principales y calentadores — ",
    h1Em: "bien hecho a la primera.",
    hlPre: "Pida una ",
    hlBold: "INSPECCIÓN DE SEGURIDAD GRATIS de 14 puntos",
    hlPost: ". Detectamos problemas pequeños antes de que sean reparaciones costosas — y usted decide qué se arregla. Sin presión.",
    call: "Llamar 209-779-7300",
    text: "Mande texto 24/7 (Día o Noche)",
    book: "Pedir inspección gratis",
    t1: "✓ Precio por adelantado antes de trabajar",
    t2: "✓ Texto a Justin 24/7 — respuesta rápida",
    t3: "✓ Se habla español · ਪੰਜਾਬੀ ਬੋਲਦੇ ਹਾਂ",
    t4: "✓ Hogares limpios. Familias sanas.",
    ik: "La tranquilidad empieza aquí",
    ih: "Inspección de Seguridad del Hogar GRATIS de 14 puntos",
    ip: "Revisamos la plomería de su casa y le damos un reporte escrito. No se reemplaza nada sin su permiso.",
    ilink: "Ver el reporte de inspección imprimible →",
    fh: "Pida su inspección gratis o un presupuesto",
    fn: "Nombre",
    fp: "Teléfono celular",
    fc: "Ciudad",
    fneed: "¿Qué necesita?",
    fw: "Mejor hora para contactarle",
    w1: "Lo antes posible",
    w2: "Mañana",
    w3: "Tarde",
    w4: "Noche",
    fnotes: "Detalles (opcional)",
    consent: "Sí, Full Flow Mains and Drains puede enviarme mensajes de texto a este número sobre mi solicitud (citas y avisos de \"voy en camino\"). No es necesario aceptar para recibir servicio. Pueden aplicar tarifas de mensajes y datos. Responda STOP para cancelar, HELP para ayuda.",
    priv: "Usamos sus datos solo para contactarle sobre esta solicitud. Nunca los vendemos.",
    privLink: "Política de privacidad",
    send: "Enviar solicitud",
    sh: "Servicios",
    ph: "Precios claros",
    phx: "PRECIOS DE EJEMPLO — NO FINALES.",
    phx2: "Estos rangos son solo para el diseño y Justin debe confirmarlos antes de publicarlos. Su precio exacto siempre se da por escrito antes de empezar.",
    pt1: "Trabajo",
    pt2: "Rango de ejemplo (por confirmar)",
    fih: "Financiamiento",
    fix: "PENDIENTE.",
    fix2: "Pagos mensuales para trabajos grandes — aún no se ha elegido un socio de financiamiento. No se ofrece nada hasta agregar el socio y sus términos requeridos.",
    mh: "Conozca a su plomero",
    mrole: "Dueño · Full Flow Mains and Drains · Turlock",
    mbio: "Usted trata conmigo directamente — la misma persona que contesta su llamada llega a su puerta, le explica lo que encuentra y le da el precio antes de empezar.",
    lic: "Licencia # próximamente.",
    lic2: "Foto y biografía provisionales — Justin las reemplazará y confirmará.",
    g1h: "Nuestra promesa por escrito",
    phd: "PENDIENTE",
    g1: "términos de garantía (duración de la garantía de mano de obra) por definir.",
    g2h: "Texto de \"voy en camino\"",
    g2: "Recibirá un texto antes de que salga, con una ventana de llegada — sin esperar, sin sorpresas.",
    g3h: "Trabajo limpio",
    g3: "Cubrezapatos, lonas, y limpio antes de irme. Hogares limpios. Familias sanas.",
    ah: "Área de servicio",
    ap: "Condado de Stanislaus y alrededores:",
    rh: "Agentes y propietarios: paquete de inspección para venta / mudanza",
    rp: "La misma lista de 14 puntos, con reporte imprimible para su listado, escrow o archivo de renta. Pregunte por inspecciones de varias unidades.",
    rb: "Texto sobre el paquete",
    refh: "Recomiende a un vecino",
    refp: "¿Conoce a alguien con un drenaje lento o un calentador viejo? Envíenoslo.",
    refx: "monto de la recompensa por definir.",
    refq: "Tarjetas de recomendación / QR imprimibles →",
    revh: "Reseñas",
    revp: "¿Quedó contento? Una reseña corta ayuda mucho a un negocio local.",
    revx: "Enlace de reseñas de Google próximamente. No se muestran reseñas hasta que existan reales.",
    fta: "Especialistas en plomería residencial en el Condado de Stanislaus y alrededores",
    pl: "Privacidad",
    il: "Reporte de inspección",
    cs: "Llamar",
    ts: "Texto"
  },
  pa: {
    tag: "ਤੇਜ਼। ਸਾਫ਼। ਭਰੋਸੇਮੰਦ।",
    n1: "ਮੁਫ਼ਤ ਜਾਂਚ",
    n2: "ਸੇਵਾਵਾਂ",
    n3: "ਰੇਟ/ਕੀਮਤਾਂ",
    n4: "ਤੁਹਾਡਾ ਪਲੰਬਰ",
    n5: "ਸੇਵਾ ਖੇਤਰ",
    n6: "ਰੀਅਲਟਰ ਅਤੇ ਮਕਾਨ ਮਾਲਕ",
    hk: "ਰਿਹਾਇਸ਼ੀ ਪਲੰਬਿੰਗ ਮਾਹਿਰ · ਸਟੈਨਿਸਲੌਸ ਕਾਉਂਟੀ",
    h1: "ਡਰੇਨ, ਮੇਨ ਲਾਈਨ ਅਤੇ ਵਾਟਰ ਹੀਟਰ — ",
    h1Em: "ਪਹਿਲੀ ਵਾਰ ਹੀ ਸਹੀ ਕੰਮ।",
    hlPre: "ਬੁੱਕ ਕਰੋ ",
    hlBold: "ਮੁਫ਼ਤ 14-ਨੁਕਾਤੀ ਹੋਮ ਸੇਫਟੀ ਇੰਸਪੈਕਸ਼ਨ",
    hlPost: "। ਅਸੀਂ ਛੋਟੀਆਂ ਸਮੱਸਿਆਵਾਂ ਨੂੰ ਵੱਡੇ ਖਰਚੇ ਬਣਨ ਤੋਂ ਪਹਿਲਾਂ ਫੜਦੇ ਹਾਂ — ਅਤੇ ਤੁਸੀਂ ਫੈਸਲਾ ਕਰਦੇ ਹੋ ਕਿ ਕੀ ਠੀਕ ਕਰਨਾ ਹੈ। ਕੋਈ ਦਬਾਅ ਨਹੀਂ।",
    call: "ਕਾਲ ਕਰੋ 209-779-7300",
    text: "24/7 ਟੈਕਸਟ ਕਰੋ (ਦਿਨ-ਰਾਤ)",
    book: "ਮੁਫ਼ਤ ਜਾਂਚ ਲਈ ਬੇਨਤੀ ਕਰੋ",
    t1: "✓ ਕੰਮ ਸ਼ੁਰੂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਸਪਸ਼ਟ ਰੇਟ",
    t2: "✓ ਜਸਟਿਨ ਨੂੰ 24/7 ਟੈਕਸਟ ਕਰੋ — ਤੇਜ਼ ਜਵਾਬ",
    t3: "✓ ਪੰਜਾਬੀ ਬੋਲਦੇ ਹਾਂ · Se habla español",
    t4: "✓ ਸਾਫ਼ ਘਰ। ਤੰਦਰੁਸਤ ਪਰਿਵਾਰ।",
    ik: "ਮਨ ਦੀ ਸ਼ਾਂਤੀ ਇੱਥੋਂ ਸ਼ੁਰੂ ਹੁੰਦੀ ਹੈ",
    ih: "ਮੁਫ਼ਤ 14-ਨੁਕਾਤੀ ਹੋਮ ਸੇਫਟੀ ਇੰਸਪੈਕਸ਼ਨ",
    ip: "ਅਸੀਂ ਤੁਹਾਡੇ ਘਰ ਦੀ ਪਲੰਬਿੰਗ ਦੀ ਜਾਂਚ ਕਰਦੇ ਹਾਂ ਅਤੇ ਤੁਹਾਨੂੰ ਲਿਖਤੀ ਰਿਪੋਰਟ ਦਿੰਦੇ ਹਾਂ। ਤੁਹਾਡੀ ਮਨਜ਼ੂਰੀ ਤੋਂ ਬਿਨਾਂ ਕੁਝ ਵੀ ਨਹੀਂ ਬਦਲਿਆ ਜਾਂਦਾ।",
    ilink: "ਪ੍ਰਿੰਟ ਕਰਨ ਯੋਗ ਇੰਸਪੈਕਸ਼ਨ ਰਿਪੋਰਟ ਦੇਖੋ →",
    fh: "ਆਪਣੀ ਮੁਫ਼ਤ ਜਾਂਚ ਜਾਂ ਕੋਟੇਸ਼ਨ ਲਈ ਬੇਨਤੀ ਕਰੋ",
    fn: "ਨਾਮ",
    fp: "ਮੋਬਾਈਲ ਫ਼ੋਨ",
    fc: "ਸ਼ਹਿਰ",
    fneed: "ਤੁਹਾਨੂੰ ਕੀ ਚਾਹੀਦਾ ਹੈ?",
    fw: "ਸੰਪਰਕ ਕਰਨ ਦਾ ਸਭ ਤੋਂ ਵਧੀਆ ਸਮਾਂ",
    w1: "ਜਿੰਨੀ ਜਲਦੀ ਹੋ ਸਕੇ",
    w2: "ਸਵੇਰੇ",
    w3: "ਦੁਪਹਿਰ",
    w4: "ਸ਼ਾਮ",
    fnotes: "ਵੇਰਵੇ (ਵਿਕਲਪਿਕ)",
    consent: "ਹਾਂ, ਫੁੱਲ ਫਲੋ ਮੇਨਜ਼ ਐਂਡ ਡਰੇਨਜ਼ ਮੇਰੀ ਬੇਨਤੀ (ਮੁਲਾਕਾਤ ਅਤੇ \"ਰਸਤੇ ਵਿੱਚ ਹਾਂ\" ਸੁਨੇਹੇ) ਬਾਰੇ ਇਸ ਨੰਬਰ 'ਤੇ ਟੈਕਸਟ ਮੈਸੇਜ ਭੇਜ ਸਕਦਾ ਹੈ। ਸੇਵਾ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਸਹਿਮਤੀ ਲਾਜ਼ਮੀ ਨਹੀਂ ਹੈ। ਮੈਸੇਜ ਅਤੇ ਡਾਟਾ ਦਰਾਂ ਲਾਗੂ ਹੋ ਸਕਦੀਆਂ ਹਨ। ਰੱਦ ਕਰਨ ਲਈ STOP ਜਾਂ ਮਦਦ ਲਈ HELP ਭੇਜੋ।",
    priv: "ਅਸੀਂ ਤੁਹਾਡੀ ਜਾਣਕਾਰੀ ਸਿਰਫ਼ ਇਸ ਬੇਨਤੀ ਬਾਰੇ ਸੰਪਰਕ ਕਰਨ ਲਈ ਵਰਤਦੇ ਹਾਂ। ਅਸੀਂ ਇਸਨੂੰ ਕਦੇ ਨਹੀਂ ਵੇਚਦੇ।",
    privLink: "ਪ੍ਰਾਈਵੇਸੀ ਪਾਲਿਸੀ",
    send: "ਬੇਨਤੀ ਭੇਜੋ",
    sh: "ਸੇਵਾਵਾਂ",
    ph: "ਕੀਮਤਾਂ ਬਾਰੇ ਸਾਫ਼ ਜਾਣਕਾਰੀ",
    phx: "ਉਦਾਹਰਨ ਕੀਮਤਾਂ — ਅੰਤਿਮ ਨਹੀਂ।",
    phx2: "ਇਹ ਰੇਂਜਾਂ ਸਿਰਫ਼ ਲੇਆਉਟ ਲਈ ਹਨ ਅਤੇ ਜਸਟਿਨ ਦੁਆਰਾ ਪੁਸ਼ਟੀ ਕੀਤੀ ਜਾਣੀ ਹੈ। ਕੰਮ ਸ਼ੁਰੂ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਤੁਹਾਡੀ ਸਹੀ ਕੀਮਤ ਹਮੇਸ਼ਾ ਲਿਖਤੀ ਰੂਪ ਵਿੱਚ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ।",
    pt1: "ਕੰਮ",
    pt2: "ਉਦਾਹਰਨ ਰੇਂਜ (ਪੁਸ਼ਟੀ ਲਈ)",
    fih: "ਵਿੱਤੀ ਸਹਾਇਤਾ (Financing)",
    fix: "ਬਕਾਇਆ।",
    fix2: "ਵੱਡੇ ਕੰਮਾਂ ਲਈ ਮਾਸਿਕ ਕਿਸ਼ਤ ਵਿਕਲਪ — ਫਾਈਨੈਂਸਿੰਗ ਪਾਰਟਨਰ ਦੀ ਚੋਣ ਅਜੇ ਬਾਕੀ ਹੈ।",
    mh: "ਆਪਣੇ ਪਲੰਬਰ ਨੂੰ ਮਿਲੋ",
    mrole: "ਮਾਲਕ · Full Flow Mains and Drains · ਟਰਲੌਕ (Turlock)",
    mbio: "ਤੁਸੀਂ ਸਿੱਧਾ ਮੇਰੇ ਨਾਲ ਗੱਲ ਕਰੋਗੇ — ਉਹੀ ਵਿਅਕਤੀ ਜੋ ਤੁਹਾਡੀ ਕਾਲ ਚੁੱਕਦਾ ਹੈ, ਉਹ ਤੁਹਾਡੇ ਦਰਵਾਜ਼ੇ 'ਤੇ ਆਉਂਦਾ ਹੈ, ਜਾਂਚ ਸਮਝਾਉਂਦਾ ਹੈ ਅਤੇ ਕੰਮ ਸ਼ੁਰੂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਕੀਮਤ ਦੱਸਦਾ ਹੈ।",
    lic: "ਲਾਇਸੈਂਸ # ਜਲਦੀ ਆ ਰਿਹਾ ਹੈ।",
    lic2: "ਜਸਟਿਨ ਦੁਆਰਾ ਪੁਸ਼ਟੀ ਕੀਤੀ ਜਾਵੇਗੀ।",
    g1h: "ਸਾਡਾ ਲਿਖਤੀ ਵਾਅਦਾ",
    phd: "ਬਕਾਇਆ",
    g1: "ਵਾਰੰਟੀ ਦੀ ਮਿਆਦ ਜਸਟਿਨ ਦੁਆਰਾ ਨਿਰਧਾਰਤ ਕੀਤੀ ਜਾਵੇਗੀ।",
    g2h: "\"ਮੈਂ ਆ ਰਿਹਾ ਹਾਂ\" ਸੁਨੇਹਾ",
    g2: "ਤੁਹਾਨੂੰ ਮੇਰੇ ਨਿਕਲਣ ਤੋਂ ਪਹਿਲਾਂ ਪਹੁੰਚਣ ਦੇ ਸਮੇਂ ਦਾ ਟੈਕਸਟ ਸੁਨੇਹਾ ਮਿਲੇਗਾ — ਬਿਨਾਂ ਕਿਸੇ ਉਡੀਕ ਜਾਂ ਅਚਾਨਕ ਦਸਤਕ ਦੇ।",
    g3h: "ਸਾਫ਼-ਸੁਥਰਾ ਕੰਮ",
    g3: "ਜੁੱਤੀਆਂ ਦੇ ਕਵਰ, ਡ੍ਰੌਪ ਕੱਪੜੇ, ਅਤੇ ਜਾਣ ਤੋਂ ਪਹਿਲਾਂ ਸਫ਼ਾਈ। ਸਾਫ਼ ਘਰ। ਤੰਦਰੁਸਤ ਪਰਿਵਾਰ।",
    ah: "ਸੇਵਾ ਖੇਤਰ",
    ap: "ਸਟੈਨਿਸਲੌਸ ਕਾਉਂਟੀ ਅਤੇ ਆਸ ਪਾਸ ਦੇ ਇਲਾਕੇ:",
    rh: "ਰੀਅਲਟਰ ਅਤੇ ਮਕਾਨ ਮਾਲਕ: ਵਿਕਰੀ ਤੋਂ ਪਹਿਲਾਂ / ਸ਼ਿਫਟਿੰਗ ਇੰਸਪੈਕਸ਼ਨ ਪੈਕੇਜ",
    rp: "ਉਹੀ 14-ਨੁਕਾਤੀ ਸੂਚੀ, ਤੁਹਾਡੀ ਲਿਸਟਿੰਗ, ਐਸਕਰੋ ਜਾਂ ਕਿਰਾਏ ਦੀ ਫਾਈਲ ਲਈ ਪ੍ਰਿੰਟ ਕਰਨ ਯੋਗ ਰਿਪੋਰਟ ਦੇ ਨਾਲ। ਮਲਟੀਪਲ ਯੂਨਿਟਾਂ ਲਈ ਪੁੱਛੋ।",
    rb: "ਪੈਕੇਜ ਬਾਰੇ ਟੈਕਸਟ ਕਰੋ",
    refh: "ਗੁਆਂਢੀ ਦੀ ਸਿਫਾਰਸ਼ ਕਰੋ",
    refp: "ਕਿਸੇ ਨੂੰ ਜਾਣਦੇ ਹੋ ਜਿਸਦਾ ਡਰੇਨ ਹੌਲੀ ਹੈ ਜਾਂ ਵਾਟਰ ਹੀਟਰ ਪੁਰਾਣਾ ਹੈ? ਸਾਨੂੰ ਦੱਸੋ।",
    refx: "ਇਨਾਮ ਦੀ ਰਕਮ ਜਲਦੀ ਤੈਅ ਕੀਤੀ ਜਾਵੇਗੀ।",
    refq: "ਪ੍ਰਿੰਟ ਕਰਨ ਯੋਗ ਰੈਫਰਲ / QR ਕਾਰਡ →",
    revh: "ਸਮੀਖਿਆਵਾਂ (Reviews)",
    revp: "ਕੰਮ ਤੋਂ ਖੁਸ਼ ਹੋ? ਇੱਕ ਛੋਟੀ ਸਮੀਖਿਆ ਸਥਾਨਕ ਕਾਰੋਬਾਰ ਦੀ ਬਹੁਤ ਮਦਦ ਕਰਦੀ ਹੈ।",
    revx: "ਗੂਗਲ ਰਿਵਿਊ ਲਿੰਕ ਜਲਦੀ ਆ ਰਿਹਾ ਹੈ।",
    fta: "ਸਟੈਨਿਸਲੌਸ ਕਾਉਂਟੀ ਅਤੇ ਆਸ-ਪਾਸ ਦੇ ਇਲਾਕਿਆਂ ਵਿੱਚ ਰਿਹਾਇਸ਼ੀ ਪਲੰਬਿੰਗ ਮਾਹਿਰ",
    pl: "ਪ੍ਰਾਈਵੇਸੀ",
    il: "ਇੰਸਪੈਕਸ਼ਨ ਰਿਪੋਰਟ",
    cs: "ਕਾਲ ਕਰੋ",
    ts: "ਟੈਕਸਟ"
  }
};

export const MSG = {
  en: {
    ok: "✅ Got it! Justin will call or text you soon.",
    bad: "Please enter your name and a 10-digit phone number.",
    fail: "Couldn't send online — tap Text us or call 209-779-7300."
  },
  es: {
    ok: "✅ ¡Recibido! Justin le llamará o enviará un texto pronto.",
    bad: "Escriba su nombre y un teléfono de 10 dígitos.",
    fail: "No se pudo enviar — toque Mándenos un texto o llame al 209-779-7300."
  },
  pa: {
    ok: "✅ ਮਿਲ ਗਿਆ! ਜਸਟਿਨ ਤੁਹਾਨੂੰ ਜਲਦੀ ਹੀ ਕਾਲ ਜਾਂ ਟੈਕਸਟ ਕਰੇਗਾ।",
    bad: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਨਾਮ ਅਤੇ 10-ਅੰਕਾਂ ਦਾ ਫ਼ੋਨ ਨੰਬਰ ਦਰਜ ਕਰੋ।",
    fail: "ਔਨਲਾਈਨ ਨਹੀਂ ਭੇਜਿਆ ਜਾ ਸਕਿਆ — ਟੈਕਸਟ ਕਰੋ ਜਾਂ 209-779-7300 'ਤੇ ਕਾਲ ਕਰੋ।"
  }
};

export interface FaqItem {
  q: string;
  a: string;
}

export const FAQ_DATA: Record<Language, { title: string; subtitle: string; items: FaqItem[] }> = {
  en: {
    title: "Frequently Asked Questions",
    subtitle: "Clear answers before anyone steps foot in your home.",
    items: [
      {
        q: "Is the 14-Point Home Safety Inspection really 100% free?",
        a: "Yes, completely free with zero catches and zero pressure. Justin performs a thorough 14-point visual and operational walkthrough of your home's plumbing, explains any findings in plain English, and provides a clear written report. You decide if and when you want anything fixed."
      },
      {
        q: "How fast can you respond to plumbing emergencies?",
        a: "We prioritize emergency calls (burst pipes, major sewage backups, gas smells, flooding). You will receive an 'On My Way' text with an accurate arrival window so you know exactly when Justin will pull up."
      },
      {
        q: "How do I shut off my main water valve in an emergency?",
        a: "In most Stanislaus County homes, your main shut-off is located outdoors on the pipe entering your front exterior wall (near the front hose spigot) or in a concrete meter box near the street sidewalk. Turning it clockwise (or perpendicular to the pipe) cuts water to the whole house immediately."
      },
      {
        q: "What if work needs to be done? Will there be surprise fees?",
        a: "Never. We believe in 100% upfront pricing quoted in writing before a single wrench is turned. Nothing is replaced or repaired without your explicit permission."
      },
      {
        q: "How do Realtors and Landlords use your inspection package?",
        a: "We provide printable, detailed checklist reports for escrow documentation, disclosure packets, or move-in/move-out rental files, with bulk unit rates available upon request."
      }
    ]
  },
  es: {
    title: "Preguntas Frecuentes",
    subtitle: "Respuestas claras antes de que entremos a su hogar.",
    items: [
      {
        q: "¿La Inspección de Seguridad de 14 puntos es realmente gratis?",
        a: "Sí, es 100% gratuita, sin compromisos ni presiones. Justin revisa minuciosamente la plomería de su casa, le entrega un reporte escrito y le explica todo claramente. Usted decide qué se repara y cuándo."
      },
      {
        q: "¿Qué tan rápido pueden llegar en emergencias?",
        a: "Damos prioridad a emergencias como tuberías rotas, desbordes de aguas negras o fugas mayores. Recibirá un mensaje de texto de 'Voy en camino' con la hora estimada de llegada."
      },
      {
        q: "¿Dónde está la llave de paso principal en caso de emergencia?",
        a: "En la mayoría de las casas del Condado de Stanislaus, está en la pared exterior frontal (junto a la llave de la manguera) o en la caja del medidor cerca de la banqueta. Al girarla en sentido horario o cruzada con el tubo se corta el agua de toda la casa."
      },
      {
        q: "¿Habrá cargos sorpresa si se requiere una reparación?",
        a: "Nunca. Entregamos presupuestos claros por escrito antes de empezar. No se hace ningún trabajo sin su autorización directa."
      },
      {
        q: "¿Cómo funciona el paquete para agentes inmobiliarios y dueños de renta?",
        a: "Emitimos reportes impresos completos para archivos de escrow, venta o contratos de arrendamiento, con tarifas especiales para inspección de múltiples unidades."
      }
    ]
  },
  pa: {
    title: "ਅਕਸਰ ਪੁੱਛੇ ਜਾਂਦੇ ਸਵਾਲ (FAQ)",
    subtitle: "ਤੁਹਾਡੇ ਘਰ ਕਦਮ ਰੱਖਣ ਤੋਂ ਪਹਿਲਾਂ ਸਪਸ਼ਟ ਜਵਾਬ।",
    items: [
      {
        q: "ਕੀ 14-ਨੁਕਾਤੀ ਹੋਮ ਸੇਫਟੀ ਇੰਸਪੈਕਸ਼ਨ ਸੱਚਮੁੱਚ 100% ਮੁਫ਼ਤ ਹੈ?",
        a: "ਹਾਂ, ਬਿਲਕੁਲ ਮੁਫ਼ਤ ਹੈ ਬਿਨਾਂ ਕਿਸੇ ਦਬਾਅ ਜਾਂ ਲੁਕਵੇਂ ਖਰਚੇ ਦੇ। ਜਸਟਿਨ ਤੁਹਾਡੇ ਘਰ ਦੀ ਪਲੰਬਿੰਗ ਦੀ ਪੂਰੀ ਜਾਂਚ ਕਰਦਾ ਹੈ, ਤੁਹਾਨੂੰ ਲਿਖਤੀ ਰਿਪੋਰਟ ਦਿੰਦਾ ਹੈ ਅਤੇ ਸਭ ਕੁਝ ਸਮਝਾਉਂਦਾ ਹੈ। ਤੁਸੀਂ ਖੁਦ ਫੈਸਲਾ ਕਰਦੇ ਹੋ ਕਿ ਕੀ ਠੀਕ ਕਰਵਾਉਣਾ ਹੈ।"
      },
      {
        q: "ਐਮਰਜੈਂਸੀ ਵਿੱਚ ਤੁਸੀਂ ਕਿੰਨੀ ਜਲਦੀ ਪਹੁੰਚ ਸਕਦੇ ਹੋ?",
        a: "ਅਸੀਂ ਐਮਰਜੈਂਸੀ ਕਾਲਾਂ (ਪਾਈਪ ਫਟਣਾ, ਸੀਵਰ ਬੈਕਅੱਪ, ਪਾਣੀ ਭਰਨਾ) ਨੂੰ ਪਹਿਲ ਦਿੰਦੇ ਹਾਂ। ਤੁਹਾਨੂੰ ਪਹੁੰਚਣ ਦੇ ਸਮੇਂ ਦੇ ਨਾਲ 'ਮੈਂ ਆ ਰਿਹਾ ਹਾਂ' ਦਾ ਟੈਕਸਟ ਸੁਨੇਹਾ ਮਿਲੇਗਾ।"
      },
      {
        q: "ਐਮਰਜੈਂਸੀ ਵਿੱਚ ਮੇਨ ਪਾਣੀ ਦਾ ਵਾਲਵ ਕਿਵੇਂ ਬੰਦ ਕਰਨਾ ਹੈ?",
        a: "ਸਟੈਨਿਸਲੌਸ ਕਾਉਂਟੀ ਦੇ ਜ਼ਿਆਦਾਤਰ ਘਰਾਂ ਵਿੱਚ, ਮੇਨ ਵਾਲਵ ਸਾਹਮਣੇ ਵਾਲੀ ਕੰਧ 'ਤੇ ਬਾਹਰੀ ਟੂਟੀ ਦੇ ਨੇੜੇ ਜਾਂ ਸੜਕ ਕੰਢੇ ਮੀਟਰ ਬਾਕਸ ਵਿੱਚ ਹੁੰਦਾ ਹੈ। ਇਸਨੂੰ ਘੜੀ ਦੀ ਦਿਸ਼ਾ ਵਿੱਚ ਘੁਮਾਉਣ ਨਾਲ ਪੂਰੇ ਘਰ ਦਾ ਪਾਣੀ ਤੁਰੰਤ ਬੰਦ ਹੋ ਜਾਂਦਾ ਹੈ।"
      },
      {
        q: "ਕੀ ਕੰਮ ਦੌਰਾਨ ਕੋਈ ਅਣਕਿਆਸੇ ਖਰਚੇ ਹੋਣਗੇ?",
        a: "ਬਿਲਕੁਲ ਨਹੀਂ। ਕੰਮ ਸ਼ੁਰੂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਲਿਖਤੀ ਰੂਪ ਵਿੱਚ ਪੂਰਾ ਰੇਟ ਦੱਸਿਆ ਜਾਂਦਾ ਹੈ। ਤੁਹਾਡੀ ਮਨਜ਼ੂਰੀ ਤੋਂ ਬਿਨਾਂ ਕੋਈ ਵੀ ਹਿੱਸਾ ਨਹੀਂ ਬਦਲਿਆ ਜਾਂਦਾ।"
      },
      {
        q: "ਰੀਅਲਟਰਾਂ ਅਤੇ ਮਕਾਨ ਮਾਲਕਾਂ ਲਈ ਇੰਸਪੈਕਸ਼ਨ ਕਿਵੇਂ ਮਦਦ ਕਰਦੀ ਹੈ?",
        a: "ਅਸੀਂ ਐਸਕਰੋ ਅਤੇ ਕਿਰਾਏ ਦੀਆਂ ਫਾਈਲਾਂ ਲਈ ਪ੍ਰਿੰਟ ਕਰਨ ਯੋਗ ਵਿਸਤ੍ਰਿਤ ਰਿਪੋਰਟਾਂ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਾਂ। ਮਲਟੀਪਲ ਯੂਨਿਟਾਂ ਲਈ ਵਿਸ਼ੇਸ਼ ਪੈਕੇਜ ਉਪਲਬਧ ਹਨ।"
      }
    ]
  }
};

export interface DiagnosticItem {
  id: string;
  symptom: string;
  urgency: 'high' | 'medium' | 'low';
  quickTip: string;
  whatJustinDoes: string;
  serviceNeed: string;
}

export const DIAGNOSTIC_DATA: Record<Language, { title: string; subtitle: string; items: DiagnosticItem[] }> = {
  en: {
    title: "Plumbing Problem Diagnostic Helper",
    subtitle: "Select your issue below for immediate DIY checks and what we inspect.",
    items: [
      {
        id: "drain",
        symptom: "Slow, gurgling, or clogged drain",
        urgency: "medium",
        quickTip: "Avoid pouring chemical liquid drain openers into older pipes. Stop water flow to prevent overflow onto cabinetry.",
        whatJustinDoes: "Video camera check & mechanical auger or hydro-jetting to clear grease and tree roots completely.",
        serviceNeed: "Clogged drain"
      },
      {
        id: "heater",
        symptom: "No hot water, lukewarm water, or tank leaking",
        urgency: "high",
        quickTip: "If water pools around tank bottom, turn off water inlet and electrical breaker/gas knob immediately.",
        whatJustinDoes: "Checks burner, heating elements, anode rod, relief valve, and thermostat; repairs or replaces same-day.",
        serviceNeed: "Water heater"
      },
      {
        id: "toilet",
        symptom: "Toilet keeps running, bubbles, or phantom flushes",
        urgency: "medium",
        quickTip: "Shut the chrome valve behind the bowl to prevent continuous wasting of thousands of gallons of water.",
        whatJustinDoes: "Replaces worn flappers, fill valves, wax seal rings, and clears downstream vent or line blocks.",
        serviceNeed: "Fixture install/repair"
      },
      {
        id: "burst",
        symptom: "Active leak, pipe burst, or low whole-house pressure",
        urgency: "high",
        quickTip: "Shut your main water valve right away (front hose bib or curb meter box) and open exterior faucets to relieve pressure.",
        whatJustinDoes: "Pinpoints hidden supply pipe cracks, slab leaks, pinholes, and repairs with durable copper/PEX fittings.",
        serviceNeed: "Leak"
      }
    ]
  },
  es: {
    title: "Guía de Diagnóstico de Plomería",
    subtitle: "Seleccione su problema para ver pasos inmediatos y cómo le ayudamos.",
    items: [
      {
        id: "drain",
        symptom: "Drenaje lento, con gorgoteo o totalmente tapado",
        urgency: "medium",
        quickTip: "Evite químicos corrosivos en tuberías viejas. Cierre el agua para evitar desbordes en gabinetes.",
        whatJustinDoes: "Inspección con cámara y desazolve mecánico o hidro-jet para eliminar grasa y raíces.",
        serviceNeed: "Drenaje tapado"
      },
      {
        id: "heater",
        symptom: "Sin agua caliente o fuga en el calentador",
        urgency: "high",
        quickTip: "Si hay fuga en la base, cierre la llave de agua fría y apague el gas o cortador eléctrico de inmediato.",
        whatJustinDoes: "Revisión de termostato, quemador, ánodo y válvula de alivio; reparación o reemplazo el mismo día.",
        serviceNeed: "Calentador de agua"
      },
      {
        id: "toilet",
        symptom: "El inodoro corre sin parar o burbujea",
        urgency: "medium",
        quickTip: "Cierre la llave de paso detrás de la taza para no desperdiciar miles de galones de agua.",
        whatJustinDoes: "Reemplazo de sapito, válvula de llenado, sello de cera y limpieza del ducto de ventilación.",
        serviceNeed: "Instalar/reparar accesorio"
      },
      {
        id: "burst",
        symptom: "Fuga activa, tubería rota o baja presión total",
        urgency: "high",
        quickTip: "Cierre la llave principal de la casa de inmediato y abra las llaves exteriores para drenar la presión.",
        whatJustinDoes: "Detección exacta de fugas ocultas o en losa y reparación garantizada con tubería de cobre o PEX.",
        serviceNeed: "Fuga"
      }
    ]
  },
  pa: {
    title: "ਪਲੰਬਿੰਗ ਸਮੱਸਿਆ ਜਾਂਚ ਸਹਾਇਕ",
    subtitle: "ਤੁਰੰਤ ਸੁਰੱਖਿਆ ਸੁਝਾਅ ਅਤੇ ਜਾਂਚ ਦੇ ਤਰੀਕੇ ਦੇਖਣ ਲਈ ਹੇਠਾਂ ਦਿੱਤੀ ਸਮੱਸਿਆ ਚੁਣੋ।",
    items: [
      {
        id: "drain",
        symptom: "ਹੌਲੀ, ਆਵਾਜ਼ ਕਰਨ ਵਾਲਾ ਜਾਂ ਬੰਦ ਡਰੇਨ",
        urgency: "medium",
        quickTip: "ਪੁਰਾਣੀਆਂ ਪਾਈਪਾਂ ਵਿੱਚ ਤੇਜ਼ਾਬੀ ਕੈਮੀਕਲ ਨਾ ਪਾਓ। ਕੈਬਿਨੇਟਾਂ ਨੂੰ ਨੁਕਸਾਨ ਤੋਂ ਬਚਾਉਣ ਲਈ ਪਾਣੀ ਬੰਦ ਕਰੋ।",
        whatJustinDoes: "ਕੈਮਰਾ ਇੰਸਪੈਕਸ਼ਨ ਅਤੇ ਗਰੀਸ ਜਾਂ ਜੜ੍ਹਾਂ ਨੂੰ ਪੂਰੀ ਤਰ੍ਹਾਂ ਹਟਾਉਣ ਲਈ ਹਾਈਡਰੋ-ਜੈੱਟਿੰਗ।",
        serviceNeed: "ਬੰਦ ਡਰੇਨ (Clogged drain)"
      },
      {
        id: "heater",
        symptom: "ਗਰਮ ਪਾਣੀ ਨਹੀਂ ਆ ਰਿਹਾ ਜਾਂ ਹੀਟਰ 'ਚੋਂ ਪਾਣੀ ਲੀਕ ਹੋ ਰਿਹਾ ਹੈ",
        urgency: "high",
        quickTip: "ਜੇਕਰ ਹੀਟਰ ਦੇ ਹੇਠਾਂ ਪਾਣੀ ਭਰਦਾ ਹੈ, ਤਾਂ ਤੁਰੰਤ ਪਾਣੀ ਦਾ ਵਾਲਵ ਅਤੇ ਗੈਸ/ਬਿਜਲੀ ਦਾ ਸਵਿੱਚ ਬੰਦ ਕਰੋ।",
        whatJustinDoes: "ਬਰਨਰ, ਥਰਮੋਸਟੈਟ ਅਤੇ ਸੁਰੱਖਿਆ ਵਾਲਵ ਦੀ ਜਾਂਚ; ਉਸੇ ਦਿਨ ਮੁਰੰਮਤ ਜਾਂ ਨਵਾਂ ਲਗਾਉਣਾ।",
        serviceNeed: "ਵਾਟਰ ਹੀਟਰ (Water heater)"
      },
      {
        id: "toilet",
        symptom: "ਟਾਇਲਟ ਲਗਾਤਾਰ ਚੱਲਦਾ ਰਹਿੰਦਾ ਹੈ ਜਾਂ ਪਾਣੀ ਉੱਛਲਦਾ ਹੈ",
        urgency: "medium",
        quickTip: "ਹਜ਼ਾਰਾਂ ਗੈਲਨ ਪਾਣੀ ਦੀ ਬਰਬਾਦੀ ਨੂੰ ਰੋਕਣ ਲਈ ਟਾਇਲਟ ਦੇ ਪਿੱਛੇ ਵਾਲਵ ਨੂੰ ਬੰਦ ਕਰੋ।",
        whatJustinDoes: "ਫਲੈਪਰ, ਫਿਲ ਵਾਲਵ, ਵੈਕਸ ਸੀਲ ਬਦਲਣਾ ਅਤੇ ਲਾਈਨ ਵਿੱਚ ਰੁਕਾਵਟ ਨੂੰ ਸਾਫ਼ ਕਰਨਾ।",
        serviceNeed: "ਫਿਕਸਚਰ ਲਗਾਉਣਾ/ਮੁਰੰਮਤ"
      },
      {
        id: "burst",
        symptom: "ਪਾਈਪ ਫਟਣਾ, ਲੀਕੇਜ ਜਾਂ ਪੂਰੇ ਘਰ ਵਿੱਚ ਘੱਟ ਪਾਣੀ ਪ੍ਰੈਸ਼ਰ",
        urgency: "high",
        quickTip: "ਤੁਰੰਤ ਘਰ ਦਾ ਮੇਨ ਪਾਣੀ ਵਾਲਵ ਬੰਦ ਕਰੋ ਅਤੇ ਪ੍ਰੈਸ਼ਰ ਘਟਾਉਣ ਲਈ ਬਾਹਰੀ ਟੂਟੀਆਂ ਖੋਲ੍ਹੋ।",
        whatJustinDoes: "ਜ਼ਮੀਨਦੋਜ਼ ਜਾਂ ਲੁਕੀਆਂ ਲੀਕੇਜਾਂ ਨੂੰ ਲੱਭਣਾ ਅਤੇ ਪੱਕੀ ਕਾਪਰ/PEX ਫਿਟਿੰਗ ਨਾਲ ਮੁਰੰਮਤ ਕਰਨਾ।",
        serviceNeed: "ਲੀਕੇਜ (Leak)"
      }
    ]
  }
};

export const CHATBOT_CONFIG: Record<Language, {
  name: string;
  badge: string;
  greeting: string;
  placeholder: string;
  callLabel: string;
  textLabel: string;
  bookLabel: string;
  prompts: string[];
  disclaimer: string;
}> = {
  en: {
    name: "Flowie AI Assistant",
    badge: "Full Flow Mains & Drains",
    greeting: "Hi there! I'm Flowie, Justin Moreno's AI plumbing assistant. 🚨 Need help? You can text or call Justin directly at 209-779-7300 at ALL hours — 24/7 emergency service, even late at night! How can I help you right now?",
    placeholder: "Ask a plumbing question or request info...",
    callLabel: "Call 209-779-7300",
    textLabel: "💬 Text Justin 24/7: 209-779-7300",
    bookLabel: "Book Free Inspection",
    prompts: [
      "Text Justin right now (24/7)",
      "How do I shut off my main water valve?",
      "What is included in the 14-point inspection?",
      "How much does a drain cleaning cost?"
    ],
    disclaimer: "Powered by Gemini 3.8 Flash · Text Justin 24/7 at 209-779-7300 · All jobs quoted in writing."
  },
  es: {
    name: "Asistente AI Flowie",
    badge: "Full Flow Mains & Drains",
    greeting: "¡Hola! Soy Flowie, el asistente de Justin Moreno en Full Flow Mains & Drains. 🚨 ¿Necesita ayuda? ¡Puede enviar un texto o llamar a Justin directamente al 209-779-7300 a TODAS horas — servicio 24/7, incluso de noche! ¿En qué le puedo servir hoy?",
    placeholder: "Escriba su pregunta de plomería...",
    callLabel: "Llamar 209-779-7300",
    textLabel: "💬 Texto 24/7 a Justin: 209-779-7300",
    bookLabel: "Pedir Inspección Gratis",
    prompts: [
      "Mandar texto a Justin ahora (24/7)",
      "¿Cómo cierro la llave principal de agua?",
      "¿Qué incluye la inspección de 14 puntos?",
      "¿Cuánto cuesta destapar un drenaje?"
    ],
    disclaimer: "Con tecnología Gemini 3.8 Flash · Mande texto 24/7 al 209-779-7300 · Presupuesto por escrito."
  },
  pa: {
    name: "ਫਲੋਈ ਏਆਈ ਸਹਾਇਕ (Flowie AI)",
    badge: "Full Flow Mains & Drains",
    greeting: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਫਲੋਈ ਹਾਂ, Full Flow Mains & Drains 'ਤੇ ਜਸਟਿਨ ਮੋਰੇਨੋ ਦਾ ਏਆਈ ਸਹਾਇਕ। 🚨 ਤੁਰੰਤ ਮਦਦ ਚਾਹੀਦੀ ਹੈ? ਤੁਸੀਂ ਜਸਟਿਨ ਨੂੰ 209-779-7300 'ਤੇ ਕਿਸੇ ਵੀ ਸਮੇਂ, ਰਾਤ ਨੂੰ ਵੀ 24/7 ਟੈਕਸਟ ਜਾਂ ਕਾਲ ਕਰ ਸਕਦੇ ਹੋ! ਅੱਜ ਮੈਂ ਤੁਹਾਡੀ ਕੀ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?",
    placeholder: "ਪਲੰਬਿੰਗ ਸਵਾਲ ਪੁੱਛੋ...",
    callLabel: "ਕਾਲ ਕਰੋ 209-779-7300",
    textLabel: "💬 ਜਸਟਿਨ ਨੂੰ 24/7 ਟੈਕਸਟ ਕਰੋ: 209-779-7300",
    bookLabel: "ਮੁਫ਼ਤ ਜਾਂਚ ਬੁੱਕ ਕਰੋ",
    prompts: [
      "ਜਸਟਿਨ ਨੂੰ ਹੁਣੇ ਟੈਕਸਟ ਕਰੋ (24/7)",
      "ਮੇਨ ਪਾਣੀ ਦਾ ਵਾਲਵ ਕਿਵੇਂ ਬੰਦ ਕਰੀਏ?",
      "14-ਨੁਕਾਤੀ ਜਾਂਚ ਵਿੱਚ ਕੀ-ਕੀ ਸ਼ਾਮਲ ਹੈ?",
      "ਡਰੇਨ ਸਾਫ਼ ਕਰਨ ਦਾ ਕਿੰਨਾ ਖਰਚਾ ਹੁੰਦਾ ਹੈ?"
    ],
    disclaimer: "Gemini 3.8 Flash ਦੁਆਰਾ ਸੰਚਾਲਿਤ · ਜਸਟਿਨ ਨੂੰ 24/7 ਟੈਕਸਟ ਕਰੋ: 209-779-7300 · ਲਿਖਤੀ ਕੀਮਤ।"
  }
};
