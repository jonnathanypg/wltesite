"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

export const DICTIONARY: Record<Language, Record<string, string>> = {
  es: {
    // ── Navigation ──────────────────────────────────────────
    'nav.home': 'Home',
    'nav.lab': 'Labs R&D',
    'nav.agency': 'Agencia FDE',
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',
    'nav.analyzeWeb': 'Analizar Web',
    'nav.requestAudit': 'Solicitar Auditoría',

    // ── Home Hero ────────────────────────────────────────────
    'hero.badge': '⚡ AGENCIA FORWARD DEPLOYED & R&D LAB | VIBE-TO-PROD HARDENING FRAMEWORK',
    'hero.title1': 'Del Chat de IA a',
    'hero.title2': 'Producción Enterprise.',
    'hero.titleSub': 'Sin Reescribir Su MVP Desde Cero.',
    'hero.desc': 'Superamos "El Muro del Vibe Coding". Auditamos, extraemos y refactorizamos su prototipo creado en Lovable, Replit, Bolt o Cursor para convertirlo en una arquitectura robusta, segura y escalable en semanas, no meses.',
    'hero.ctaPrimary': 'Solicitar Auditoría →',
    'hero.ctaSecondary': 'Ver Metodología Vibe-to-Prod',
    'hero.compatibility': 'Ingeniería de producción optimizada para repositorios y stacks nacidos en:',

    // ── Pain Points ──────────────────────────────────────────
    'pain.title': '¿Su MVP en IA ya funciona, pero colapsa cuando intenta escalar o cerrar un cliente Enterprise?',
    'pain.desc': 'Herramientas como Lovable, Bolt o Cursor le permitieron crear en horas lo que antes tomaba meses. Pero la generación conversacional de código oculta un problema invisible entre el día 30 y 90 de su lanzamiento: deuda técnica compuesta.',
    'pain.item1.title': 'Inseguridad de Credenciales',
    'pain.item1.desc': 'Claves API y variables de entorno expuestas directamente en el navegador del cliente.',
    'pain.item2.title': 'Consultas Ineficientes (N+1)',
    'pain.item2.desc': 'Bases de datos sin normalizar que bloquean el sistema al recibir tráfico real de usuarios.',
    'pain.item3.title': 'Ausencia de Entornos Separados',
    'pain.item3.desc': 'Todo opera en un único entorno convulso, sin división entre Dev, Staging y Prod.',
    'pain.item4.title': 'Rechazo Institucional B2B/B2G',
    'pain.item4.desc': 'Incapacidad de superar auditorías de ciberseguridad corporativa, RBAC o normativas ISO/SOC2.',

    // ── Comparison Table ─────────────────────────────────────
    'comp.badge': 'SIN REESCRIBIR',
    'comp.title': 'No tire a la basura su MVP. Nosotros respetamos su trabajo y lo escalamos.',
    'comp.colDim': 'Dimensión de Análisis',
    'comp.colRed': 'Agencias Tradicionales',
    'comp.colBlue': 'WEBLIFETECH',
    'comp.row1.dim': 'Tratamiento de su MVP',
    'comp.row1.red': '"Lo que hizo en IA no sirve; debemos rehacerlo de cero."',
    'comp.row1.blue': 'Auditamos, extraemos la lógica validada y la refactorizamos.',
    'comp.row2.dim': 'Tiempo de Salida a Mercado',
    'comp.row2.red': '3 a 6 meses de desarrollo lento y costoso.',
    'comp.row2.blue': '2 a 4 semanas mediante nuestro pipeline AI-to-Prod.',
    'comp.row3.dim': 'Aprovechamiento de Inversión',
    'comp.row3.red': 'Pérdida total del capital y tiempo invertidos en el prototipo.',
    'comp.row3.blue': 'Preservación del 100% de la UX y lógica de negocio validada.',
    'comp.row4.dim': 'Arquitectura de Entregables',
    'comp.row4.red': 'Monolitos cerrados con dependencia del proveedor.',
    'comp.row4.blue': 'Repositorio propio, contenedores Docker y CI/CD en su nube.',
    'comp.row5.dim': 'Costo Operativo',
    'comp.row5.red': 'Presupuestos opacos desde $30,000 USD a $100,000 USD.',
    'comp.row5.blue': 'Fases fijas modulares desde $2,500 USD con ROI inmediato.',

    // ── Duality Section ──────────────────────────────────────
    'dual.title': 'Investigación Agéntica Avanzada aplicada a la Ingeniería de Producción Real',
    'dual.labs.badge': 'WEBLIFETECH LABS',
    'dual.labs.title': 'R&D Lab en Infraestructura y Agentes Autónomos',
    'dual.labs.desc': 'Desarrollamos internamente orquestadores de IA, sistemas multi-agente, canalizaciones RAG soberanas y soluciones socioeconómicas para América Latina. Investigamos el estado del arte en IA para crear nuestras propias herramientas de ingeniería de contexto.',
    'dual.labs.cta': 'Explorar Investigaciones del Lab →',
    'dual.agency.badge': 'WEBLIFETECH AGENCY',
    'dual.agency.title': 'Forward Deployed Engineering para B2B, B2B2G y B2G',
    'dual.agency.desc': 'Desplegamos ingenieros senior que se integran a su flujo de trabajo. Utilizando el pipeline propietario desarrollado en nuestro R&D Lab, procesamos el AST de su código generado por IA y lo transformamos en una plataforma comercial blindada bajo SLAs del 99.9%.',
    'dual.agency.cta': 'Conocer Servicios de Agencia →',

    // ── Methodology (3 Phases) ───────────────────────────────
    'method.title': 'De Prototipo Inestable a Plataforma Enterprise en 3 Pasos Metódicos',
    'method.phase1.label': 'FASE 1',
    'method.phase1.title': 'Vibe Audit & Blueprint',
    'method.phase1.time': '3-5 Días · Precio Fijo',
    'method.phase1.desc': 'Escaneo estático de código, detección de fallas OWASP, Modelo Entidad-Relación (ERD) optimizado y Hoja de Ruta de Refactorización a precio cerrado.',
    'method.phase2.label': 'FASE 2',
    'method.phase2.title': 'Vibe-to-Prod Hardening',
    'method.phase2.time': '2-8 Semanas · SOW',
    'method.phase2.desc': 'Desacoplamiento de plataforma origen, entornos Dev/Staging/Prod, refactorización modular (Next.js/TypeScript/FastAPI), Supabase y CI/CD automatizado.',
    'method.phase3.label': 'FASE 3',
    'method.phase3.title': 'Forward Scalability',
    'method.phase3.time': 'Suscripción & Agentes',
    'method.phase3.desc': 'Ingeniero Forward Deployed asignado, monitoreo 24/7 con SLA del 99.9%, inyección de agentes autónomos y RAG desarrollados en WEBLIFETECH Labs.',

    // ── Security Shield ──────────────────────────────────────
    'security.badge': 'SECURITY SHIELD',
    'security.title': 'Cumplimiento Institucional para Licitaciones Públicas y Grandes Corporaciones',
    'security.desc': '¿Su cliente corporativo o una entidad gubernamental le exige garantías de ciberseguridad antes de firmar el contrato? Inyectamos la capa de infraestructura soberana que su MVP necesita:',
    'security.item1': 'Cifrado Soberano: Datos protegidos (AES-256 / TLS 1.3)',
    'security.item2': 'Control de Acceso Granular (RBAC + RLS)',
    'security.item3': 'Trazabilidad Inmutable (Structured Audit Logs)',
    'security.item4': 'Compatibilidad ISO/IEC 27001 y SOC2 Type II',

    // ── Social Proof ─────────────────────────────────────────
    'social.badge': 'CASO DE ÉXITO DESTACADO',
    'social.quote': '"En solo 3 días, WEBLIFETECH extrajo nuestro MVP desde Lovable, eliminó las marcas de agua y dependencias de suscripción, estructuró nuestro repositorio Git en ramas Dev/Prod y configuró una PWA comercial con checkout directo a WhatsApp. Transformaron un prototipo visual en un activo digital propio y seguro."',
    'social.author': 'Sebastián Mora',
    'social.role': 'Emprendedor serial',

    // ── Final CTA ────────────────────────────────────────────
    'cta.title': '¿Listo para transformar su prototipo en una plataforma enterprise?',
    'cta.desc': 'Obtenga un diagnóstico técnico real de su código generado en IA antes de que sus usuarios o clientes detecten las fallas.',
    'cta.button': 'Solicitar Auditoría Ahora →',

    // ── AuditWLT Tool ────────────────────────────────────────
    'audit.badge': '⚡ AGENTIC AUDIT ENGINE 2026 · AUDITWLT MODULE',
    'audit.title': 'Auditoría de Sitios Web, CMS & Vibe-Coding',
    'audit.desc': 'Inspección sintáctica y estructural profunda de HTML, CSS, JavaScript, marcas de agua (Lovable/Replit/Bolt), límites de tokens, vulnerabilidades OWASP y perfilamiento de leads para propuestas a medida.',
    'audit.urlLabel': 'URL del Sitio Web a Auditar *',
    'audit.emailLabel': 'Email Profesional (para enviar reporte)',
    'audit.cta': 'EJECUTAR AGENTIC AUDIT 2026 NOW →',
    'audit.analyzing': 'Analizando arquitectura en tiempo real...',
  },

  en: {
    // ── Navigation ──────────────────────────────────────────
    'nav.home': 'Home',
    'nav.lab': 'Labs R&D',
    'nav.agency': 'FDE Agency',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.analyzeWeb': 'Analyze Website',
    'nav.requestAudit': 'Request Audit',

    // ── Home Hero ────────────────────────────────────────────
    'hero.badge': '⚡ FORWARD DEPLOYED AGENCY & R&D LAB | VIBE-TO-PROD HARDENING FRAMEWORK',
    'hero.title1': 'From AI Chat to',
    'hero.title2': 'Enterprise Production.',
    'hero.titleSub': 'Without Rewriting Your MVP From Scratch.',
    'hero.desc': 'We break through "The Vibe Coding Wall". We audit, extract and refactor your prototype built in Lovable, Replit, Bolt or Cursor into a robust, secure and scalable architecture in weeks, not months.',
    'hero.ctaPrimary': 'Request Audit →',
    'hero.ctaSecondary': 'View Vibe-to-Prod Method',
    'hero.compatibility': 'Production engineering optimized for repositories and stacks born in:',

    // ── Pain Points ──────────────────────────────────────────
    'pain.title': 'Does your AI MVP work, but crashes when trying to scale or close an Enterprise client?',
    'pain.desc': 'Tools like Lovable, Bolt or Cursor let you build in hours what previously took months. But conversational code generation conceals an invisible issue between day 30 and 90 of launch: compounding technical debt.',
    'pain.item1.title': 'Credential Vulnerability',
    'pain.item1.desc': 'API keys and environment variables exposed directly in the client browser.',
    'pain.item2.title': 'Inefficient Queries (N+1)',
    'pain.item2.desc': 'Denormalized databases causing system bottlenecks under real user concurrency.',
    'pain.item3.title': 'No Environment Separation',
    'pain.item3.desc': 'Everything runs on a single messy environment, without Dev, Staging and Prod isolation.',
    'pain.item4.title': 'Institutional B2B/B2G Rejection',
    'pain.item4.desc': 'Failure to pass corporate cybersecurity audits, RBAC or ISO/SOC2 compliance checks.',

    // ── Comparison Table ─────────────────────────────────────
    'comp.badge': 'NO REWRITES',
    'comp.title': 'Do not throw your MVP away. We respect your validation and scale it.',
    'comp.colDim': 'Analysis Dimension',
    'comp.colRed': 'Traditional Agencies',
    'comp.colBlue': 'WEBLIFETECH',
    'comp.row1.dim': 'MVP Treatment',
    'comp.row1.red': '"What you built with AI is useless; we must rebuild from scratch."',
    'comp.row1.blue': 'We audit, extract the validated logic, and refactor it.',
    'comp.row2.dim': 'Time to Market',
    'comp.row2.red': '3 to 6 months of slow, expensive development.',
    'comp.row2.blue': '2 to 4 weeks via our AI-to-Prod pipeline.',
    'comp.row3.dim': 'Investment Leverage',
    'comp.row3.red': 'Total loss of capital and time invested in the prototype.',
    'comp.row3.blue': 'Preservation of 100% validated UX and business logic.',
    'comp.row4.dim': 'Deliverable Architecture',
    'comp.row4.red': 'Closed monoliths with vendor lock-in.',
    'comp.row4.blue': 'Own repository, Docker containers, and CI/CD on your cloud.',
    'comp.row5.dim': 'Operational Cost',
    'comp.row5.red': 'Opaque budgets from $30,000 to $100,000 USD.',
    'comp.row5.blue': 'Fixed modular phases from $2,500 USD with immediate ROI.',

    // ── Duality Section ──────────────────────────────────────
    'dual.title': 'Advanced Agentic Research applied to Real Production Engineering',
    'dual.labs.badge': 'WEBLIFETECH LABS',
    'dual.labs.title': 'R&D Lab in Infrastructure and Autonomous Agents',
    'dual.labs.desc': 'We internally develop AI orchestrators, multi-agent systems, sovereign RAG pipelines and socioeconomic solutions for Latin America. We research the state of the art in AI to build our own context engineering tools.',
    'dual.labs.cta': 'Explore Lab Research →',
    'dual.agency.badge': 'WEBLIFETECH AGENCY',
    'dual.agency.title': 'Forward Deployed Engineering for B2B, B2B2G and B2G',
    'dual.agency.desc': 'We deploy senior engineers who integrate into your workflow. Using the proprietary pipeline developed in our R&D Lab, we process the AST of your AI-generated code and transform it into a hardened commercial platform under 99.9% SLAs.',
    'dual.agency.cta': 'Explore Agency Services →',

    // ── Methodology (3 Phases) ───────────────────────────────
    'method.title': 'From Unstable Prototype to Enterprise Platform in 3 Methodical Steps',
    'method.phase1.label': 'PHASE 1',
    'method.phase1.title': 'Vibe Audit & Blueprint',
    'method.phase1.time': '3-5 Days · Fixed Price',
    'method.phase1.desc': 'Static code scan, OWASP flaw detection, optimized Entity-Relationship Model (ERD), and Refactoring Roadmap at a fixed price.',
    'method.phase2.label': 'PHASE 2',
    'method.phase2.title': 'Vibe-to-Prod Hardening',
    'method.phase2.time': '2-8 Weeks · SOW',
    'method.phase2.desc': 'Source platform decoupling, Dev/Staging/Prod environments, modular refactoring (Next.js/TypeScript/FastAPI), Supabase, and automated CI/CD.',
    'method.phase3.label': 'PHASE 3',
    'method.phase3.title': 'Forward Scalability',
    'method.phase3.time': 'Subscription & Agents',
    'method.phase3.desc': 'Dedicated Forward Deployed Engineer, 24/7 monitoring with 99.9% SLA, injection of autonomous agents and RAG developed in WEBLIFETECH Labs.',

    // ── Security Shield ──────────────────────────────────────
    'security.badge': 'SECURITY SHIELD',
    'security.title': 'Institutional Compliance for Public Bids and Large Corporations',
    'security.desc': 'Does your corporate client or a government entity require cybersecurity guarantees before signing the contract? We inject the sovereign infrastructure layer your MVP needs:',
    'security.item1': 'Sovereign Encryption: Protected data (AES-256 / TLS 1.3)',
    'security.item2': 'Granular Access Control (RBAC + RLS)',
    'security.item3': 'Immutable Traceability (Structured Audit Logs)',
    'security.item4': 'ISO/IEC 27001 and SOC2 Type II Compatibility',

    // ── Social Proof ─────────────────────────────────────────
    'social.badge': 'FEATURED SUCCESS STORY',
    'social.quote': '"In just 3 days, WEBLIFETECH extracted our MVP from Lovable, removed watermarks and subscription dependencies, structured our Git repository into Dev/Prod branches and set up a commercial PWA with direct WhatsApp checkout. They turned a visual prototype into a secure, owned digital asset."',
    'social.author': 'Sebastián Mora',
    'social.role': 'Serial Entrepreneur',

    // ── Final CTA ────────────────────────────────────────────
    'cta.title': 'Ready to transform your prototype into an enterprise platform?',
    'cta.desc': 'Get a real technical diagnosis of your AI-generated code before your users or clients detect the flaws.',
    'cta.button': 'Request Audit Now →',

    // ── AuditWLT Tool ────────────────────────────────────────
    'audit.badge': '⚡ AGENTIC AUDIT ENGINE 2026 · AUDITWLT MODULE',
    'audit.title': 'Website, CMS & Vibe-Coding Audit Engine',
    'audit.desc': 'Deep syntactic and structural inspection of HTML, CSS, JavaScript, watermarks (Lovable/Replit/Bolt), token thresholds, OWASP vulnerabilities and lead profiling for tailored proposals.',
    'audit.urlLabel': 'Target Website URL *',
    'audit.emailLabel': 'Business Email (to send report)',
    'audit.cta': 'EXECUTE AGENTIC AUDIT 2026 NOW →',
    'audit.analyzing': 'Analyzing architecture in real-time...',
  }
};

const LanguageContext = createContext<LanguageContextType>({
  lang: 'es',
  setLang: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('es');

  useEffect(() => {
    const saved = localStorage.getItem('wlt_lang') as Language;
    if (saved === 'es' || saved === 'en') {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('wlt_lang', newLang);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('wlt:lang-changed', { detail: { lang: newLang } }));
    }
  };

  const t = (key: string): string => {
    return DICTIONARY[lang][key] || DICTIONARY['es'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
