import type { Metadata } from 'next';
import { Calendar, CheckCircle2, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Reserva Starter Audit | WEBLIFETECH',
  description: 'Activación de Fase 1 Vibe Audit & Architectural Blueprint.',
};

export default function StarterAuditPage() {
  return (
    <main className="min-h-screen bg-grid relative pb-24 selection:bg-cyan-500/30">
      <section className="pt-16 pb-16 px-6 max-w-4xl mx-auto">
        <div className="glass p-8 sm:p-12 rounded-3xl border-cyan-500/40 text-center space-y-6 shadow-2xl">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-bold uppercase">
            ⚡ RUTA B: PROTOTIPO VALIDADO - ACTIVACIÓN DE FASE 1
          </div>

          <h1 className="text-3xl sm:text-5xl font-headline font-extrabold text-white leading-tight">
            Prototipo Validado. Siguiente Paso: Vibe Audit & Blueprint.
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Su proyecto está listo para pasar por nuestra <strong className="text-white">Fase 1 de auditoría técnica exprés</strong>. Analizaremos su código en 3 a 5 días y le entregaremos el plan exacto para escalar.
          </p>

          <div className="glass p-6 rounded-2xl border-cyan-500/20 bg-cyan-500/5 text-left space-y-3 text-sm">
            <div className="flex items-center gap-2 text-cyan-300 font-bold font-mono">
              <Award className="h-4 w-4" /> Oferta Especial Cliente Beta / Programa Impacto Social:
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Vibe Audit Exprés + Plan de Despliegue: Precio promocional desde <strong className="text-white">$185 USD – $495 USD</strong> (Aplica beneficio de exención / deducibilidad tributaria por impacto social en LatAm).
            </p>
          </div>

          {/* Widget Simulado */}
          <div className="glass p-8 rounded-2xl border-white/10 text-center space-y-4">
            <Calendar className="h-12 w-12 text-cyan-400 mx-auto animate-bounce" />
            <h3 className="text-xl font-headline font-bold text-white">Reservar Sesión de Diagnóstico</h3>
            <p className="text-xs font-mono text-muted-foreground">[ Widget de Calendly / Cal.com - Agenda Standard ]</p>
            <a href="https://wa.me/593982840685?text=Hola%2C%20deseo%20activar%20el%20Starter%20Audit%20para%20mi%20MVP" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-full px-8 shadow-xl mt-4">
                Reservar Sesión de Diagnóstico y Activación de Audit →
              </Button>
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
