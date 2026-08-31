"use client";

import Link from "next/link";
import {
  ArrowRight, ShieldCheck, CheckCircle2, XCircle,
  Lock, Database, Server, Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-grid relative pb-24 selection:bg-primary/30">

      {/* SECTION 1: HERO */}
      <section className="relative pt-20 pb-20 px-6 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center relative z-10">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-300 text-xs font-mono font-medium mb-8 backdrop-blur-md shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            {t('hero.badge')}
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-headline font-extrabold tracking-tight mb-6 leading-[1.1] text-white">
            {t('hero.title1')} <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
              {t('hero.title2')}
            </span>
            <br />
            <span className="text-2xl sm:text-4xl md:text-5xl font-semibold text-muted-foreground">
              {t('hero.titleSub')}
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            {t('hero.desc')}
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 max-w-full">
            <Link href="/calificar" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto h-auto min-h-12 sm:min-h-14 py-3.5 px-6 sm:px-8 text-sm sm:text-base bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white rounded-full font-bold shadow-xl shadow-orange-500/25 transition-all group whitespace-normal leading-snug text-center max-w-full">
                {t('hero.ctaPrimary')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform inline-block shrink-0" />
              </Button>
            </Link>
            <a href="#metodologia" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-auto min-h-12 sm:min-h-14 py-3.5 px-6 sm:px-8 text-sm sm:text-base border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 rounded-full font-bold whitespace-normal leading-snug text-center max-w-full">
                {t('hero.ctaSecondary')}
              </Button>
            </a>
          </div>

          {/* Compatibility logos */}
          <div className="pt-8 border-t border-white/5 max-w-4xl mx-auto">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
              {t('hero.compatibility')}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm font-mono text-muted-foreground">
              {['Lovable', 'Replit Agent', 'Bolt.new', 'Cursor', 'v0.dev', 'Supabase'].map((platform) => (
                <span key={platform} className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-white font-medium shadow-sm hover:border-cyan-500/40 transition-colors">
                  ⚡ {platform}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: PAIN POINTS */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-white mb-4">
            {t('pain.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('pain.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Lock, titleKey: 'pain.item1.title', descKey: 'pain.item1.desc' },
            { icon: Database, titleKey: 'pain.item2.title', descKey: 'pain.item2.desc' },
            { icon: Server, titleKey: 'pain.item3.title', descKey: 'pain.item3.desc' },
            { icon: ShieldCheck, titleKey: 'pain.item4.title', descKey: 'pain.item4.desc' },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="glass p-6 rounded-2xl border-white/5 hover:border-orange-500/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-headline font-bold text-white mb-2">{t(item.titleKey)}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{t(item.descKey)}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: COMPARISON TABLE */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            {t('comp.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-white mt-4 mb-4">
            {t('comp.title')}
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse glass rounded-2xl">
            <thead>
              <tr className="border-b border-white/10 text-xs font-mono uppercase tracking-wider text-muted-foreground bg-white/5">
                <th className="p-4 sm:p-6">{t('comp.colDim')}</th>
                <th className="p-4 sm:p-6 text-red-400">{t('comp.colRed')}</th>
                <th className="p-4 sm:p-6 text-cyan-400 font-bold bg-cyan-500/10">{t('comp.colBlue')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {(['1', '2', '3', '4', '5'] as const).map((n) => (
                <tr key={n} className="hover:bg-white/[0.02]">
                  <td className="p-4 sm:p-6 font-semibold text-white">{t(`comp.row${n}.dim`)}</td>
                  <td className="p-4 sm:p-6 text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                      <span>{t(`comp.row${n}.red`)}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-6 text-cyan-200 font-medium bg-cyan-500/5">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{t(`comp.row${n}.blue`)}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 4: DUALITY (LAB + AGENCY) */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-white mb-4">
            {t('dual.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass p-8 rounded-3xl border-cyan-500/20 hover:border-cyan-500/50 transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                {t('dual.labs.badge')}
              </span>
              <h3 className="text-2xl font-headline font-bold text-white mt-4 mb-3">{t('dual.labs.title')}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{t('dual.labs.desc')}</p>
            </div>
            <Link href="/lab">
              <Button variant="outline" className="w-full border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 rounded-full font-bold">
                {t('dual.labs.cta')}
              </Button>
            </Link>
          </div>

          <div className="glass p-8 rounded-3xl border-blue-500/20 hover:border-blue-500/50 transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                {t('dual.agency.badge')}
              </span>
              <h3 className="text-2xl font-headline font-bold text-white mt-4 mb-3">{t('dual.agency.title')}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{t('dual.agency.desc')}</p>
            </div>
            <Link href="/agency">
              <Button variant="outline" className="w-full border-blue-500/40 text-blue-300 hover:bg-blue-500/10 rounded-full font-bold">
                {t('dual.agency.cta')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: METHODOLOGY — 3 PHASES */}
      <section id="metodologia" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-white mb-4">
            {t('method.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {([1, 2, 3] as const).map((n) => (
            <div key={n} className="glass p-8 rounded-3xl relative border-white/10 hover:border-cyan-500/40 transition-all">
              <div className="text-xs font-mono text-cyan-400 mb-2 font-bold">{t(`method.phase${n}.label`)}</div>
              <h3 className="text-xl font-headline font-bold text-white mb-1">{t(`method.phase${n}.title`)}</h3>
              <div className="text-xs font-mono text-muted-foreground mb-4">{t(`method.phase${n}.time`)}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(`method.phase${n}.desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: SECURITY COMPLIANCE */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="glass p-10 rounded-3xl border-cyan-500/20">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 uppercase tracking-widest">
              {t('security.badge')}
            </span>
            <h2 className="text-3xl font-headline font-bold text-white mt-4 mb-4">
              {t('security.title')}
            </h2>
            <p className="text-sm text-muted-foreground mb-8">{t('security.desc')}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-cyan-100">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>{t(`security.item${n}`)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: SOCIAL PROOF */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="glass p-10 rounded-3xl border-orange-500/20 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent">
          <div className="flex items-center gap-2 text-orange-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Award className="h-4 w-4" /> {t('social.badge')}
          </div>
          <blockquote className="text-xl sm:text-2xl font-headline italic text-white mb-6 leading-relaxed">
            {t('social.quote')}
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center font-bold text-orange-400">
              SM
            </div>
            <div>
              <div className="font-bold text-white">{t('social.author')}</div>
              <div className="text-xs text-muted-foreground">{t('social.role')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl sm:text-5xl font-headline font-extrabold text-white mb-6">
          {t('cta.title')}
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          {t('cta.desc')}
        </p>
        <Link href="/calificar" className="inline-block max-w-full w-full sm:w-auto">
          <Button size="lg" className="w-full sm:w-auto h-auto min-h-14 sm:min-h-16 py-3.5 px-6 sm:px-10 text-base sm:text-lg bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white rounded-full font-bold shadow-2xl shadow-orange-500/30 transition-all whitespace-normal leading-snug text-center max-w-full">
            {t('cta.button')}
          </Button>
        </Link>
      </section>

    </main>
  );
}
