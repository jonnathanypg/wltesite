'use client';

import { Mail, Clock, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

export default function ContactoPage() {
  const { lang } = useLanguage();

  return (
    <main className="min-h-screen bg-grid relative pb-24 selection:bg-cyan-500/30">
      
      {/* HERO CONTACTO */}
      <section className="relative pt-20 pb-16 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-medium mb-6">
            <Mail className="h-4 w-4" /> {lang === 'es' ? 'CONTACTO EJECUTIVO DIRECTO' : 'DIRECT EXECUTIVE CONTACT'}
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-headline font-bold text-white mb-6 leading-tight">
            {lang === 'es' ? 'Inicie la Conversación con un' : 'Start the Conversation with a'} <br />
            <span className="text-cyan-400">
              {lang === 'es' ? 'Ingeniero Senior.' : 'Senior Systems Engineer.'}
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {lang === 'es' 
              ? 'Sin intermediarios comerciales sin experiencia técnica. Reciba atención directa sobre la arquitectura y posibilidades de su proyecto.' 
              : 'No non-technical sales intermediaries. Speak directly with engineering leadership about your system architecture and scaling roadmap.'}
          </p>
        </div>
      </section>

      {/* INFORMACIÓN DE CONTACTO DIRECTO */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Canales Directos */}
          <div className="glass p-8 rounded-3xl border-cyan-500/20 space-y-6">
            <h2 className="text-2xl font-headline font-bold text-white mb-4">
              {lang === 'es' ? 'Canales Directos' : 'Direct Channels'}
            </h2>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-muted-foreground">
                  {lang === 'es' ? 'Email de Ingeniería' : 'Engineering Email'}
                </div>
                <a href="mailto:dev@weblifetech.com" className="text-lg font-bold text-white hover:text-cyan-300 transition-colors">
                  dev@weblifetech.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-muted-foreground">
                  {lang === 'es' ? 'Línea Directa / WhatsApp Comercial' : 'Direct Line / WhatsApp Business'}
                </div>
                <a href="https://wa.me/593982840685" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-emerald-400 hover:underline">
                  +593 982840685
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-muted-foreground">
                  {lang === 'es' ? 'Tiempo de Respuesta Promedio' : 'Average Response Time'}
                </div>
                <div className="text-base font-semibold text-white">
                  {lang === 'es' ? 'Menos de 4 horas en días laborables' : 'Under 4 hours on business days'}
                </div>
              </div>
            </div>
          </div>

          {/* Compromisos Operativos */}
          <div className="glass p-8 rounded-3xl border-white/10 space-y-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-headline font-bold text-white mb-6">
                {lang === 'es' ? 'Compromisos Operativos' : 'Operational Commitments'}
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {lang === 'es' ? 'Acuerdo de Confidencialidad (NDA) Previo' : 'Mutual Non-Disclosure Agreement (NDA)'}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {lang === 'es' 
                        ? 'Firmamos un NDA antes de revisar el código fuente de su repositorio.' 
                        : 'We execute an NDA before auditing or accessing your source code repository.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {lang === 'es' ? 'Evaluación Inicial Gratuita de 15 Minutos' : 'Complimentary 15-Minute Technical Assessment'}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {lang === 'es' 
                        ? 'Revisión rápida de factibilidad técnica sin costo para orientar su hoja de ruta.' 
                        : 'A fast, complimentary technical feasibility review to guide your architectural roadmap.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/calificar" className="block w-full">
              <Button className="w-full h-auto min-h-12 sm:min-h-14 py-3.5 px-4 sm:px-6 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold rounded-full text-sm sm:text-base shadow-xl whitespace-normal leading-snug text-center max-w-full">
                {lang === 'es' ? 'Ir al Formulario de Calificación Triage →' : 'Proceed to Project Qualification Form →'}
              </Button>
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
