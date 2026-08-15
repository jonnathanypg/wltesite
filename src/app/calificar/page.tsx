"use client";

import { CalificarWizard } from './CalificarWizard';
import { useLanguage } from '@/lib/LanguageContext';

export default function CalificarPage() {
  const { lang } = useLanguage();

  return (
    <main className="min-h-screen bg-grid relative pb-24 selection:bg-orange-500/30">
      <section className="pt-12 pb-16 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-bold uppercase mb-4">
            ⚡ TRIAGE & QUALIFICATION PIPELINE
          </div>
          <h1 className="text-3xl sm:text-5xl font-headline font-bold text-white mb-3">
            {lang === 'es'
              ? 'Evaluación Dinámica de Arquitectura & MVP'
              : 'Dynamic Architecture & MVP Evaluation'}
          </h1>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            {lang === 'es'
              ? 'Responda 5 preguntas clave para enrutar su proyecto al equipo de ingeniería o al recurso técnico idóneo.'
              : 'Answer 5 key questions to route your project to the ideal engineering team or technical resource.'}
          </p>
        </div>

        <CalificarWizard />
      </section>
    </main>
  );
}
