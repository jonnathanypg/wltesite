import type { Metadata } from 'next';
import { BookOpen } from 'lucide-react';
import { DownloadGuideForm } from './DownloadGuideForm';

export const metadata: Metadata = {
  title: 'Guía Vibe-Readiness | WEBLIFETECH',
  description: 'Descargue nuestra guía de arquitectura Vibe-to-Prod para fundadores.',
};

export default function VibeReadinessGuidePage() {
  return (
    <main className="min-h-screen bg-grid relative pb-24 selection:bg-cyan-500/30">
      <section className="pt-16 pb-16 px-6 max-w-4xl mx-auto">
        <div className="glass p-8 sm:p-12 rounded-3xl border-white/10 text-center space-y-6 shadow-2xl">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground text-xs font-mono font-bold uppercase">
            📖 RUTA C: RECURSOS EXCLUSIVOS & BUILDERS GUIDE
          </div>

          <h1 className="text-3xl sm:text-5xl font-headline font-extrabold text-white leading-tight">
            Gracias por su interés en WEBLIFETECH.
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Actualmente, nuestra firma se enfoca exclusivamente en la ingeniería de refactorización y producción para MVPs que ya cuentan con código generado e interacción validada.
          </p>

          <div className="glass p-8 rounded-2xl border-cyan-500/20 text-left space-y-4">
            <h3 className="text-xl font-headline font-bold text-white flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-cyan-400" /> Recursos Gratuitos para Preparar su Proyecto
            </h3>
            <p className="text-xs text-muted-foreground">
              Le invitamos a descargar nuestra guía exclusiva de arquitectura para fundadores:
            </p>
            
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
              <div className="text-sm font-bold text-cyan-300">
                📄 Ebook PDF: "Guía Vibe-to-Prod: Cómo construir su MVP en Lovable o Replit para que pueda ser escalado a Producción sin colapsar."
              </div>
              <p className="text-xs text-muted-foreground">
                Aprenda las mejores prácticas de estructuración de esquemas, manejo de claves API y desacoplamiento temprano.
              </p>
            </div>

            <DownloadGuideForm />
          </div>

        </div>
      </section>
    </main>
  );
}
