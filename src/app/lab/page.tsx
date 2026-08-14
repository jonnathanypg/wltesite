import type { Metadata } from 'next';
import Link from 'next/link';
import { Cpu, Network, Database, Server, ArrowRight, Terminal, Shield, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'WEBLIFETECH Labs | R&D en Infraestructura Agéntica e IA',
  description: 'El laboratorio de investigación avanzada de WEBLIFETECH. Desarrollamos agentes autónomos, canalizaciones RAG soberanas y sistemas inteligentes para la gestión socioeconómica.',
  keywords: ['IA Agéntica LatAm', 'R&D Sistemas Multi-Agente', 'Sovereign RAG', 'Modelos de Lenguaje para Gestión Pública', 'WEBLIFETECH Research']
};

export default function LabPage() {
  return (
    <main className="min-h-screen bg-grid relative pb-24 selection:bg-cyan-500/30">
      
      {/* HERO DE LABS */}
      <section className="relative pt-20 pb-16 px-6 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-medium mb-6">
            <Cpu className="h-4 w-4" /> WEBLIFETECH LABS · R&D DIVISION
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-headline font-bold text-white mb-6 leading-tight">
            Investigando el Estado del Arte en <br />
            <span className="text-cyan-400">Infraestructura Agéntica</span> y Soluciones Socioeconómicas.
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Donde la teoría de la Inteligencia Artificial Generativa se convierte en motores de software de grado industrial para América Latina y el mundo.
          </p>
        </div>
      </section>

      {/* LÍNEAS PRINCIPALES DE INVESTIGACIÓN */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-white/5">
        <h2 className="text-2xl font-headline font-bold text-white mb-8 flex items-center gap-2">
          <Terminal className="h-5 w-5 text-cyan-400" /> Líneas Principales de Investigación
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass p-8 rounded-3xl border-cyan-500/20 hover:border-cyan-500/40 transition-all">
            <Network className="h-10 w-10 text-cyan-400 mb-6" />
            <h3 className="text-xl font-headline font-bold text-white mb-3">
              1. Multi-Agent Swarms & Workflow Orchestration
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Investigación en la coordinación de agentes autónomos especializados capaces de ejecutar tareas complejas de refactorización de código, análisis sintáctico (AST) y resolución de tareas operativas sin supervisión humana continua.
            </p>
          </div>

          <div className="glass p-8 rounded-3xl border-cyan-500/20 hover:border-cyan-500/40 transition-all">
            <Database className="h-10 w-10 text-cyan-400 mb-6" />
            <h3 className="text-xl font-headline font-bold text-white mb-3">
              2. Sovereign RAG & Knowledge Graphs
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Desarrollo de arquitecturas RAG (Retrieval-Augmented Generation) de alta precisión con privacidad garantizada, diseñadas para procesar grandes volúmenes de legislación, contratos públicos y documentación técnica corporativa.
            </p>
          </div>

          <div className="glass p-8 rounded-3xl border-cyan-500/20 hover:border-cyan-500/40 transition-all">
            <Server className="h-10 w-10 text-cyan-400 mb-6" />
            <h3 className="text-xl font-headline font-bold text-white mb-3">
              3. AI-Driven Socioeconomic Infrastructure
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sistemas inteligentes orientados a la optimización de recursos comunitarios, análisis predictivo para desarrollo regional y automatización de procesos B2G en economías emergentes.
            </p>
          </div>
        </div>
      </section>

      {/* PROYECTOS Y EXPERIMENTOS ABIERTOS */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-white/5">
        <h2 className="text-2xl font-headline font-bold text-white mb-8 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-cyan-400" /> Proyectos & Experimentos Abiertos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass p-6 rounded-2xl border-white/10">
            <div className="text-xs font-mono text-cyan-400 mb-2 font-bold">[ENGINE]</div>
            <h4 className="text-lg font-bold text-white mb-2">Pipeline AST Code Refactorer</h4>
            <p className="text-xs text-muted-foreground">Motor interno para la ingesta y desestructuración de repositorios sintéticos generados por Lovable/Replit.</p>
          </div>

          <div className="glass p-6 rounded-2xl border-white/10">
            <div className="text-xs font-mono text-cyan-400 mb-2 font-bold">[GOVTECH]</div>
            <h4 className="text-lg font-bold text-white mb-2">Agentic Public Ledger Tracker</h4>
            <p className="text-xs text-muted-foreground">Agentes autónomos para el monitoreo y auditoría transparente de licitaciones públicas.</p>
          </div>

          <div className="glass p-6 rounded-2xl border-white/10">
            <div className="text-xs font-mono text-cyan-400 mb-2 font-bold">[SECURITY]</div>
            <h4 className="text-lg font-bold text-white mb-2">Local-First LLM Deployments</h4>
            <p className="text-xs text-muted-foreground">Cómputo de modelos de lenguaje en infraestructura soberana local para sectores con alta restricción de privacidad.</p>
          </div>
        </div>
      </section>

      {/* PUENTE LABS -> AGENCY & CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-white/5 text-center">
        <div className="glass p-10 rounded-3xl border-cyan-500/30">
          <h2 className="text-3xl font-headline font-bold text-white mb-4">
            De la Investigación a la Producción del Cliente
          </h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl mx-auto">
            Cada avance logrado en WEBLIFETECH Labs se empaqueta de inmediato en herramientas internas que utiliza nuestra división de Agencia. Esto nos permite ejecutar refactorizaciones 4 veces más rápido que cualquier firma de ingeniería tradicional.
          </p>
          <Link href="/contacto">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-full px-8">
              ¿Interesado en una Colaboración Institucional o R&D? Contáctenos →
            </Button>
          </Link>
        </div>
      </section>

    </main>
  );
}
