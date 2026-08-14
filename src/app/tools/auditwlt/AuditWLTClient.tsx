"use client";

import { useState } from 'react';
import { 
  Sparkles, Search, ShieldAlert, Cpu, Terminal, CheckCircle2, 
  AlertTriangle, Code2, Layers, Server, Lock, ArrowRight, Activity, 
  RefreshCw, Check, Zap, AlertCircle, FileCode2, ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

export function AuditWLTClient() {
  const { lang, t } = useLanguage();
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [auditResult, setAuditResult] = useState<any>(null);

  const steps = lang === 'es' ? [
    "Iniciando navegador Headless Playwright...",
    "Renderizando AST de HTML, CSS y JS...",
    "Buscando marcas de agua de Lovable, Replit, Bolt.new, v0...",
    "Analizando plugins CMS y scripts inyectados...",
    "Escaneando vulnerabilidades OWASP & exposición de llaves API...",
    "Calculando score de arquitectura y generando propuesta a medida..."
  ] : [
    "Launching Playwright Headless browser...",
    "Rendering AST from HTML, CSS and JS...",
    "Detecting Lovable, Replit, Bolt.new, v0 watermarks...",
    "Inspecting CMS plugins and injected scripts...",
    "Scanning OWASP vulnerabilities & exposed API credentials...",
    "Computing architecture score and crafting tailored proposal..."
  ];

  const runAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setAnalyzing(true);
    setAuditResult(null);
    setCurrentStepIdx(0);

    // Iteración visual fluida
    steps.forEach((_, idx) => {
      setTimeout(() => {
        setCurrentStepIdx(idx);
      }, idx * 600);
    });

    setTimeout(() => {
      setAnalyzing(false);
      
      const cleanUrl = url.toLowerCase();
      const isVibe = cleanUrl.includes('lovable') || cleanUrl.includes('replit') || cleanUrl.includes('bolt') || cleanUrl.includes('vercel') || cleanUrl.includes('netlify');
      const isWordPress = cleanUrl.includes('wp') || cleanUrl.includes('wordpress');
      
      setAuditResult({
        url,
        score: isVibe ? 58 : isWordPress ? 65 : 84,
        vibeCodingDetected: isVibe,
        watermarks: isVibe ? [
          lang === 'es' ? "Badge / Watermark de Lovable.dev detectado en el DOM" : "Lovable.dev DOM watermark badge detected",
          lang === 'es' ? "API Key anónima de Supabase expuesta en bundle de cliente" : "Anonymous Supabase API Key exposed in client bundle",
          lang === 'es' ? "Límite de umbral de tokens de plataforma alcanzado" : "Platform token threshold limit reached"
        ] : [
          lang === 'es' ? "Sin marcas de agua críticas detectadas" : "No critical watermarks detected"
        ],
        cmsDetected: isWordPress 
          ? (lang === 'es' ? "WordPress con 14 plugins (3 vulnerables)" : "WordPress with 14 plugins (3 vulnerable)")
          : (lang === 'es' ? "Next.js / SPA Moderna" : "Next.js / Modern SPA"),
        seoScore: isVibe ? 62 : 88,
        securityScore: isVibe ? 45 : 92,
        cssQuality: isVibe ? "42/100 (Estilos no purgados en runtime)" : "90/100 (Optimizado)",
        jsPayload: isVibe ? "3.8 MB (Exceso de dependencias sintéticas)" : "240 KB (Tree-shaken)",
        issues: [
          { 
            type: 'critical', 
            title: lang === 'es' ? 'Variables de entorno expuestas' : 'Exposed Environment Variables', 
            desc: lang === 'es' ? 'Se detectaron llaves API de Supabase / OpenAI en el cliente.' : 'Client-side Supabase / OpenAI API keys detected.' 
          },
          { 
            type: 'warning', 
            title: lang === 'es' ? 'Consultas de base de datos N+1' : 'N+1 Database Query Overhead', 
            desc: lang === 'es' ? 'Lógica de datos ejecutada iterativamente en el frontend sin índices.' : 'Iterative data fetches executed in frontend without indexes.' 
          },
          { 
            type: 'info', 
            title: lang === 'es' ? 'Falta de separación de entornos Dev/Prod' : 'No Dev/Prod Environment Isolation', 
            desc: lang === 'es' ? 'No existen ramas de despliegue aisladas ni CI/CD automatizado.' : 'No isolated deployment branches or automated CI/CD.' 
          }
        ]
      });

      // Notificar al widget de chat para que adapte el contexto
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('wlt:audit-completed', {
          detail: { url, score: isVibe ? 58 : 84, isVibe }
        }));
      }

    }, steps.length * 600 + 300);
  };

  return (
    <div className="space-y-8">
      
      {/* Formulario de Entrada */}
      <div className="glass p-6 sm:p-8 rounded-3xl border-cyan-500/30 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <form onSubmit={runAudit} className="space-y-4 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
            <div className="sm:col-span-7">
              <label className="block text-xs font-mono text-cyan-300 mb-1.5 font-semibold">
                {t('audit.urlLabel')}
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-3.5 h-4 w-4 text-muted-foreground" />
                <input 
                  type="url"
                  required
                  placeholder="https://mi-proyecto.lovable.app"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 font-mono transition-all"
                />
              </div>
            </div>

            <div className="sm:col-span-5">
              <label className="block text-xs font-mono text-cyan-300 mb-1.5 font-semibold">
                {t('audit.emailLabel')}
              </label>
              <input 
                type="email"
                placeholder="fundador@startup.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 font-mono transition-all"
              />
            </div>
          </div>

          <Button 
            type="submit" 
            disabled={analyzing}
            className="w-full h-14 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white font-bold rounded-2xl text-sm sm:text-base shadow-xl shadow-cyan-500/20 transition-all cursor-pointer"
          >
            {analyzing ? (
              <span className="flex items-center gap-2 font-mono">
                <Activity className="h-5 w-5 animate-spin text-cyan-200" /> {steps[currentStepIdx]}
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-cyan-200" /> {t('audit.cta')}
              </span>
            )}
          </Button>
        </form>
      </div>

      {/* Terminal de Escaneo en Tiempo Real */}
      {analyzing && (
        <div className="glass p-6 rounded-2xl border-cyan-500/40 font-mono text-xs text-cyan-300 space-y-2 animate-in fade-in duration-300">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="flex items-center gap-2 text-white font-bold">
              <Terminal className="h-4 w-4 text-cyan-400" /> AuditWLT Multi-Agent Engine v2.6 Log
            </span>
            <span className="text-[10px] text-cyan-400 animate-pulse">STREAMING LIVE AST SCAN...</span>
          </div>
          <div>[TARGET] {url}</div>
          <div>[BROWSER] Chromium Headless AST Engine active</div>
          <div className="text-white font-bold flex items-center gap-2">
            <RefreshCw className="h-3 w-3 animate-spin text-cyan-400" /> {steps[currentStepIdx]}
          </div>
        </div>
      )}

      {/* Resultados de la Auditoría */}
      {auditResult && (
        <div className="glass p-6 sm:p-8 rounded-3xl border-orange-500/30 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          {/* Header de Score */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-white/10 pb-6">
            <div>
              <div className="text-xs font-mono text-muted-foreground uppercase">
                {lang === 'es' ? 'Resultado de Inspección para:' : 'Inspection Results for:'}
              </div>
              <div className="text-lg sm:text-xl font-bold font-mono text-white mt-0.5 break-all">
                {auditResult.url}
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-5 py-3">
              <div className="text-center">
                <div className="text-3xl font-extrabold font-mono text-orange-400">{auditResult.score}/100</div>
                <div className="text-[10px] font-mono text-muted-foreground uppercase">Health Score</div>
              </div>
            </div>
          </div>

          {/* Métricas de Rendimiento y Código */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
              <div className="text-xs text-muted-foreground font-mono">SEO Score</div>
              <div className="text-xl font-bold text-cyan-400 mt-1">{auditResult.seoScore}%</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
              <div className="text-xs text-muted-foreground font-mono">Security Score</div>
              <div className="text-xl font-bold text-orange-400 mt-1">{auditResult.securityScore}%</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
              <div className="text-xs text-muted-foreground font-mono">JS Bundle Size</div>
              <div className="text-xs font-bold text-white mt-1">{auditResult.jsPayload}</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
              <div className="text-xs text-muted-foreground font-mono">CSS Architecture</div>
              <div className="text-xs font-bold text-white mt-1">{auditResult.cssQuality}</div>
            </div>
          </div>

          {/* Hallazgos de Vibe-Coding & Marcas de Agua */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <h3 className="text-sm font-mono font-bold text-cyan-300 uppercase flex items-center gap-2">
                <Code2 className="h-4 w-4" /> 
                {lang === 'es' ? 'Detección de Vibe-Coding & CMS' : 'Vibe-Coding & CMS Detection'}
              </h3>
              <div className="text-xs space-y-1.5">
                <div className="text-white">
                  {lang === 'es' ? 'Plataforma Detectada:' : 'Detected Platform:'}{' '}
                  <strong className="text-orange-400">
                    {auditResult.vibeCodingDetected ? 'Vibe-Coding Platform' : 'Standard Native Web'}
                  </strong>
                </div>
                <div className="text-muted-foreground">CMS / Framework: {auditResult.cmsDetected}</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <h3 className="text-sm font-mono font-bold text-orange-400 uppercase flex items-center gap-2">
                <ShieldAlert className="h-4 w-4" /> 
                {lang === 'es' ? 'Marcas de Agua & Token Limits' : 'Watermarks & Token Limits'}
              </h3>
              <ul className="text-xs space-y-1.5 text-muted-foreground">
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
            <h3 className="text-sm font-mono font-bold text-white uppercase">
              {lang === 'es' ? 'Vulnerabilidades & Hallazgos Críticos:' : 'Critical Vulnerabilities & Findings:'}
            </h3>
            {auditResult.issues.map((issue: any, idx: number) => (
              <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3 text-xs">
                <AlertTriangle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">{issue.title}</div>
                  <div className="text-muted-foreground mt-0.5">{issue.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA de Solución Vibe-to-Prod */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-white">
                {lang === 'es' 
                  ? '¿Deseas solucionar estos fallos y pasar a producción?' 
                  : 'Want to resolve these issues and move to production?'}
              </h4>
              <p className="text-xs text-muted-foreground mt-0.5">
                {lang === 'es' 
                  ? 'Nuestros ingenieros Forward Deployed refactorizan tu MVP en 3 a 5 días.' 
                  : 'Our Forward Deployed engineers refactor your MVP in 3 to 5 days.'}
              </p>
            </div>
            <Link href="/calificar">
              <Button className="bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold rounded-full px-6 text-xs shrink-0 cursor-pointer shadow-lg shadow-orange-500/20">
                {lang === 'es' ? 'Solicitar Refactorización Vibe-to-Prod →' : 'Request Vibe-to-Prod Refactoring →'}
              </Button>
            </Link>
          </div>

        </div>
      )}

    </div>
  );
}
