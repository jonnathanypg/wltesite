"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChevronRight, ArrowLeft, CheckCircle2, Zap } from 'lucide-react';

export function CalificarWizard() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  const [answers, setAnswers] = useState({
    origin: '',
    challenge: '',
    stage: '',
    budget: '',
    name: '',
    email: '',
    phone: '',
    repoUrl: ''
  });

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      // EVALUAR LÓGICA CONDICIONAL DE ENRUTAMIENTO (RUTAS A, B, C)
      const isEnterpriseBudget = answers.budget === 'Más de $15,000 USD (Proyectos Enterprise / B2G / Retainer Continuo)' || 
                                 answers.budget === '$5,000 – $15,000 USD (Vibe-to-Prod Hardening Completo)';
      const isGrowthStage = answers.stage === 'Ya tenemos usuarios de pago / clientes activos ($1k - $10k USD/mes)' ||
                            answers.stage === 'Empresa consolidada / Contrato B2G o Enterprise firmado o por firmar ($10k+ USD/mes)';
      const isNoCodeYet = answers.origin === 'Aún es solo una idea (Sin código construido)' || answers.budget === 'Menos de $1,000 USD (Buscando opción Starter / Beta)';

      if (isNoCodeYet && answers.budget === 'Menos de $1,000 USD (Buscando opción Starter / Beta)') {
        router.push('/recursos/vibe-readiness-guide');
      } else if (isEnterpriseBudget || isGrowthStage) {
        router.push('/reserva/enterprise-priority');
      } else {
        router.push('/reserva/starter-audit');
      }
    }
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="glass p-6 sm:p-10 rounded-3xl border-cyan-500/20 shadow-2xl relative">
      
      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10 text-xs font-mono">
        <span className="text-cyan-400 font-bold">PASO {step} DE 5</span>
        <div className="flex gap-1.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <div 
              key={i} 
              className={`h-1.5 w-8 rounded-full transition-all ${
                i <= step ? 'bg-cyan-400' : 'bg-white/10'
              }`}
            />
          ))}
        </div>
      </div>

      {/* PASO 1: ORIGEN */}
      {step === 1 && (
        <div className="space-y-6">
          <h2 className="text-xl font-headline font-bold text-white">
            PASO 1: ¿En qué plataforma o herramienta fue desarrollado el prototipo actual?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Lovable.dev",
              "Replit Agent",
              "Bolt.new",
              "Cursor / Claude Code / v0",
              "Desarrollo Web Tradicional / Código Propio",
              "Aún es solo una idea (Sin código construido)"
            ].map((option) => (
              <button
                key={option}
                onClick={() => setAnswers({ ...answers, origin: option })}
                className={`p-4 text-left rounded-2xl border text-sm font-medium transition-all ${
                  answers.origin === option 
                    ? 'border-cyan-400 bg-cyan-500/10 text-white font-bold' 
                    : 'border-white/10 bg-white/5 text-muted-foreground hover:border-white/20'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* PASO 2: DESAFÍO TÉCNICO */}
      {step === 2 && (
        <div className="space-y-6">
          <h2 className="text-xl font-headline font-bold text-white">
            PASO 2: ¿Cuál es el obstáculo más crítico que enfrenta hoy?
          </h2>
          <div className="space-y-3">
            {[
              "La aplicación colapsa con usuarios reales o consultas simultáneas.",
              "Necesito eliminar las marcas de agua, límites de la plataforma y tener mi propio repositorio.",
              "Un cliente corporativo o el Gobierno me exige pruebas de seguridad y RBAC para cerrar el contrato.",
              "Quiero integrar agentes de IA avanzados y automatizaciones RAG."
            ].map((option) => (
              <button
                key={option}
                onClick={() => setAnswers({ ...answers, challenge: option })}
                className={`w-full p-4 text-left rounded-2xl border text-sm font-medium transition-all ${
                  answers.challenge === option 
                    ? 'border-cyan-400 bg-cyan-500/10 text-white font-bold' 
                    : 'border-white/10 bg-white/5 text-muted-foreground hover:border-white/20'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* PASO 3: ETAPA COMERCIAL */}
      {step === 3 && (
        <div className="space-y-6">
          <h2 className="text-xl font-headline font-bold text-white">
            PASO 3: ¿En qué etapa se encuentra su proyecto actualmente?
          </h2>
          <div className="space-y-3">
            {[
              "En fase de validación con usuarios beta (Sin facturación aún).",
              "Ya tenemos usuarios de pago / clientes activos ($1k - $10k USD/mes).",
              "Empresa consolidada / Contrato B2G o Enterprise firmado o por firmar ($10k+ USD/mes)."
            ].map((option) => (
              <button
                key={option}
                onClick={() => setAnswers({ ...answers, stage: option })}
                className={`w-full p-4 text-left rounded-2xl border text-sm font-medium transition-all ${
                  answers.stage === option 
                    ? 'border-cyan-400 bg-cyan-500/10 text-white font-bold' 
                    : 'border-white/10 bg-white/5 text-muted-foreground hover:border-white/20'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* PASO 4: PRESUPUESTO */}
      {step === 4 && (
        <div className="space-y-6">
          <h2 className="text-xl font-headline font-bold text-white">
            PASO 4: ¿Cuál es su presupuesto estimado para la fase de ingeniería y paso a producción?
          </h2>
          <div className="space-y-3">
            {[
              "Menos de $1,000 USD (Buscando opción Starter / Beta).",
              "$2,500 – $5,000 USD (Fase 1 Audit + Despliegue Inicial).",
              "$5,000 – $15,000 USD (Vibe-to-Prod Hardening Completo).",
              "Más de $15,000 USD (Proyectos Enterprise / B2G / Retainer Continuo)."
            ].map((option) => (
              <button
                key={option}
                onClick={() => setAnswers({ ...answers, budget: option })}
                className={`w-full p-4 text-left rounded-2xl border text-sm font-medium transition-all ${
                  answers.budget === option 
                    ? 'border-cyan-400 bg-cyan-500/10 text-white font-bold' 
                    : 'border-white/10 bg-white/5 text-muted-foreground hover:border-white/20'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* PASO 5: DATOS DE CONTACTO */}
      {step === 5 && (
        <div className="space-y-4">
          <h2 className="text-xl font-headline font-bold text-white mb-2">
            PASO 5: Datos de Contacto y Repositorio
          </h2>
          
          <div>
            <label className="block text-xs font-mono text-muted-foreground mb-1">Nombre Completo *</label>
            <input 
              type="text" 
              required
              value={answers.name}
              onChange={(e) => setAnswers({ ...answers, name: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-muted-foreground mb-1">Email Profesional *</label>
            <input 
              type="email" 
              required
              value={answers.email}
              onChange={(e) => setAnswers({ ...answers, email: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-muted-foreground mb-1">Teléfono / WhatsApp *</label>
            <input 
              type="text" 
              required
              value={answers.phone}
              onChange={(e) => setAnswers({ ...answers, phone: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-muted-foreground mb-1">URL del Proyecto o Repositorio (Opcional)</label>
            <input 
              type="text" 
              value={answers.repoUrl}
              onChange={(e) => setAnswers({ ...answers, repoUrl: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
            />
          </div>
        </div>
      )}

      {/* Control Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-white/10">
        {step > 1 ? (
          <Button variant="outline" onClick={handlePrev} className="w-full sm:w-auto h-auto min-h-10 py-2.5 px-6 border-white/10 text-white rounded-full whitespace-normal leading-snug text-center max-w-full">
            <ArrowLeft className="h-4 w-4 mr-2" /> Anterior
          </Button>
        ) : <div />}

        <Button 
          onClick={handleNext}
          className="w-full sm:w-auto h-auto min-h-10 py-2.5 px-8 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold rounded-full shadow-lg whitespace-normal leading-snug text-center max-w-full"
        >
          {step === 5 ? "Finalizar & Calificar →" : "Siguiente →"}
        </Button>
      </div>

    </div>
  );
}
