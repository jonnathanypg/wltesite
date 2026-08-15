'use client';

import Link from 'next/link';
import { Briefcase, ShieldCheck, UserCheck, Layers, ArrowRight, Code, Server, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/LanguageContext';

export default function AgencyPage() {
  const { lang } = useLanguage();

  return (
    <main className="min-h-screen bg-grid relative pb-24 selection:bg-blue-500/30">
      
      {/* HERO DE AGENCIA */}
      <section className="relative pt-20 pb-16 px-6 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-mono font-medium mb-6">
            <Briefcase className="h-4 w-4" /> {lang === 'es' ? 'WEBLIFETECH AGENCY · FORWARD DEPLOYED ENGINEERING' : 'WEBLIFETECH AGENCY · FORWARD DEPLOYED ENGINEERING'}
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-headline font-bold text-white mb-6 leading-tight">
            {lang === 'es' ? (
              <>
                Ingeniería de Escalado e Infraestructura <br />
                de Producción para <span className="text-blue-400">Proyectos Nacidos en IA.</span>
              </>
            ) : (
              <>
                Scaling Engineering & Production Infrastructure <br />
                for <span className="text-blue-400">AI-Born Projects.</span>
              </>
            )}
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            {lang === 'es'
              ? 'Unimos la mentalidad de un equipo de ciberseguridad enterprise con la agilidad de los ingenieros Forward Deployed. Nos integramos a su equipo para convertir su MVP en un activo rentable e indestructible.'
              : 'We combine enterprise cybersecurity mindset with the agility of Forward Deployed engineers. We integrate into your team to turn your MVP into a profitable, unbreakable asset.'}
          </p>
        </div>
      </section>

      {/* LA METODOLOGÍA FORWARD DEPLOYED ENGINEER (FDE) */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-white/5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold text-white mb-4">
            {lang === 'es'
              ? 'La Metodología Forward Deployed Engineer (FDE)'
              : 'The Forward Deployed Engineer (FDE) Methodology'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {lang === 'es' ? (
              <>
                A diferencia de las agencias tradicionales que entregan código por partes a través de gestores de proyecto no técnicos, WEBLIFETECH asigna un <strong className="text-white">Forward Deployed Engineer (FDE)</strong> directamente a su proyecto.
              </>
            ) : (
              <>
                Unlike traditional agencies that deliver code in parts through non-technical project managers, WEBLIFETECH assigns a <strong className="text-white">Forward Deployed Engineer (FDE)</strong> directly to your project.
              </>
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass p-8 rounded-3xl border-blue-500/20">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold mb-4 font-mono">01</div>
            <h3 className="text-xl font-headline font-bold text-white mb-3">
              {lang === 'es' ? 'Integración Profunda' : 'Deep Integration'}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {lang === 'es'
                ? 'El ingeniero FDE se conecta a sus canales de trabajo, audita la lógica existente y comprende sus objetivos comerciales.'
                : 'The FDE engineer joins your work channels, audits existing logic, and understands your business goals.'}
            </p>
          </div>

          <div className="glass p-8 rounded-3xl border-blue-500/20">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold mb-4 font-mono">02</div>
            <h3 className="text-xl font-headline font-bold text-white mb-3">
              {lang === 'es' ? 'Herramientas Agénticas' : 'Agentic Tooling'}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {lang === 'es'
                ? 'Aplicamos la suite de herramientas desarrollada en WEBLIFETECH Labs para acelerar el proceso de desacoplamiento y refactorización.'
                : 'We apply the tool suite developed in WEBLIFETECH Labs to accelerate the decoupling and refactoring process.'}
            </p>
          </div>

          <div className="glass p-8 rounded-3xl border-blue-500/20">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold mb-4 font-mono">03</div>
            <h3 className="text-xl font-headline font-bold text-white mb-3">
              {lang === 'es' ? 'Transferencia & SLAs' : 'Handoff & SLAs'}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {lang === 'es'
                ? 'Al finalizar el Hardening, capacitamos a su equipo interno o asumimos la gestión bajo acuerdos de nivel de servicio (SLA).'
                : 'Upon completing Hardening, we train your internal team or manage operations under service-level agreements (SLA).'}
            </p>
          </div>
        </div>
      </section>

      {/* COMPROMISO Y ESTÁNDARES TÉCNICOS */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-white/5">
        <h2 className="text-2xl font-headline font-bold text-white mb-8 text-center">
          {lang === 'es' ? 'Compromiso y Estándares Técnicos' : 'Commitment & Technical Standards'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass p-6 rounded-2xl border-white/10 text-center">
            <Code className="h-8 w-8 text-blue-400 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">
              {lang === 'es' ? 'Código Propio 100%' : '100% Own Code'}
            </h4>
            <p className="text-xs text-muted-foreground">
              {lang === 'es'
                ? 'La propiedad intelectual del código refactorizado y configurado es totalmente del cliente tras la liquidación del SOW.'
                : 'Intellectual property of the refactored and configured code fully belongs to the client upon SOW settlement.'}
            </p>
          </div>

          <div className="glass p-6 rounded-2xl border-white/10 text-center">
            <Server className="h-8 w-8 text-blue-400 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">
              {lang === 'es' ? 'Cero Vendor Lock-In' : 'Zero Vendor Lock-In'}
            </h4>
            <p className="text-xs text-muted-foreground">
              {lang === 'es'
                ? 'Desplegamos en sus propias cuentas de AWS, GCP, Vercel, Supabase o Railway.'
                : 'We deploy to your own AWS, GCP, Vercel, Supabase or Railway accounts.'}
            </p>
          </div>

          <div className="glass p-6 rounded-2xl border-white/10 text-center">
            <FileText className="h-8 w-8 text-blue-400 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">
              {lang === 'es' ? 'Documentación Ejecutiva' : 'Executive Documentation'}
            </h4>
            <p className="text-xs text-muted-foreground">
              {lang === 'es'
                ? 'Entregamos esquemas de arquitectura, diagramas ERD y manuales de operaciones.'
                : 'We deliver architecture diagrams, ERD schemas, and operations manuals.'}
            </p>
          </div>
        </div>
      </section>

      {/* CTA DE AGENCIA */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <Link href="/calificar">
          <Button size="lg" className="h-16 px-10 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold shadow-xl shadow-blue-600/30">
            {lang === 'es'
              ? 'Agendar Sesión de Evaluación Técnica con un FDE Senior →'
              : 'Schedule Technical Evaluation Session with a Senior FDE →'}
          </Button>
        </Link>
      </section>

    </main>
  );
}
