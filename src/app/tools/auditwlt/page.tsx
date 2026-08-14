import type { Metadata } from 'next';
import { AuditWLTClient } from './AuditWLTClient';

export const metadata: Metadata = {
  title: 'AuditWLT | Herramienta Nativa de Auditoría Web Multi-Agente',
  description: 'Auditoría integral técnica, SEO, UX, arquitectura, CMS, detección de marcas de agua Vibe-Coding y análisis de HTML/CSS/JS.',
};

export default function AuditWLTPage() {
  return (
    <main className="min-h-screen bg-grid relative pb-24 selection:bg-cyan-500/30">
      <section className="pt-10 pb-16 px-6 max-w-6xl mx-auto">
        
        {/* Header de la Tool */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase mb-4 shadow-lg">
            ⚡ AGENTIC AUDIT ENGINE 2026 · AUDITWLT MODULE
          </div>
          <h1 className="text-3xl sm:text-5xl font-headline font-extrabold text-white mb-4">
            Auditoría de Sitios Web, CMS & Vibe-Coding
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Inspección sintáctica y estructural profunda de HTML, CSS, JavaScript, marcas de agua (Lovable/Replit/Bolt), límites de tokens, vulnerabilidades OWASP y perfilamiento de leads para propuestas a medida.
          </p>
        </div>

        {/* Cliente Interactivo de AuditWLT */}
        <AuditWLTClient />

      </section>
    </main>
  );
}
