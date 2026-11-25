/* ==========================================================================
   PERSPECTIVE SCT — MOTOR INTERACTIVO FRONTEND (VANILLA JS + GSAP + LENIS)
   ========================================================================== */

(function () {
  "use strict";

  const DATA = window.PERSPECTIVE_DATA;
  const STORAGE_CART_KEY = "perspective_sct_quote_bag_v1";
  const STORAGE_COOKIE_KEY = "perspective_sct_cookies_v1";

  // Estado Global Reactivo
  const state = {
    activeCarouselTab: "paquetes",
    activeVerticalCategory: "all",
    verticalSearch: "",
    uvpMode: "perspective", // 'perspective' | 'traditional'
    cart: loadCart(),
    calc: {
      devHours: 20,
      designHours: 10,
      stratHours: 10,
      retTech: false,
      retEco: false,
      retLegal: false
    }
  };

  function loadCart() {
    try {
      const raw = localStorage.getItem(STORAGE_CART_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveCart() {
    try {
      localStorage.setItem(STORAGE_CART_KEY, JSON.stringify(state.cart));
    } catch (e) {
      // ignore storage quota errors
    }
  }

  function formatMXN(amount) {
    return "$" + Math.round(amount).toLocaleString("es-MX");
  }

  // ==========================================================================
  // 1. PRISM COSMIC CANVAS (FONDO INTERACTIVO VIVO LIGERO 60FPS)
  // ==========================================================================
  function initPrismCanvas() {
    const canvas = document.getElementById("prism-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const colors = ["#d4af37", "#00f0ff", "#ff2a85", "#a78bfa", "#34d399"];
    const count = Math.min(48, Math.floor(width / 32));
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2.2 + 0.8,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.55 + 0.2
    }));

    let mouse = { x: width * 0.5, y: height * 0.35 };
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }, { passive: true });

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }, { passive: true });

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Halo sutil de refracción siguiendo el cursor
      const grad = ctx.createRadialGradient(mouse.x, mouse.y, 10, mouse.x, mouse.y, 320);
      grad.addColorStop(0, "rgba(139, 92, 246, 0.11)");
      grad.addColorStop(0.5, "rgba(0, 240, 255, 0.04)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        // Conectar nodos cercanos al cursor (efecto constelación de ingeniería)
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = p.color;
          ctx.globalAlpha = (1 - dist / 150) * 0.22;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
  }

  // ==========================================================================
  // 2. LENIS SMOOTH SCROLL + GSAP EVOLUCIÓN DE BLOQUE CONTINUO
  // ==========================================================================
  function initSmoothScrollAndGSAP() {
    const header = document.getElementById("main-header");

    // Navbar scroll state
    window.addEventListener("scroll", () => {
      if (window.scrollY > 45) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    }, { passive: true });

    // Lenis
    if (typeof window.Lenis !== "undefined") {
      const lenis = new window.Lenis({
        duration: 1.1,
        smoothWheel: true
      });
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      if (typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined") {
        lenis.on("scroll", window.ScrollTrigger.update);
      }
    }

    // GSAP ScrollTrigger — Evolución orgánica del fondo como un único bloque vivo
    if (typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined") {
      window.gsap.registerPlugin(window.ScrollTrigger);

      const stages = document.querySelectorAll("[data-stage-bg]");
      stages.forEach((sec) => {
        const bgColor = sec.getAttribute("data-stage-bg");
        window.ScrollTrigger.create({
          trigger: sec,
          start: "top 55%",
          end: "bottom 55%",
          onEnter: () => { document.body.style.backgroundColor = bgColor; },
          onEnterBack: () => { document.body.style.backgroundColor = bgColor; }
        });
      });

      // Animaciones de entrada suaves para bloques editoriales
      window.gsap.utils.toArray(".reveal-up").forEach((el) => {
        window.gsap.fromTo(
          el,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 86%",
              once: true
            }
          }
        );
      });
    }
  }

  // ==========================================================================
  // 3. CARRUSEL DE PRODUCTOS ESTILO PARANICE (PEDESTALES + MASCOTAS + PRECIOS)
  // ==========================================================================
  function renderPedestalCarousel() {
    const track = document.getElementById("pedestal-track");
    if (!track) return;

    let items = DATA.packages;
    if (state.activeCarouselTab === "retainers") items = DATA.retainers;
    if (state.activeCarouselTab === "tarifas") items = DATA.featuredRates;

    track.innerHTML = items.map((item) => {
      const mascotSvg = DATA.mascotSVGs[item.mascot] || DATA.mascotSVGs.prismBot;
      const oldPriceHtml = item.oldPrice
        ? `<span class="line-through text-slate-400 font-semibold text-sm mr-1.5">${formatMXN(item.oldPrice)}</span>`
        : "";
      const mainPriceHtml = item.customPriceLabel
        ? item.customPriceLabel
        : formatMXN(item.price);

      return `
        <article class="pedestal-card shrink-0 w-[295px] sm:w-[320px] pt-8 pb-3 select-none flex flex-col justify-between">
          <!-- Badge Descuento / Estado Flotante Superior Izquierdo (Estilo Paranice) -->
          <div class="relative">
            <span class="absolute -top-5 left-3 z-20 px-3.5 py-1 rounded-full text-xs font-extrabold tracking-wide shadow-md ${item.badgeColor}">
              ${item.badge}
            </span>

            <!-- Mascota Ilustrada Sentada Sobre el Pedestal -->
            <div class="relative z-20 -mb-6 pointer-events-none">
              ${mascotSvg}
            </div>

            <!-- Respaldo Pastel/Neón Redondeado del Producto -->
            <div class="pedestal-backdrop ${item.backdropBg} pt-9 pb-12 px-5 mx-3 relative z-10 shadow-inner border border-white/50">
              <div class="bg-slate-950/90 text-white rounded-2xl p-4 border border-amber-400/30 shadow-xl">
                <div class="flex items-center justify-between text-[11px] font-mono-code text-cyan-300 mb-1.5">
                  <span>PERSPECTIVE • HUB</span>
                  <span class="px-2 py-0.5 rounded-full bg-white/10 text-amber-300">${item.hours}</span>
                </div>
                <p class="text-xs text-slate-300 leading-relaxed line-clamp-3 min-h-[48px]">
                  ${item.description}
                </p>
                <ul class="mt-3 space-y-1 border-t border-white/10 pt-2.5">
                  ${item.highlights.map((h) => `
                    <li class="text-[11px] text-emerald-300 flex items-start gap-1.5">
                      <span class="text-amber-400 font-bold">✦</span>
                      <span class="text-slate-200">${h}</span>
                    </li>
                  `).join("")}
                </ul>
              </div>
            </div>

            <!-- Cuerpo Nube Orgánico Blanco (Firma Visual Paranice) -->
            <div class="pedestal-cloud-body -mt-7 mx-2 px-5 py-5 text-center relative z-20">
              <div class="relative z-10">
                <h3 class="font-display font-extrabold text-xl text-slate-900 tracking-tight leading-snug">
                  ${item.title}
                </h3>
                <div class="inline-block mt-2 mb-2.5 px-4 py-1 rounded-full text-xs font-extrabold ${item.pillBg}">
                  ${item.subtitle}
                </div>
                <div class="font-tech font-extrabold text-2xl text-slate-900 flex items-baseline justify-center gap-1">
                  ${oldPriceHtml}
                  <span>${mainPriceHtml}</span>
                </div>
                <p class="text-[11px] text-slate-500 font-medium mt-0.5">
                  ${item.priceNote}
                </p>
              </div>
            </div>
          </div>

          <!-- Botón Cápsula Oscuro Inferior (Agregar al Cotizador) -->
          <div class="mt-3.5 px-4 relative z-20">
            <button
              type="button"
              data-add-id="${item.id}"
              data-add-title="${item.title} (${item.subtitle})"
              data-add-price="${item.price}"
              data-add-custom="${item.customPriceLabel || ""}"
              class="pedestal-cta-btn w-full py-3.5 px-5 text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>${item.ctaText}</span>
            </button>
          </div>
        </article>
      `;
    }).join("");

    // Bind botones de agregar al cotizador
    track.querySelectorAll("[data-add-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-add-id");
        const title = btn.getAttribute("data-add-title");
        const price = Number(btn.getAttribute("data-add-price")) || 0;
        const customLabel = btn.getAttribute("data-add-custom");
        addToCart({ id, title, price, customLabel, qty: 1 });

        const originalHtml = btn.innerHTML;
        btn.innerHTML = `<span>✓ ¡En tu Bolsa!</span>`;
        btn.classList.add("ring-2", "ring-cyan-400");
        setTimeout(() => {
          btn.innerHTML = originalHtml;
          btn.classList.remove("ring-2", "ring-cyan-400");
        }, 1100);
      });
    });
  }

  function initCarouselControls() {
    const track = document.getElementById("pedestal-track");
    const prevBtn = document.getElementById("carousel-prev");
    const nextBtn = document.getElementById("carousel-next");
    const tabBtns = document.querySelectorAll("[data-carousel-tab]");

    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        state.activeCarouselTab = btn.getAttribute("data-carousel-tab");
        tabBtns.forEach((b) => {
          const active = b === btn;
          b.className = active
            ? "px-5 py-2.5 rounded-full text-sm font-extrabold bg-white text-slate-950 shadow-lg transition cursor-pointer"
            : "px-5 py-2.5 rounded-full text-sm font-bold bg-white/10 text-white hover:bg-white/20 transition cursor-pointer";
        });
        renderPedestalCarousel();
        if (track) track.scrollTo({ left: 0, behavior: "smooth" });
      });
    });

    if (prevBtn && track) {
      prevBtn.addEventListener("click", () => {
        track.scrollBy({ left: -340, behavior: "smooth" });
      });
    }
    if (nextBtn && track) {
      nextBtn.addEventListener("click", () => {
        track.scrollBy({ left: 340, behavior: "smooth" });
      });
    }

    // Drag con mouse para escritorio
    if (track) {
      let isDown = false;
      let startX = 0;
      let scrollLeft = 0;
      track.addEventListener("mousedown", (e) => {
        if (e.target.closest("button")) return;
        isDown = true;
        startX = e.pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
      });
      window.addEventListener("mouseup", () => { isDown = false; });
      track.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - track.offsetLeft;
        const walk = (x - startX) * 1.4;
        track.scrollLeft = scrollLeft - walk;
      });
    }
  }

  // ==========================================================================
  // 4. CATÁLOGO INTERACTIVO DE LAS 18 VERTICALES OFICIALES
  // ==========================================================================
  function getCategoryMeta(cat) {
    if (cat === "Desarrollo") {
      return {
        label: "Desarrollo • $799/h",
        badgeClass: "bg-cyan-500/15 text-cyan-300 border-cyan-400/30",
        accentText: "text-cyan-400"
      };
    }
    if (cat === "Diseno") {
      return {
        label: "Diseño & 3D • $699/h",
        badgeClass: "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-400/30",
        accentText: "text-fuchsia-400"
      };
    }
    return {
      label: "Estratégica • $999/h",
      badgeClass: "bg-amber-500/15 text-amber-300 border-amber-400/30",
      accentText: "text-amber-400"
    };
  }

  function renderVerticals() {
    const grid = document.getElementById("verticals-grid");
    const countLabel = document.getElementById("verticals-count");
    if (!grid) return;

    const q = state.verticalSearch.trim().toLowerCase();
    const filtered = DATA.verticals.filter((v) => {
      const matchCat = state.activeVerticalCategory === "all" || v.category === state.activeVerticalCategory;
      const matchQuery = !q || v.name.toLowerCase().includes(q) || v.desc.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });

    if (countLabel) {
      countLabel.textContent = `Mostrando ${filtered.length} de 18 verticales oficiales`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full text-center py-12 bento-tech-card p-8">
          <p class="text-lg font-bold text-white mb-2">No encontramos verticales con ese término</p>
          <p class="text-sm text-slate-400 mb-4">Prueba buscando "IA", "3D", "Cloud", "Ciberseguridad", "NOM" o "E-commerce".</p>
          <button id="reset-verticals-btn" class="px-5 py-2.5 rounded-full bg-violet-600 text-white text-sm font-bold cursor-pointer">Ver las 18 verticales</button>
        </div>
      `;
      const resetBtn = document.getElementById("reset-verticals-btn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          state.activeVerticalCategory = "all";
          state.verticalSearch = "";
          const searchInput = document.getElementById("vertical-search-input");
          if (searchInput) searchInput.value = "";
          updateVerticalFilterButtons();
          renderVerticals();
        });
      }
      return;
    }

    grid.innerHTML = filtered.map((v) => {
      const meta = getCategoryMeta(v.category);
      const numStr = String(v.num).padStart(2, "0");
      return `
        <article class="bento-tech-card p-6 flex flex-col justify-between group">
          <div>
            <div class="flex items-center justify-between gap-2 mb-4">
              <span class="font-mono-code text-xs font-bold px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10">
                #${numStr}
              </span>
              <span class="text-xs font-bold px-3 py-1 rounded-full border ${meta.badgeClass}">
                ${meta.label}
              </span>
            </div>

            <div class="flex items-start gap-3.5 mb-3">
              <div class="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-cyan-400/50 transition">
                <i data-lucide="${v.icon}" class="w-5 h-5 ${meta.accentText}"></i>
              </div>
              <h3 class="font-display font-bold text-lg text-white leading-snug group-hover:text-cyan-300 transition">
                ${v.name}
              </h3>
            </div>

            <p class="text-sm text-slate-300/90 leading-relaxed mb-5">
              ${v.desc}
            </p>
          </div>

          <div class="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
            <div>
              <span class="block text-[11px] uppercase tracking-wider text-slate-400">Tarifa Oficial</span>
              <span class="font-tech font-extrabold text-xl text-white">${formatMXN(v.price)} <small class="text-xs font-normal text-slate-400">MXN/h</small></span>
            </div>
            <button
              type="button"
              data-vert-id="vert-${v.num}"
              data-vert-name="Vertical #${numStr}: ${v.name} (5h base)"
              data-vert-price="${v.price * 5}"
              class="px-4 py-2 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-violet-600 hover:to-cyan-500 text-white text-xs font-extrabold border border-white/15 transition cursor-pointer"
            >
              + Cotizar 5h
            </button>
          </div>
        </article>
      `;
    }).join("");

    if (typeof window.lucide !== "undefined") {
      window.lucide.createIcons();
    }

    grid.querySelectorAll("[data-vert-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        addToCart({
          id: btn.getAttribute("data-vert-id"),
          title: btn.getAttribute("data-vert-name"),
          price: Number(btn.getAttribute("data-vert-price")),
          qty: 1
        });
        const prev = btn.textContent;
        btn.textContent = "✓ Agregado";
        setTimeout(() => { btn.textContent = prev; }, 1000);
      });
    });
  }

  function updateVerticalFilterButtons() {
    document.querySelectorAll("[data-vert-filter]").forEach((b) => {
      const active = b.getAttribute("data-vert-filter") === state.activeVerticalCategory;
      b.className = active
        ? "px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold bg-gradient-to-r from-amber-400 via-fuchsia-500 to-cyan-400 text-slate-950 shadow-md transition cursor-pointer"
        : "px-4 py-2 rounded-full text-xs sm:text-sm font-bold bg-white/5 text-slate-200 border border-white/10 hover:bg-white/15 transition cursor-pointer";
    });
  }

  function initVerticalFilters() {
    document.querySelectorAll("[data-vert-filter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.activeVerticalCategory = btn.getAttribute("data-vert-filter");
        updateVerticalFilterButtons();
        renderVerticals();
      });
    });

    const searchInput = document.getElementById("vertical-search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        state.verticalSearch = e.target.value;
        renderVerticals();
      });
    }
  }

  // ==========================================================================
  // 5. CALCULADORA GAMIFICADA DE BOLSAS DE HORAS & ROI (TABULADOR OFICIAL)
  // ==========================================================================
  function getTierByHours(totalHours) {
    if (totalHours >= 120) return { name: "Enterprise Custom (120h+)", discount: 0.20, anticipation: "50% anticipo / 50% hitos", mood: "🚀 ¡Modo Corporativo Full Hub Activado! (20% OFF)" };
    if (totalHours >= 80) return { name: "Business Partner (80h+)", discount: 0.15, anticipation: "50% anticipo / 50% hitos", mood: "🛡️ ¡Célula Dedicada Integrada! (15% OFF)" };
    if (totalHours >= 40) return { name: "Pro Scale (40h+)", discount: 0.12, anticipation: "50% anticipo / 50% hitos", mood: "⚡ ¡Escalamiento Acelerado B2B! (12% OFF)" };
    if (totalHours >= 20) return { name: "Growth Pack (20h+)", discount: 0.08, anticipation: "100% anticipo • Arranque inmediato", mood: "✨ ¡Impulso Digital & Automatización! (8% OFF)" };
    if (totalHours >= 5) return { name: "Starter / Jumpstart (5h+)", discount: 0.05, anticipation: "100% anticipo • Arranque inmediato", mood: "🎯 ¡Validación Rápida Jumpstart! (5% OFF)" };
    return { name: "Horas Sueltas (<5h)", discount: 0, anticipation: "100% anticipo", mood: "💡 Sube a 5+ horas para desbloquear descuento Starter (5% OFF)" };
  }

  function updateCalculatorUI() {
    const { devHours, designHours, stratHours, retTech, retEco, retLegal } = state.calc;
    const totalHours = devHours + designHours + stratHours;
    const rawHoursSubtotal =
      devHours * DATA.hourlyRates.Desarrollo +
      designHours * DATA.hourlyRates.Diseno +
      stratHours * DATA.hourlyRates.Estrategicas;

    const tier = getTierByHours(totalHours);
    const discountAmount = rawHoursSubtotal * tier.discount;
    const netHoursTotal = rawHoursSubtotal - discountAmount;

    const monthlyRetainers =
      (retTech ? 499 : 0) +
      (retEco ? 999 : 0) +
      (retLegal ? 999 : 0);

    const grandTotal = netHoursTotal + monthlyRetainers;
    // UVP Documento Maestro: Ahorra hasta un 30% de costos operativos ocultos vs agencias tradicionales
    const estimatedSavings30 = Math.round((rawHoursSubtotal / 0.7) * 0.3);

    // Update labels
    const setTxt = (id, txt) => {
      const el = document.getElementById(id);
      if (el) el.textContent = txt;
    };

    setTxt("val-dev-hours", `${devHours} h`);
    setTxt("val-design-hours", `${designHours} h`);
    setTxt("val-strat-hours", `${stratHours} h`);
    setTxt("calc-total-hours", `${totalHours} hrs`);
    setTxt("calc-tier-badge", tier.name);
    setTxt("calc-subtotal", formatMXN(rawHoursSubtotal));
    setTxt("calc-discount", `-${formatMXN(discountAmount)} (${Math.round(tier.discount * 100)}%)`);
    setTxt("calc-retainers-sum", `${formatMXN(monthlyRetainers)} / mes`);
    setTxt("calc-final-price", formatMXN(grandTotal));
    setTxt("calc-anticipation-note", tier.anticipation);
    setTxt("calc-hidden-savings", formatMXN(estimatedSavings30));
    setTxt("calc-mascot-mood", tier.mood);

    // Barra de capacidad mensual del Hub (120h límite sano)
    const capBar = document.getElementById("calc-cap-bar");
    const capPct = Math.min(100, Math.round((totalHours / DATA.brand.monthlyCapHours) * 100));
    if (capBar) capBar.style.width = `${capPct}%`;
    setTxt("calc-cap-label", `${totalHours} / 120 hrs de capacidad ejecutiva mensual (${capPct}%)`);
  }

  function initCalculator() {
    const bindSlider = (id, key) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener("input", (e) => {
        state.calc[key] = Number(e.target.value);
        updateCalculatorUI();
      });
    };

    bindSlider("slider-dev", "devHours");
    bindSlider("slider-design", "designHours");
    bindSlider("slider-strat", "stratHours");

    const bindCheck = (id, key) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener("change", (e) => {
        state.calc[key] = e.target.checked;
        updateCalculatorUI();
      });
    };

    bindCheck("chk-ret-tech", "retTech");
    bindCheck("chk-ret-eco", "retEco");
    bindCheck("chk-ret-legal", "retLegal");

    const addCustomBagBtn = document.getElementById("btn-add-custom-bag");
    if (addCustomBagBtn) {
      addCustomBagBtn.addEventListener("click", () => {
        const { devHours, designHours, stratHours, retTech, retEco, retLegal } = state.calc;
        const totalHours = devHours + designHours + stratHours;
        if (totalHours === 0 && !retTech && !retEco && !retLegal) return;

        if (totalHours > 0) {
          const raw =
            devHours * DATA.hourlyRates.Desarrollo +
            designHours * DATA.hourlyRates.Diseno +
            stratHours * DATA.hourlyRates.Estrategicas;
          const tier = getTierByHours(totalHours);
          const finalBagPrice = Math.round(raw * (1 - tier.discount));

          addToCart({
            id: `custom-bag-${devHours}-${designHours}-${stratHours}`,
            title: `Bolsa a Medida ${totalHours}h (${devHours}h Dev / ${designHours}h 3D / ${stratHours}h Estrat.) • ${tier.name}`,
            price: finalBagPrice,
            qty: 1
          });
        }
        if (retTech) addToCart({ id: "ret-tech-support", title: "Iguala Soporte TI & Web (95% Uptime)", price: 499, qty: 1 });
        if (retEco) addToCart({ id: "ret-ecosystem", title: "Suscripción Ecosistema Recurrente", price: 999, qty: 1 });
        if (retLegal) addToCart({ id: "ret-legal", title: "Auditoría Legal Digital Mensual", price: 999, qty: 1 });

        openCartDrawer();
      });
    }

    updateCalculatorUI();
  }

  // ==========================================================================
  // 6. COMPARADOR INTERACTIVO UVP (AHORRO 30% COSTOS OCULTOS)
  // ==========================================================================
  function initUVPComparator() {
    const btnPersp = document.getElementById("uvp-btn-perspective");
    const btnTrad = document.getElementById("uvp-btn-traditional");
    const panelPersp = document.getElementById("uvp-panel-perspective");
    const panelTrad = document.getElementById("uvp-panel-traditional");
    if (!btnPersp || !btnTrad || !panelPersp || !panelTrad) return;

    btnPersp.addEventListener("click", () => {
      panelPersp.classList.remove("hidden");
      panelTrad.classList.add("hidden");
      btnPersp.className = "px-5 py-2.5 rounded-full text-sm font-extrabold bg-gradient-to-r from-amber-400 to-cyan-400 text-slate-950 shadow-lg cursor-pointer transition";
      btnTrad.className = "px-5 py-2.5 rounded-full text-sm font-bold text-slate-300 hover:text-white cursor-pointer transition";
    });

    btnTrad.addEventListener("click", () => {
      panelTrad.classList.remove("hidden");
      panelPersp.classList.add("hidden");
      btnTrad.className = "px-5 py-2.5 rounded-full text-sm font-extrabold bg-rose-500 text-white shadow-lg cursor-pointer transition";
      btnPersp.className = "px-5 py-2.5 rounded-full text-sm font-bold text-slate-300 hover:text-white cursor-pointer transition";
    });
  }

  // ==========================================================================
  // 7. BOLSA DE PROYECTO / COTIZADOR DRAWER (CARRITO INTERACTIVO B2B)
  // ==========================================================================
  function addToCart(newItem) {
    const existing = state.cart.find((i) => i.id === newItem.id);
    if (existing) {
      existing.qty += newItem.qty || 1;
    } else {
      state.cart.push({
        id: newItem.id,
        title: newItem.title,
        price: newItem.price || 0,
        customLabel: newItem.customLabel || "",
        qty: newItem.qty || 1
      });
    }
    saveCart();
    renderCartUI(true);
  }

  function renderCartUI(animateBadge) {
    const totalCount = state.cart.reduce((acc, i) => acc + i.qty, 0);
    const totalAmount = state.cart.reduce((acc, i) => acc + i.price * i.qty, 0);

    document.querySelectorAll(".cart-count-badge").forEach((el) => {
      el.textContent = totalCount;
      if (animateBadge) {
        el.classList.remove("cart-pop");
        void el.offsetWidth;
        el.classList.add("cart-pop");
      }
    });

    const listEl = document.getElementById("cart-items-list");
    const totalEl = document.getElementById("cart-total-amount");
    if (totalEl) totalEl.textContent = `${formatMXN(totalAmount)} MXN`;
    if (!listEl) return;

    if (state.cart.length === 0) {
      listEl.innerHTML = `
        <div class="text-center py-12 px-4">
          <div class="w-20 h-20 mx-auto mb-3 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-3xl">
            🛸
          </div>
          <p class="font-display font-bold text-white text-base mb-1">Tu Bolsa de Innovación está vacía</p>
          <p class="text-xs text-slate-400">Agrega paquetes con descuento, igualas mensuales o verticales desde el catálogo para armar tu propuesta formal.</p>
        </div>
      `;
      return;
    }

    listEl.innerHTML = state.cart.map((item) => `
      <div class="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-3">
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-white leading-snug">${item.title}</p>
          <p class="text-xs text-cyan-300 font-mono-code mt-1">
            ${item.customLabel ? item.customLabel : formatMXN(item.price * item.qty) + " MXN"}
          </p>
        </div>
        <div class="flex items-center gap-1.5 shrink-0">
          <button type="button" data-cart-dec="${item.id}" class="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-bold cursor-pointer">-</button>
          <span class="text-xs font-mono-code w-5 text-center text-white">${item.qty}</span>
          <button type="button" data-cart-inc="${item.id}" class="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-bold cursor-pointer">+</button>
          <button type="button" data-cart-del="${item.id}" class="w-7 h-7 rounded-full bg-rose-500/20 hover:bg-rose-500/40 text-rose-300 text-xs font-bold ml-1 cursor-pointer" title="Quitar">✕</button>
        </div>
      </div>
    `).join("");

    listEl.querySelectorAll("[data-cart-inc]").forEach((b) => {
      b.addEventListener("click", () => {
        const it = state.cart.find((x) => x.id === b.getAttribute("data-cart-inc"));
        if (it) { it.qty++; saveCart(); renderCartUI(false); }
      });
    });
    listEl.querySelectorAll("[data-cart-dec]").forEach((b) => {
      b.addEventListener("click", () => {
        const id = b.getAttribute("data-cart-dec");
        const it = state.cart.find((x) => x.id === id);
        if (it) {
          it.qty--;
          if (it.qty <= 0) state.cart = state.cart.filter((x) => x.id !== id);
          saveCart();
          renderCartUI(false);
        }
      });
    });
    listEl.querySelectorAll("[data-cart-del]").forEach((b) => {
      b.addEventListener("click", () => {
        const id = b.getAttribute("data-cart-del");
        state.cart = state.cart.filter((x) => x.id !== id);
        saveCart();
        renderCartUI(false);
      });
    });
  }

  function openCartDrawer() {
    document.getElementById("cart-backdrop")?.classList.add("open");
    document.getElementById("cart-drawer")?.classList.add("open");
  }

  function closeCartDrawer() {
    document.getElementById("cart-backdrop")?.classList.remove("open");
    document.getElementById("cart-drawer")?.classList.remove("open");
  }

  function initCartDrawerEvents() {
    document.querySelectorAll("[data-open-cart]").forEach((b) => b.addEventListener("click", openCartDrawer));
    document.getElementById("close-cart-btn")?.addEventListener("click", closeCartDrawer);
    document.getElementById("cart-backdrop")?.addEventListener("click", closeCartDrawer);

    const clearBtn = document.getElementById("clear-cart-btn");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        state.cart = [];
        saveCart();
        renderCartUI(false);
      });
    }

    const transferToFormBtn = document.getElementById("cart-to-contact-btn");
    if (transferToFormBtn) {
      transferToFormBtn.addEventListener("click", () => {
        const summary = buildCartSummaryText();
        const msgField = document.getElementById("contact-message");
        if (msgField && summary) {
          msgField.value = summary;
        }
        closeCartDrawer();
        document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
      });
    }

    renderCartUI(false);
  }

  function buildCartSummaryText() {
    if (state.cart.length === 0) {
      return "Hola equipo Perspective SCT, solicito agendar mi Diagnóstico Técnico y Operativo Gratuito bajo NDA.";
    }
    const total = state.cart.reduce((acc, i) => acc + i.price * i.qty, 0);
    const lines = state.cart.map((i) => `• (${i.qty}x) ${i.title} — ${i.customLabel || formatMXN(i.price * i.qty) + " MXN"}`);
    return `Hola Perspective SCT, deseo formalizar cotización / diagnóstico para la siguiente Bolsa de Innovación:\n\n${lines.join("\n")}\n\nInversión estimada en bolsa: ${formatMXN(total)} MXN (Requiere factura CFDI 4.0 y firma de NDA Bidireccional).`;
  }

  // ==========================================================================
  // 8. CENTRO LEGAL Y DE CUMPLIMIENTO (MODAL 5 PESTAÑAS) + COOKIES
  // ==========================================================================
  function openLegalModal(tabKey) {
    const modal = document.getElementById("legal-modal");
    if (!modal) return;
    modal.classList.add("open");
    renderLegalTab(tabKey || "privacidad");
  }

  function closeLegalModal() {
    document.getElementById("legal-modal")?.classList.remove("open");
  }

  function renderLegalTab(tabKey) {
    const doc = DATA.legalDocs[tabKey] || DATA.legalDocs.privacidad;
    const titleEl = document.getElementById("legal-doc-title");
    const updatedEl = document.getElementById("legal-doc-updated");
    const bodyEl = document.getElementById("legal-doc-body");

    if (titleEl) titleEl.textContent = doc.title;
    if (updatedEl) updatedEl.textContent = doc.updated;
    if (bodyEl) bodyEl.innerHTML = doc.content;

    document.querySelectorAll("[data-legal-tab]").forEach((btn) => {
      const isAct = btn.getAttribute("data-legal-tab") === tabKey;
      btn.className = isAct
        ? "px-3.5 py-2 rounded-xl text-xs font-extrabold bg-gradient-to-r from-amber-400 to-cyan-400 text-slate-950 cursor-pointer transition"
        : "px-3.5 py-2 rounded-xl text-xs font-bold bg-white/5 text-slate-300 hover:bg-white/15 cursor-pointer transition";
    });
  }

  function initLegalAndCookies() {
    document.querySelectorAll("[data-open-legal]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        openLegalModal(el.getAttribute("data-open-legal"));
      });
    });

    document.querySelectorAll("[data-legal-tab]").forEach((btn) => {
      btn.addEventListener("click", () => renderLegalTab(btn.getAttribute("data-legal-tab")));
    });

    document.getElementById("close-legal-btn")?.addEventListener("click", closeLegalModal);
    document.getElementById("legal-modal")?.addEventListener("click", (e) => {
      if (e.target.id === "legal-modal") closeLegalModal();
    });

    // Cookie Banner LFPDPPP
    const cookieBanner = document.getElementById("cookie-banner");
    if (cookieBanner) {
      let accepted = null;
      try { accepted = localStorage.getItem(STORAGE_COOKIE_KEY); } catch (e) {}
      if (!accepted) {
        setTimeout(() => cookieBanner.classList.remove("hidden"), 1200);
      }
      document.getElementById("cookie-accept-all")?.addEventListener("click", () => {
        try { localStorage.setItem(STORAGE_COOKIE_KEY, "all"); } catch (e) {}
        cookieBanner.classList.add("hidden");
      });
      document.getElementById("cookie-essential")?.addEventListener("click", () => {
        try { localStorage.setItem(STORAGE_COOKIE_KEY, "essential"); } catch (e) {}
        cookieBanner.classList.add("hidden");
      });
    }
  }

  // ==========================================================================
  // 9. COMMAND PALETTE (CTRL+K / BUSCADOR RÁPIDO) & CRT BOT ASSISTANT
  // ==========================================================================
  function initCommandPaletteAndBot() {
    const cmdModal = document.getElementById("cmd-modal");
    const cmdInput = document.getElementById("cmd-input");
    const cmdResults = document.getElementById("cmd-results");

    function openCmd() {
      if (!cmdModal) return;
      cmdModal.classList.add("open");
      renderCmdResults("");
      setTimeout(() => cmdInput?.focus(), 60);
    }
    function closeCmd() {
      cmdModal?.classList.remove("open");
    }

    document.querySelectorAll("[data-open-cmd]").forEach((b) => b.addEventListener("click", openCmd));
    document.getElementById("close-cmd-btn")?.addEventListener("click", closeCmd);
    cmdModal?.addEventListener("click", (e) => {
      if (e.target === cmdModal) closeCmd();
    });

    window.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openCmd();
      }
      if (e.key === "Escape") {
        closeCmd();
        closeLegalModal();
        closeCartDrawer();
        document.getElementById("crt-bot-popover")?.classList.add("hidden");
      }
    });

    function renderCmdResults(query) {
      if (!cmdResults) return;
      const q = query.trim().toLowerCase();
      const pool = [
        ...DATA.packages.map((p) => ({ type: "Paquete", title: `${p.title} (${p.badge})`, sub: `${formatMXN(p.price)} MXN`, href: "#productos" })),
        ...DATA.retainers.map((r) => ({ type: "Iguala", title: r.title, sub: r.customPriceLabel || `${formatMXN(r.price)}/mes`, href: "#productos" })),
        ...DATA.verticals.map((v) => ({ type: `Vertical #${v.num}`, title: v.name, sub: `${formatMXN(v.price)} MXN/h`, href: "#verticales" })),
        { type: "Legal", title: "Aviso de Privacidad LFPDPPP & AES-256", sub: "Política Oficial", legal: "privacidad" },
        { type: "Legal", title: "Contrato Marco MSA, SOW & Anticipos", sub: "Términos B2B", legal: "terminos" },
        { type: "Legal", title: "Propiedad Intelectual 100% Post-Pago", sub: "Código & 3D", legal: "ip" }
      ];

      const matches = pool.filter((item) => !q || item.title.toLowerCase().includes(q) || item.type.toLowerCase().includes(q)).slice(0, 8);

      cmdResults.innerHTML = matches.map((m, idx) => `
        <button
          type="button"
          data-cmd-idx="${idx}"
          data-cmd-href="${m.href || ""}"
          data-cmd-legal="${m.legal || ""}"
          class="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 flex items-center justify-between gap-3 transition cursor-pointer"
        >
          <div>
            <span class="text-[10px] font-mono-code uppercase px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 mr-2">${m.type}</span>
            <span class="text-sm font-bold text-white">${m.title}</span>
          </div>
          <span class="text-xs font-mono-code text-cyan-300 shrink-0">${m.sub}</span>
        </button>
      `).join("");

      cmdResults.querySelectorAll("[data-cmd-idx]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const legalKey = btn.getAttribute("data-cmd-legal");
          const href = btn.getAttribute("data-cmd-href");
          closeCmd();
          if (legalKey) {
            openLegalModal(legalKey);
          } else if (href) {
            document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
          }
        });
      });
    }

    cmdInput?.addEventListener("input", (e) => renderCmdResults(e.target.value));

    // CRT Corner Assistant Bot (Homenaje directo al monitor interactivo inferior derecho de Paranice)
    const botBtn = document.getElementById("crt-bot-trigger");
    const botPopover = document.getElementById("crt-bot-popover");
    const closeBotBtn = document.getElementById("close-crt-bot");

    botBtn?.addEventListener("click", () => {
      botPopover?.classList.toggle("hidden");
    });
    closeBotBtn?.addEventListener("click", () => {
      botPopover?.classList.add("hidden");
    });

    document.querySelectorAll("[data-bot-prompt]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const promptText = btn.getAttribute("data-bot-prompt");
        const msgField = document.getElementById("contact-message");
        if (msgField) msgField.value = promptText;
        botPopover?.classList.add("hidden");
        document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
      });
    });

    // Burbujas de diálogo de los 3 personajes del cierre (Estilo Paranice Screenshot 3)
    document.querySelectorAll("[data-speech-topic]").forEach((bubble) => {
      bubble.addEventListener("click", () => {
        const topic = bubble.getAttribute("data-speech-topic");
        const msgField = document.getElementById("contact-message");
        if (msgField) msgField.value = topic;
        document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
        msgField?.focus();
      });
    });
  }

  // ==========================================================================
  // 10. FORMULARIO EJECUTIVO DE CONTACTO & MENÚ MÓVIL
  // ==========================================================================
  function initContactFormAndMobileNav() {
    const mobileBtn = document.getElementById("mobile-menu-btn");
    const mobilePanel = document.getElementById("mobile-menu-panel");
    mobileBtn?.addEventListener("click", () => {
      mobilePanel?.classList.toggle("hidden");
    });
    mobilePanel?.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => mobilePanel.classList.add("hidden"));
    });

    const form = document.getElementById("perspective-contact-form");
    const feedback = document.getElementById("contact-feedback");
    const copyBriefBtn = document.getElementById("copy-brief-btn");

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("contact-name")?.value.trim() || "";
        const company = document.getElementById("contact-company")?.value.trim() || "";
        const email = document.getElementById("contact-email")?.value.trim() || "";
        const vertical = document.getElementById("contact-vertical")?.value || "Diagnóstico Integral";
        const nda = document.getElementById("contact-nda")?.checked;
        const msg = document.getElementById("contact-message")?.value.trim() || "";

        const subject = encodeURIComponent(`[Perspective SCT] Solicitud B2B: ${vertical} — ${company || name}`);
        const body = encodeURIComponent(
          `SOLICITUD EJECUTIVA — PERSPECTIVE SCT\n` +
          `========================================\n` +
          `Nombre / Cargo: ${name}\n` +
          `Empresa / Razón Social: ${company || "Por definir"}\n` +
          `Correo de Contacto: ${email}\n` +
          `Enfoque Principal: ${vertical}\n` +
          `Requiere NDA Bidireccional Previo: ${nda ? "Sí (Prioritario)" : "Estándar"}\n\n` +
          `Detalle / Bolsa Seleccionada:\n${msg}\n`
        );

        window.location.href = `mailto:${DATA.brand.email}?subject=${subject}&body=${body}`;

        if (feedback) {
          feedback.classList.remove("hidden");
          feedback.innerHTML = `
            <div class="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-400/40 text-emerald-200 text-sm">
              <strong class="text-white">✓ ¡Brief Ejecutivo Generado!</strong> Se abrió tu cliente de correo hacia <span class="font-mono-code underline">${DATA.brand.email}</span>. Tiempo de respuesta garantizado bajo SLA: <strong>24–48h hábiles</strong> (Emergencias: 1–2h).
            </div>
          `;
        }
      });
    }

    if (copyBriefBtn) {
      copyBriefBtn.addEventListener("click", () => {
        const text = buildCartSummaryText();
        navigator.clipboard?.writeText(text).then(() => {
          const orig = copyBriefBtn.textContent;
          copyBriefBtn.textContent = "✓ ¡Copiado al portapapeles!";
          setTimeout(() => { copyBriefBtn.textContent = orig; }, 1600);
        });
      });
    }
  }

  // ==========================================================================
  // BOOTSTRAP
  // ==========================================================================
  document.addEventListener("DOMContentLoaded", () => {
    renderPedestalCarousel();
    initCarouselControls();
    renderVerticals();
    initVerticalFilters();
    initCalculator();
    initUVPComparator();
    initCartDrawerEvents();
    initLegalAndCookies();
    initCommandPaletteAndBot();
    initContactFormAndMobileNav();
    initPrismCanvas();
    initSmoothScrollAndGSAP();

    if (typeof window.lucide !== "undefined") {
      window.lucide.createIcons();
    }
  });
})();
