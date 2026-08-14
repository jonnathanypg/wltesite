import type { Metadata } from 'next';
import { CalificarWizard } from './CalificarWizard';

export const metadata: Metadata = {
  title: 'Formulario Dinámico de Calificación | WEBLIFETECH',
  description: 'Formulario conversacional paso a paso con lógica condicional para calificar y enrutar prospectos de Vibe-to-Prod.',
};

export default function CalificarPage() {
  return (
    <main className="min-h-screen bg-grid relative pb-24 selection:bg-orange-500/30">
      <section className="pt-12 pb-16 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-bold uppercase mb-4">
            ⚡ TRIAGE & QUALIFICATION PIPELINE
          </div>
          <h1 className="text-3xl sm:text-5xl font-headline font-bold text-white mb-3">
            Evaluación Dinámica de Arquitectura & MVP
          </h1>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Responda 5 preguntas clave para enrutar su proyecto al equipo de ingeniería o al recurso técnico idóneo.
          </p>
        </div>

        <CalificarWizard />
      </section>
    </main>
  );
}
