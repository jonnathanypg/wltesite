"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap, Terminal, Cpu, Briefcase, FileText, PhoneCall, Sparkles, Globe, Mic, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";

export function Navigation() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

  const links = [
    { href: "/", label: t('nav.home'), icon: Terminal },
    { href: "/lab", label: t('nav.lab'), icon: Cpu },
    { href: "/agency", label: t('nav.agency'), icon: Briefcase },
    { href: "/servicios", label: t('nav.services'), icon: FileText },
    { href: "/contacto", label: t('nav.contact'), icon: PhoneCall },
  ];

  const toggleLanguage = () => {
    setLang(lang === 'es' ? 'en' : 'es');
  };

  const openVoiceChat = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('wlt:open-voice-chat', {}));
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-2xl border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-500 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-background rounded-[11px] flex items-center justify-center">
              <Zap className="h-5 w-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-headline font-bold text-lg tracking-tight flex items-center gap-1.5 text-white">
              WEBLIFETECH
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                PROD
              </span>
            </span>
            <span className="text-[10px] text-muted-foreground tracking-widest uppercase font-mono">
              AI & Software Engineering
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 font-bold"
                    : "text-muted-foreground hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTAs & Controls */}
        <div className="flex items-center gap-3">
          {/* Selector de Idioma */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono text-cyan-300 transition-colors"
            title="Cambiar idioma (ES / EN)"
          >
            <Globe className="h-3.5 w-3.5 text-cyan-400" />
            <span className="font-bold uppercase">{lang}</span>
          </button>

          {/* Botón rápido de Voz AI */}
          <button
            onClick={openVoiceChat}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-xs font-mono text-cyan-300 transition-colors"
            title="Activar Asistente de Voz AI"
          >
            <Mic className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
            <span>Voice AI</span>
          </button>

          {/* Audit Tool */}
          <Link href="/tools/auditwlt">
            <Button
              variant="outline"
              size="sm"
              className="hidden lg:flex border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 hover:text-cyan-200 rounded-full font-mono text-xs gap-2"
            >
              <Sparkles className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
              {t('nav.auditTool')}
            </Button>
          </Link>

          {/* Calificar CTA */}
          <Link href="/calificar">
            <Button
              size="sm"
              className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold rounded-full px-5 shadow-lg shadow-orange-500/20 text-xs tracking-wide"
            >
              {t('nav.qualifyCta')}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
