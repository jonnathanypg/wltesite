import type { Metadata } from 'next';
import Link from 'next/link';
import { Briefcase, ShieldCheck, UserCheck, Layers, ArrowRight, Code, Server, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'WEBLIFETECH Agency | Forward Deployed Software Engineering',
  description: 'Firma de ingeniería Forward Deployed especializada en el escalado, refactorización y aseguramiento de aplicaciones desarrolladas en plataformas de Vibe Coding.',
  keywords: ['Forward Deployed Engineering LatAm', 'Reingeniería de Software B2B', 'Vibe Coding Rescue', 'Contratación B2G Software']
};

export default function AgencyPage() {
  return (
    <main className="min-h-screen bg-grid relative pb-24 selection:bg-blue-500/30">
      
      {/* HERO DE AGENCIA */}
      <section className="relative pt-20 pb-16 px-6 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-mono font-medium mb-6">
            <Briefcase className="h-4 w-4" /> WEBLIFETECH AGENCY · FORWARD DEPLOYED ENGINEERING
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-headline font-bold text-white mb-6 leading-tight">
            Ingeniería de Escalado e Infraestructura <br />
            de Producción para <span className="text-blue-400">Proyectos Nacidos en IA.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Unimos la mentalidad de un equipo de ciberseguridad enterprise con la agilidad de los ingenieros Forward Deployed. Nos integramos a su equipo para convertir su MVP en un activo rentable e indestructible.
          </p>
        </div>
      </section>

      {/* LA METODOLOGÍA FORWARD DEPLOYED ENGINEER (FDE) */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-white/5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold text-white mb-4">
            La Metodología Forward Deployed Engineer (FDE)
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A diferencia de las agencias tradicionales que entregan código por partes a través de gestores de proyecto no técnicos, WEBLIFETECH asigna un <strong className="text-white">Forward Deployed Engineer (FDE)</strong> directamente a su proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass p-8 rounded-3xl border-blue-500/20">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold mb-4 font-mono">01</div>
            <h3 className="text-xl font-headline font-bold text-white mb-3">Integración Profunda</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              El ingeniero FDE se conecta a sus canales de trabajo, audita la lógica existente y comprende sus objetivos comerciales.
            </p>
          </div>

          <div className="glass p-8 rounded-3xl border-blue-500/20">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold mb-4 font-mono">02</div>
            <h3 className="text-xl font-headline font-bold text-white mb-3">Herramientas Agénticas</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Aplicamos la suite de herramientas desarrollada en WEBLIFETECH Labs para acelerar el proceso de desacoplamiento y refactorización.
            </p>
          </div>

          <div className="glass p-8 rounded-3xl border-blue-500/20">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold mb-4 font-mono">03</div>
            <h3 className="text-xl font-headline font-bold text-white mb-3">Transferencia & SLAs</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Al finalizar el Hardening, capacitamos a su equipo interno o asumimos la gestión bajo acuerdos de nivel de servicio (SLA).
            </p>
          </div>
        </div>
      </section>

      {/* COMPROMISO Y ESTÁNDARES TÉCNICOS */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-white/5">
        <h2 className="text-2xl font-headline font-bold text-white mb-8 text-center">
          Compromiso y Estándares Técnicos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass p-6 rounded-2xl border-white/10 text-center">
            <Code className="h-8 w-8 text-blue-400 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">Código Propio 100%</h4>
            <p className="text-xs text-muted-foreground">La propiedad intelectual del código refactorizado y configurado es totalmente del cliente tras la liquidación del SOW.</p>
          </div>

          <div className="glass p-6 rounded-2xl border-white/10 text-center">
            <Server className="h-8 w-8 text-blue-400 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">Cero Vendor Lock-In</h4>
            <p className="text-xs text-muted-foreground">Desplegamos en sus propias cuentas de AWS, GCP, Vercel, Supabase o Railway.</p>
          </div>

          <div className="glass p-6 rounded-2xl border-white/10 text-center">
            <FileText className="h-8 w-8 text-blue-400 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">Documentación Ejecutiva</h4>
            <p className="text-xs text-muted-foreground">Entregamos esquemas de arquitectura, diagramas ERD y manuales de operaciones.</p>
          </div>
        </div>
      </section>

      {/* CTA DE AGENCIA */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <Link href="/calificar">
          <Button size="lg" className="h-16 px-10 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold shadow-xl shadow-blue-600/30">
            Agendar Sesión de Evaluación Técnica con un FDE Senior →
          </Button>
        </Link>
      </section>

    </main>
  );
}
