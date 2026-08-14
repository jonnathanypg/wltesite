import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, FileText, ArrowRight, ShieldCheck, Zap, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: 'Servicios & Tarifario | WEBLIFETECH Vibe-to-Prod',
  description: 'Conozca el detalle de nuestras 3 fases de escalado: Vibe Audit & Blueprint, Vibe-to-Prod Hardening y Forward Scalability Retainer.',
  keywords: ['Precios Vibe Coding Audit', 'Tarifas Reingeniería Software', 'Escalado Supabase AWS', 'SLA Infraestructura']
};

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-grid relative pb-24 selection:bg-orange-500/30">
      
      {/* HERO SERVICIOS */}
      <section className="relative pt-20 pb-16 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-xs font-mono font-medium mb-6">
            <FileText className="h-4 w-4" /> SERVICIOS & TARIFARIO TRANSPARENTE
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-headline font-bold text-white mb-6 leading-tight">
            Nuestras 3 Fases de Escalado <br />
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Vibe-to-Production</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Modalidades claras, entregables medibles e inversión predecible sin sorpresas ni reescrituras innecesarias.
          </p>
        </div>
      </section>

      {/* DESGLOSE DETALLADO DE FASES */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        
        {/* FASE 1 */}
        <div className="glass p-8 sm:p-10 rounded-3xl border-cyan-500/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">[ PRECIO FIJO CERRADO ]</span>
              <h2 className="text-2xl sm:text-3xl font-headline font-bold text-white mt-1">
                FASE 1: Vibe Audit & Architectural Blueprint
              </h2>
            </div>
            <div className="text-left md:text-right">
              <div className="text-2xl font-bold font-mono text-cyan-400">$2,500 – $3,500 USD</div>
              <div className="text-xs text-muted-foreground">Startups Beta desde $185 – $350 USD</div>
              <div className="text-xs font-mono text-cyan-300">Duración: 3 a 5 Días Laborables</div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            <strong>Objetivo:</strong> Radiografía técnica completa y evaluación del nivel de riesgo del MVP antes de lanzar a producción o presentar a clientes institucionales.
          </p>

          <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider mb-4">Alcance Técnico Incluido:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground mb-8">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Escaneo estático de código fuente y dependencias vulnerables (OWASP Top 10).</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Auditoría de rendimiento de base de datos y detección de consultas N+1.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Evaluación de arquitectura de seguridad y exposición de variables de entorno.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Entrega de Diagrama ERD normalizado y Mapa de Arquitectura Cloud Recomendado.</span>
            </div>
            <div className="flex items-start gap-2 md:col-span-2">
              <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Plan de Trabajo Detallado (SOW) y presupuesto exacto cerrado para la Fase 2.</span>
            </div>
          </div>

          <Link href="/calificar">
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-full px-6">
              Solicitar Fase 1 Audit →
            </Button>
          </Link>
        </div>

        {/* FASE 2 */}
        <div className="glass p-8 sm:p-10 rounded-3xl border-orange-500/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-mono text-orange-400 font-bold uppercase tracking-widest">[ STATEMENT OF WORK - POR HITOS ]</span>
              <h2 className="text-2xl sm:text-3xl font-headline font-bold text-white mt-1">
                FASE 2: Vibe-to-Production Hardening
              </h2>
            </div>
            <div className="text-left md:text-right">
              <div className="text-2xl font-bold font-mono text-orange-400">$8,000 – $90,000 USD</div>
              <div className="text-xs text-muted-foreground">Según escala de proyecto</div>
              <div className="text-xs font-mono text-orange-300">Duración: 2 a 8 Semanas</div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            <strong>Objetivo:</strong> Refactorización, desacoplamiento, independización total de la plataforma de origen y despliegue enterprise del sistema.
          </p>

          <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider mb-4">Alcance Técnico Incluido:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground mb-8">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />
              <span>Extracción limpia de Lovable, Replit, Bolt o Cursor (removiendo marcas de agua y límites de tokens).</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />
              <span>Configuración de repositorios GitHub/GitLab con ramas Dev, Staging y Prod.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />
              <span>Conversión a TypeScript estrito, modularización Next.js/React y backend optimizado.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />
              <span>Normalización de PostgreSQL/Supabase, índices de alta velocidad y políticas RLS.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />
              <span>Implementación de cifrado de secretos, CORS, JWT/OAuth2 y preparación RBAC.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />
              <span>Despliegue cloud, SSL (HTTPS), Docker y canalizaciones de CI/CD automatizadas.</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-muted-foreground mb-8">
            <div><strong>Startup / MVP Comercial:</strong> $8k – $15k USD</div>
            <div><strong>SaaS Growth / Mediana:</strong> $18k – $35k USD</div>
            <div><strong>Enterprise / B2G:</strong> $40k – $90k USD</div>
          </div>

          <Link href="/calificar">
            <Button className="bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold rounded-full px-6">
              Evaluar Mi Proyecto para Fase 2 →
            </Button>
          </Link>
        </div>

        {/* FASE 3 */}
        <div className="glass p-8 sm:p-10 rounded-3xl border-blue-500/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-widest">[ SUSCRIPCIÓN MENSUAL ]</span>
              <h2 className="text-2xl sm:text-3xl font-headline font-bold text-white mt-1">
                FASE 3: Forward Scalability Retainer & Agentic Infra
              </h2>
            </div>
            <div className="text-left md:text-right">
              <div className="text-2xl font-bold font-mono text-blue-400">$2,500 – $25,000 USD/mes</div>
              <div className="text-xs font-mono text-blue-300">Duración: Continuo</div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            <strong>Objetivo:</strong> Mantenimiento proactivo de alto nivel, evolución continua de la arquitectura e inyección de agentes de IA avanzados.
          </p>

          <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider mb-4">Alcance Técnico Incluido:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground mb-8">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
              <span>Garantía Operativa mediante SLA del 99.9% de uptime.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
              <span>Horas dedicadas mensuales de Arquitectura de Software e Ingeniería Forward Deployed.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
              <span>Monitoreo proactivo de errores, logs estructurados y parches de seguridad continuos.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
              <span>Integración de sistemas de IA (Agentes Autónomos, RAG, Chatbots calibrados) creados en Labs.</span>
            </div>
          </div>

          <Link href="/calificar">
            <Button variant="outline" className="border-blue-500/40 text-blue-300 hover:bg-blue-500/10 rounded-full px-6 font-bold">
              Consultar Planes de Suscripción →
            </Button>
          </Link>
        </div>

      </section>

      {/* PREGUNTAS FRECUENTES (FAQS - SEO / GEO DENSITY) */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-white/5">
        <h2 className="text-3xl font-headline font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
          <HelpCircle className="h-6 w-6 text-orange-400" /> Preguntas Frecuentes
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="glass border-white/10 rounded-2xl px-6">
            <AccordionTrigger className="text-white hover:no-underline font-bold">
              ¿Por qué no es conveniente rehacer el software desde cero con una agencia tradicional?
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
              Las agencias tradicionales recomiendan la reescritura total porque carecen de herramientas para interpretar código sintético generado por IA. Esto destruye la inversión que usted ya hizo en validación de experiencia de usuario y lógica de negocio. En WEBLIFETECH respetamos el código validado y usamos pipelines de IA para refactorizarlo en tiempo récord.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="glass border-white/10 rounded-2xl px-6">
            <AccordionTrigger className="text-white hover:no-underline font-bold">
              ¿El código final y la infraestructura quedan a mi nombre?
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
              Sí. El 100% de la propiedad intelectual, repositorios de código y cuentas de servidores son entregados al cliente. WEBLIFETECH no retiene ninguna propiedad del código desarrollado para su empresa.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="glass border-white/10 rounded-2xl px-6">
            <AccordionTrigger className="text-white hover:no-underline font-bold">
              ¿Qué ocurre si mi aplicación fue hecha en Lovable o Bolt y depende de sus bases de datos?
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
              Durante la Fase 2 realizamos la migración completa de los datos hacia su propia instancia gestionada de Supabase o PostgreSQL en la nube de su preferencia, garantizando total independencia de la plataforma de prototipado.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

    </main>
  );
}
