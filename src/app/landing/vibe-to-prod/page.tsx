import type { Metadata } from 'next';
import { FastTrackForm } from './FastTrackForm';
import { ShieldCheck, Zap, Award, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vibe-to-Prod Rescue | WEBLIFETECH Landing',
  description: '¿Su MVP en Lovable, Replit o Bolt empezó a fallar? Auditamos, extraemos y desplegamos en su servidor con seguridad enterprise en 3 a 5 días.',
};

export default function VibeToProdLanding() {
  return (
    <main className="min-h-screen bg-grid relative pb-24 selection:bg-orange-500/30">
      
      {/* HERO DE ALTÍSIMA CONVERSIÓN */}
      <section className="pt-16 pb-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Columna Izquierda: Copys y Prueba Social */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-bold uppercase">
              ⚡ LANDING DE ALTA INTENCIÓN & RESCATE EXPRESS
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-extrabold text-white leading-tight">
              ¿Su MVP en Lovable, Replit o Bolt empezó a fallar o no pasa las pruebas de seguridad?
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-white">No tire su código a la basura.</strong> Lo auditamos, extraemos, desacoplamos y desplegamos en su propio servidor con seguridad enterprise en <span className="text-orange-400 font-bold">3 a 5 días</span>.
            </p>

            {/* Badges de Impacto */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center font-mono">
              <div className="glass p-3 rounded-xl">
                <div className="text-xl font-bold text-cyan-400">+200k</div>
                <div className="text-[10px] text-muted-foreground uppercase">Líneas IA Auditadas</div>
              </div>
              <div className="glass p-3 rounded-xl">
                <div className="text-xl font-bold text-orange-400">100%</div>
                <div className="text-[10px] text-muted-foreground uppercase">Independencia IP</div>
              </div>
              <div className="glass p-3 rounded-xl">
                <div className="text-xl font-bold text-emerald-400">99.9%</div>
                <div className="text-[10px] text-muted-foreground uppercase">SLA Uptime</div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario Fast-Track */}
          <div className="lg:col-span-5">
            <FastTrackForm />
          </div>

        </div>
      </section>

    </main>
  );
}
