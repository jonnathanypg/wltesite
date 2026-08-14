/**
 * ============================================================
 * WEBLIFETECH CONVERSATIONAL NAVIGATOR — Universal Embed Tag
 * ============================================================
 * Versión: 2.6.0
 * Propósito: Insertar navegación conversacional agéntica
 *            en cualquier sitio web (Next.js, HTML, PHP,
 *            WordPress, Webflow, CMS, Vibe-Coded, etc.)
 *
 * USO: Insertar este tag en el <head> del sitio objetivo.
 *
 * <script
 *   src="https://cdn.weblifetech.com/agent/wlt-chat.js"
 *   data-agent-id="YOUR_AGENT_ID"
 *   data-api-url="https://api.weblifetech.com"
 *   data-crm-endpoint="https://crm.weblifetech.com/ingest"
 *   data-theme="dark"
 *   data-brand-color="#00E5FF"
 *   data-lang="es"
 *   async
 * ></script>
 * ============================================================
 */

(function (window, document) {
  "use strict";

  // ── CONFIGURACIÓN DESDE DATA-ATTRIBUTES DEL SCRIPT ─────────────
  const scriptTag = document.currentScript ||
    document.querySelector('script[data-agent-id]');

  const CONFIG = {
    agentId: scriptTag?.getAttribute('data-agent-id') || 'wlt-demo',
    apiUrl: scriptTag?.getAttribute('data-api-url') || 'https://api.weblifetech.com',
    crmEndpoint: scriptTag?.getAttribute('data-crm-endpoint') || 'https://crm.weblifetech.com/ingest',
    theme: scriptTag?.getAttribute('data-theme') || 'dark',
    brandColor: scriptTag?.getAttribute('data-brand-color') || '#00E5FF',
    brandSecondary: scriptTag?.getAttribute('data-brand-secondary') || '#FF6B00',
    lang: scriptTag?.getAttribute('data-lang') || 'es',
    siteName: scriptTag?.getAttribute('data-site-name') || document.title,
    logoUrl: scriptTag?.getAttribute('data-logo-url') || '',
  };

  // ── ESTADO DEL AGENTE ─────────────────────────────────────────
  const STATE = {
    open: false,
    history: [],
    currentPage: window.location.pathname,
    sessionId: 'wlt-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9),
    leadData: {},
    siteMap: null,
    initialized: false,
  };

  // ── SITEMAP INTERNO (PÁGINA + SECCIONES + COPY) ───────────────
  const SITE_MAP = {
    pages: [
      { path: '/', label: 'Inicio', description: 'Home con framework Vibe-to-Prod, comparativa Océano Azul y caso AURIVA', sections: ['hero','problema','solucion','dualidad','metodologia','seguridad','prueba-social','cta'] },
      { path: '/lab', label: 'WEBLIFETECH Labs', description: 'R&D en infraestructura agéntica, Sovereign RAG y socioeconomía', sections: ['hero','investigaciones','proyectos','puente-agency'] },
      { path: '/agency', label: 'Agencia FDE', description: 'Forward Deployed Engineering, metodología FDE y estándares de producción', sections: ['hero','metodologia','compromisos','cta'] },
      { path: '/servicios', label: 'Servicios & Tarifas', description: 'Fase 1 Audit ($2.5k), Fase 2 Hardening ($8k-$90k), Fase 3 Retainer + FAQs', sections: ['fase1','fase2','fase3','faqs'] },
      { path: '/contacto', label: 'Contacto Ejecutivo', description: 'Contacto directo con ingeniería. Email: dev@weblifetech.com WhatsApp: +593 982840685', sections: ['canales','compromisos'] },
      { path: '/landing/vibe-to-prod', label: 'Landing Vibe-to-Prod', description: 'Landing alta conversión para fundadores con MVP en Lovable/Replit/Bolt', sections: ['hero','form-fast-track','metricas'] },
      { path: '/calificar', label: 'Calificar Proyecto', description: 'Formulario conversacional de 5 pasos con enrutamiento inteligente', sections: ['paso1-origen','paso2-desafio','paso3-etapa','paso4-presupuesto','paso5-contacto'] },
      { path: '/reserva/enterprise-priority', label: 'Prioridad Enterprise', description: 'Reserva de sesión técnica 30min con FDE Senior para proyectos Enterprise/B2G', sections: ['confirmacion','calendario','nda'] },
      { path: '/reserva/starter-audit', label: 'Starter Audit', description: 'Activación de Fase 1 Vibe Audit & Blueprint desde $185 USD', sections: ['oferta','calendario'] },
      { path: '/recursos/vibe-readiness-guide', label: 'Guía Vibe-Readiness', description: 'Ebook PDF gratuito para preparar MVP para producción', sections: ['recursos','descarga'] },
      { path: '/tools/auditwlt', label: 'AuditWLT Tool', description: 'Herramienta de auditoría web: SEO, seguridad, CMS, detección vibe-coding, marcas de agua, CSS/HTML/JS', sections: ['input-url','progreso-scan','resultado','propuesta'] },
    ],
    navigateTo: function (path) {
      const page = this.pages.find(p => p.path === path);
      if (!page) return;
      if (window.history && window.history.pushState) {
        window.history.pushState({}, page.label, path);
        window.dispatchEvent(new PopStateEvent('popstate', { state: {} }));
      } else {
        window.location.href = path;
      }
      STATE.currentPage = path;
    },
    getCurrentPageInfo: function () {
      return this.pages.find(p => p.path === STATE.currentPage) || this.pages[0];
    },
    scrollToSection: function (sectionId) {
      const el = document.getElementById(sectionId) || document.querySelector('[data-section="' + sectionId + '"]');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // ── ESTILOS CSS DINÁMICOS ─────────────────────────────────────
  function injectStyles() {
    const isDark = CONFIG.theme === 'dark';
    const css = `
      :root {
        --wlt-brand: ${CONFIG.brandColor};
        --wlt-secondary: ${CONFIG.brandSecondary};
        --wlt-bg: ${isDark ? '#0A0F1E' : '#FFFFFF'};
        --wlt-surface: ${isDark ? '#0F172A' : '#F8FAFC'};
        --wlt-border: ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'};
        --wlt-text: ${isDark ? '#F1F5F9' : '#0F172A'};
        --wlt-muted: ${isDark ? '#64748B' : '#94A3B8'};
        --wlt-radius: 20px;
      }
      #wlt-fab {
        position: fixed;
        bottom: 28px;
        right: 28px;
        z-index: 9998;
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
        filter: drop-shadow(0 8px 24px color-mix(in srgb, var(--wlt-brand) 40%, transparent));
      }
      #wlt-fab:hover { transform: scale(1.08) translateY(-2px); }
      #wlt-fab-btn {
        width: 56px;
        height: 56px;
        border-radius: 18px;
        background: linear-gradient(135deg, var(--wlt-brand), color-mix(in srgb, var(--wlt-brand) 60%, #6366F1));
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
      }
      #wlt-fab-btn::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, rgba(255,255,255,0.15), transparent);
        border-radius: inherit;
      }
      #wlt-fab-pill {
        background: var(--wlt-surface);
        border: 1px solid var(--wlt-border);
        border-radius: 30px;
        padding: 8px 16px;
        font-size: 12px;
        font-weight: 600;
        color: var(--wlt-text);
        white-space: nowrap;
        backdrop-filter: blur(12px);
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        font-family: -apple-system, 'Inter', sans-serif;
        display: flex;
        align-items: center;
        gap: 6px;
      }
      #wlt-fab-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--wlt-brand);
        animation: wlt-ping 1.5s ease-in-out infinite;
      }
      @keyframes wlt-ping {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.7; transform: scale(1.3); }
      }
      #wlt-panel {
        position: fixed;
        bottom: 96px;
        right: 28px;
        width: 380px;
        max-height: 580px;
        z-index: 9999;
        border-radius: var(--wlt-radius);
        background: var(--wlt-bg);
        border: 1px solid var(--wlt-border);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        box-shadow: 0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px var(--wlt-border);
        backdrop-filter: blur(24px);
        transform: scale(0.9) translateY(20px);
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
        font-family: -apple-system, 'Inter', 'Segoe UI', sans-serif;
      }
      #wlt-panel.wlt-open {
        transform: scale(1) translateY(0);
        opacity: 1;
        pointer-events: all;
      }
      #wlt-panel-header {
        padding: 16px 20px;
        background: linear-gradient(135deg, var(--wlt-brand)22, transparent);
        border-bottom: 1px solid var(--wlt-border);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }
      #wlt-panel-logo {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      #wlt-panel-logo-icon {
        width: 36px;
        height: 36px;
        border-radius: 10px;
        background: linear-gradient(135deg, var(--wlt-brand), #6366F1);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
      }
      #wlt-panel-logo-text {
        display: flex;
        flex-direction: column;
      }
      #wlt-panel-logo-name {
        font-size: 13px;
        font-weight: 700;
        color: var(--wlt-text);
        letter-spacing: -0.3px;
      }
      #wlt-panel-logo-sub {
        font-size: 10px;
        color: var(--wlt-muted);
        font-weight: 500;
      }
      #wlt-close-btn {
        width: 28px;
        height: 28px;
        border-radius: 8px;
        background: rgba(255,255,255,0.06);
        border: 1px solid var(--wlt-border);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--wlt-muted);
        font-size: 16px;
        transition: all 0.2s;
      }
      #wlt-close-btn:hover { background: rgba(255,255,255,0.1); color: var(--wlt-text); }
      #wlt-nav-bar {
        display: flex;
        gap: 4px;
        padding: 8px 12px;
        overflow-x: auto;
        scrollbar-width: none;
        border-bottom: 1px solid var(--wlt-border);
        background: rgba(255,255,255,0.02);
      }
      #wlt-nav-bar::-webkit-scrollbar { display: none; }
      .wlt-nav-btn {
        flex-shrink: 0;
        padding: 5px 12px;
        border-radius: 30px;
        font-size: 10px;
        font-weight: 600;
        cursor: pointer;
        border: 1px solid var(--wlt-border);
        background: transparent;
        color: var(--wlt-muted);
        transition: all 0.2s;
        white-space: nowrap;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      .wlt-nav-btn:hover, .wlt-nav-btn.active {
        background: var(--wlt-brand);
        color: #000;
        border-color: var(--wlt-brand);
      }
      #wlt-messages {
        flex: 1;
        overflow-y: auto;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        scrollbar-width: thin;
        scrollbar-color: var(--wlt-border) transparent;
      }
      .wlt-msg {
        display: flex;
        flex-direction: column;
        gap: 4px;
        animation: wlt-fade-in 0.25s ease-out;
      }
      @keyframes wlt-fade-in {
        from { opacity: 0; transform: translateY(8px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .wlt-msg-user { align-items: flex-end; }
      .wlt-msg-agent { align-items: flex-start; }
      .wlt-bubble {
        max-width: 85%;
        padding: 10px 14px;
        border-radius: 16px;
        font-size: 13px;
        line-height: 1.5;
        word-break: break-word;
      }
      .wlt-bubble-user {
        background: var(--wlt-brand);
        color: #000;
        border-radius: 16px 16px 4px 16px;
        font-weight: 500;
      }
      .wlt-bubble-agent {
        background: var(--wlt-surface);
        border: 1px solid var(--wlt-border);
        color: var(--wlt-text);
        border-radius: 16px 16px 16px 4px;
      }
      .wlt-typing {
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 10px 14px;
        background: var(--wlt-surface);
        border: 1px solid var(--wlt-border);
        border-radius: 16px 16px 16px 4px;
        width: fit-content;
      }
      .wlt-dot {
        width: 6px; height: 6px;
        border-radius: 50%;
        background: var(--wlt-muted);
        animation: wlt-bounce 1.2s ease-in-out infinite;
      }
      .wlt-dot:nth-child(2) { animation-delay: 0.2s; }
      .wlt-dot:nth-child(3) { animation-delay: 0.4s; }
      @keyframes wlt-bounce {
        0%, 100% { transform: translateY(0); opacity: 0.5; }
        50% { transform: translateY(-4px); opacity: 1; }
      }
      .wlt-quick-btns {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 6px;
      }
      .wlt-quick-btn {
        padding: 6px 12px;
        border-radius: 20px;
        font-size: 11px;
        font-weight: 600;
        cursor: pointer;
        border: 1px solid var(--wlt-brand);
        background: transparent;
        color: var(--wlt-brand);
        transition: all 0.2s;
      }
      .wlt-quick-btn:hover {
        background: var(--wlt-brand);
        color: #000;
      }
      #wlt-input-bar {
        padding: 12px 16px;
        border-top: 1px solid var(--wlt-border);
        display: flex;
        gap: 10px;
        align-items: flex-end;
        background: rgba(255,255,255,0.02);
      }
      #wlt-input {
        flex: 1;
        background: var(--wlt-surface);
        border: 1px solid var(--wlt-border);
        border-radius: 12px;
        padding: 10px 14px;
        font-size: 13px;
        color: var(--wlt-text);
        outline: none;
        resize: none;
        min-height: 40px;
        max-height: 100px;
        font-family: inherit;
        transition: border 0.2s;
        line-height: 1.5;
      }
      #wlt-input::placeholder { color: var(--wlt-muted); }
      #wlt-input:focus { border-color: var(--wlt-brand); }
      #wlt-send-btn {
        width: 40px;
        height: 40px;
        border-radius: 12px;
        background: var(--wlt-brand);
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s;
        flex-shrink: 0;
      }
      #wlt-send-btn:hover { transform: scale(1.05); filter: brightness(1.1); }
      #wlt-footer {
        text-align: center;
        padding: 6px;
        font-size: 9px;
        color: var(--wlt-muted);
        font-weight: 500;
        letter-spacing: 0.5px;
        font-family: monospace;
        border-top: 1px solid var(--wlt-border);
        opacity: 0.5;
      }
      @media (max-width: 440px) {
        #wlt-panel {
          right: 12px;
          bottom: 90px;
          width: calc(100vw - 24px);
          max-height: 70vh;
        }
        #wlt-fab { right: 16px; bottom: 20px; }
      }
    `;
    const style = document.createElement('style');
    style.id = 'wlt-styles';
    style.textContent = css;
    document.head.appendChild(style);
  }

  // ── CONSTRUIR HTML DEL WIDGET ─────────────────────────────────
  function buildWidget() {
    // FAB Button
    const fab = document.createElement('div');
    fab.id = 'wlt-fab';
    fab.innerHTML = `
      <div id="wlt-fab-pill">
        <span id="wlt-fab-dot"></span>
        Habla con el Asesor IA
      </div>
      <button id="wlt-fab-btn" aria-label="Abrir chat WEBLIFETECH">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 12H16M8 8H12M6 20L2 22L3.5 18C2.57 17.08 2 15.83 2 14.5C2 11.46 4.69 9 8 9H9M18 14C18 17.31 15.31 20 12 20C11.17 20 10.38 19.82 9.67 19.5L6 20L7 17" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="18" cy="6" r="4" fill="${CONFIG.brandSecondary}"/>
          <path d="M16.5 6H19.5M18 4.5V7.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </button>
    `;
    document.body.appendChild(fab);

    // Panel
    const panel = document.createElement('div');
    panel.id = 'wlt-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'Chat WEBLIFETECH Navigator');
    panel.innerHTML = `
      <div id="wlt-panel-header">
        <div id="wlt-panel-logo">
          <div id="wlt-panel-logo-icon">⚡</div>
          <div id="wlt-panel-logo-text">
            <div id="wlt-panel-logo-name">WEBLIFETECH Agent</div>
            <div id="wlt-panel-logo-sub">NAVEGADOR CONVERSACIONAL IA · EN LÍNEA</div>
          </div>
        </div>
        <button id="wlt-close-btn" aria-label="Cerrar chat">✕</button>
      </div>

      <div id="wlt-nav-bar">
        ${SITE_MAP.pages.slice(0, 7).map(p =>
          `<button class="wlt-nav-btn" data-path="${p.path}">${p.label}</button>`
        ).join('')}
      </div>

      <div id="wlt-messages"></div>

      <div id="wlt-input-bar">
        <textarea id="wlt-input" rows="1" placeholder="¿Qué necesita saber? ¿A dónde va?"></textarea>
        <button id="wlt-send-btn" aria-label="Enviar mensaje">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>
      <div id="wlt-footer">POWERED BY WEBLIFETECH AGENTIC ENGINE · SESSION ${STATE.sessionId.toUpperCase()}</div>
    `;
    document.body.appendChild(panel);
  }

  // ── MOTOR DE MENSAJERÍA ───────────────────────────────────────
  function addMessage(role, content, quickReplies) {
    const container = document.getElementById('wlt-messages');
    const msgEl = document.createElement('div');
    msgEl.className = `wlt-msg wlt-msg-${role}`;

    const bubble = document.createElement('div');
    bubble.className = `wlt-bubble wlt-bubble-${role}`;
    bubble.innerHTML = content;
    msgEl.appendChild(bubble);

    if (quickReplies && quickReplies.length > 0) {
      const qr = document.createElement('div');
      qr.className = 'wlt-quick-btns';
      quickReplies.forEach(qrb => {
        const btn = document.createElement('button');
        btn.className = 'wlt-quick-btn';
        btn.textContent = qrb.label;
        btn.onclick = () => { sendMessage(qrb.value || qrb.label, true); };
        qr.appendChild(btn);
      });
      msgEl.appendChild(qr);
    }

    STATE.history.push({ role, content });
    container.appendChild(msgEl);
    container.scrollTop = container.scrollHeight;
    return msgEl;
  }

  function showTyping() {
    const container = document.getElementById('wlt-messages');
    const typing = document.createElement('div');
    typing.className = 'wlt-msg wlt-msg-agent';
    typing.id = 'wlt-typing';
    typing.innerHTML = '<div class="wlt-typing"><div class="wlt-dot"></div><div class="wlt-dot"></div><div class="wlt-dot"></div></div>';
    container.appendChild(typing);
    container.scrollTop = container.scrollHeight;
    return typing;
  }

  function removeTyping() {
    const t = document.getElementById('wlt-typing');
    if (t) t.remove();
  }

  // ── MOTOR DE INTENCIÓN / NLU LOCAL ────────────────────────────
  function parseIntent(text) {
    const t = text.toLowerCase();

    // Navegación
    if (/(ir a|llevar|lleva|navegar|abrir|muéstrame|mostrar|ver|show|go to)\s*(la\s*)?(página|pagina|sección|section)?\s*(inicio|home|principal)/.test(t)) return { type: 'navigate', path: '/' };
    if (/(lab|investigaci|r&d|research|agente|agentic|rag|sovereign)/.test(t)) return { type: 'navigate', path: '/lab' };
    if (/(agencia|agency|fde|forward.?deployed|equipo|team)/.test(t)) return { type: 'navigate', path: '/agency' };
    if (/(servicio|service|precio|tarifas|tarifa|costo|price|cuánto|cuanto|fase)/.test(t)) return { type: 'navigate', path: '/servicios' };
    if (/(contacto|contact|email|whatsapp|llamar|call|hablar)/.test(t)) return { type: 'navigate', path: '/contacto' };
    if (/(califica|califique|evalua|evalúa|aplicar|apply|triage|formulario|qualify)/.test(t)) return { type: 'navigate', path: '/calificar' };
    if (/(audit|herramienta|tool|inspección|inspeccion|escanear|scan)/.test(t)) return { type: 'navigate', path: '/tools/auditwlt' };
    if (/(landing|vibe.?to.?prod|rescate|rescate)/.test(t)) return { type: 'navigate', path: '/landing/vibe-to-prod' };
    if (/(guía|guia|ebook|pdf|descarga|download|readiness)/.test(t)) return { type: 'navigate', path: '/recursos/vibe-readiness-guide' };

    // Preguntas de información
    if (/(qué|que|what|quien|quién|cuáles|cuales).*(hace|hace|es|son|ofrece)/.test(t)) return { type: 'info', topic: 'about' };
    if (/(precio|costo|cuánto|cuanto|inversión|tarifa)/.test(t)) return { type: 'info', topic: 'pricing' };
    if (/(lovable|replit|bolt|cursor|vibe)/.test(t)) return { type: 'info', topic: 'vibe' };
    if (/(nda|seguridad|security|iso|soc2|rbac)/.test(t)) return { type: 'info', topic: 'security' };

    // CRM lead capture
    if (/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(text)) return { type: 'lead', email: text.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/)[0] };

    return { type: 'unknown' };
  }

  // ── AGENTE DE RESPUESTA ───────────────────────────────────────
  function generateAgentResponse(intent, userText) {
    const pageInfo = SITE_MAP.getCurrentPageInfo();

    switch (intent.type) {
      case 'navigate':
        const targetPage = SITE_MAP.pages.find(p => p.path === intent.path);
        if (targetPage) {
          setTimeout(() => SITE_MAP.navigateTo(intent.path), 500);
          return {
            text: `<strong>Navegando a ${targetPage.label}</strong> ✓<br><small style="opacity:0.7">${targetPage.description}</small>`,
            quickReplies: [
              { label: '← Inicio', value: 'Ir al inicio' },
              { label: 'Calificar Proyecto →', value: 'Ir a calificar' }
            ]
          };
        }
        break;

      case 'info':
        if (intent.topic === 'pricing') {
          return {
            text: `💰 <strong>Tarifas WEBLIFETECH:</strong><br>
• <strong>Fase 1 Audit:</strong> $2,500–$3,500 USD (3–5 días)<br>
• <strong>Fase 2 Hardening:</strong> $8k–$90k USD según escala<br>
• <strong>Fase 3 Retainer:</strong> desde $2,500/mes<br>
• <em>Startups Beta: desde $185 USD</em>`,
            quickReplies: [
              { label: 'Ver Servicios Completos', value: 'Ir a servicios' },
              { label: 'Calificar mi Proyecto', value: 'Ir a calificar' }
            ]
          };
        }
        if (intent.topic === 'vibe') {
          return {
            text: `⚡ <strong>Especializados en Vibe-to-Prod:</strong><br>
Rescatamos proyectos creados en Lovable, Replit, Bolt.new, Cursor y v0.dev. Eliminamos marcas de agua, desacoplamos dependencias, y desplegamos en producción real con Docker + CI/CD en 2–4 semanas.`,
            quickReplies: [
              { label: 'Auditar Mi Sitio Ahora', value: 'Ir a la herramienta de auditoría' },
              { label: 'Solicitar Vibe Audit', value: 'Ir a calificar' }
            ]
          };
        }
        if (intent.topic === 'security') {
          return {
            text: `🛡️ <strong>Cumplimiento Institucional:</strong><br>
Implementamos AES-256, TLS 1.3, RBAC, RLS, JWT/OAuth2 y audit logs estructurados. Arquitectura compatible con ISO/IEC 27001 y SOC2 Type II para licitaciones B2G.`,
            quickReplies: [
              { label: 'Contactar Ingeniero Senior', value: 'Ir a contacto' }
            ]
          };
        }
        return {
          text: `🚀 <strong>WEBLIFETECH</strong> es una firma de ingeniería Forward Deployed especializada en convertir MVPs de Vibe-Coding en plataformas enterprise robustas, seguras y escalables en semanas.`,
          quickReplies: [
            { label: 'Ver Servicios', value: 'Ir a servicios' },
            { label: 'Evaluar Mi Proyecto', value: 'Ir a calificar' },
            { label: 'Contactar', value: 'Ir a contacto' }
          ]
        };

      case 'lead':
        ingestLeadToCRM({ email: intent.email, page: pageInfo.path, session: STATE.sessionId, timestamp: new Date().toISOString() });
        STATE.leadData.email = intent.email;
        return {
          text: `✅ ¡Recibido! Enviaré información técnica relevante a <strong>${intent.email}</strong>. ¿Le gustaría agendar una evaluación gratuita de 15 minutos?`,
          quickReplies: [
            { label: 'Sí, agendar ahora', value: 'Ir a calificar' },
            { label: 'Ver Servicios', value: 'Ir a servicios' }
          ]
        };

      default:
        return {
          text: `¿Cómo puedo ayudarle hoy? Puedo llevarle a cualquier sección del sitio, explicar nuestros servicios de Vibe-to-Prod Hardening, o conectarle directamente con un ingeniero senior.`,
          quickReplies: [
            { label: '📋 Servicios & Tarifas', value: 'Ir a servicios' },
            { label: '🔍 Auditar Mi Sitio', value: 'Ir a la herramienta de auditoría' },
            { label: '📞 Contactar', value: 'Ir a contacto' },
            { label: '🏁 Calificar Proyecto', value: 'Ir a calificar' }
          ]
        };
    }
  }

  // ── INGEST DE LEADS AL CRM AGÉNTICO ──────────────────────────
  function ingestLeadToCRM(data) {
    const payload = {
      ...data,
      ...STATE.leadData,
      sourceUrl: window.location.href,
      userAgent: navigator.userAgent,
      agentId: CONFIG.agentId,
      siteName: CONFIG.siteName,
    };
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
  }

  // ── ENVÍO DE MENSAJE ──────────────────────────────────────────
  async function sendMessage(text, isQuickReply) {
    if (!text.trim()) return;
    const input = document.getElementById('wlt-input');
    if (input && !isQuickReply) input.value = '';
    
    addMessage('user', text);
    const typing = showTyping();

    // Log interaction to CRM
    ingestLeadToCRM({
      event: 'chat_message',
      message: text,
      page: STATE.currentPage,
      session: STATE.sessionId
    });

    await new Promise(r => setTimeout(r, 600 + Math.random() * 800));
    removeTyping();

    const intent = parseIntent(text);
    const response = generateAgentResponse(intent, text);
    addMessage('agent', response.text, response.quickReplies);
  }

  // ── TOGGLE PANEL ──────────────────────────────────────────────
  function togglePanel() {
    STATE.open = !STATE.open;
    const panel = document.getElementById('wlt-panel');
    panel.classList.toggle('wlt-open', STATE.open);

    if (STATE.open && STATE.history.length === 0) {
      const pageInfo = SITE_MAP.getCurrentPageInfo();
      setTimeout(() => {
        addMessage('agent',
          `👋 Hola, soy el <strong>Asesor IA de WEBLIFETECH</strong>. Está en <em>${pageInfo.label}</em>.<br>Puedo llevarle a cualquier sección, responder preguntas técnicas, o conectarle con nuestro equipo de ingeniería.`,
          [
            { label: '📋 Ver Servicios', value: 'Ir a servicios' },
            { label: '🔍 AuditWLT Tool', value: 'Ir a la herramienta de auditoría' },
            { label: '📞 Hablar con Ingeniero', value: 'Ir a contacto' }
          ]
        );
      }, 400);
    }

    if (STATE.open) {
      ingestLeadToCRM({ event: 'chat_opened', page: STATE.currentPage, session: STATE.sessionId });
    }
  }

  // ── BINDINGS DE EVENTOS ───────────────────────────────────────
  function bindEvents() {
    // FAB button
    document.getElementById('wlt-fab').addEventListener('click', togglePanel);
    
    // Close button
    document.getElementById('wlt-close-btn').addEventListener('click', () => {
      STATE.open = false;
      document.getElementById('wlt-panel').classList.remove('wlt-open');
    });

    // Nav buttons
    document.querySelectorAll('.wlt-nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const path = btn.getAttribute('data-path');
        sendMessage('Ir a ' + btn.textContent, true);
      });
    });

    // Send button
    document.getElementById('wlt-send-btn').addEventListener('click', () => {
      const val = document.getElementById('wlt-input').value.trim();
      if (val) sendMessage(val);
    });

    // Enter key to send
    document.getElementById('wlt-input').addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        const val = e.target.value.trim();
        if (val) sendMessage(val);
      }
    });

    // Track page navigation (SPA support via History API)
    const origPushState = window.history.pushState.bind(window.history);
    window.history.pushState = function (...args) {
      origPushState(...args);
      STATE.currentPage = window.location.pathname;
      updateNavBar();
    };
    window.addEventListener('popstate', () => {
      STATE.currentPage = window.location.pathname;
      updateNavBar();
    });
  }

  function updateNavBar() {
    document.querySelectorAll('.wlt-nav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-path') === STATE.currentPage);
    });
  }

  // ── INICIALIZACIÓN ────────────────────────────────────────────
  function init() {
    if (STATE.initialized) return;
    STATE.initialized = true;

    injectStyles();
    buildWidget();
    bindEvents();
    updateNavBar();

    // Track page view to CRM
    ingestLeadToCRM({ event: 'page_view', page: STATE.currentPage, session: STATE.sessionId, referrer: document.referrer });

    console.log('[WLT Agent] ⚡ Conversational Navigator initialized. Session:', STATE.sessionId);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})(window, document);
