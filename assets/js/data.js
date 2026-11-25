/* ==========================================================================
   PERSPECTIVE SCT — BASE DE DATOS MAESTRA OFICIAL (EXTRAÍDA DE DOCUMENTO MAESTRO)
   Cero datos inventados que contradigan la Matriz de Planificación Corporativa.
   ========================================================================== */

window.PERSPECTIVE_DATA = {
  brand: {
    commercialName: "Perspective SCT",
    legalName: "Perspective SCT SA de CV",
    fiscalNote: "Operación fiscal activa con emisión CFDI 4.0 (PFAE en transición estructurada a S.A.P.I. de C.V.)",
    slogan: "Piensa en el futuro desde el presente",
    tagline: "MARKETING • PROGRAMACIÓN • 3D & ANIMACIÓN • APPS • WEB • ENTRETENIMIENTO",
    est: "EST. 2026",
    email: "omniiapps@gmail.com",
    region: "Corredor Industrial del Bajío (Guanajuato • León • Irapuato • Querétaro) & Nearshoring EE.UU. / Canadá",
    monthlyCapHours: 120
  },

  hourlyRates: {
    Desarrollo: 799,
    Diseno: 699,
    Estrategicas: 999
  },

  // Mascotas SVG personalizadas estilo Paranice x Cyber-Prism / Daft Punk / Art Deco
  mascotSVGs: {
    prismBot: `
      <svg viewBox="0 0 120 100" class="w-24 h-20 mx-auto drop-shadow-lg anim-mascot">
        <!-- Piernas colgando sobre la tarjeta como en Paranice -->
        <path d="M44 76 C42 88, 38 94, 34 94" stroke="#18123b" stroke-width="4.5" stroke-linecap="round" fill="none"/>
        <path d="M76 76 C78 88, 82 94, 86 94" stroke="#18123b" stroke-width="4.5" stroke-linecap="round" fill="none"/>
        <ellipse cx="32" cy="95" rx="6" ry="3.5" fill="#d4af37"/>
        <ellipse cx="88" cy="95" rx="6" ry="3.5" fill="#d4af37"/>
        <!-- Cuerpo Pirámide Prisma -->
        <polygon points="60,12 24,76 96,76" fill="url(#gradPrismBot)" stroke="#18123b" stroke-width="3.5" stroke-linejoin="round"/>
        <!-- Visor Daft Punk -->
        <rect x="41" y="44" width="38" height="16" rx="8" fill="#0d0b1a" stroke="#d4af37" stroke-width="2"/>
        <circle cx="52" cy="52" r="3.2" fill="#00f0ff" class="anim-blink"/>
        <circle cx="68" cy="52" r="3.2" fill="#ff2a85" class="anim-blink"/>
        <!-- Rayo arcoíris lateral -->
        <line x1="78" y1="38" x2="108" y2="24" stroke="#ff2a85" stroke-width="3" stroke-linecap="round"/>
        <line x1="80" y1="43" x2="110" y2="32" stroke="#fbbf24" stroke-width="3" stroke-linecap="round"/>
        <line x1="82" y1="48" x2="110" y2="40" stroke="#00f0ff" stroke-width="3" stroke-linecap="round"/>
        <defs>
          <linearGradient id="gradPrismBot" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#f6d365"/>
            <stop offset="55%" stop-color="#a78bfa"/>
            <stop offset="100%" stop-color="#38bdf8"/>
          </linearGradient>
        </defs>
      </svg>`,

    gearBot: `
      <svg viewBox="0 0 120 100" class="w-24 h-20 mx-auto drop-shadow-lg anim-mascot">
        <path d="M46 76 C44 88, 40 94, 35 94" stroke="#18123b" stroke-width="4.5" stroke-linecap="round" fill="none"/>
        <path d="M74 76 C76 88, 80 94, 85 94" stroke="#18123b" stroke-width="4.5" stroke-linecap="round" fill="none"/>
        <ellipse cx="33" cy="95" rx="6" ry="3.5" fill="#00f0ff"/>
        <ellipse cx="87" cy="95" rx="6" ry="3.5" fill="#00f0ff"/>
        <!-- Engranaje Dorado Carismático -->
        <circle cx="60" cy="48" r="28" fill="#fbbf24" stroke="#18123b" stroke-width="3.5"/>
        <circle cx="60" cy="48" r="20" fill="#fef3c7" stroke="#18123b" stroke-width="2.5"/>
        <!-- Antena CPU -->
        <line x1="60" y1="20" x2="60" y2="9" stroke="#18123b" stroke-width="3.5"/>
        <circle cx="60" cy="7" r="5" fill="#ff2a85" stroke="#18123b" stroke-width="2"/>
        <!-- Ojos felices y sonrisa -->
        <circle cx="52" cy="45" r="3.5" fill="#18123b" class="anim-blink"/>
        <circle cx="68" cy="45" r="3.5" fill="#18123b" class="anim-blink"/>
        <path d="M52 54 Q60 61 68 54" stroke="#18123b" stroke-width="3" stroke-linecap="round" fill="none"/>
      </svg>`,

    helmetBot: `
      <svg viewBox="0 0 120 100" class="w-24 h-20 mx-auto drop-shadow-lg anim-mascot">
        <path d="M45 76 C43 88, 39 94, 34 94" stroke="#18123b" stroke-width="4.5" stroke-linecap="round" fill="none"/>
        <path d="M75 76 C77 88, 81 94, 86 94" stroke="#18123b" stroke-width="4.5" stroke-linecap="round" fill="none"/>
        <ellipse cx="33" cy="95" rx="6" ry="3.5" fill="#ff2a85"/>
        <ellipse cx="87" cy="95" rx="6" ry="3.5" fill="#ff2a85"/>
        <!-- Casco Retro 80s Daft Punk -->
        <rect x="30" y="20" width="60" height="54" rx="24" fill="#c4b5fd" stroke="#18123b" stroke-width="3.5"/>
        <rect x="37" y="33" width="46" height="22" rx="11" fill="#0f0c24" stroke="#d4af37" stroke-width="2.5"/>
        <!-- LED Equalizer Visor -->
        <rect x="45" y="40" width="5" height="9" rx="2" fill="#00f0ff"/>
        <rect x="53" y="37" width="5" height="12" rx="2" fill="#34d399"/>
        <rect x="61" y="39" width="5" height="10" rx="2" fill="#fbbf24"/>
        <rect x="69" y="41" width="5" height="8" rx="2" fill="#ff2a85"/>
      </svg>`,

    shieldBot: `
      <svg viewBox="0 0 120 100" class="w-24 h-20 mx-auto drop-shadow-lg anim-mascot">
        <path d="M46 77 C44 88, 40 94, 35 94" stroke="#18123b" stroke-width="4.5" stroke-linecap="round" fill="none"/>
        <path d="M74 77 C76 88, 80 94, 85 94" stroke="#18123b" stroke-width="4.5" stroke-linecap="round" fill="none"/>
        <ellipse cx="33" cy="95" rx="6" ry="3.5" fill="#34d399"/>
        <ellipse cx="87" cy="95" rx="6" ry="3.5" fill="#34d399"/>
        <!-- Escudo Blindaje Legal/Cyber -->
        <path d="M60 14 L90 26 V50 C90 66 76 76 60 81 C44 76 30 66 30 50 V26 Z" fill="#6ee7b7" stroke="#18123b" stroke-width="3.5" stroke-linejoin="round"/>
        <rect x="43" y="37" width="34" height="16" rx="8" fill="#18123b"/>
        <circle cx="53" cy="45" r="3.2" fill="#34d399" class="anim-blink"/>
        <circle cx="67" cy="45" r="3.2" fill="#f6d365" class="anim-blink"/>
        <path d="M54 61 L59 66 L68 56" stroke="#18123b" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      </svg>`,

    cubeBot: `
      <svg viewBox="0 0 120 100" class="w-24 h-20 mx-auto drop-shadow-lg anim-mascot">
        <path d="M45 76 C43 88, 39 94, 34 94" stroke="#18123b" stroke-width="4.5" stroke-linecap="round" fill="none"/>
        <path d="M75 76 C77 88, 81 94, 86 94" stroke="#18123b" stroke-width="4.5" stroke-linecap="round" fill="none"/>
        <ellipse cx="33" cy="95" rx="6" ry="3.5" fill="#a78bfa"/>
        <ellipse cx="87" cy="95" rx="6" ry="3.5" fill="#a78bfa"/>
        <!-- Cubo 3D / Gaming -->
        <polygon points="60,14 92,30 92,64 60,78 28,64 28,30" fill="#f472b6" stroke="#18123b" stroke-width="3.5" stroke-linejoin="round"/>
        <polyline points="28,30 60,45 92,30" fill="none" stroke="#18123b" stroke-width="2.5"/>
        <line x1="60" y1="45" x2="60" y2="78" stroke="#18123b" stroke-width="2.5"/>
        <circle cx="46" cy="54" r="3.5" fill="#ffffff" class="anim-blink"/>
        <circle cx="74" cy="54" r="3.5" fill="#00f0ff" class="anim-blink"/>
      </svg>`
  },

  // Carrusel de Productos Estilo Paranice (Pestaña 1: Paquetes / Bolsas de Horas Oficiales)
  packages: [
    {
      id: "pkg-starter",
      group: "paquetes",
      badge: "5% OFF",
      badgeColor: "bg-amber-400 text-slate-950",
      backdropBg: "bg-gradient-to-b from-amber-200/90 to-orange-200/85",
      pillBg: "bg-amber-200 text-amber-950",
      mascot: "gearBot",
      title: "Starter / Jumpstart",
      subtitle: "Bolsa 10 Horas",
      hours: "5 – 10 hrs",
      oldPrice: 7990,
      price: 7590,
      priceNote: "MXN (Base 10h Desarrollo • Desde $3,795 en 5h)",
      ctaText: "¡Rápido! Agregar",
      description: "Diagnóstico inicial y entregables rápidos. El primer paso para validar ideas y resolver necesidades puntuales sin grandes compromisos.",
      highlights: ["5% de descuento oficial aplicado", "Pago 100% anticipado • Arranque inmediato", "Ideal para MVPs, fixes críticos o prototipos"]
    },
    {
      id: "pkg-growth",
      group: "paquetes",
      badge: "8% OFF",
      badgeColor: "bg-cyan-400 text-slate-950",
      backdropBg: "bg-gradient-to-b from-cyan-200/90 to-sky-200/85",
      pillBg: "bg-cyan-200 text-cyan-950",
      mascot: "prismBot",
      title: "Growth Pack",
      subtitle: "Bolsa 20 Horas",
      hours: "20 hrs",
      oldPrice: 15980,
      price: 14702,
      priceNote: "MXN (Base 20h Desarrollo o Mix)",
      ctaText: "¡Popular! Agregar",
      description: "Optimización y primeros flujos de automatización. Impulsa la presencia digital y optimiza los procesos clave de tu negocio.",
      highlights: ["8% de descuento oficial en tabulador", "Web/E-commerce + primeras automatizaciones", "Entrega por Sprints Agile medibles"]
    },
    {
      id: "pkg-proscale",
      group: "paquetes",
      badge: "12% OFF • TOP B2B",
      badgeColor: "bg-fuchsia-500 text-white",
      backdropBg: "bg-gradient-to-b from-violet-300/95 to-fuchsia-200/90",
      pillBg: "bg-violet-200 text-violet-950",
      mascot: "helmetBot",
      title: "Pro Scale",
      subtitle: "Bolsa 40 Horas",
      hours: "40 hrs",
      oldPrice: 31960,
      price: 28125,
      priceNote: "MXN (50% anticipo / 50% contra hitos)",
      ctaText: "¡Escalar! Agregar",
      description: "Desarrollo constante y ecosistema digital activo. Acelera la innovación operativa y escala la capacidad tecnológica de tu empresa.",
      highlights: ["12% de descuento corporativo", "Arquitectura Cloud + IA + UX Nivel Gaming", "Auditoría legal/fiscal exprés integrada"]
    },
    {
      id: "pkg-partner",
      group: "paquetes",
      badge: "15% OFF",
      badgeColor: "bg-emerald-400 text-slate-950",
      backdropBg: "bg-gradient-to-b from-emerald-200/90 to-teal-200/85",
      pillBg: "bg-emerald-200 text-emerald-950",
      mascot: "shieldBot",
      title: "Business Partner",
      subtitle: "Célula 80 Horas",
      hours: "80 hrs",
      oldPrice: 63920,
      price: 54332,
      priceNote: "MXN (Célula dedicada multidisciplinaria)",
      ctaText: "¡Partner! Agregar",
      description: "Una célula dedicada de tecnología, diseño 3D y estrategia legal/contable integrada directamente a tu organización.",
      highlights: ["15% de descuento directo", "Ingeniería + Arte 3D + Blindaje Normativo", "SLAs prioritarios y mesa ejecutiva"]
    },
    {
      id: "pkg-enterprise",
      group: "paquetes",
      badge: "20% OFF • ELITE",
      badgeColor: "bg-slate-950 text-amber-300 border border-amber-400/60",
      backdropBg: "bg-gradient-to-b from-amber-300/95 to-purple-300/90",
      pillBg: "bg-amber-300 text-slate-950",
      mascot: "cubeBot",
      title: "Enterprise Custom",
      subtitle: "Full Hub 120h+",
      hours: "120+ hrs",
      oldPrice: 95880,
      price: 76704,
      priceNote: "MXN (Capacidad exclusiva de socios)",
      ctaText: "¡Reservar Cupo!",
      description: "Transformación digital integral y desarrollo a la medida para líderes de industria agroindustrial, manufactura e inmobiliario.",
      highlights: ["20% descuento máximo institucional", "Bloqueo de capacidad mensual (120h Hub)", "Transferencia 100% IP + Blindaje MSA/NDA"]
    }
  ],

  // Pestaña 2 del Carrusel: Igualas Mensuales / Retainers Oficiales
  retainers: [
    {
      id: "ret-tech-support",
      group: "retainers",
      badge: "95% UPTIME",
      badgeColor: "bg-emerald-400 text-slate-950",
      backdropBg: "bg-gradient-to-b from-emerald-200/90 to-cyan-200/85",
      pillBg: "bg-emerald-200 text-emerald-950",
      mascot: "gearBot",
      title: "Soporte & Mant. TI",
      subtitle: "Iguala Mensual",
      hours: "Mensual",
      oldPrice: null,
      price: 499,
      priceNote: "MXN / mes • SLA Emergencias 1-2h",
      ctaText: "¡Blindar Web! Agregar",
      description: "Mantenimiento preventivo, correctivo, predictivo y proactivo para tu infraestructura web y servidores con 95% uptime garantizado.",
      highlights: ["Monitoreo continuo y parches de seguridad", "Ventanas programadas fuera de tráfico pico", "Respuesta en emergencias críticas 1–2 hrs"]
    },
    {
      id: "ret-ecosystem",
      group: "retainers",
      badge: "ALL-IN-ONE",
      badgeColor: "bg-violet-600 text-white",
      backdropBg: "bg-gradient-to-b from-violet-300/95 to-indigo-200/90",
      pillBg: "bg-violet-200 text-violet-950",
      mascot: "prismBot",
      title: "Suscripción Ecosistema",
      subtitle: "Web + Apps + Cloud",
      hours: "Mensual",
      oldPrice: null,
      price: 999,
      priceNote: "MXN / mes • Cap mensual controlado",
      ctaText: "¡Suscribir! Agregar",
      description: "Gestión continua de Página Web, Apps, Servidores en la nube y asesorías tecnológicas recurrentes para mantener tu operación al día.",
      highlights: ["Administración Cloud & dominios", "Asesoría recurrente de evolución TI", "Estabilidad operativa sin costos sorpresa"]
    },
    {
      id: "ret-legal",
      group: "retainers",
      badge: "BLINDAJE NOM",
      badgeColor: "bg-amber-400 text-slate-950",
      backdropBg: "bg-gradient-to-b from-amber-200/95 to-yellow-100/90",
      pillBg: "bg-amber-200 text-amber-950",
      mascot: "shieldBot",
      title: "Auditoría Legal Digital",
      subtitle: "Cumplimiento Mensual",
      hours: "Mensual",
      oldPrice: null,
      price: 999,
      priceNote: "MXN / mes • Prevención de contingencias",
      ctaText: "¡Proteger! Agregar",
      description: "Vigilancia permanente de normativas vigentes, leyes de comercio electrónico, privacidad de datos (LFPDPPP) y leyes laborales.",
      highlights: ["Revisión de contratos B2B (MSA / NDA)", "Cumplimiento electrónico y LFPDPPP", "Cero multas por vacíos regulatorios"]
    },
    {
      id: "ret-accounting",
      group: "retainers",
      badge: "FISCAL & FLUJO",
      badgeColor: "bg-cyan-500 text-slate-950",
      backdropBg: "bg-gradient-to-b from-sky-200/95 to-indigo-200/90",
      pillBg: "bg-sky-200 text-sky-950",
      mascot: "helmetBot",
      title: "Auditoría Contable",
      subtitle: "Rastreo de Flujo",
      hours: "A Revisión",
      oldPrice: null,
      price: 0,
      customPriceLabel: "A Revisión",
      priceNote: "Cotización según volumen transaccional",
      ctaText: "Solicitar Evaluación",
      description: "Reportería ejecutiva mensual, auditoría contable continua, rastreo de flujo de efectivo, CFDI 4.0/32D y detección de fugas de dinero.",
      highlights: ["Detección de fugas en pasarelas y operación", "Atención prioritaria ante requerimientos SAT", "Ahorro de hasta 30% en costos ocultos"]
    }
  ],

  // Pestaña 3 del Carrusel: Tarifas Directas por Hora & Diagnóstico Estrella
  featuredRates: [
    {
      id: "rate-diag",
      group: "tarifas",
      badge: "100% GRATUITO",
      badgeColor: "bg-emerald-400 text-slate-950",
      backdropBg: "bg-gradient-to-b from-emerald-300/95 to-teal-200/90",
      pillBg: "bg-emerald-200 text-emerald-950",
      mascot: "prismBot",
      title: "Diagnóstico Técnico",
      subtitle: "Auditoría Exprés",
      hours: "Sesión Inicial",
      oldPrice: 2999,
      price: 0,
      customPriceLabel: "$0 MXN",
      priceNote: "Sin compromiso • Bajo NDA Bidireccional",
      ctaText: "¡Agendar Gratis!",
      description: "Evaluación corta de dolor operativo, fallas de seguridad críticas o fugas de efectivo para definir tu arquitectura ideal.",
      highlights: ["Identificación de cuellos de botella reales", "Estimación transparente de ROI", "Propuesta formal a medida"]
    },
    {
      id: "rate-design",
      group: "tarifas",
      badge: "5 VERTICALES",
      badgeColor: "bg-pink-500 text-white",
      backdropBg: "bg-gradient-to-b from-pink-200/95 to-rose-200/90",
      pillBg: "bg-pink-200 text-pink-950",
      mascot: "cubeBot",
      title: "Hora Diseño & 3D",
      subtitle: "Arte, Render & Video",
      hours: "Por Hora",
      oldPrice: null,
      price: 699,
      priceNote: "MXN / hora • Modelado 3D, IA Visual, Ads",
      ctaText: "+1 Hora Diseño",
      description: "Modelado arquitectónico 2D/3D, producción audiovisual, activos asistidos por IA, retoque profesional y campañas publicitarias.",
      highlights: ["Estética Art Deco / Gaming UX de élite", "Renders inmobiliarios e industriales", "Producción acelerada con IA generativa"]
    },
    {
      id: "rate-dev",
      group: "tarifas",
      badge: "8 VERTICALES",
      badgeColor: "bg-cyan-400 text-slate-950",
      backdropBg: "bg-gradient-to-b from-cyan-200/95 to-blue-200/90",
      pillBg: "bg-cyan-200 text-cyan-950",
      mascot: "gearBot",
      title: "Hora Ingeniería TI",
      subtitle: "Software, IA & Cloud",
      hours: "Por Hora",
      oldPrice: null,
      price: 799,
      priceNote: "MXN / hora • Web, Apps, ERP, Gaming, APIs",
      ctaText: "+1 Hora Desarrollo",
      description: "Desarrollo de software a la medida, e-commerce de alta conversión, apps iOS/Android, Big Data, IA aplicada, Cloud y simuladores VR.",
      highlights: ["Código limpio con QA y repositorios cifrados", "Cesión 100% de IP al liquidar proyecto", "Arquitectura escalable lista para crecer"]
    },
    {
      id: "rate-strat",
      group: "tarifas",
      badge: "5 VERTICALES",
      badgeColor: "bg-amber-400 text-slate-950",
      backdropBg: "bg-gradient-to-b from-amber-200/95 to-orange-200/90",
      pillBg: "bg-amber-200 text-amber-950",
      mascot: "shieldBot",
      title: "Hora Estratégica",
      subtitle: "TI, Ciberseguridad & NOM",
      hours: "Por Hora",
      oldPrice: null,
      price: 999,
      priceNote: "MXN / hora • Consultoría C-Level & Blindaje",
      ctaText: "+1 Hora Estrategia",
      description: "Transformación digital, reducción de costos operativos, cumplimiento normativo NOM, ciberseguridad AES-256 y arquitectura CRM.",
      highlights: ["Enfoque directo en ROI y ahorro medible", "Capacitación anti-fugas para empleados", "Alineación fiscal, legal y tecnológica"]
    }
  ],

  // Catálogo Maestro Oficial: Las 18 Verticales Exactas
  verticals: [
    { num: 1, name: "Transformación Digital y Estrategia TI", category: "Estrategicas", price: 999, icon: "compass", desc: "Diagnóstico y plan maestro para modernizar la tecnología de tu negocio y adaptarla a las exigencias del mercado." },
    { num: 2, name: "Optimización Operativa y Reducción de Costos", category: "Estrategicas", price: 999, icon: "trending-down", desc: "Análisis de tus procesos de trabajo para detectar cuellos de botella, eliminar gastos innecesarios y acelerar entregas." },
    { num: 3, name: "Sistemas de Gestión y Logística", category: "Desarrollo", price: 799, icon: "boxes", desc: "Creación de software a la medida para controlar inventarios, envíos, almacenes y la operación interna de tu empresa en tiempo real." },
    { num: 4, name: "Cumplimiento Normativo y Auditoría (NOM)", category: "Estrategicas", price: 999, icon: "scale", desc: "Revisión y ajuste de tus sistemas informáticos para asegurar que cumplan con las regulaciones de ley, estándares y normativas vigentes NOM." },
    { num: 5, name: "Ciberseguridad y Protección de Datos", category: "Estrategicas", price: 999, icon: "shield-check", desc: "Blindaje de la información confidencial contra ataques informáticos, accesos no autorizados, fugas de datos y cursos de capacitación para empleados." },
    { num: 6, name: "Desarrollo Web y E-commerce (Diseño y Gestión)", category: "Desarrollo", price: 799, icon: "globe", desc: "Construcción de sitios web profesionales y tiendas en línea rápidas, seguras y optimizadas para convertir visitas en ventas." },
    { num: 7, name: "Big Data y Analítica Empresarial", category: "Desarrollo", price: 799, icon: "bar-chart-3", desc: "Organización y análisis de grandes volúmenes de datos para transformarlos en reportes visuales que faciliten la toma de decisiones." },
    { num: 8, name: "Marketing Digital y Publicidad Web", category: "Diseno", price: 699, icon: "megaphone", desc: "Diseño visual y ejecución estratégica de campañas publicitarias digitales para posicionar tu marca y atraer prospectos." },
    { num: 9, name: "Inteligencia Artificial Aplicada al Negocio", category: "Desarrollo", price: 799, icon: "bot", desc: "Integración de herramientas de IA para automatizar atención a clientes, analizar tendencias y hacer predicciones operativas." },
    { num: 10, name: "Modelado Arquitectónico 2D / 3D", category: "Diseno", price: 699, icon: "box", desc: "Renderizado y creación de planos visuales en 3D para proyectos inmobiliarios, arquitectónicos o prototipos industriales." },
    { num: 11, name: "Edición Digital y Retoque Visual (Photoshop)", category: "Diseno", price: 699, icon: "wand-2", desc: "Optimización y edición fotográfica profesional para catálogos, publicidad y activos gráficos de alta calidad." },
    { num: 12, name: "Gestión de Clientes y Proveedores (CRM)", category: "Estrategicas", price: 999, icon: "users", desc: "Asesoría e implementación de sistemas CRM y procesos para mejorar la comunicación, seguimiento comercial y control con aliados estratégicos." },
    { num: 13, name: "Generación de Activos Visuales y Diseño con IA", category: "Diseno", price: 699, icon: "sparkles", desc: "Producción rápida de imágenes y contenido gráfico mediante herramientas avanzadas de Inteligencia Artificial para acelerar entregas creativas." },
    { num: 14, name: "Producción Audiovisual y Postproducción Digital", category: "Diseno", price: 699, icon: "clapperboard", desc: "Grabación, montaje y efectos para videos corporativos, promocionales y contenido de alto impacto para redes sociales." },
    { num: 15, name: "Videojuegos, Simuladores y Experiencias Inmersivas", category: "Desarrollo", price: 799, icon: "gamepad-2", desc: "Creación de software interactivo y de realidad virtual para entretenimiento, capacitaciones industriales o presentaciones de producto." },
    { num: 16, name: "Arquitectura e Infraestructura Cloud Computing", category: "Desarrollo", price: 799, icon: "cloud-cog", desc: "Configuración y migración de servidores en la nube (AWS / Azure / GCP / Hetzner) para garantizar sistemas siempre disponibles y protegidos." },
    { num: 17, name: "Apps Móviles Nativas e Híbridas (iOS / Android)", category: "Desarrollo", price: 799, icon: "smartphone", desc: "Programación de aplicaciones para celulares y tabletas diseñadas para la interacción directa con tus usuarios o colaboradores." },
    { num: 18, name: "Integración Avanzada de APIs y Automatización", category: "Desarrollo", price: 799, icon: "workflow", desc: "Conexión de tus herramientas digitales existentes para que compartan datos de forma automática y sin tareas manuales repetitivas." }
  ],

  // Equipo Directivo Real (Hoja 8: Talento y Cultura)
  team: [
    {
      name: "Antonio Espinoza",
      role: "Co-CEO • Gobernanza, Estrategia Comercial y Financiera",
      badge: "Dirección Ejecutiva & ROI",
      accent: "from-amber-400 to-orange-500",
      desc: "Liderazgo estratégico en optimización operativa B2B, estructuración financiera, blindaje regulatorio y relacionamiento ejecutivo."
    },
    {
      name: "Gael Villalobos",
      role: "Líder de Ingeniería y Arquitectura de Software",
      badge: "Core Tecnológico & Cloud",
      accent: "from-cyan-400 to-blue-600",
      desc: "Gestión directa del desarrollo de software a la medida, infraestructura cloud resiliente, ciberseguridad e integraciones avanzadas de IA."
    },
    {
      name: "Marlen",
      role: "Dirección Creativa, Arte 3D & Experiencias UX/UI",
      badge: "Arte 3D & Gaming UX",
      accent: "from-fuchsia-500 to-violet-600",
      desc: "Dirección artística de modelado 3D, entornos interactivos, estética Art Deco futurista e interfaces con dinámicas de gamificación."
    }
  ],

  // Centro Legal y de Cumplimiento Corporativo (5 Políticas Completas)
  legalDocs: {
    privacidad: {
      title: "Aviso de Privacidad Integral (LFPDPPP & AES-256)",
      updated: "Vigente 2026 • Cumplimiento LFPDPPP / Estándar GDPR",
      content: `
        <div class="space-y-4 text-sm text-slate-300 leading-relaxed">
          <p><strong class="text-white">1. Identidad del Responsable y Encargado:</strong> <strong>Perspective SCT</strong> (en proceso de consolidación societaria bajo <em>Perspective SCT SA de CV / S.A.P.I. de C.V.</em>, operando fiscalmente con pleno cumplimiento tributario ante el SAT y domicilio operativo en el Corredor Industrial del Bajío, México; contacto oficial: <a href="mailto:omniiapps@gmail.com" class="text-cyan-400 underline">omniiapps@gmail.com</a>) es responsable del tratamiento legítimo, controlado e informado de sus datos personales conforme a la <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</strong>.</p>
          <p><strong class="text-white">2. Datos Recabados:</strong> Recabamos únicamente datos de identificación corporativa y contacto profesional (nombre completo, cargo directivo, razón social, correo electrónico institucional, teléfono y requerimientos técnicos/operativos) suministrados voluntariamente en nuestros formularios de Diagnóstico Técnico o Cotizador Interactivo.</p>
          <p><strong class="text-white">3. Protocolos de Ciberseguridad y Proyectos de Big Data / IA:</strong> Cuando Perspective SCT interviene bases de datos corporativas de terceros para proyectos de Big Data, Analítica o Inteligencia Artificial, actúa bajo la figura legal de <em>Encargado</em>, aplicando protocolos de cifrado <strong>AES-256</strong>, repositorios privados cifrados, control estricto de credenciales y acuerdos previos de confidencialidad (NDA Bidireccional).</p>
          <p><strong class="text-white">4. Finalidades del Tratamiento:</strong> (a) Elaborar Diagnósticos Técnicos y Operativos; (b) Presentar propuestas técnico-económicas con cálculo de ROI; (c) Formalizar Contratos Marco (MSA), Anexos SOW y facturación electrónica <strong>CFDI 4.0</strong>; (d) Cumplir obligaciones legales y regulatorias aplicables.</p>
          <p><strong class="text-white">5. Derechos ARCO:</strong> Usted puede ejercer en cualquier momento sus derechos de Acceso, Rectificación, Cancelación u Oposición (ARCO), así como revocar su consentimiento, enviando solicitud expresa a <a href="mailto:omniiapps@gmail.com" class="text-cyan-400 underline">omniiapps@gmail.com</a> con respuesta garantizada dentro de los plazos de ley.</p>
        </div>`
    },
    terminos: {
      title: "Términos Comerciales, MSA, Anticipos y Stop-Loss",
      updated: "Marco Jurídico B2B • Perspective SCT",
      content: `
        <div class="space-y-4 text-sm text-slate-300 leading-relaxed">
          <p><strong class="text-white">1. Estructura Contractual (MSA + SOW):</strong> Toda relación comercial B2B se rige por un <em>Master Service Agreement (Contrato Marco de Prestación de Servicios)</em> acompañado de Anexos de Alcance de Trabajo Específicos (<strong>SOW</strong>) que detallan entregables exactos, desglose de horas por vertical y criterios formales de aceptación.</p>
          <p><strong class="text-white">2. Tabulador Oficial y Reglas de Promoción:</strong> Las tarifas base vigentes son: <strong>Desarrollo $799 MXN/h</strong>, <strong>Diseño & 3D $699 MXN/h</strong> y <strong>Consultoría Estratégica/Legal/TI $999 MXN/h</strong>. Los descuentos por volumen en Bolsas de Horas (5% a 20%) aplican exclusivamente sobre paquetes cerrados. <em>Política estricta: No se acumulan múltiples promociones ni descuentos adicionales fuera de tabulador.</em></p>
          <p><strong class="text-white">3. Esquema de Pagos y Anticipos:</strong> Para Bolsas <em>Starter/Jumpstart</em> y <em>Growth</em> se requiere el <strong>100% de anticipo</strong> previo al arranque. Para paquetes <em>Pro Scale (40h)</em>, <em>Business Partner (80h)</em> y <em>Enterprise (120h+)</em> se opera bajo esquema <strong>50% anticipo</strong> en el Kick-off y 50% contra entrega de hitos quincenales validados.</p>
          <p><strong class="text-white">4. Límite de Responsabilidad Civil y Financiera:</strong> La responsabilidad financiera máxima asumida por Perspective SCT ante cualquier contingencia técnica o caída fortuita de proveedores cloud externos queda estrictamente limitada al monto efectivamente pagado por el cliente en el período o mes en curso.</p>
          <p><strong class="text-white">5. Cláusula de Control de Alcance (Scope Cap & Stop-Loss):</strong> Los retainers mensuales cuentan con un límite definido de horas (cap) para prevenir desbordes de alcance (<em>scope creep</em>). Ante desviaciones continuas de alcance solicitadas fuera del SOW original, se activará una mesa formal de ajuste presupuestal antes de continuar la ejecución.</p>
        </div>`
    },
    ip: {
      title: "Política de Propiedad Intelectual (Código, 3D e IA)",
      updated: "Reserva de Dominio y Cesión Patrimonial",
      content: `
        <div class="space-y-4 text-sm text-slate-300 leading-relaxed">
          <p><strong class="text-white">1. Transferencia 100% Post-Liquidación:</strong> Perspective SCT establece con total transparencia que los derechos patrimoniales sobre el código fuente a la medida (<em>Custom Code</em>), entregables finales de diseño y modelos 3D específicos del cliente se transfieren al cliente final <strong>únicamente tras la liquidación del 100% de las facturas correspondientes al proyecto</strong>.</p>
          <p><strong class="text-white">2. Frameworks y Librerías Reutilizables:</strong> Perspective SCT retiene la titularidad sobre sus metodologías internas, motores base, librerías genéricas reutilizables y herramientas propietarias de aceleración, otorgando al cliente una licencia perpetua, no exclusiva y libre de regalías para operar su producto final sin restricciones.</p>
          <p><strong class="text-white">3. Custodia de Repositorios y Bases de Datos:</strong> Durante el desarrollo, el código base y los activos digitales se resguardan en repositorios privados con control de versiones (GitHub Enterprise / entornos cifrados) y respaldos de seguridad supervisados directamente por los socios directores.</p>
        </div>`
    },
    nda: {
      title: "Acuerdo de Confidencialidad Bidireccional (NDA)",
      updated: "Protocolo de Secreto Industrial Corporativo",
      content: `
        <div class="space-y-4 text-sm text-slate-300 leading-relaxed">
          <p><strong class="text-white">1. Firma Previa al Diagnóstico Profundo:</strong> Antes de recibir credenciales TI, accesos a servidores, pasarelas de pago, contabilidad interna o bases de datos para diagnósticos de Big Data e Inteligencia Artificial, Perspective SCT suscribe un <strong>NDA Corporativo Bidireccional</strong> que protege jurídicamente a ambas partes.</p>
          <p><strong class="text-white">2. Resguardo de Secretos Industriales:</strong> Toda información financiera, algoritmos, listas de clientes/proveedores, costos unitarios y estrategias comerciales compartidas se catalogan como Secreto Industrial protegido, con acceso restringido exclusivamente a los líderes asignados en la matriz RACI del proyecto.</p>
          <p><strong class="text-white">3. Extensión a Células Técnicas y Peritos:</strong> Todos los colaboradores internos, desarrolladores asociados, peritos contables y abogados aliados operan bajo convenios individuales de confidencialidad y no divulgación vigentes.</p>
        </div>`
    },
    sla: {
      title: "SLAs de Servicio, QA, Facturación CFDI 4.0 y NOM",
      updated: "Estándares Operativos y Fiscales",
      content: `
        <div class="space-y-4 text-sm text-slate-300 leading-relaxed">
          <p><strong class="text-white">1. Acuerdos de Nivel de Servicio (SLAs Técnicos):</strong>
            <br>• <strong>Emergencias Imperativas (Caída crítica en producción / E-commerce):</strong> Tiempo de respuesta inicial de <strong>1 a 2 horas</strong>.
            <br>• <strong>Peticiones Urgentes Operativas:</strong> Tiempo de atención de <strong>24 a 48 horas hábiles</strong>.
            <br>• <strong>Peticiones Planificadas y Evolutivas:</strong> Ejecutadas dentro de los Sprints quincenales (Scrum) o flujos continuos (Kanban) sobre la bolsa de horas contratada.
            <br>• <strong>Disponibilidad en Iguala de Mantenimiento ($499/mes):</strong> Objetivo operativo de <strong>95%+ Uptime</strong> con ventanas de mantenimiento programadas fuera de horarios pico.</p>
          <p><strong class="text-white">2. Control de Calidad (QA):</strong> Ningún entregable de software, tienda en línea o entorno interactivo pasa a producción sin validación cruzada funcional y estética entre la rama de Ingeniería y la Dirección Creativa.</p>
          <p><strong class="text-white">3. Facturación Electrónica CFDI 4.0 y Cumplimiento Fiscal:</strong> Emitimos comprobantes fiscales digitales <strong>CFDI 4.0</strong> válidos ante el SAT para deducibilidad empresarial B2B, manteniendo monitoreo riguroso de Opinión de Cumplimiento (32D) y observancia de Normas Oficiales Mexicanas (NOM) aplicables.</p>
        </div>`
    }
  }
};
