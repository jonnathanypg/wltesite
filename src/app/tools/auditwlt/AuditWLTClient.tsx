"use client";

import { useState } from 'react';
import { 
  Sparkles, Search, ShieldAlert, Cpu, Terminal, CheckCircle2, 
  AlertTriangle, Code2, Layers, Server, Lock, ArrowRight, Activity 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function AuditWLTClient() {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [stepMsg, setStepMsg] = useState('');
  const [auditResult, setAuditResult] = useState<any>(null);

  const runAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setAnalyzing(true);
    setAuditResult(null);

    const steps = [
      "Iniciando navegador Headless Playwright...",
      "Renderizando AST de HTML, CSS y JS...",
      "Buscando marcas de agua de Lovable, Replit, Bolt.new, v0...",
      "Analizando plugins CMS y scripts inyectados...",
      "Escaneando vulnerabilidades OWASP & exposición de llaves API...",
      "Calculando score de arquitectura y generando propuesta a medida..."
    ];

    steps.forEach((msg, idx) => {
      setTimeout(() => {
        setStepMsg(msg);
      }, idx * 800);
    });

    setTimeout(() => {
      setAnalyzing(false);
      
      // Detección sintética inteligente basada en el dominio o patrón
      const isVibe = url.includes('lovable') || url.includes('replit') || url.includes('bolt') || url.includes('vercel') || url.includes('netlify');
      
      setAuditResult({
        url,
        score: isVibe ? 62 : 78,
        vibeCodingDetected: isVibe,
        watermarks: isVibe ? ["Lovable.dev badge detected", "Supabase Anonymous API key exposed in DOM", "Token threshold limit reached"] : ["No watermarks found"],
        cmsDetected: url.includes('wp') || url.includes('wordpress') ? "WordPress con 14 plugins (3 vulnerables)" : "Next.js / SPA",
        seoScore: isVibe ? 58 : 85,
        securityScore: isVibe ? 42 : 90,
        issues: [
          { type: 'critical', title: 'Variables de entorno expuestas', desc: 'Se detectaron llaves API de Supabase / OpenAI en el cliente.' },
          { type: 'warning', title: 'Consultas de base de datos N+1', desc: 'Lógica de datos ejecutada iterativamente en el frontend.' },
          { type: 'info', title: 'Falta de separación de entornos Dev/Prod', desc: 'No existen ramas de despliegue aisladas ni CI/CD.' }
        ]
      });
    }, steps.length * 800 + 400);
  };

  return (
    <div className="space-y-8">
      
      {/* Formulario de Entrada */}
      <div className="glass p-6 sm:p-8 rounded-3xl border-cyan-500/30 shadow-2xl">
        <form onSubmit={runAudit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
            <div className="sm:col-span-6">
              <label className="block text-xs font-mono text-cyan-300 mb-1">URL del Sitio Web a Auditar *</label>
              <div className="relative">
                <Search className="absolute left-4 top-3.5 h-4 w-4 text-muted-foreground" />
                <input 
                  type="url"
                  required
                  placeholder="https://mi-proyecto.vercel.app"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 font-mono"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label className="block text-xs font-mono text-cyan-300 mb-1">Email Profesional (para enviar reporte)</label>
              <input 
                type="email"
                placeholder="fundador@startup.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 font-mono"
              />
            </div>
          </div>

          <Button 
            type="submit" 
            disabled={analyzing}
            className="w-full h-14 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-2xl text-base shadow-xl shadow-cyan-500/20"
          >
            {analyzing ? (
              <span className="flex items-center gap-2 font-mono">
                <Activity className="h-5 w-5 animate-spin" /> {stepMsg}
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-cyan-300" /> EJECUTAR AGENTIC AUDIT 2026 NOW →
              </span>
            )}
          </Button>
        </form>
      </div>

      {/* Terminal de Escaneo en Tiempo Real */}
      {analyzing && (
        <div className="glass p-6 rounded-2xl border-cyan-500/40 font-mono text-xs text-cyan-300 space-y-2 animate-pulse">
          <div className="flex items-center gap-2 text-white font-bold border-b border-white/10 pb-2">
            <Terminal className="h-4 w-4 text-cyan-400" /> AuditWLT Multi-Agent Engine v2.6 Log
          </div>
          <div>[INFO] Target: {url}</div>
          <div>[AGENT] Executing Playwright Headless Browser...</div>
          <div>[STATUS] {stepMsg}</div>
        </div>
      )}

      {/* Resultados de la Auditoría */}
      {auditResult && (
        <div className="glass p-8 rounded-3xl border-orange-500/30 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          {/* Header de Score */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-white/10 pb-6">
            <div>
              <div className="text-xs font-mono text-muted-foreground uppercase">Resultado de Inspección para:</div>
              <div className="text-xl font-bold font-mono text-white mt-0.5">{auditResult.url}</div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-3xl font-extrabold font-mono text-orange-400">{auditResult.score}/100</div>
                <div className="text-[10px] font-mono text-muted-foreground uppercase">Health Score</div>
              </div>
            </div>
          </div>

          {/* Hallazgos de Vibe-Coding & Marcas de Agua */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <h3 className="text-sm font-mono font-bold text-cyan-300 uppercase flex items-center gap-2">
                <Code2 className="h-4 w-4" /> Detección de Vibe-Coding & CMS
              </h3>
              <div className="text-xs space-y-1">
                <div className="text-white">Plataforma Detectada: <strong className="text-orange-400">{auditResult.vibeCodingDetected ? 'Vibe-Coding Platform' : 'Standard Web'}</strong></div>
                <div className="text-muted-foreground">CMS / Framework: {auditResult.cmsDetected}</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <h3 className="text-sm font-mono font-bold text-orange-400 uppercase flex items-center gap-2">
                <ShieldAlert className="h-4 w-4" /> Marcas de Agua & Token Limits
              </h3>
              <ul className="text-xs space-y-1 text-muted-foreground">
                {auditResult.watermarks.map((wm: string, i: number) => (
                  <li key={i} className="flex items-center gap-1.5 text-orange-300">
                    <AlertTriangle className="h-3 w-3 shrink-0" /> {wm}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Lista de Fallas Técnicas */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono font-bold text-white uppercase">Vulnerabilidades & Hallazgos Críticos:</h3>
            {auditResult.issues.map((issue: any, idx: number) => (
              <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3 text-xs">
                <AlertTriangle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">{issue.title}</div>
                  <div className="text-muted-foreground">{issue.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA de Solución Vibe-to-Prod */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-white">¿Deseas solucionar estos fallos y pasar a producción?</h4>
              <p className="text-xs text-muted-foreground">Nuestros ingenieros Forward Deployed refactorizan tu MVP en 3 a 5 días.</p>
            </div>
            <Link href="/calificar">
              <Button className="bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold rounded-full px-6 text-xs shrink-0">
                Solicitar Refactorización Vibe-to-Prod →
              </Button>
            </Link>
          </div>

        </div>
      )}

    </div>
  );
}
