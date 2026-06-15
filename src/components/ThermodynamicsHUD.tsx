"use client";

import { useEffect, useState } from "react";
import { Zap, Activity, Battery } from "lucide-react";

export function ThermodynamicsHUD() {
  const [exergy, setExergy] = useState(0.9821);
  const [efficiency, setEfficiency] = useState(99.42);

  useEffect(() => {
    const interval = setInterval(() => {
      setExergy(prev => Math.min(0.9999, Math.max(0.9750, prev + (Math.random() - 0.5) * 0.001)));
      setEfficiency(prev => Math.min(99.99, Math.max(98.50, prev + (Math.random() - 0.5) * 0.05)));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-6 right-6 z-50 flex flex-col gap-2">
      <div className="glass px-4 py-2 rounded-lg flex items-center gap-4 border-primary/20">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">System Exergy</span>
          <span className="font-code text-primary font-bold">{exergy.toFixed(4)} Φ</span>
        </div>
        <Zap className="h-4 w-4 text-primary animate-pulse" />
      </div>
      <div className="glass px-4 py-2 rounded-lg flex items-center gap-4 border-secondary/20">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Compute Efficiency</span>
          <span className="font-code text-secondary font-bold">{efficiency.toFixed(2)}%</span>
        </div>
        <Activity className="h-4 w-4 text-secondary" />
      </div>
    </div>
  );
}
