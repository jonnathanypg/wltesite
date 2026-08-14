---
name: wltsite-control
description: >
  Skill de Control y Orquestación completa del sitio web WEBLIFETECH (wltlandingpage).
  Proporciona a agentes externos (multi-agente, CRM/ERP agéntico) acceso estructurado al
  mapa de páginas, copy maestro, formularios conversacionales, reglas de enrutamiento
  condicional y protocolos de integración del Conversational Navigator (wlt-chat.js).
---

# WEBLIFETECH Site Control — SKILL.md

> **Versión:** 2.6.0 · **Stack:** Next.js 15.5.9 (App Router) · **Puerto Dev:** 9002  
> **Repo GitHub:** https://github.com/jonnathanypg/wltesite  
> **Rama principal:** `main` · **Rama de desarrollo:** `dev`

---

## 1. ARQUITECTURA DEL PROYECTO

```
wltlandingpage/
├── src/
│   ├── app/
│   │   ├── page.tsx                        ← HOME (/)
│   │   ├── lab/page.tsx                    ← WEBLIFETECH LABS (/lab)
│   │   ├── agency/page.tsx                 ← AGENCIA FDE (/agency)
│   │   ├── servicios/page.tsx              ← SERVICIOS & TARIFAS (/servicios)
│   │   ├── contacto/page.tsx               ← CONTACTO EJECUTIVO (/contacto)
│   │   ├── landing/
│   │   │   └── vibe-to-prod/
│   │   │       ├── page.tsx                ← LANDING ALTA CONVERSIÓN
│   │   │       └── FastTrackForm.tsx       ← Formulario fast-track (client)
│   │   ├── calificar/
│   │   │   ├── page.tsx                    ← TRIAGE WIZARD (/calificar)
│   │   │   └── CalificarWizard.tsx         ← Formulario 5-pasos (client)
│   │   ├── reserva/
│   │   │   ├── enterprise-priority/page.tsx ← RUTA A (>$5k / Enterprise)
│   │   │   └── starter-audit/page.tsx      ← RUTA B ($1k-$5k / MVP validado)
│   │   ├── recursos/
│   │   │   └── vibe-readiness-guide/
│   │   │       ├── page.tsx                ← RUTA C (sin código / <$1k)
│   │   │       └── DownloadGuideForm.tsx   ← Formulario descarga PDF (client)
│   │   └── tools/
│   │       └── auditwlt/
│   │           ├── page.tsx                ← HERRAMIENTA AUDITWLT
│   │           └── AuditWLTClient.tsx      ← Motor de auditoría (client)
│   └── components/
│       ├── Navigation.tsx                  ← Navbar principal con CTAs
│       └── ui/                             ← Radix UI + shadcn/ui
├── public/
│   └── agent/
│       └── wlt-chat.js                     ← SCRIPT EMBEBIBLE UNIVERSAL
└── .agents/
    └── skills/
        └── wltsite-control/
            └── SKILL.md                    ← ESTE ARCHIVO
```

---

## 2. MAPA DE PÁGINAS & COPY MAESTRO

### Página: HOME (`/`)
- **Meta Title:** `WEBLIFETECH | Del Chat de IA a Producción Enterprise`
- **H1:** "Del Chat de IA a Producción Enterprise. Sin Reescribir Su MVP Desde Cero."
- **Posicionamiento:** Océano Azul — Vibe-to-Prod Hardening
- **CTAs primarios:**
  - `Solicitar Vibe Audit en 5 Días →` → `/calificar`
  - `Ver Metodología Vibe-to-Prod` → scroll `#metodologia`
- **Plataformas soportadas:** Lovable, Replit Agent, Bolt.new, Cursor, v0.dev, Supabase
- **Caso de éxito:** AURIVA – Adrián Vinueza. MVP rescatado en 7 días.
- **Secciones:** hero, problema, solucion, dualidad, metodologia, seguridad, prueba-social, cta

### Página: LABS (`/lab`)
- **Meta Title:** `WEBLIFETECH Labs | R&D en Infraestructura Agéntica e IA`
- **H1:** "Investigando el Estado del Arte en Infraestructura Agéntica y Soluciones Socioeconómicas"
- **Líneas de investigación:** Multi-Agent Swarms, Sovereign RAG, AI-Driven Socioeconomic
- **Proyectos:** AST Code Refactorer, Agentic Public Ledger Tracker, Local-First LLM

### Página: AGENCY (`/agency`)
- **Meta Title:** `WEBLIFETECH Agency | Forward Deployed Software Engineering`
- **H1:** "Ingeniería de Escalado e Infraestructura de Producción para Proyectos Nacidos en IA."
- **Metodología FDE:** Integración Profunda → Herramientas Agénticas → Transferencia & SLAs
- **Compromisos:** Código 100% propio, Cero Vendor Lock-In, Documentación ejecutiva completa

### Página: SERVICIOS (`/servicios`)
- **Meta Title:** `Servicios & Tarifario | WEBLIFETECH Vibe-to-Prod`
- **FASE 1 — Audit & Blueprint:** $2,500–$3,500 USD / 3–5 días (Startups desde $185)
- **FASE 2 — Vibe-to-Prod Hardening:**
  - Startup/MVP: $8k–$15k USD
  - SaaS Growth: $18k–$35k USD
  - Enterprise/B2G: $40k–$90k USD
- **FASE 3 — Forward Scalability Retainer:**
  - Startup: $2,500–$4,000/mes
  - SaaS Growth: $5,000–$8,500/mes
  - Enterprise/B2G: $10,000–$25,000/mes
- **FAQs SEO:** Propiedad IP, Migración Supabase, No reescritura desde cero

### Página: CONTACTO (`/contacto`)
- **H1:** "Inicie la Conversación con un Ingeniero Senior."
- **Email de Ingeniería:** dev@weblifetech.com
- **WhatsApp Comercial:** +593 982840685
- **Respuesta promedio:** < 4 horas hábiles
- **NDA previo:** Sí, antes de revisar código fuente
- **Evaluación gratuita:** 15 minutos de factibilidad técnica

### Página: LANDING VIBE-TO-PROD (`/landing/vibe-to-prod`)
- **H1:** "¿Su MVP en Lovable, Replit o Bolt empezó a fallar o no pasa las pruebas de seguridad?"
- **Formulario Fast-Track:** Nombre, Email, URL MVP, Problema Principal (dropdown)
- **Prueba social:** +200k Líneas Auditadas · 100% Independencia IP · 99.9% SLA

---

## 3. FORMULARIO DINÁMICO DE CALIFICACIÓN & ENRUTAMIENTO CONDICIONAL

### Ruta de evaluación: `/calificar`
Formulario conversacional de 5 pasos con lógica de enrutamiento inteligente.

#### PASO 1 — Origen del Proyecto
```
Opciones:
  A. Lovable.dev
  B. Replit Agent
  C. Bolt.new
  D. Cursor / Claude Code / v0
  E. Desarrollo Web Tradicional / Código Propio
  F. Aún es solo una idea (Sin código construido) → activa Ruta C
```

#### PASO 2 — Principal Desafío Técnico
```
Opciones:
  A. La aplicación colapsa con usuarios reales o consultas simultáneas.
  B. Necesito eliminar marcas de agua, límites de plataforma y tener mi propio repo.
  C. Un cliente corporativo/Gobierno me exige pruebas de seguridad y RBAC.
  D. Quiero integrar agentes de IA avanzados y automatizaciones RAG.
```

#### PASO 3 — Etapa Comercial
```
Opciones:
  A. En fase de validación con usuarios beta (Sin facturación aún).
  B. Ya tenemos usuarios de pago / clientes activos ($1k-$10k USD/mes). → activa Ruta A
  C. Empresa consolidada / Contrato B2G o Enterprise ($10k+ USD/mes). → activa Ruta A
```

#### PASO 4 — Presupuesto
```
Opciones:
  A. Menos de $1,000 USD → activa Ruta C (si también sin código)
  B. $2,500–$5,000 USD  → activa Ruta B
  C. $5,000–$15,000 USD → activa Ruta A
  D. Más de $15,000 USD → activa Ruta A
```

#### PASO 5 — Datos de Contacto
```
Campos: Nombre, Email Profesional*, Teléfono/WhatsApp*, URL Repositorio (opcional)
```

### REGLAS DE ENRUTAMIENTO POST-CALIFICACIÓN
```
RUTA A (/reserva/enterprise-priority):
  Condición: Presupuesto > $5,000 USD OR Etapa = "usuarios de pago" OR "B2G/Enterprise"
  Acción: Widget Calendly priority + CTA WhatsApp directo
  Mensaje: "¡Proyecto Calificado para Atención Prioritaria Enterprise!"

RUTA B (/reserva/starter-audit):
  Condición: Presupuesto $2,500–$5,000 USD AND MVP funcional con código
  Acción: Oferta Beta desde $185 USD + Widget Calendly standard
  Mensaje: "Prototipo Validado. Siguiente Paso: Vibe Audit & Blueprint."

RUTA C (/recursos/vibe-readiness-guide):
  Condición: Sin código creado OR Presupuesto < $1,000 USD
  Acción: Formulario descarga PDF + Lista de espera
  Mensaje: "Gracias por su interés en WEBLIFETECH."
```

---

## 4. HERRAMIENTA AUDITWLT (`/tools/auditwlt`)

Motor de auditoría web multi-agente con las siguientes capacidades:

### Detecciones Automáticas
- **Vibe-Coding Platforms:** Lovable.dev, Replit, Bolt.new, Cursor, v0.dev (por headers, DOM markers, tokens JS)
- **Marcas de agua:** Badge/watermarks en DOM, scripts de branding inyectados
- **Límites de tokens:** Patrón de variables de entorno de plataformas de Vibe-coding
- **CMS detectados:** WordPress (wp-content), Webflow (data-wf-*), Shopify, Framer
- **Plugins vulnerables:** Detección por meta-generators y script srcs

### Análisis Técnico
- **SEO Score:** H1, meta tags, títulos, estructura semántica
- **Seguridad (OWASP Top 10):** API keys expuestas en DOM, CORS abierto
- **Performance:** Consultas N+1, assets no optimizados
- **Estructura HTML/CSS/JS:** Calidad del AST, linting básico

### Flujo de Análisis
```
1. Input URL + Email
2. Terminal animada (simulación Playwright Headless scan)
3. Score general (0-100) + hallazgos por categoría
4. Reporte de vulnerabilidades críticas con descripción
5. CTA de refactorización → /calificar
6. Ingest de lead al CRM agéntico automáticamente
```

---

## 5. SCRIPT EMBEBIBLE UNIVERSAL — wlt-chat.js

### Inserción (cualquier sitio web)
```html
<!-- WEBLIFETECH Conversational Navigator — Insertar en <head> -->
<script
  src="https://cdn.weblifetech.com/agent/wlt-chat.js"
  data-agent-id="YOUR_AGENT_ID"
  data-api-url="https://api.weblifetech.com"
  data-crm-endpoint="https://crm.weblifetech.com/ingest"
  data-theme="dark"
  data-brand-color="#00E5FF"
  data-brand-secondary="#FF6B00"
  data-lang="es"
  data-site-name="Mi Empresa"
  async
></script>
```

### Compatibilidad
| Plataforma | Compatible | Método |
|---|---|---|
| Next.js / React | ✅ Nativo | Script tag en `<head>` |
| HTML estático | ✅ Nativo | Script tag en `<head>` |
| WordPress | ✅ Via plugin/functions.php | `wp_enqueue_script()` |
| Webflow | ✅ Via Custom Code | Head embed |
| Shopify | ✅ Via theme.liquid | `{{ content_for_header }}` |
| PHP | ✅ Nativo | `echo '<script src="...">'` |
| Framer | ✅ Via Custom Code | Head embed |
| Vibe-Coded (Lovable/Replit) | ✅ Via index.html head | Script tag |

### Funcionalidades del Widget
- **Botón flotante (FAB):** Pill animada con indicador de estado "online"
- **Panel de chat slide:** Transición cubic-bezier suave. Sin recarga de página.
- **Barra de navegación rápida:** Botones de acceso a todas las rutas del sitio
- **Quick Replies:** Opciones de respuesta contextual tras cada mensaje del agente
- **NLU local:** Detección de intención sin latencia (navegación, pricing, vibe, security, lead capture)
- **Navegación SPA:** Usa `history.pushState` — 0 recargas de página
- **CRM ingest:** `navigator.sendBeacon` para cada evento (page_view, chat_opened, message, lead)
- **Diseño heredado:** `data-brand-color` y `data-brand-secondary` del sistema que genera el snippet

### Variables de Configuración
```javascript
data-agent-id        // ID del agente en el sistema multi-agente WLT
data-api-url         // Endpoint del API del agente IA externo
data-crm-endpoint    // Endpoint CRM/ERP agéntico para ingest de leads
data-theme           // "dark" | "light"
data-brand-color     // Color primario del brand del cliente (#HEX)
data-brand-secondary // Color secundario del brand del cliente (#HEX)
data-lang            // Idioma del agente: "es" | "en"
data-site-name       // Nombre del sitio (para contexto del agente)
data-logo-url        // URL del logo del cliente (opcional)
```

### Eventos de CRM Emitidos Automáticamente
```json
{
  "event": "page_view | chat_opened | chat_message | lead_captured",
  "session": "wlt-[timestamp]-[random]",
  "page": "/ruta-actual",
  "agentId": "YOUR_AGENT_ID",
  "email": "si fue capturado",
  "message": "texto del mensaje",
  "referrer": "origen de tráfico",
  "userAgent": "browser info",
  "timestamp": "ISO 8601"
}
```

---

## 6. INTEGRACIÓN CON SISTEMA MULTI-AGENTE EXTERNO

Para que un sistema multi-agente externo tome control de la navegación conversacional:

### Protocolo de Conexión
```javascript
// El agente externo puede dispatchar eventos para controlar la navegación
window.dispatchEvent(new CustomEvent('wlt:navigate', { detail: { path: '/servicios' } }));
window.dispatchEvent(new CustomEvent('wlt:message', { detail: { text: 'Mensaje del agente' } }));
window.dispatchEvent(new CustomEvent('wlt:open-chat', {}));
```

### API de Contexto de Página
```javascript
// El agente externo puede consultar el estado actual del sitio
const siteState = window.__WLT_STATE__; // disponible globalmente tras inicialización
// { currentPage, sessionId, history, leadData }
```

### Conexión CRM/ERP Agéntico
El endpoint `data-crm-endpoint` debe implementar:
```
POST /ingest
Content-Type: application/json
Body: { event, session, page, email, message, ... }

Response 200: { status: "ok", leadId: "...", nextAction: "schedule|info|follow_up" }
```

---

## 7. GESTIÓN DE RAMAS GIT

```bash
# Ramas activas
main  ← producción estable (builds verificados)
dev   ← desarrollo activo (feature branches mergeados aquí)

# Flujo de trabajo
git checkout dev
git pull origin dev
# ... desarrollo ...
git add .
git commit -m "feat: descripción"
git push origin dev

# Para merge a main (producción)
git checkout main
git merge dev
git push origin main
```

---

## 8. COMANDOS DEL PROYECTO

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (puerto 9002)
npm run dev

# Build de producción
npx next build

# Ver build en producción local
npx next start -p 9002

# Lint
npm run lint

# TypeCheck
npm run typecheck
```

---

## 9. VARIABLES DE ENTORNO REQUERIDAS (`.env.local`)

```bash
# (Opcional) API interna WLT si se conecta al backend agéntico
NEXT_PUBLIC_WLT_API_URL=https://api.weblifetech.com
NEXT_PUBLIC_WLT_AGENT_ID=wlt-site-main
NEXT_PUBLIC_CRM_ENDPOINT=https://crm.weblifetech.com/ingest

# Firebase (si se usa para leads)
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
```

---

*Generado por WEBLIFETECH Agentic Engineering — Antigravity Agent Session 2026*
