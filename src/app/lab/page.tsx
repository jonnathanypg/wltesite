"use client";

import Link from 'next/link';
import { Cpu, Network, Database, Server, Terminal, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/LanguageContext';

export default function LabPage() {
  const { lang } = useLanguage();

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
            {lang === 'es' ? 'Investigando el Estado del Arte en' : 'Researching the State of the Art in'} <br />
            <span className="text-cyan-400">
              {lang === 'es' ? 'Infraestructura Agéntica' : 'Agentic Infrastructure'}
            </span>{' '}
            {lang === 'es' ? 'y Soluciones Socioeconómicas.' : 'and Socioeconomic Solutions.'}
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            {lang === 'es'
              ? 'Donde la teoría de la Inteligencia Artificial Generativa se convierte en motores de software de grado industrial para América Latina y el mundo.'
              : 'Where Generative AI theory becomes industrial-grade software engines for Latin America and the world.'}
          </p>
        </div>
      </section>

      {/* LÍNEAS PRINCIPALES DE INVESTIGACIÓN */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-white/5">
        <h2 className="text-2xl font-headline font-bold text-white mb-8 flex items-center gap-2">
          <Terminal className="h-5 w-5 text-cyan-400" /> {lang === 'es' ? 'Líneas Principales de Investigación' : 'Main Research Lines'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass p-8 rounded-3xl border-cyan-500/20 hover:border-cyan-500/40 transition-all">
            <Network className="h-10 w-10 text-cyan-400 mb-6" />
            <h3 className="text-xl font-headline font-bold text-white mb-3">
              1. Multi-Agent Swarms & Workflow Orchestration
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {lang === 'es'
                ? 'Investigación en la coordinación de agentes autónomos especializados capaces de ejecutar tareas complejas de refactorización de código, análisis sintáctico (AST) y resolución de tareas operativas sin supervisión humana continua.'
                : 'Research on coordinating specialized autonomous agents capable of performing complex code refactoring tasks, syntactic analysis (AST), and operational task resolution without continuous human supervision.'}
            </p>
          </div>

          <div className="glass p-8 rounded-3xl border-cyan-500/20 hover:border-cyan-500/40 transition-all">
            <Database className="h-10 w-10 text-cyan-400 mb-6" />
            <h3 className="text-xl font-headline font-bold text-white mb-3">
              2. Sovereign RAG & Knowledge Graphs
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {lang === 'es'
                ? 'Desarrollo de arquitecturas RAG (Retrieval-Augmented Generation) de alta precisión con privacidad garantizada, diseñadas para procesar grandes volúmenes de legislación, contratos públicos y documentación técnica corporativa.'
                : 'Development of high-precision RAG (Retrieval-Augmented Generation) architectures with guaranteed privacy, designed to process large volumes of legislation, public contracts, and corporate technical documentation.'}
            </p>
          </div>

          <div className="glass p-8 rounded-3xl border-cyan-500/20 hover:border-cyan-500/40 transition-all">
            <Server className="h-10 w-10 text-cyan-400 mb-6" />
            <h3 className="text-xl font-headline font-bold text-white mb-3">
              3. AI-Driven Socioeconomic Infrastructure
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {lang === 'es'
                ? 'Sistemas inteligentes orientados a la optimización de recursos comunitarios, análisis predictivo para desarrollo regional y automatización de procesos B2G en economías emergentes.'
                : 'Intelligent systems aimed at community resource optimization, predictive analytics for regional development, and B2G process automation in emerging economies.'}
            </p>
          </div>
        </div>
      </section>

      {/* PROYECTOS Y EXPERIMENTOS ABIERTOS */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-white/5">
        <h2 className="text-2xl font-headline font-bold text-white mb-8 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-cyan-400" /> {lang === 'es' ? 'Proyectos & Experimentos Abiertos' : 'Open Projects & Experiments'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass p-6 rounded-2xl border-white/10">
            <div className="text-xs font-mono text-cyan-400 mb-2 font-bold">[ENGINE]</div>
            <h4 className="text-lg font-bold text-white mb-2">Pipeline AST Code Refactorer</h4>
            <p className="text-xs text-muted-foreground">
              {lang === 'es'
                ? 'Motor interno para la ingesta y desestructuración de repositorios sintéticos generados por Lovable/Replit.'
                : 'Internal engine for ingesting and destructuring synthetic repositories generated by Lovable/Replit.'}
            </p>
          </div>

          <div className="glass p-6 rounded-2xl border-white/10">
            <div className="text-xs font-mono text-cyan-400 mb-2 font-bold">[GOVTECH]</div>
            <h4 className="text-lg font-bold text-white mb-2">Agentic Public Ledger Tracker</h4>
            <p className="text-xs text-muted-foreground">
              {lang === 'es'
                ? 'Agentes autónomos para el monitoreo y auditoría transparente de licitaciones públicas.'
                : 'Autonomous agents for transparent monitoring and auditing of public bids.'}
            </p>
          </div>

          <div className="glass p-6 rounded-2xl border-white/10">
            <div className="text-xs font-mono text-cyan-400 mb-2 font-bold">[SECURITY]</div>
            <h4 className="text-lg font-bold text-white mb-2">Local-First LLM Deployments</h4>
            <p className="text-xs text-muted-foreground">
              {lang === 'es'
                ? 'Cómputo de modelos de lenguaje en infraestructura soberana local para sectores con alta restricción de privacidad.'
                : 'Language model computation on sovereign local infrastructure for high privacy-restriction sectors.'}
            </p>
          </div>
        </div>
      </section>

      {/* PUENTE LABS -> AGENCY & CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-white/5 text-center">
        <div className="glass p-10 rounded-3xl border-cyan-500/30">
          <h2 className="text-3xl font-headline font-bold text-white mb-4">
            {lang === 'es'
              ? 'De la Investigación a la Producción del Cliente'
              : 'From Research to Client Production'}
          </h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl mx-auto">
            {lang === 'es'
              ? 'Cada avance logrado en WEBLIFETECH Labs se empaqueta de inmediato en herramientas internas que utiliza nuestra división de Agencia. Esto nos permite ejecutar refactorizaciones 4 veces más rápido que cualquier firma de ingeniería tradicional.'
              : 'Every breakthrough achieved at WEBLIFETECH Labs is immediately packaged into internal tools used by our Agency division. This allows us to execute refactoring 4x faster than any traditional engineering firm.'}
          </p>
          <Link href="/contacto" className="inline-block max-w-full w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto h-auto min-h-12 py-3 px-6 sm:px-8 text-sm sm:text-base bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-full whitespace-normal leading-snug text-center max-w-full">
              {lang === 'es'
                ? '¿Interesado en una Colaboración Institucional o R&D? Contáctenos →'
                : 'Interested in Institutional Collaboration or R&D? Contact Us →'}
            </Button>
          </Link>
        </div>
      </section>

    </main>
  );
}
