"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export function Footer() {
  const { lang } = useLanguage();

  const navLinks = [
    { href: "/", label: lang === "es" ? "Inicio" : "Home" },
    { href: "/lab", label: "Labs R&D" },
    { href: "/agency", label: lang === "es" ? "Agencia FDE" : "FDE Agency" },
    { href: "/servicios", label: lang === "es" ? "Servicios" : "Services" },
    { href: "/contacto", label: lang === "es" ? "Contacto" : "Contact" },
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
      {/* Ambient glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-48 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-32 bg-orange-500/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Top section: Logo + Tagline + Nav */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-12">

          {/* Logo Column */}
          <div className="col-span-1 flex flex-col gap-4">
            <Link href="/" className="group inline-block">
              <img
                src="/logos/logo-footer.png"
                alt="WEBLIFETECH — Innovate Faster, Grow Smarter"
                className="h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_20px_rgba(0,100,255,0.25)]"
                style={{ maxWidth: 320 }}
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {lang === "es"
                ? "Convertimos MVPs de Vibe Coding en infraestructura enterprise. Reingeniería con IA, seguridad y despliegues en semanas."
                : "We turn Vibe Coding MVPs into enterprise infrastructure. AI-driven re-engineering, security, and deployment in weeks."}
            </p>
            {/* Social badges */}
            <div className="flex gap-3 mt-2">
              <a
                href="https://wa.me/message/WLT"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-xs text-green-400 hover:bg-green-500/20 transition-colors font-mono font-semibold"
              >
                <span>📱</span> WhatsApp
              </a>
              <a
                href="mailto:hello@weblifetech.com"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-xs text-cyan-400 hover:bg-cyan-500/20 transition-colors font-mono font-semibold"
              >
                <span>✉️</span> Email
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="col-span-1">
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

          {/* Mascot / Robot */}
          <div className="col-span-1 flex flex-col items-center md:items-end gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-2xl scale-150" />
              <img
                src="/logos/isotipo-robot.png"
                alt="WLT Robot Mascot"
                className="relative h-32 w-32 object-contain drop-shadow-[0_8px_24px_rgba(0,100,255,0.35)] hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="text-center md:text-right">
              <p className="text-xs font-mono text-cyan-400 font-bold tracking-widest">
                {lang === "es" ? "AGENTE IA ACTIVO" : "AI AGENT ACTIVE"}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {lang === "es" ? "Powered by Aikrofy Platform" : "Powered by Aikrofy Platform"}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img
              src="/logos/isotipo-robot.png"
              alt="WLT"
              className="h-5 w-5 object-contain opacity-60"
            />
            <p className="text-xs text-muted-foreground font-mono">
              © {new Date().getFullYear()} WEBLIFETECH.{" "}
              {lang === "es" ? "Todos los derechos reservados." : "All rights reserved."}
            </p>
          </div>
          <div className="flex gap-4">
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
