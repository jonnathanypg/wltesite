"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export function Footer() {
  const { lang, t } = useLanguage();

  const navLinks = [
    { href: "/", label: t('nav.home') },
    { href: "/lab", label: t('nav.lab') },
    { href: "/agency", label: t('nav.agency') },
    { href: "/servicios", label: t('nav.services') },
    { href: "/contacto", label: t('nav.contact') },
    { href: "/tools/auditwlt", label: "AuditWLT" },
    { href: "/calificar", label: lang === "es" ? "Calificar" : "Qualify" },
  ];

  const legalLinks = [
    { href: "#", label: lang === "es" ? "Privacidad" : "Privacy" },
    { href: "#", label: lang === "es" ? "Términos" : "Terms" },
    { href: "#", label: "NDA" },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-background overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-48 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-32 bg-orange-500/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Top section: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-12">

          {/* Column 1: Core Value Proposition & Contact */}
          <div className="col-span-1 flex flex-col gap-4">
            <h3 className="text-lg font-headline font-bold text-white tracking-tight">
              WEBLIFETECH
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              {lang === "es"
                ? "Convertimos MVPs de Vibe Coding en infraestructura enterprise. Reingeniería con IA, seguridad y despliegues en semanas."
                : "We turn Vibe Coding MVPs into enterprise infrastructure. AI-driven re-engineering, security, and deployment in weeks."}
            </p>

            {/* Contact badges */}
            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href="https://wa.me/593982541659"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-xs text-green-400 hover:bg-green-500/20 transition-colors font-mono font-semibold"
              >
                <span>📱</span> WhatsApp
              </a>
              <a
                href="mailto:hello@weblifetech.com"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-xs text-cyan-400 hover:bg-cyan-500/20 transition-colors font-mono font-semibold"
              >
                <span>✉️</span> Email
              </a>
            </div>
          </div>

          {/* Column 2: Navigation — Centered horizontally in tablet & desktop */}
          <div className="col-span-1 flex flex-col md:items-center text-left md:text-center">
            <div className="inline-block text-left">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
                {lang === "es" ? "Navegación" : "Navigation"}
              </p>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-white transition-colors hover:translate-x-1 inline-block duration-200"
                    >
                      → {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Square 1x1 Brand Logo (Enlarged in Desktop, Centered in Mobile) */}
          <div className="col-span-1 flex flex-col items-center md:items-end justify-center w-full">
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-500/15 rounded-3xl blur-2xl scale-110 opacity-70 group-hover:opacity-100 transition-opacity" />
              <Link href="/" className="relative block p-3 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all shadow-2xl">
                <img
                  src="/logos/logo-og.png"
                  alt="WEBLIFETECH — Innovate Faster, Grow Smarter"
                  className="h-36 w-36 sm:h-40 sm:w-40 object-contain drop-shadow-[0_10px_30px_rgba(0,100,255,0.35)] hover:scale-105 transition-transform duration-300 rounded-xl"
                />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom bar — Clean Copyright text only, no mini robot */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-muted-foreground font-mono">
            © {new Date().getFullYear()} WEBLIFETECH.{" "}
            {lang === "es" ? "Todos los derechos reservados." : "All rights reserved."}
          </p>
          <div className="flex gap-4 justify-center">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-muted-foreground hover:text-white transition-colors font-mono"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
