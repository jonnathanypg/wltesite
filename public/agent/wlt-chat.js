/**
 * ============================================================
 * AIKROFY x WEBLIFETECH CONVERSATIONAL NAVIGATOR — Universal Tag
 * ============================================================
 * Versión: 3.0.0 (Native Agentic Architecture & Zero-Config RAG)
 * 
 * Capacidades Principales:
 *  1. Control total de navegación en tiempo real (SPA & Multi-página)
 *  2. Soporte nativo para STT (Voice-to-Text) y TTS (Text-to-Speech)
 *  3. Ingestión RAG contextual automática a cuentas Aikrofy
 *  4. Compatibilidad universal: Next.js, HTML nativo, PHP, WordPress,
 *     Webflow, Shopify, CMS Open Source y plataformas Vibe-Coding
 *  5. Detección automática del DOM si no existe un archivo SKILL.md
 *  6. Diseño Glassmorphism heredado de la plataforma SaaS Aikrofy
 * ============================================================
 */

(function (window, document) {
  "use strict";

  // Prevenir inicialización duplicada
  if (window.__AIKROFY_NAVIGATOR_INITIALIZED__) return;
  window.__AIKROFY_NAVIGATOR_INITIALIZED__ = true;

  const scriptTag = document.currentScript ||
    document.querySelector('script[data-agent-id]') ||
    document.querySelector('script[src*="wlt-chat.js"]');

  const CONFIG = {
    agentId: scriptTag?.getAttribute('data-agent-id') || 'aikrofy-chief-executive',
    apiUrl: scriptTag?.getAttribute('data-api-url') || 'https://api.weblifetech.com',
    crmEndpoint: scriptTag?.getAttribute('data-crm-endpoint') || 'https://crm.weblifetech.com/ingest',
    voiceApiUrl: scriptTag?.getAttribute('data-voice-api') || 'https://media.weblifetech.com/api',
    theme: scriptTag?.getAttribute('data-theme') || 'dark',
    brandColor: scriptTag?.getAttribute('data-brand-color') || '#00E5FF',
    brandSecondary: scriptTag?.getAttribute('data-brand-secondary') || '#FF6B00',
    lang: scriptTag?.getAttribute('data-lang') || 'es',
    siteName: scriptTag?.getAttribute('data-site-name') || document.title,
    autoSpeak: scriptTag?.getAttribute('data-auto-speak') === 'true',
  };

  const STATE = {
    open: false,
    history: [],
    currentPage: window.location.pathname,
    sessionId: 'aikrofy-' + Date.now() + '-' + Math.random().toString(36).substring(2, 9),
    leadData: {},
    isRecording: false,
    isSpeaking: false,
    mediaRecorder: null,
    audioChunks: [],
    currentAudio: null,
    discoveredSiteMap: [],
    lang: CONFIG.lang,
  };

  // Diccionario Bilingüe Interno del Agente
  const I18N = {
    es: {
      welcome: "👋 Hola, soy el <strong>Asistente Agéntico de WEBLIFETECH / Aikrofy</strong>.",
      currentIn: "Está explorando la sección",
      helpPrompt: "¿Qué desea consultar o a qué página desea que le dirija?",
      navHome: "Inicio",
      navLab: "Labs R&D",
      navAgency: "Agencia FDE",
      navServices: "Servicios & Tarifas",
      navContact: "Contacto",
      navAudit: "Herramienta AuditWLT",
      navCalificar: "Calificar Proyecto",
      micListening: "Escuchando... hable ahora",
      micHold: "Procesando su audio con IA...",
      btnSend: "Enviar",
      inputPlaceholder: "Escriba o use el micrófono para navegar...",
      speaking: "Reproduciendo voz...",
    },
    en: {
      welcome: "👋 Hello, I am the <strong>WEBLIFETECH / Aikrofy Agentic Navigator</strong>.",
      currentIn: "Currently exploring",
      helpPrompt: "What would you like to consult or where should I navigate you?",
      navHome: "Home",
      navLab: "Labs R&D",
      navAgency: "FDE Agency",
      navServices: "Services & Pricing",
      navContact: "Contact",
      navAudit: "AuditWLT Tool",
      navCalificar: "Qualify Project",
      micListening: "Listening... speak now",
      micHold: "Processing your audio with AI...",
      btnSend: "Send",
      inputPlaceholder: "Type or use voice to navigate...",
      speaking: "Playing voice response...",
    }
  };

  // Sitemap canónico para sitios WEBLIFETECH
  const CANONICAL_PAGES = [
    { path: '/', label: 'Home', labelEn: 'Home', descEs: 'Framework Vibe-to-Prod y comparativa Océano Azul', descEn: 'Vibe-to-Prod framework and Blue Ocean comparison' },
    { path: '/lab', label: 'Labs R&D', labelEn: 'Labs R&D', descEs: 'Investigación en Swarms e infraestructura agéntica', descEn: 'Swarms research and agentic infrastructure' },
    { path: '/agency', label: 'Agencia FDE', labelEn: 'FDE Agency', descEs: 'Forward Deployed Engineering e ingeniería de producción', descEn: 'Forward Deployed Engineering and production systems' },
    { path: '/servicios', label: 'Servicios', labelEn: 'Services', descEs: 'Tarifario de Fase 1 Audit, Fase 2 Hardening y Retainer', descEn: 'Phase 1 Audit, Phase 2 Hardening & Retainer pricing' },
    { path: '/contacto', label: 'Contacto', labelEn: 'Contact', descEs: 'Canales directos y reunión técnica con ingenieros', descEn: 'Direct engineering channels and technical meeting' },
    { path: '/tools/auditwlt', label: 'AuditWLT Tool', labelEn: 'AuditWLT Tool', descEs: 'Auditoría SEO, seguridad, CMS y Vibe-coding', descEn: 'SEO, security, CMS and Vibe-coding audit engine' },
    { path: '/calificar', label: 'Calificar', labelEn: 'Qualify', descEs: 'Evaluación y enrutamiento dinámico en 5 pasos', descEn: 'Dynamic 5-step qualification and routing' },
    { path: '/landing/vibe-to-prod', label: 'Landing Rescue', labelEn: 'Landing Rescue', descEs: 'Página de alta conversión para rescate de prototipos', descEn: 'High-conversion prototype rescue landing' },
  ];

  // ── MOTOR DE NAVEGACIÓN UNIVERSAL (SPA & MULTI-PAGE) ─────────
  function navigateTo(path) {
    if (!path) return;
    STATE.currentPage = path;

    // 1. Si estamos en Next.js / SPA con History API
    if (window.history && window.history.pushState) {
      window.history.pushState({}, '', path);
      window.dispatchEvent(new PopStateEvent('popstate', { state: {} }));
      
      // Si Next.js no capturó el popstate de forma síncrona, usamos location como fallback
      setTimeout(() => {
        if (window.location.pathname !== path) {
          window.location.href = path;
        }
      }, 150);
    } else {
      window.location.href = path;
    }

    updateNavBar();
    ingestContextToAikrofyRAG({
      event: 'agent_navigation',
      targetPath: path,
      source: 'conversational_navigator'
    });
  }

  // ── AUTO-DESCUBRIMIENTO DEL DOM (PARA CMS / SITIOS LEGACY) ───
  function discoverSiteHierarchy() {
    const links = Array.from(document.querySelectorAll('a[href]'));
    const internalRoutes = new Set();

    links.forEach(a => {
      const href = a.getAttribute('href');
      if (href && href.startsWith('/') && !href.startsWith('//') && !href.includes('#')) {
        internalRoutes.add(href);
      }
    });

    STATE.discoveredSiteMap = Array.from(internalRoutes).map(route => ({
      path: route,
      label: route.replace('/', '').replace(/-/g, ' ').toUpperCase() || 'HOME'
    }));
  }

  // ── INGESTIÓN RAG EN TIEMPO REAL A AIKROFY ───────────────────
  function ingestContextToAikrofyRAG(extraData = {}) {
    const payload = {
      agentId: CONFIG.agentId,
      sessionId: STATE.sessionId,
      currentPage: window.location.pathname,
      pageTitle: document.title,
      language: STATE.lang,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      domSnippet: document.querySelector('h1')?.innerText || '',
      ...extraData
    };

    // Intentar sync via beacon o fetch no bloqueante
    try {
      if (navigator.sendBeacon) {
        navigator.sendBeacon(CONFIG.crmEndpoint, JSON.stringify(payload));
      } else {
        fetch(CONFIG.crmEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(() => {});
      }
    } catch (_) {}
  }

  // ── SÍNTESIS DE VOZ NATIVA (TTS) ──────────────────────────────
  function speakText(text) {
    if (!text || typeof window === 'undefined') return;

    // Limpieza de etiquetas HTML para el lector de voz
    const cleanText = text.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').trim();
    if (!cleanText) return;

    // Si ya existe audio en reproducción, detenerlo
    if (STATE.currentAudio) {
      STATE.currentAudio.pause();
      STATE.currentAudio = null;
    }

    // Intentar síntesis via Web Speech API nativa (0 latencia)
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = STATE.lang === 'es' ? 'es-ES' : 'en-US';
      utterance.rate = 1.05;
      utterance.pitch = 1.0;
      
      utterance.onstart = () => { STATE.isSpeaking = true; updateVoiceIndicator(); };
      utterance.onend = () => { STATE.isSpeaking = false; updateVoiceIndicator(); };
      utterance.onerror = () => { STATE.isSpeaking = false; updateVoiceIndicator(); };

      window.speechSynthesis.speak(utterance);
    }
  }

  // ── GRABACIÓN DE VOZ (STT) ───────────────────────────────────
  async function toggleVoiceRecording() {
    const micBtn = document.getElementById('aikrofy-mic-btn');
    if (!micBtn) return;

    // Si ya está usando SpeechRecognition nativo
    if (('webkitSpeechRecognition' in window) || ('SpeechRecognition' in window)) {
      const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRec();
      recognition.lang = STATE.lang === 'es' ? 'es-ES' : 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      micBtn.classList.add('aikrofy-recording');
      const typingEl = showTyping();

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        micBtn.classList.remove('aikrofy-recording');
        removeTyping();
        if (transcript) {
          sendMessage(transcript);
        }
      };

      recognition.onerror = () => {
        micBtn.classList.remove('aikrofy-recording');
        removeTyping();
      };

      recognition.onend = () => {
        micBtn.classList.remove('aikrofy-recording');
      };

      recognition.start();
      return;
    }

    alert(STATE.lang === 'es' ? 'Su navegador no soporta reconocimiento de voz nativo.' : 'Native speech recognition not supported in this browser.');
  }

  // ── ESTILOS DARK GLASSMORPHISM AIKROFY ───────────────────────
  function injectStyles() {
    const css = `
      :root {
        --aik-brand: ${CONFIG.brandColor};
        --aik-secondary: ${CONFIG.brandSecondary};
        --aik-bg: #070B14;
        --aik-surface: rgba(15, 23, 42, 0.85);
        --aik-surface-light: rgba(30, 41, 59, 0.7);
        --aik-border: rgba(0, 229, 255, 0.2);
        --aik-border-subtle: rgba(255, 255, 255, 0.08);
        --aik-text: #F8FAFC;
        --aik-muted: #94A3B8;
        --aik-radius: 24px;
      }
      #aikrofy-fab {
        position: fixed;
        bottom: 28px;
        right: 28px;
        z-index: 999998;
        display: flex;
        align-items: center;
        gap: 12px;
        cursor: pointer;
        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        filter: drop-shadow(0 10px 30px rgba(0, 229, 255, 0.35));
      }
      #aikrofy-fab:hover { transform: scale(1.06) translateY(-2px); }
      #aikrofy-fab-btn {
        width: 60px;
        height: 60px;
        border-radius: 20px;
        background: linear-gradient(135deg, var(--aik-brand), #3B82F6);
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 25px rgba(0, 229, 255, 0.5);
      }
      #aikrofy-fab-pill {
        background: var(--aik-surface);
        border: 1px solid var(--aik-border);
        border-radius: 40px;
        padding: 9px 18px;
        font-size: 12px;
        font-weight: 700;
        color: var(--aik-text);
        backdrop-filter: blur(16px);
        box-shadow: 0 8px 32px rgba(0,0,0,0.4);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        display: flex;
        align-items: center;
        gap: 8px;
        letter-spacing: 0.3px;
      }
      #aikrofy-fab-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #10B981;
        box-shadow: 0 0 10px #10B981;
        animation: aik-pulse 1.8s infinite;
      }
      @keyframes aik-pulse {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.35); opacity: 0.7; }
      }
      #aikrofy-panel {
        position: fixed;
        bottom: 100px;
        right: 28px;
        width: 400px;
        max-height: 620px;
        height: 82vh;
        z-index: 999999;
        border-radius: var(--aik-radius);
        background: var(--aik-bg);
        border: 1px solid var(--aik-border);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        box-shadow: 0 40px 100px rgba(0,0,0,0.8), 0 0 0 1px var(--aik-border);
        backdrop-filter: blur(28px);
        transform: scale(0.92) translateY(24px);
        opacity: 0;
        pointer-events: none;
        transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      #aikrofy-panel.aik-open {
        transform: scale(1) translateY(0);
        opacity: 1;
        pointer-events: all;
      }
      #aikrofy-header {
        padding: 16px 20px;
        background: linear-gradient(135deg, rgba(0, 229, 255, 0.15), rgba(59, 130, 246, 0.05));
        border-bottom: 1px solid var(--aik-border-subtle);
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      #aikrofy-header-info {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .aik-avatar {
        width: 38px;
        height: 38px;
        border-radius: 12px;
        background: linear-gradient(135deg, var(--aik-brand), var(--aik-secondary));
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
      }
      .aik-title { font-size: 13px; font-weight: 800; color: #fff; letter-spacing: -0.2px; }
      .aik-sub { font-size: 10px; font-mono; color: var(--aik-brand); text-transform: uppercase; }
      .aik-lang-toggle {
        padding: 4px 8px;
        border-radius: 20px;
        border: 1px solid var(--aik-border);
        background: rgba(255,255,255,0.05);
        color: var(--aik-brand);
        font-size: 10px;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.2s;
      }
      .aik-lang-toggle:hover { background: var(--aik-brand); color: #000; }
      #aikrofy-nav-ribbon {
        display: flex;
        gap: 6px;
        padding: 8px 12px;
        overflow-x: auto;
        border-bottom: 1px solid var(--aik-border-subtle);
        background: rgba(0,0,0,0.3);
        scrollbar-width: none;
      }
      #aikrofy-nav-ribbon::-webkit-scrollbar { display: none; }
      .aik-pill-btn {
        flex-shrink: 0;
        padding: 5px 12px;
        border-radius: 20px;
        font-size: 11px;
        font-weight: 600;
        border: 1px solid var(--aik-border-subtle);
        background: rgba(255,255,255,0.03);
        color: var(--aik-muted);
        cursor: pointer;
        transition: all 0.2s;
      }
      .aik-pill-btn:hover, .aik-pill-btn.active {
        background: var(--aik-brand);
        color: #000;
        border-color: var(--aik-brand);
        font-weight: 700;
      }
      #aikrofy-messages {
        flex: 1;
        overflow-y: auto;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .aik-msg { display: flex; flex-direction: column; gap: 4px; animation: aik-fade 0.2s ease-out; }
      @keyframes aik-fade { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
      .aik-msg-user { align-items: flex-end; }
      .aik-msg-agent { align-items: flex-start; }
      .aik-bubble {
        max-width: 85%;
        padding: 11px 15px;
        border-radius: 18px;
        font-size: 13px;
        line-height: 1.5;
      }
      .aik-bubble-user {
        background: linear-gradient(135deg, var(--aik-brand), #2563EB);
        color: #fff;
        border-radius: 18px 18px 4px 18px;
        font-weight: 500;
      }
      .aik-bubble-agent {
        background: var(--aik-surface);
        border: 1px solid var(--aik-border-subtle);
        color: var(--aik-text);
        border-radius: 18px 18px 18px 4px;
      }
      .aik-audio-btn {
        margin-top: 6px;
        padding: 4px 10px;
        border-radius: 12px;
        background: rgba(0, 229, 255, 0.1);
        border: 1px solid var(--aik-border);
        color: var(--aik-brand);
        font-size: 10px;
        font-weight: 600;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 4px;
      }
      .aik-audio-btn:hover { background: var(--aik-brand); color: #000; }
      .aik-quick-replies { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }
      .aik-quick-btn {
        padding: 5px 12px;
        border-radius: 16px;
        font-size: 11px;
        border: 1px solid var(--aik-brand);
        background: rgba(0, 229, 255, 0.05);
        color: var(--aik-brand);
        cursor: pointer;
        transition: all 0.2s;
      }
      .aik-quick-btn:hover { background: var(--aik-brand); color: #000; }
      #aikrofy-input-bar {
        padding: 12px 16px;
        border-top: 1px solid var(--aik-border-subtle);
        display: flex;
        gap: 8px;
        align-items: center;
        background: rgba(0,0,0,0.2);
      }
      #aikrofy-input {
        flex: 1;
        background: rgba(255,255,255,0.05);
        border: 1px solid var(--aik-border-subtle);
        border-radius: 14px;
        padding: 10px 14px;
        font-size: 13px;
        color: #fff;
        outline: none;
        resize: none;
        min-height: 42px;
        max-height: 90px;
        font-family: inherit;
      }
      #aikrofy-input:focus { border-color: var(--aik-brand); }
      .aik-action-btn {
        width: 42px;
        height: 42px;
        border-radius: 14px;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s;
      }
      #aikrofy-mic-btn {
        background: rgba(255,255,255,0.06);
        color: var(--aik-brand);
        border: 1px solid var(--aik-border);
      }
      #aikrofy-mic-btn.aikrofy-recording {
        background: #EF4444;
        color: #fff;
        animation: aik-pulse 1s infinite;
      }
      #aikrofy-send-btn {
        background: linear-gradient(135deg, var(--aik-brand), var(--aik-secondary));
        color: #000;
      }
      #aikrofy-send-btn:hover { transform: scale(1.05); }
      #aikrofy-footer {
        text-align: center;
        padding: 6px;
        font-size: 9px;
        color: var(--aik-muted);
        font-mono;
        border-top: 1px solid var(--aik-border-subtle);
        background: rgba(0,0,0,0.4);
      }
      @media (max-width: 480px) {
        #aikrofy-panel { right: 12px; bottom: 90px; width: calc(100vw - 24px); height: 75vh; }
        #aikrofy-fab { right: 16px; bottom: 20px; }
      }
    `;
    const style = document.createElement('style');
    style.id = 'aikrofy-agent-styles';
    style.textContent = css;
    document.head.appendChild(style);
  }

  // ── CONSTRUIR UI DEL AGENTE AIKROFY ──────────────────────────
  function buildWidget() {
    const fab = document.createElement('div');
    fab.id = 'aikrofy-fab';
    fab.innerHTML = `
      <div id="aikrofy-fab-pill">
        <span id="aikrofy-fab-dot"></span>
        <span>AI Navigator & Voice</span>
      </div>
      <button id="aikrofy-fab-btn" aria-label="Abrir Asistente Aikrofy">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
          <line x1="12" x2="12" y1="19" y2="22"/>
        </svg>
      </button>
    `;
    document.body.appendChild(fab);

    const panel = document.createElement('div');
    panel.id = 'aikrofy-panel';
    panel.innerHTML = `
      <div id="aikrofy-header">
        <div id="aikrofy-header-info">
          <div class="aik-avatar">⚡</div>
          <div>
            <div class="aik-title">Aikrofy AI Navigator</div>
            <div class="aik-sub">Live RAG · Voice Enabled</div>
          </div>
        </div>
        <div style="display:flex; gap:6px; align-items:center;">
          <button id="aik-toggle-lang" class="aik-lang-toggle">${STATE.lang.toUpperCase()}</button>
          <button id="aikrofy-close-btn" style="background:transparent;border:none;color:#fff;cursor:pointer;font-size:16px;padding:4px 8px;">✕</button>
        </div>
      </div>

      <div id="aikrofy-nav-ribbon">
        ${CANONICAL_PAGES.map(p => `
          <button class="aik-pill-btn" data-path="${p.path}">
            ${STATE.lang === 'es' ? p.label : p.labelEn}
          </button>
        `).join('')}
      </div>

      <div id="aikrofy-messages"></div>

      <div id="aikrofy-input-bar">
        <button id="aikrofy-mic-btn" class="aik-action-btn" title="Hablar por micrófono">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
            <line x1="12" x2="12" y1="19" y2="22"/>
          </svg>
        </button>
        <textarea id="aikrofy-input" rows="1" placeholder="${I18N[STATE.lang].inputPlaceholder}"></textarea>
        <button id="aikrofy-send-btn" class="aik-action-btn" title="Enviar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.5">
            <line x1="22" y1="2" x2="11" y2="13"/>
            <polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        </button>
      </div>

      <div id="aikrofy-footer">AIKROFY AGENTIC ARCHITECTURE · RAG PROTOCOL 2026</div>
    `;
    document.body.appendChild(panel);
  }

  // ── MENSAJES & RESPUESTAS ────────────────────────────────────
  function addMessage(role, content, quickReplies) {
    const container = document.getElementById('aikrofy-messages');
    if (!container) return;

    const msgEl = document.createElement('div');
    msgEl.className = `aik-msg aik-msg-${role}`;

    const bubble = document.createElement('div');
    bubble.className = `aik-bubble aik-bubble-${role}`;
    bubble.innerHTML = content;

    // Si es agente, agregar botón de lectura de voz
    if (role === 'agent') {
      const audioBtn = document.createElement('button');
      audioBtn.className = 'aik-audio-btn';
      audioBtn.innerHTML = '🔊 Escuchar';
      audioBtn.onclick = () => speakText(content);
      bubble.appendChild(document.createElement('br'));
      bubble.appendChild(audioBtn);

      if (CONFIG.autoSpeak) {
        speakText(content);
      }
    }

    msgEl.appendChild(bubble);

    if (quickReplies && quickReplies.length > 0) {
      const qr = document.createElement('div');
      qr.className = 'aik-quick-replies';
      quickReplies.forEach(qrb => {
        const btn = document.createElement('button');
        btn.className = 'aik-quick-btn';
        btn.textContent = qrb.label;
        btn.onclick = () => sendMessage(qrb.value || qrb.label);
        qr.appendChild(btn);
      });
      msgEl.appendChild(qr);
    }

    STATE.history.push({ role, content });
    container.appendChild(msgEl);
    container.scrollTop = container.scrollHeight;
  }

  function showTyping() {
    const container = document.getElementById('aikrofy-messages');
    const typing = document.createElement('div');
    typing.className = 'aik-msg aik-msg-agent';
    typing.id = 'aikrofy-typing';
    typing.innerHTML = '<div class="aik-bubble aik-bubble-agent"><em>Pensando...</em></div>';
    container.appendChild(typing);
    container.scrollTop = container.scrollHeight;
    return typing;
  }

  function removeTyping() {
    const t = document.getElementById('aikrofy-typing');
    if (t) t.remove();
  }

  function updateVoiceIndicator() {
    const mic = document.getElementById('aikrofy-mic-btn');
    if (mic && STATE.isSpeaking) {
      mic.style.borderColor = '#10B981';
    } else if (mic) {
      mic.style.borderColor = '';
    }
  }

  // ── MOTOR DE INTENCIÓN NLU & ENRUTAMIENTO ────────────────────
  function parseIntent(text) {
    const t = text.toLowerCase();

    if (/(home|inicio|principal|start)/.test(t)) return { type: 'navigate', path: '/' };
    if (/(lab|investiga|r&d|research|swarms)/.test(t)) return { type: 'navigate', path: '/lab' };
    if (/(agencia|agency|fde|forward|team)/.test(t)) return { type: 'navigate', path: '/agency' };
    if (/(servicio|service|precio|price|tarifa|costo|fase)/.test(t)) return { type: 'navigate', path: '/servicios' };
    if (/(contacto|contact|email|whatsapp|llamar)/.test(t)) return { type: 'navigate', path: '/contacto' };
    if (/(audit|herramienta|tool|escan|scan|vibe)/.test(t)) return { type: 'navigate', path: '/tools/auditwlt' };
    if (/(califica|evalua|qualify|wizard|formulario)/.test(t)) return { type: 'navigate', path: '/calificar' };

    return { type: 'general' };
  }

  async function sendMessage(text) {
    if (!text || !text.trim()) return;
    const input = document.getElementById('aikrofy-input');
    if (input) input.value = '';

    addMessage('user', text);
    showTyping();

    ingestContextToAikrofyRAG({ event: 'user_message', message: text });

    await new Promise(r => setTimeout(r, 450));
    removeTyping();

    const intent = parseIntent(text);

    if (intent.type === 'navigate') {
      const page = CANONICAL_PAGES.find(p => p.path === intent.path);
      navigateTo(intent.path);

      const msg = STATE.lang === 'es'
        ? `🚀 Navegando a <strong>${page?.label}</strong>. ${page?.descEs}`
        : `🚀 Navigating to <strong>${page?.labelEn}</strong>. ${page?.descEn}`;

      addMessage('agent', msg, [
        { label: STATE.lang === 'es' ? 'Ver Servicios' : 'View Services', value: 'Ir a servicios' },
        { label: STATE.lang === 'es' ? 'Auditar Web' : 'Audit Website', value: 'Ir a audit tool' }
      ]);
      return;
    }

    // Respuesta general asistida
    const resp = STATE.lang === 'es'
      ? `He recibido su consulta. Como sistema agéntico conectado a <strong>Aikrofy</strong>, puedo guiarle por el sitio, auditar su arquitectura de código o calificar su MVP para producción.`
      : `I received your query. As an agentic system powered by <strong>Aikrofy</strong>, I can navigate the site, audit your codebase architecture or qualify your MVP for enterprise production.`;

    addMessage('agent', resp, [
      { label: STATE.lang === 'es' ? '🔍 Auditar Mi Web' : '🔍 Audit My Website', value: 'Ir a audit tool' },
      { label: STATE.lang === 'es' ? '📋 Ver Tarifario' : '📋 Pricing Table', value: 'Ir a servicios' },
      { label: STATE.lang === 'es' ? '🏁 Calificar Proyecto' : '🏁 Qualify Project', value: 'Ir a calificar' }
    ]);
  }

  // ── TOGGLE PANEL ──────────────────────────────────────────────
  function togglePanel() {
    STATE.open = !STATE.open;
    const panel = document.getElementById('aikrofy-panel');
    if (!panel) return;

    panel.classList.toggle('aik-open', STATE.open);

    if (STATE.open && STATE.history.length === 0) {
      const texts = I18N[STATE.lang];
      setTimeout(() => {
        addMessage('agent',
          `${texts.welcome}<br>${texts.currentIn} <em>${window.location.pathname}</em>.<br>${texts.helpPrompt}`,
          [
            { label: texts.navServices, value: 'Ir a servicios' },
            { label: texts.navAudit, value: 'Ir a audit tool' },
            { label: texts.navCalificar, value: 'Ir a calificar' }
          ]
        );
      }, 300);
    }
  }

  function updateNavBar() {
    document.querySelectorAll('.aik-pill-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-path') === window.location.pathname);
    });
  }

  // ── EVENT BINDINGS ────────────────────────────────────────────
  function bindEvents() {
    document.getElementById('aikrofy-fab')?.addEventListener('click', togglePanel);
    document.getElementById('aikrofy-close-btn')?.addEventListener('click', togglePanel);
    document.getElementById('aikrofy-mic-btn')?.addEventListener('click', toggleVoiceRecording);

    document.getElementById('aik-toggle-lang')?.addEventListener('click', () => {
      STATE.lang = STATE.lang === 'es' ? 'en' : 'es';
      const btn = document.getElementById('aik-toggle-lang');
      if (btn) btn.textContent = STATE.lang.toUpperCase();
      
      const input = document.getElementById('aikrofy-input');
      if (input) input.placeholder = I18N[STATE.lang].inputPlaceholder;

      // Disparar evento global
      window.dispatchEvent(new CustomEvent('wlt:lang-changed', { detail: { lang: STATE.lang } }));
    });

    document.querySelectorAll('.aik-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const path = btn.getAttribute('data-path');
        if (path) navigateTo(path);
      });
    });

    document.getElementById('aikrofy-send-btn')?.addEventListener('click', () => {
      const val = document.getElementById('aikrofy-input')?.value;
      if (val) sendMessage(val);
    });

    document.getElementById('aikrofy-input')?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        const val = e.target.value;
        if (val) sendMessage(val);
      }
    });

    // Escuchar eventos externos de la app o de subagentes
    window.addEventListener('wlt:open-voice-chat', () => {
      if (!STATE.open) togglePanel();
      toggleVoiceRecording();
    });

    window.addEventListener('wlt:lang-changed', (e) => {
      if (e.detail?.lang) {
        STATE.lang = e.detail.lang;
        const btn = document.getElementById('aik-toggle-lang');
        if (btn) btn.textContent = STATE.lang.toUpperCase();
      }
    });

    window.addEventListener('popstate', () => {
      STATE.currentPage = window.location.pathname;
      updateNavBar();
      ingestContextToAikrofyRAG({ event: 'history_popstate' });
    });
  }

  function init() {
    discoverSiteHierarchy();
    injectStyles();
    buildWidget();
    bindEvents();
    updateNavBar();
    ingestContextToAikrofyRAG({ event: 'init_session' });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})(window, document);
