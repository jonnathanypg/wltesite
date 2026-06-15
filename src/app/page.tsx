import { ThermodynamicsHUD } from "@/components/ThermodynamicsHUD";
import { FrictionVisualizer } from "@/components/FrictionVisualizer";
import { SymbiosisDashboard } from "@/components/SymbiosisDashboard";
import { SkillArchitect } from "@/components/SkillArchitect";
import { SovereignAuth } from "@/components/SovereignAuth";
import { MethodologyShowcase } from "@/components/MethodologyShowcase";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Shield, Zap, Terminal } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-grid relative pb-24 selection:bg-primary/30">
      <ThermodynamicsHUD />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
            <Zap className="h-3 w-3" /> Agentic Infrastructure Protocol 1.0
          </div>
          
          <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter mb-6 leading-none animate-in fade-in slide-in-from-bottom-8 duration-1000">
            WebLife <span className="text-primary text-glow italic">Sovereign</span> <br className="hidden md:block" /> Integral
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-in fade-in duration-1000 delay-300">
            Elite autonomous infrastructure for radical value scaling. Architecting the transition from cloud dependence to decentralized sovereignty.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in duration-1000 delay-500">
            <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 rounded-full font-bold">
              Initialize Stack <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white/10 hover:bg-white/5 rounded-full font-bold">
              View Protocol Paper
            </Button>
          </div>
        </div>
      </section>

      {/* Main Interactive Hub */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <FrictionVisualizer />
          <SymbiosisDashboard />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <SkillArchitect />
          <div className="flex flex-col gap-8">
            <SovereignAuth />
            <div className="glass p-8 rounded-3xl flex-1 flex flex-col justify-center border-secondary/20 group hover:border-secondary/40 transition-colors">
              <Globe className="h-10 w-10 text-secondary mb-4 group-hover:rotate-12 transition-transform duration-500" />
              <h3 className="text-xl font-headline font-bold mb-2">Protocol Neutrality</h3>
              <p className="text-sm text-muted-foreground">
                S3-compatible abstractions and WebSocket-driven event loops. Vendor-agnostic by design.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="text-[10px] font-bold px-2 py-1 bg-white/5 rounded border border-white/5 uppercase">S3-API</span>
                <span className="text-[10px] font-bold px-2 py-1 bg-white/5 rounded border border-white/5 uppercase">LibP2P</span>
                <span className="text-[10px] font-bold px-2 py-1 bg-white/5 rounded border border-white/5 uppercase">GRPC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Methodology */}
      <MethodologyShowcase />

      {/* Footer / CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5 mt-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Terminal className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-headline font-bold tracking-tight">WEBLIFETECH</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              A radical AI research and deployment firm. Our engineering minimizes entropy and maximizes the Total Integral of Value.
            </p>
            <p className="text-[10px] font-code text-primary opacity-50">
              Ω_Total = (P_difficult * T_radical)^Execution * Moat
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 text-sm">
            <div className="space-y-4">
              <h4 className="font-bold uppercase tracking-widest text-xs text-primary">Platform</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">Infrastucture</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Skill-Market</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Sovereign-ID</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold uppercase tracking-widest text-xs text-primary">Protocol</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">Whitepaper</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Thermodynamics</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Decentralization</li>
              </ul>
            </div>
            <div className="space-y-4 hidden sm:block">
              <h4 className="font-bold uppercase tracking-widest text-xs text-primary">Research</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">Agents</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Local-First</li>
                <li className="hover:text-primary transition-colors cursor-pointer">State Machines</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
          <span>© 2025 WEBLIFETECH SOVEREIGN INTEGRAL</span>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Shield className="h-3 w-3" /> Zero Leakage Mandate Active
            </span>
            <span className="flex items-center gap-2">
              <Zap className="h-3 w-3" /> Powered by Agentic Architect
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
