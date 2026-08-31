'use client';

import Link from 'next/link';
import { CheckCircle2, FileText, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from '@/lib/LanguageContext';

export default function ServiciosPage() {
  const { lang } = useLanguage();

  return (
    <main className="min-h-screen bg-grid relative pb-24 selection:bg-orange-500/30">
      
      {/* HERO SERVICIOS */}
      <section className="relative pt-20 pb-16 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-xs font-mono font-medium mb-6">
            <FileText className="h-4 w-4" /> {lang === 'es' ? 'SERVICIOS & TARIFARIO TRANSPARENTE' : 'TRANSPARENT SERVICES & PRICING'}
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-headline font-bold text-white mb-6 leading-tight">
            {lang === 'es' ? 'Nuestras 3 Fases de Escalado' : 'Our 3-Phase Scaling Methodology'} <br />
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Vibe-to-Production</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {lang === 'es' 
              ? 'Modalidades claras, entregables medibles e inversión predecible sin sorpresas ni reescrituras innecesarias.' 
              : 'Clear engagement models, measurable deliverables, and predictable investment without surprises or unnecessary rewrites.'}
          </p>
        </div>
      </section>

      {/* DESGLOSE DETALLADO DE FASES */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        
        {/* FASE 1 */}
        <div className="glass p-8 sm:p-10 rounded-3xl border-cyan-500/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">
                {lang === 'es' ? '[ PRECIO FIJO CERRADO ]' : '[ FIXED-PRICE ENGAGEMENT ]'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-headline font-bold text-white mt-1">
                {lang === 'es' ? 'FASE 1: Vibe Audit & Architectural Blueprint' : 'PHASE 1: Vibe Audit & Architectural Blueprint'}
              </h2>
            </div>
            <div className="text-left md:text-right">
              <div className="text-2xl font-bold font-mono text-cyan-400">$2,500 – $3,500 USD</div>
              <div className="text-xs text-muted-foreground">
                {lang === 'es' ? 'Startups Beta desde $185 – $350 USD' : 'Beta Startups starting at $185 – $350 USD'}
              </div>
              <div className="text-xs font-mono text-cyan-300">
                {lang === 'es' ? 'Duración: 3 a 5 Días Laborables' : 'Timeline: 3 to 5 Business Days'}
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            <strong>{lang === 'es' ? 'Objetivo:' : 'Objective:'}</strong>{' '}
            {lang === 'es' 
              ? 'Radiografía técnica completa y evaluación del nivel de riesgo del MVP antes de lanzar a producción o presentar a clientes institucionales.' 
              : 'Comprehensive technical deep-dive and risk assessment of your MVP prior to production release or enterprise customer demos.'}
          </p>

          <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider mb-4">
            {lang === 'es' ? 'Alcance Técnico Incluido:' : 'Included Technical Scope:'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground mb-8">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                {lang === 'es' 
                  ? 'Escaneo estático de código fuente y dependencias vulnerables (OWASP Top 10).' 
                  : 'Static source code analysis and vulnerability scanning across dependencies (OWASP Top 10).'}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                {lang === 'es' 
                  ? 'Auditoría de rendimiento de base de datos y detección de consultas N+1.' 
                  : 'Database performance auditing and N+1 query detection.'}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                {lang === 'es' 
                  ? 'Evaluación de arquitectura de seguridad y exposición de variables de entorno.' 
                  : 'Security architecture assessment and environment variable leakage audit.'}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                {lang === 'es' 
                  ? 'Entrega de Diagrama ERD normalizado y Mapa de Arquitectura Cloud Recomendado.' 
                  : 'Normalized ERD data modeling and recommended Cloud Architecture Blueprint.'}
              </span>
            </div>
            <div className="flex items-start gap-2 md:col-span-2">
              <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                {lang === 'es' 
                  ? 'Plan de Trabajo Detallado (SOW) y presupuesto exacto cerrado para la Fase 2.' 
                  : 'Comprehensive Statement of Work (SOW) with fixed-price scope for Phase 2.'}
              </span>
            </div>
          </div>

          <Link href="/calificar" className="inline-block max-w-full w-full sm:w-auto">
            <Button className="w-full sm:w-auto h-auto min-h-10 py-2.5 px-6 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-full whitespace-normal leading-snug text-center max-w-full">
              {lang === 'es' ? 'Solicitar Fase 1 Audit →' : 'Request Phase 1 Audit →'}
            </Button>
          </Link>
        </div>

        {/* FASE 2 */}
        <div className="glass p-8 sm:p-10 rounded-3xl border-orange-500/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-mono text-orange-400 font-bold uppercase tracking-widest">
                {lang === 'es' ? '[ STATEMENT OF WORK - POR HITOS ]' : '[ STATEMENT OF WORK - MILESTONE-BASED ]'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-headline font-bold text-white mt-1">
                {lang === 'es' ? 'FASE 2: Vibe-to-Production Hardening' : 'PHASE 2: Vibe-to-Production Hardening'}
              </h2>
            </div>
            <div className="text-left md:text-right">
              <div className="text-2xl font-bold font-mono text-orange-400">$8,000 – $90,000 USD</div>
              <div className="text-xs text-muted-foreground">
                {lang === 'es' ? 'Según escala de proyecto' : 'Based on project complexity'}
              </div>
              <div className="text-xs font-mono text-orange-300">
                {lang === 'es' ? 'Duración: 2 a 8 Semanas' : 'Timeline: 2 to 8 Weeks'}
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            <strong>{lang === 'es' ? 'Objetivo:' : 'Objective:'}</strong>{' '}
            {lang === 'es' 
              ? 'Refactorización, desacoplamiento, independización total de la plataforma de origen y despliegue enterprise del sistema.' 
              : 'Complete refactoring, platform decoupling, full IP independence from AI builders, and enterprise-grade deployment.'}
          </p>

          <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider mb-4">
            {lang === 'es' ? 'Alcance Técnico Incluido:' : 'Included Technical Scope:'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground mb-8">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />
              <span>
                {lang === 'es' 
                  ? 'Extracción limpia de Lovable, Replit, Bolt o Cursor (removiendo marcas de agua y límites de tokens).' 
                  : 'Clean extraction from Lovable, Replit, Bolt, or Cursor (eliminating platform lock-in and token limitations).'}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />
              <span>
                {lang === 'es' 
                  ? 'Configuración de repositorios GitHub/GitLab con ramas Dev, Staging y Prod.' 
                  : 'GitHub/GitLab repository architecture with Dev, Staging, and Production branch environments.'}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />
              <span>
                {lang === 'es' 
                  ? 'Conversión a TypeScript estrito, modularización Next.js/React y backend optimizado.' 
                  : 'Strict TypeScript conversion, Next.js/React modularization, and production-optimized backend services.'}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />
              <span>
                {lang === 'es' 
                  ? 'Normalización de PostgreSQL/Supabase, índices de alta velocidad y políticas RLS.' 
                  : 'PostgreSQL/Supabase normalization, high-performance indexing, and Row Level Security (RLS) policies.'}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />
              <span>
                {lang === 'es' 
                  ? 'Implementación de cifrado de secretos, CORS, JWT/OAuth2 y preparación RBAC.' 
                  : 'Secrets encryption, CORS hardening, JWT/OAuth2 authentication, and granular RBAC setup.'}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />
              <span>
                {lang === 'es' 
                  ? 'Despliegue cloud, SSL (HTTPS), Docker y canalizaciones de CI/CD automatizadas.' 
                  : 'Cloud deployment, SSL (HTTPS), Docker containerization, and automated CI/CD pipelines.'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-muted-foreground mb-8">
            <div>
              <strong>{lang === 'es' ? 'Startup / MVP Comercial:' : 'Startup / Commercial MVP:'}</strong> $8k – $15k USD
            </div>
            <div>
              <strong>{lang === 'es' ? 'SaaS Growth / Mediana:' : 'Growth SaaS / Mid-Market:'}</strong> $18k – $35k USD
            </div>
            <div>
              <strong>{lang === 'es' ? 'Enterprise / B2G:' : 'Enterprise / B2G:'}</strong> $40k – $90k USD
            </div>
          </div>

          <Link href="/calificar" className="inline-block max-w-full w-full sm:w-auto">
            <Button className="w-full sm:w-auto h-auto min-h-10 py-2.5 px-6 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold rounded-full whitespace-normal leading-snug text-center max-w-full">
              {lang === 'es' ? 'Evaluar Mi Proyecto para Fase 2 →' : 'Evaluate My Project for Phase 2 →'}
            </Button>
          </Link>
        </div>

        {/* FASE 3 */}
        <div className="glass p-8 sm:p-10 rounded-3xl border-blue-500/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-widest">
                {lang === 'es' ? '[ SUSCRIPCIÓN MENSUAL ]' : '[ MONTHLY RETAINER ]'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-headline font-bold text-white mt-1">
                {lang === 'es' ? 'FASE 3: Forward Scalability Retainer & Agentic Infra' : 'PHASE 3: Forward Scalability Retainer & Agentic Infra'}
              </h2>
            </div>
            <div className="text-left md:text-right">
              <div className="text-2xl font-bold font-mono text-blue-400">
                {lang === 'es' ? '$2,500 – $25,000 USD/mes' : '$2,500 – $25,000 USD/mo'}
              </div>
              <div className="text-xs font-mono text-blue-300">
                {lang === 'es' ? 'Duración: Continuo' : 'Timeline: Ongoing'}
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            <strong>{lang === 'es' ? 'Objetivo:' : 'Objective:'}</strong>{' '}
            {lang === 'es' 
              ? 'Mantenimiento proactivo de alto nivel, evolución continua de la arquitectura e inyección de agentes de IA avanzados.' 
              : 'Proactive high-tier engineering, continuous architectural evolution, and custom agentic AI pipeline integration.'}
          </p>

          <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider mb-4">
            {lang === 'es' ? 'Alcance Técnico Incluido:' : 'Included Technical Scope:'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground mb-8">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
              <span>
                {lang === 'es' 
                  ? 'Garantía Operativa mediante SLA del 99.9% de uptime.' 
                  : 'Operational SLA guarantee with 99.9% target uptime.'}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
              <span>
                {lang === 'es' 
                  ? 'Horas dedicadas mensuales de Arquitectura de Software e Ingeniería Forward Deployed.' 
                  : 'Dedicated monthly Software Architecture and Forward Deployed Engineering bandwidth.'}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
              <span>
                {lang === 'es' 
                  ? 'Monitoreo proactivo de errores, logs estructurados y parches de seguridad continuos.' 
                  : 'Proactive observability, structured logging, APM monitoring, and continuous security patching.'}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
              <span>
                {lang === 'es' 
                  ? 'Integración de sistemas de IA (Agentes Autónomos, RAG, Chatbots calibrados) creados en Labs.' 
                  : 'Integration of advanced AI systems (Autonomous Agents, RAG pipelines, production-grade LLM tools) from Labs.'}
              </span>
            </div>
          </div>

          <Link href="/calificar" className="inline-block max-w-full w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto h-auto min-h-10 py-2.5 px-6 border-blue-500/40 text-blue-300 hover:bg-blue-500/10 rounded-full font-bold whitespace-normal leading-snug text-center max-w-full">
              {lang === 'es' ? 'Consultar Planes de Suscripción →' : 'Explore Retainer Plans →'}
            </Button>
          </Link>
        </div>

      </section>

      {/* PREGUNTAS FRECUENTES (FAQS - SEO / GEO DENSITY) */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-white/5">
        <h2 className="text-3xl font-headline font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
          <HelpCircle className="h-6 w-6 text-orange-400" /> {lang === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="glass border-white/10 rounded-2xl px-6">
            <AccordionTrigger className="text-white hover:no-underline font-bold">
              {lang === 'es' 
                ? '¿Por qué no es conveniente rehacer el software desde cero con una agencia tradicional?' 
                : 'Why shouldn\'t you rewrite the software from scratch with a traditional agency?'}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
              {lang === 'es' 
                ? 'Las agencias tradicionales recomiendan la reescritura total porque carecen de herramientas para interpretar código sintético generado por IA. Esto destruye la inversión que usted ya hizo en validación de experiencia de usuario y lógica de negocio. En WEBLIFETECH respetamos el código validado y usamos pipelines de IA para refactorizarlo en tiempo récord.' 
                : 'Traditional agencies recommend a complete rewrite because they lack specialized tooling to interpret AI-generated synthetic code. This destroys the capital and time you already invested in UX validation and business logic. At WEBLIFETECH, we preserve your validated code and leverage proprietary AI refactoring pipelines to productionize it in record time.'}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="glass border-white/10 rounded-2xl px-6">
            <AccordionTrigger className="text-white hover:no-underline font-bold">
              {lang === 'es' 
                ? '¿El código final y la infraestructura quedan a mi nombre?' 
                : 'Do I retain full ownership of the final codebase and infrastructure?'}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
              {lang === 'es' 
                ? 'Sí. El 100% de la propiedad intelectual, repositorios de código y cuentas de servidores son entregados al cliente. WEBLIFETECH no retiene ninguna propiedad del código desarrollado para su empresa.' 
                : 'Yes. 100% of intellectual property, code repositories, and cloud server accounts are owned by and delivered directly to the client. WEBLIFETECH retains zero IP rights over your custom software.'}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="glass border-white/10 rounded-2xl px-6">
            <AccordionTrigger className="text-white hover:no-underline font-bold">
              {lang === 'es' 
                ? '¿Qué ocurre si mi aplicación fue hecha en Lovable o Bolt y depende de sus bases de datos?' 
                : 'What happens if my app was built on Lovable or Bolt and depends on their managed databases?'}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
              {lang === 'es' 
                ? 'Durante la Fase 2 realizamos la migración completa de los datos hacia su propia instancia gestionada de Supabase o PostgreSQL en la nube de su preferencia, garantizando total independencia de la plataforma de prototipado.' 
                : 'During Phase 2, we execute a complete data migration to your own dedicated Supabase or PostgreSQL cloud instance on your preferred provider (AWS, GCP, Supabase Cloud), ensuring zero platform lock-in.'}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

    </main>
  );
}
