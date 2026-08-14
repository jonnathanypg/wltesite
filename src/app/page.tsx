"use client";

import Link from "next/link";
import { 
  Zap, ArrowRight, ShieldCheck, CheckCircle2, XCircle, Terminal, 
  Layers, Lock, Database, Code2, Server, Award, ChevronRight, Sparkles 
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-grid relative pb-24 selection:bg-primary/30">
      
      {/* SECCIÓN 1: HERO (ABOVE THE FOLD) */}
      <section className="relative pt-20 pb-20 px-6 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          
          {/* Badge Superior */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-300 text-xs font-mono font-medium mb-8 backdrop-blur-md shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            ⚡ AGENCIA FORWARD DEPLOYED & R&D LAB <span className="text-muted-foreground">|</span> VIBE-TO-PROD HARDENING FRAMEWORK
          </div>

          {/* H1 Principal */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-headline font-extrabold tracking-tight mb-6 leading-[1.1] text-white">
            Del Chat de IA a <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
              Producción Enterprise.
            </span>
            <br />
            <span className="text-2xl sm:text-4xl md:text-5xl font-semibold text-muted-foreground">
              Sin Reescribir Su MVP Desde Cero.
            </span>
          </h1>

          {/* Sub-titular H2 */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Superamos <strong className="text-white font-medium">"El Muro del Vibe Coding"</strong>. Auditamos, extraemos y refactorizamos su prototipo creado en <span className="text-cyan-300 font-semibold">Lovable, Replit, Bolt o Cursor</span> para convertirlo en una arquitectura robusta, segura y escalable en <strong className="text-white">semanas, no meses</strong>.
          </p>

          {/* CTAs Duales */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/calificar">
              <Button size="lg" className="h-14 px-8 text-base bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white rounded-full font-bold shadow-xl shadow-orange-500/25 transition-all group">
                Solicitar Vibe Audit en 5 Días →
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="#metodologia">
              <Button size="lg" variant="outline" className="h-14 px-8 text-base border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 rounded-full font-bold">
                Ver Metodología Vibe-to-Prod
              </Button>
            </a>
          </div>

          {/* Logotipos de Compatibilidad Originaria */}
          <div className="pt-8 border-t border-white/5 max-w-4xl mx-auto">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
              Ingeniería de producción optimizada para repositorios y riles nacidos en:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm font-mono text-muted-foreground">
              {['Lovable', 'Replit Agent', 'Bolt.new', 'Cursor', 'v0.dev', 'Supabase'].map((platform) => (
                <span key={platform} className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-white font-medium shadow-sm hover:border-cyan-500/40 transition-colors">
                  ⚡ {platform}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECCIÓN 2: EL PROBLEMA — EL MURO DEL VIBE CODING */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-white mb-4">
            ¿Su MVP en IA ya funciona, pero colapsa cuando intenta escalar o cerrar un cliente Enterprise?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Herramientas como Lovable, Bolt o Cursor le permitieron crear en horas lo que antes tomaba meses. Pero la generación conversacional de código oculta un problema invisible entre el día 30 y 90 de su lanzamiento: <span className="text-orange-400 font-semibold">deuda técnica compuesta</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Lock,
              title: "Inseguridad de Credenciales",
              desc: "Claves API y variables de entorno expuestas directamente en el navegador del cliente."
            },
            {
              icon: Database,
              title: "Consultas Ineficientes (N+1)",
              desc: "Bases de datos sin normalizar que bloquean el sistema al recibir tráfico real de usuarios."
            },
            {
              icon: Server,
              title: "Ausencia de Entornos Separados",
              desc: "Todo opera en un único entorno convulso, sin división entre Dev, Staging y Prod."
            },
            {
              icon: ShieldCheck,
              title: "Rechazo Institucional B2B/B2G",
              desc: "Incapacidad de superar auditorías de ciberseguridad corporativa, RBAC o normativas ISO/SOC2."
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="glass p-6 rounded-2xl border-white/5 hover:border-orange-500/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-headline font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECCIÓN 3: LA SOLUCIÓN — REINGENIERÍA NATIVA vs. REESCRITURA TRADICIONAL */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            WEBLIFETECH OCEÁNO AZUL
          </span>
          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-white mt-4 mb-4">
            No tire a la basura su MVP. Nosotros respetamos su trabajo y lo escalamos.
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse glass rounded-2xl">
            <thead>
              <tr className="border-b border-white/10 text-xs font-mono uppercase tracking-wider text-muted-foreground bg-white/5">
                <th className="p-4 sm:p-6">Dimensión de Análisis</th>
                <th className="p-4 sm:p-6 text-red-400">Agencias Tradicionales (Océano Rojo)</th>
                <th className="p-4 sm:p-6 text-cyan-400 font-bold bg-cyan-500/10">WEBLIFETECH (Océano Azul)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {[
                {
                  dim: "Tratamiento de su MVP",
                  rojo: '"Lo que hizo en IA no sirve; debemos rehacerlo de cero."',
                  azul: "Auditamos, extraemos la lógica validada y la refactorizamos."
                },
                {
                  dim: "Tiempo de Salida a Mercado",
                  rojo: "3 a 6 meses de desarrollo lento y costoso.",
                  azul: "2 a 4 semanas mediante nuestro pipeline AI-to-Prod."
                },
                {
                  dim: "Aprovechamiento de Inversión",
                  rojo: "Pérdida total del capital y tiempo invertidos en el prototipo.",
                  azul: "Preservación del 100% de la UX y lógica de negocio validada."
                },
                {
                  dim: "Arquitectura de Entregables",
                  rojo: "Monolitos cerrados con dependencia del proveedor.",
                  azul: "Repositorio propio, contenedores Docker y CI/CD en su nube."
                },
                {
                  dim: "Costo Operativo",
                  rojo: "Presupuestos opacos desde $30,000 USD a $100,000 USD.",
                  azul: "Fases fijas modulares desde $2,500 USD con ROI inmediato."
                }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02]">
                  <td className="p-4 sm:p-6 font-semibold text-white">{row.dim}</td>
                  <td className="p-4 sm:p-6 text-muted-foreground flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{row.rojo}</span>
                  </td>
                  <td className="p-4 sm:p-6 text-cyan-200 font-medium bg-cyan-500/5">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{row.azul}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECCIÓN 4: LA DUALIDAD WEBLIFETECH (LAB + AGENCY) */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-white mb-4">
            Investigación Agéntica Avanzada aplicada a la Ingeniería de Producción Real
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Columna Izquierda: LABS */}
          <div className="glass p-8 rounded-3xl border-cyan-500/20 hover:border-cyan-500/50 transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                WEBLIFETECH LABS
              </span>
              <h3 className="text-2xl font-headline font-bold text-white mt-4 mb-3">
                R&D Lab en Infraestructura y Agentes Autónomos
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Desarrollamos internamente orquestadores de IA, sistemas multi-agente, canalizaciones RAG soberanas y soluciones socioeconómicas para América Latina. Investigamos el estado del arte en IA para crear nuestras propias herramientas de ingeniería de contexto.
              </p>
            </div>
            <Link href="/lab">
              <Button variant="outline" className="w-full border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 rounded-full font-bold">
                Explorar Investigaciones del Lab →
              </Button>
            </Link>
          </div>

          {/* Columna Derecha: AGENCY */}
          <div className="glass p-8 rounded-3xl border-blue-500/20 hover:border-blue-500/50 transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                WEBLIFETECH AGENCY
              </span>
              <h3 className="text-2xl font-headline font-bold text-white mt-4 mb-3">
                Forward Deployed Engineering para B2B, B2B2G y B2G
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Desplegamos ingenieros senior que se integran a su flujo de trabajo. Utilizando el pipeline propietario desarrollado en nuestro R&D Lab, procesamos el AST de su código generado por IA y lo transformamos en una plataforma comercial blindada bajo SLAs del 99.9%.
              </p>
            </div>
            <Link href="/agency">
              <Button variant="outline" className="w-full border-blue-500/40 text-blue-300 hover:bg-blue-500/10 rounded-full font-bold">
                Conocer Servicios de Agencia →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: FRAMEWORK EN 3 FASES */}
      <section id="metodologia" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-white mb-4">
            De Prototipo Inestable a Plataforma Enterprise en 3 Pasos Metódicos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              fase: "FASE 1",
              title: "Vibe Audit & Blueprint",
              time: "3-5 Días - Precio Fijo",
              desc: "Escaneo estático de código, detección de fallas OWASP, Modelo Entidad-Relación (ERD) optimizado y Hoja de Ruta de Refactorización a precio cerrado."
            },
            {
              fase: "FASE 2",
              title: "Vibe-to-Prod Hardening",
              time: "2-8 Semanas - SOW",
              desc: "Desacoplamiento de plataforma origen, entornos Dev/Staging/Prod, refactorización modular (Next.js/TypeScript/FastAPI), Supabase y CI/CD automatizado."
            },
            {
              fase: "FASE 3",
              title: "Forward Scalability",
              time: "Suscripción & Agentes",
              desc: "Ingeniero Forward Deployed asignado, monitoreo 24/7 con SLA del 99.9%, inyección de agentes autónomos y RAG desarrollados en WEBLIFETECH Labs."
            }
          ].map((step, idx) => (
            <div key={idx} className="glass p-8 rounded-3xl relative border-white/10 hover:border-cyan-500/40 transition-all">
              <div className="text-xs font-mono text-cyan-400 mb-2 font-bold">{step.fase}</div>
              <h3 className="text-xl font-headline font-bold text-white mb-1">{step.title}</h3>
              <div className="text-xs font-mono text-muted-foreground mb-4">{step.time}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN 6: CUMPLIMIENTO B2B / B2B2G / B2G */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="glass p-10 rounded-3xl border-cyan-500/20">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 uppercase tracking-widest">
              SECURITY SHIELD
            </span>
            <h2 className="text-3xl font-headline font-bold text-white mt-4 mb-4">
              Cumplimiento Institucional para Licitaciones Públicas y Grandes Corporaciones
            </h2>
            <p className="text-sm text-muted-foreground mb-8">
              ¿Su cliente corporativo o una entidad gubernamental le exige garantías de ciberseguridad antes de firmar el contrato? Inyectamos la capa de infraestructura soberana que su MVP necesita:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-cyan-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Cifrado Soberano: Datos protegidos (AES-256 / TLS 1.3)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Control de Acceso Granular (RBAC + RLS)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Trazabilidad Inmutable (Structured Audit Logs)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Compatibilidad ISO/IEC 27001 y SOC2 Type II</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 7: PRUEBA SOCIAL Y CASO DESTACADO */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="glass p-10 rounded-3xl border-orange-500/20 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent">
          <div className="flex items-center gap-2 text-orange-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Award className="h-4 w-4" /> CASO DE ÉXITO DESTACADO
          </div>
          <blockquote className="text-xl sm:text-2xl font-headline italic text-white mb-6 leading-relaxed">
            "En solo 7 días, WEBLIFETECH extrajo nuestro MVP desde Lovable, eliminó las marcas de agua y dependencias de suscripción, estructuró nuestro repositorio Git en ramas Dev/Prod y configuró una PWA comercial con checkout directo a WhatsApp. Transformaron un prototipo visual en un activo digital propio y seguro."
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center font-bold text-orange-400">
              AV
            </div>
            <div>
              <div className="font-bold text-white">Adrián Vinueza</div>
              <div className="text-xs text-muted-foreground">Fundador de AURIVA - Agua Alcalina</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 8: CTA FINAL */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl sm:text-5xl font-headline font-extrabold text-white mb-6">
          ¿Listo para transformar su prototipo en una plataforma enterprise?
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          Obtenga un diagnóstico técnico real de su código generado en IA antes de que sus usuarios o clientes detecten las fallas.
        </p>
        <Link href="/calificar">
          <Button size="lg" className="h-16 px-10 text-lg bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white rounded-full font-bold shadow-2xl shadow-orange-500/30 transition-all">
            Solicitar Audit de MVP en 5 Días →
          </Button>
        </Link>
      </section>

    </main>
  );
}
