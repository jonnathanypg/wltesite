"use client";

import { Shield, Target, Rocket, CheckCircle } from "lucide-react";

const phases = [
  {
    icon: Target,
    title: "Phase 1: Pain Mapping",
    description: "Identify operational source-of-friction points. Computation of Δ_Efficiency delta.",
    color: "text-primary"
  },
  {
    icon: Shield,
    title: "Phase 2: Value Architecture",
    description: "Human-agent interaction topology mapping. Symbiosis board design.",
    color: "text-secondary"
  },
  {
    icon: Rocket,
    title: "Phase 3: Zero-Friction MVP",
    description: "Predictive execution layers. Complexity abstraction and agentic modularity.",
    color: "text-primary"
  },
  {
    icon: CheckCircle,
    title: "Phase 4: Integral Validation",
    description: "Thermal efficiency stress-testing. Proving identity and data sovereignty.",
    color: "text-secondary"
  }
];

export function MethodologyShowcase() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">The 4-Phase Agentic Workflow</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our proprietary execution methodology focuses on minimizing system entropy and maximizing Ω_Total.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, i) => (
            <div 
              key={i} 
              className="glass p-8 rounded-2xl border-white/5 hover:border-white/10 transition-all hover:-translate-y-2 group"
            >
              <div className={`mb-6 p-3 rounded-xl bg-white/5 inline-block group-hover:scale-110 transition-transform duration-500`}>
                <phase.icon className={`h-8 w-8 ${phase.color}`} />
              </div>
              <h3 className="text-xl font-headline font-bold mb-3">{phase.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
