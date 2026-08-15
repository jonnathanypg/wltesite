"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Terminal, Cpu, Briefcase, FileText, PhoneCall, Search, X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";

function SpainFlag() {
  return (
    <svg viewBox="0 0 750 500" className="w-full h-full object-cover scale-[1.35]" xmlns="http://www.w3.org/2000/svg">
      <rect width="750" height="500" fill="#c60b1e" />
      <rect width="750" height="250" y="125" fill="#ffc400" />
      <g transform="translate(190, 200) scale(0.95)">
        <path d="M0 0 h50 v42 a25 25 0 0 1 -50 0 z" fill="#c60b1e" stroke="#ffc400" strokeWidth="4" />
        <path d="M10 10 h30 v25 a15 15 0 0 1 -30 0 z" fill="#ffc400" />
        <circle cx="25" cy="22" r="7" fill="#0035a0" />
        <path d="M-10 -15 h70 v10 h-70 z" fill="#ffc400" rx="2" />
        <circle cx="25" cy="-22" r="5" fill="#c60b1e" />
      </g>
    </svg>
  );
}

function USAFlag() {
  return (
    <svg viewBox="0 0 741 390" className="w-full h-full object-cover scale-[1.35]" xmlns="http://www.w3.org/2000/svg">
      <rect width="741" height="390" fill="#b22234" />
      <path d="M0,30H741M0,90H741M0,150H741M0,210H741M0,270H741M0,330H741" stroke="#fff" strokeWidth="30" />
      <rect width="296.4" height="210" fill="#3c3b6e" />
      <g fill="#fff">
        <circle cx="35" cy="25" r="8" /><circle cx="85" cy="25" r="8" /><circle cx="135" cy="25" r="8" /><circle cx="185" cy="25" r="8" /><circle cx="235" cy="25" r="8" />
        <circle cx="60" cy="55" r="8" /><circle cx="110" cy="55" r="8" /><circle cx="160" cy="55" r="8" /><circle cx="210" cy="55" r="8" />
        <circle cx="35" cy="85" r="8" /><circle cx="85" cy="85" r="8" /><circle cx="135" cy="85" r="8" /><circle cx="185" cy="85" r="8" /><circle cx="235" cy="85" r="8" />
        <circle cx="60" cy="115" r="8" /><circle cx="110" cy="115" r="8" /><circle cx="160" cy="115" r="8" /><circle cx="210" cy="115" r="8" />
        <circle cx="35" cy="145" r="8" /><circle cx="85" cy="145" r="8" /><circle cx="135" cy="145" r="8" /><circle cx="185" cy="145" r="8" /><circle cx="235" cy="145" r="8" />
      </g>
    </svg>
  );
}

export function Navigation() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

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

  const nextLang = lang === 'es' ? 'en' : 'es';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-2xl border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group shrink-0">
          <img
            src="/logos/logo-header.png"
            alt="WEBLIFETECH — Innovate Faster, Grow Smarter"
            className="h-11 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_12px_rgba(0,150,255,0.3)]"
            style={{ maxWidth: 200 }}
          />
        </Link>

        {/* Navigation Links — Desktop (md+) */}
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

        {/* CTAs & Controls — Desktop */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Language Selector — SVG flag button covering the entire circle */}
          <button
            onClick={toggleLanguage}
            title={lang === 'es' ? 'Switch to English (US)' : 'Cambiar a Español (ES)'}
            className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white/20 hover:border-cyan-400 transition-all duration-200 hover:scale-110 shadow-lg group flex items-center justify-center bg-black/40 focus:outline-none"
            aria-label={`Change language to ${nextLang.toUpperCase()}`}
          >
            {lang === 'es' ? <SpainFlag /> : <USAFlag />}
          </button>

          {/* CTA 1 — Analizar Web */}
          <Link href="/tools/auditwlt">
            <Button
              variant="outline"
              size="sm"
              className="border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 hover:text-cyan-200 rounded-full font-mono text-xs gap-2 px-4"
            >
              <Search className="h-3.5 w-3.5 text-cyan-400" />
              {t('nav.analyzeWeb')}
            </Button>
          </Link>

          {/* CTA 2 — Solicitar Auditoría */}
          <Link href="/calificar">
            <Button
              size="sm"
              className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold rounded-full px-5 shadow-lg shadow-orange-500/20 text-xs tracking-wide"
            >
              {t('nav.requestAudit')}
            </Button>
          </Link>
        </div>

        {/* Mobile Right — SVG Flag + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleLanguage}
            title={lang === 'es' ? 'Switch to English (US)' : 'Cambiar a Español (ES)'}
            className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white/20 hover:border-cyan-400 transition-all duration-200 flex items-center justify-center bg-black/40 focus:outline-none"
            aria-label={`Change language to ${nextLang.toUpperCase()}`}
          >
            {lang === 'es' ? <SpainFlag /> : <USAFlag />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-8 h-8 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-4 w-4 text-white" /> : <Menu className="h-4 w-4 text-muted-foreground" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-background/95 backdrop-blur-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-300 border border-cyan-500/30"
                      : "text-muted-foreground hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
              <Link href="/tools/auditwlt" onClick={() => setMobileOpen(false)}>
                <Button
                  variant="outline"
                  className="w-full border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 rounded-xl font-mono text-sm gap-2"
                >
                  <Search className="h-4 w-4 text-cyan-400" />
                  {t('nav.analyzeWeb')}
                </Button>
              </Link>
              <Link href="/calificar" onClick={() => setMobileOpen(false)}>
                <Button
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold rounded-xl text-sm"
                >
                  {t('nav.requestAudit')}
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
