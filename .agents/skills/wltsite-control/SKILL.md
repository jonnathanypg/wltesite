---
name: wltsite-control-aikrofy
description: >
  Skill Maestro de Control, Navegación y RAG en tiempo real de WEBLIFETECH / Aikrofy.
  Permite que cualquier agente o junta directiva virtual (C-Suite Aikrofy) se conecte
  al sitio web nativamente o mediante el tag de inserción universal (wlt-chat.js).
  Incluye soporte de navegación conversacional por voz (STT/TTS), auto-descubrimiento
  del DOM en sitios legacy sin configuración, ingestión RAG continua y plantillas JSON.
---

# WEBLIFETECH x AIKROFY — SKILL MAESTRO DE CONTROL AGÉNTICO

> **Versión:** 3.0.0 (Enterprise Voice & Live RAG Engine)  
> **Framework:** Next.js 15.5.9 (App Router) + Tailwind CSS + Web Speech API  
> **Servidor Local:** `http://localhost:9002`  
> **Repositorio GitHub:** [https://github.com/jonnathanypg/wltesite](https://github.com/jonnathanypg/wltesite) (`main` / `dev`)

---

## 1. CAPACIDADES NATIVAS DEL AGENTE AIKROFY

1. **Navegación Conversacional sin Recarga (SPA & Multi-Página):**
   - El agente procesa intenciones en lenguaje natural o vía comandos por voz y navega fluidamente usando `history.pushState`.
   - Cero parpadeos ni recargas completas de ventana.

2. **Capa de Voz en Tiempo Real (STT & TTS):**
   - **Entrada (STT):** Micrófono nativo con `SpeechRecognition` y fallback a Whisper (`/api/voice/interact`).
   - **Salida (TTS):** Síntesis neuronal de voz (`SpeechSynthesisUtterance` + Edge-TTS) con selector de idiomas y botón de reproducción bajo demanda en cada respuesta.

3. **Auto-Descubrimiento del DOM (Zero-Config Legacy Websites):**
   - Si se inserta el script en WordPress, Webflow, PHP o código legacy sin SKILL previo, el motor rastrea la jerarquía de enlaces internos y genera el mapa dinámico en memoria.

4. **Sincronización RAG Continua con C-Suite Aikrofy:**
   - Cada interacción, cambio de página, apertura de chat o consulta técnica envía un payload estructurado al endpoint RAG de Aikrofy para alimentar la memoria corporativa.

---

## 2. ESQUEMA DE INSERCIÓN UNIVERSAL (TAG MANAGER COMPATIBLE)

Para habilitar este control en cualquier sitio web externo, simplemente se inserta en el `<head>`:

```html
<!-- AIKROFY CONVERSATIONAL NAVIGATOR V3.0 -->
<script
  src="https://cdn.weblifetech.com/agent/wlt-chat.js"
  data-agent-id="aikrofy-chief-executive"
  data-api-url="https://api.weblifetech.com"
  data-crm-endpoint="https://crm.weblifetech.com/ingest"
  data-voice-api="https://media.weblifetech.com/api"
  data-theme="dark"
  data-brand-color="#00E5FF"
  data-brand-secondary="#FF6B00"
  data-lang="es"
  data-auto-speak="false"
  async
></script>
```

---

## 3. ARQUITECTURA DE PÁGINAS Y CONTENIDOS (SITEMAP OFICIAL)

| Ruta | Título / Propósito | Componente / Rol |
|---|---|---|
| `/` | Del Chat de IA a Producción Enterprise (Océano Azul) | [page.tsx](file:///Users/macbook/Desktop/AI_LAB-WLT/wltsite/wltlandingpage/src/app/page.tsx) |
| `/lab` | WEBLIFETECH Labs: R&D en Swarms e Infraestructura | [lab/page.tsx](file:///Users/macbook/Desktop/AI_LAB-WLT/wltsite/wltlandingpage/src/app/lab/page.tsx) |
| `/agency` | Forward Deployed Engineering & Metodología FDE | [agency/page.tsx](file:///Users/macbook/Desktop/AI_LAB-WLT/wltsite/wltlandingpage/src/app/agency/page.tsx) |
| `/servicios` | Tarifario de 3 Fases (Audit, Hardening, Retainer) + FAQs | [servicios/page.tsx](file:///Users/macbook/Desktop/AI_LAB-WLT/wltsite/wltlandingpage/src/app/servicios/page.tsx) |
| `/contacto` | Contacto Directo, NDA Previo y Citas con Ingenieros | [contacto/page.tsx](file:///Users/macbook/Desktop/AI_LAB-WLT/wltsite/wltlandingpage/src/app/contacto/page.tsx) |
| `/tools/auditwlt` | **AuditWLT Tool:** Auditoría técnica SEO, Vibe-Coding y AST | [AuditWLTClient.tsx](file:///Users/macbook/Desktop/AI_LAB-WLT/wltsite/wltlandingpage/src/app/tools/auditwlt/AuditWLTClient.tsx) |
| `/calificar` | **Wizard de Triage Dinámico:** 5 pasos con enrutamiento | [CalificarWizard.tsx](file:///Users/macbook/Desktop/AI_LAB-WLT/wltsite/wltlandingpage/src/app/calificar/CalificarWizard.tsx) |
| `/reserva/enterprise-priority` | **Ruta A:** Atención Prioritaria Enterprise (>$5k / B2G) | [enterprise-priority/page.tsx](file:///Users/macbook/Desktop/AI_LAB-WLT/wltsite/wltlandingpage/src/app/reserva/enterprise-priority/page.tsx) |
| `/reserva/starter-audit` | **Ruta B:** Activación Fase 1 Starter Audit ($185–$495) | [starter-audit/page.tsx](file:///Users/macbook/Desktop/AI_LAB-WLT/wltsite/wltlandingpage/src/app/reserva/starter-audit/page.tsx) |
| `/recursos/vibe-readiness-guide` | **Ruta C:** Ebook PDF para proyectos en fase temprana | [DownloadGuideForm.tsx](file:///Users/macbook/Desktop/AI_LAB-WLT/wltsite/wltlandingpage/src/app/recursos/vibe-readiness-guide/DownloadGuideForm.tsx) |
| `/landing/vibe-to-prod` | **Landing Pauta:** Rescate de código en 3 a 5 días | [FastTrackForm.tsx](file:///Users/macbook/Desktop/AI_LAB-WLT/wltsite/wltlandingpage/src/app/landing/vibe-to-prod/FastTrackForm.tsx) |

---

## 4. PROTOCOLO DE EVENTOS PARA SUBAGENTES Y MCP

Cualquier sistema externo puede comunicarse con el frontend emitiendo eventos estándar en la ventana global (`window`):

```javascript
// 1. Forzar navegación conversacional a una ruta específica
window.dispatchEvent(new CustomEvent('wlt:navigate', { detail: { path: '/tools/auditwlt' } }));

// 2. Abrir asistente en modo de escucha de voz
window.dispatchEvent(new CustomEvent('wlt:open-voice-chat', {}));

// 3. Notificar cambio de idioma global (es / en)
window.dispatchEvent(new CustomEvent('wlt:lang-changed', { detail: { lang: 'en' } }));

// 4. Inyectar respuesta del agente de voz directamente al chat
window.dispatchEvent(new CustomEvent('wlt:agent-speech', { detail: { text: 'He completado el análisis de su web.' } }));
```

---

## 5. GENERACIÓN DINÁMICA DE PÁGINAS MEDIANTE JSON (CMS AGÉNTICO)

Las plantillas del sitio están estructuradas para permitir que agentes de contenido (ej. CMO/CTO en Aikrofy) inyecten nuevas páginas o variaciones de copy consumiendo un payload JSON estandarizado:

```json
{
  "pageSlug": "/landing/rescate-replit",
  "metaTitle": "Rescate de MVP Replit | WEBLIFETECH",
  "language": "es",
  "hero": {
    "badge": "⚡ AI RESCUE PROTOCOL",
    "headline": "Escale su proyecto Replit a AWS en 7 Días",
    "subheadline": "Sin perder datos ni rehacer la lógica.",
    "ctaText": "Auditar Proyecto Gratis →",
    "ctaAction": "/calificar"
  },
  "features": [
    { "title": "Base de Datos Propia", "desc": "Migración limpia a PostgreSQL" },
    { "title": "Seguridad RBAC", "desc": "Cifrado enterprise y preparación SOC2" }
  ]
}
```

---
*WEBLIFETECH AI Lab & Aikrofy Autonomous Architecture — 2026*
