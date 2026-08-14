import React from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

export const DICTIONARY: Record<Language, Record<string, string>> = {
  es: {
    // Navigation
    'nav.home': 'Home',
    'nav.lab': 'Labs R&D',
    'nav.agency': 'Agencia FDE',
    'nav.services': 'Servicios & Tarifas',
    'nav.contact': 'Contacto',
    'nav.auditTool': 'AuditWLT Tool',
    'nav.qualifyCta': 'Vibe Audit en 5 Días →',
    
    // Home Hero
    'hero.badge': '⚡ AGENCIA FORWARD DEPLOYED & R&D LAB | VIBE-TO-PROD HARDENING FRAMEWORK',
    'hero.title1': 'Del Chat de IA a',
    'hero.title2': 'Producción Enterprise.',
    'hero.titleSub': 'Sin Reescribir Su MVP Desde Cero.',
    'hero.desc': 'Superamos "El Muro del Vibe Coding". Auditamos, extraemos y refactorizamos su prototipo creado en Lovable, Replit, Bolt o Cursor para convertirlo en una arquitectura robusta, segura y escalable en semanas, no meses.',
    'hero.ctaPrimary': 'Solicitar Vibe Audit en 5 Días →',
    'hero.ctaSecondary': 'Ver Metodología Vibe-to-Prod',
    'hero.compatibility': 'Ingeniería de producción optimizada para repositorios y riles nacidos en:',

    // Pain points
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

    // Comparison
    'comp.badge': 'WEBLIFETECH OCEÁNO AZUL',
    'comp.title': 'No tire a la basura su MVP. Nosotros respetamos su trabajo y lo escalamos.',
    'comp.colDim': 'Dimensión de Análisis',
    'comp.colRed': 'Agencias Tradicionales (Océano Rojo)',
    'comp.colBlue': 'WEBLIFETECH (Océano Azul)',

    // AuditWLT Tool
    'audit.badge': '⚡ AGENTIC AUDIT ENGINE 2026 · AUDITWLT MODULE',
    'audit.title': 'Auditoría de Sitios Web, CMS & Vibe-Coding',
    'audit.desc': 'Inspección sintáctica y estructural profunda de HTML, CSS, JavaScript, marcas de agua (Lovable/Replit/Bolt), límites de tokens, vulnerabilidades OWASP y perfilamiento de leads para propuestas a medida.',
    'audit.urlLabel': 'URL del Sitio Web a Auditar *',
    'audit.emailLabel': 'Email Profesional (para enviar reporte)',
    'audit.cta': 'EJECUTAR AGENTIC AUDIT 2026 NOW →',
    'audit.analyzing': 'Analizando arquitectura en tiempo real...',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.lab': 'Labs R&D',
    'nav.agency': 'FDE Agency',
    'nav.services': 'Services & Pricing',
    'nav.contact': 'Contact',
    'nav.auditTool': 'AuditWLT Tool',
    'nav.qualifyCta': '5-Day Vibe Audit →',
    
    // Home Hero
    'hero.badge': '⚡ FORWARD DEPLOYED AGENCY & R&D LAB | VIBE-TO-PROD HARDENING FRAMEWORK',
    'hero.title1': 'From AI Chat to',
    'hero.title2': 'Enterprise Production.',
    'hero.titleSub': 'Without Rewriting Your MVP From Scratch.',
    'hero.desc': 'We break through "The Vibe Coding Wall". We audit, extract and refactor your prototype built in Lovable, Replit, Bolt or Cursor into a robust, secure and scalable architecture in weeks, not months.',
    'hero.ctaPrimary': 'Request 5-Day Vibe Audit →',
    'hero.ctaSecondary': 'View Vibe-to-Prod Method',
    'hero.compatibility': 'Production engineering optimized for repositories and stacks born in:',

    // Pain points
    'pain.title': 'Does your AI MVP work, but crashes when trying to scale or close an Enterprise client?',
    'pain.desc': 'Tools like Lovable, Bolt or Cursor let you build in hours what previously took months. But conversational code generation conceals an invisible issue that emerges between day 30 and 90 of launch: compounding technical debt.',
    'pain.item1.title': 'Credential Vulnerability',
    'pain.item1.desc': 'API keys and environment variables exposed directly in the client browser.',
    'pain.item2.title': 'Inefficient Queries (N+1)',
    'pain.item2.desc': 'Denormalized databases causing system bottlenecks under real user concurrency.',
    'pain.item3.title': 'No Environment Separation',
    'pain.item3.desc': 'Everything runs on a single messy environment, without Dev, Staging and Prod isolation.',
    'pain.item4.title': 'Institutional B2B/B2G Rejection',
    'pain.item4.desc': 'Failure to pass corporate cybersecurity audits, RBAC or ISO/SOC2 compliance checks.',

    // Comparison
    'comp.badge': 'WEBLIFETECH BLUE OCEAN',
    'comp.title': 'Do not throw your MVP away. We respect your validation and scale it.',
    'comp.colDim': 'Analysis Dimension',
    'comp.colRed': 'Traditional Agencies (Red Ocean)',
    'comp.colBlue': 'WEBLIFETECH (Blue Ocean)',

    // AuditWLT Tool
    'audit.badge': '⚡ AGENTIC AUDIT ENGINE 2026 · AUDITWLT MODULE',
    'audit.title': 'Website, CMS & Vibe-Coding Audit Engine',
    'audit.desc': 'Deep syntactic and structural inspection of HTML, CSS, JavaScript, watermarks (Lovable/Replit/Bolt), token thresholds, OWASP vulnerabilities and lead profiling for tailored proposals.',
    'audit.urlLabel': 'Target Website URL *',
    'audit.emailLabel': 'Business Email (to send report)',
    'audit.cta': 'EXECUTE AGENTIC AUDIT 2026 NOW →',
    'audit.analyzing': 'Analyzing architecture in real-time...',
  }
};

const LanguageContext = React.createContext<LanguageContextType>({
  lang: 'es',
  setLang: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Language>('es');

  React.useEffect(() => {
    const saved = localStorage.getItem('wlt_lang') as Language;
    if (saved === 'es' || saved === 'en') {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('wlt_lang', newLang);
    // Notificar al widget de chat para que adapte su idioma
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
  return React.useContext(LanguageContext);
}
