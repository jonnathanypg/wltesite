import type { Metadata } from 'next';
import { Calendar, ShieldCheck, CheckCircle2, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Atención Prioritaria Enterprise | WEBLIFETECH',
  description: 'Reserva prioritaria para proyectos calificados Enterprise y B2G.',
};

export default function EnterprisePriorityPage() {
  return (
    <main className="min-h-screen bg-grid relative pb-24 selection:bg-orange-500/30">
      <section className="pt-16 pb-16 px-6 max-w-4xl mx-auto">
        <div className="glass p-8 sm:p-12 rounded-3xl border-orange-500/40 text-center space-y-6 shadow-2xl">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-bold uppercase">
            <Star className="h-4 w-4" /> RUTA A: PRIORIDAD ENTERPRISE & B2G
          </div>

          <h1 className="text-3xl sm:text-5xl font-headline font-extrabold text-white leading-tight">
            ¡Proyecto Calificado para Atención Prioritaria Enterprise!
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Su perfil coincide exactamente con nuestros proyectos de alto impacto. Ha sido asignado a la agenda prioritaria de nuestro equipo de <strong className="text-white">Arquitectura de Software & Forward Deployed Engineering</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left p-6 rounded-2xl bg-white/5 border border-white/5 text-sm text-cyan-200">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-orange-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">1. Reserve su Sesión Técnica de 30 Minutos:</strong> Seleccione el horario en el calendario para reunirse directamente con un Forward Deployed Engineer Senior.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-orange-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">2. Preparación & NDA:</strong> Tenga a la mano el acceso al repositorio o entorno de prototipado (firmaremos NDA previo a la llamada).
              </div>
            </div>
          </div>

          {/* Widget Simulado de Calendly / Cal.com */}
          <div className="glass p-8 rounded-2xl border-white/10 text-center space-y-4">
            <Calendar className="h-12 w-12 text-orange-400 mx-auto animate-pulse" />
            <h3 className="text-xl font-headline font-bold text-white">Agenda Prioritaria de Arquitectura</h3>
            <p className="text-xs font-mono text-muted-foreground">[ Widget Integrado de Calendly / Cal.com - Agenda Priority Active ]</p>
            <a href="https://wa.me/593982840685?text=Hola%2C%20califique%20como%20Enterprise%20Priority%20para%20Vibe-to-Prod" target="_blank" rel="noopener noreferrer" className="inline-block max-w-full w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto h-auto min-h-12 py-3.5 px-6 sm:px-8 text-sm sm:text-base bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold rounded-full shadow-xl mt-4 whitespace-normal leading-snug text-center max-w-full">
                Confirmar Cita Prioritaria Vía WhatsApp Express →
              </Button>
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
