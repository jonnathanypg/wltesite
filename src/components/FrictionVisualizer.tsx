"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell } from "recharts";
import { Activity, ArrowRight, Zap } from "lucide-react";

const initialData = [
  { name: "Legacy Ops", value: 100, color: "hsl(var(--muted-foreground))" },
  { name: "Agentic Core", value: 12, color: "hsl(var(--primary))" },
];

const chartConfig = {
  value: {
    label: "Value",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export function FrictionVisualizer() {
  const [bottleneck, setBottleneck] = useState("");
  const [chartData, setChartData] = useState(initialData);
  const [efficiency, setEfficiency] = useState(0);

  const calculateDelta = () => {
    if (!bottleneck) return;
    const legacyValue = 100;
    const agenticValue = Math.max(5, Math.floor(Math.random() * 20));
    setChartData([
      { name: "Legacy Ops", value: legacyValue, color: "hsl(var(--muted-foreground))" },
      { name: "Agentic Core", value: agenticValue, color: "hsl(var(--primary))" },
    ]);
    setEfficiency(((legacyValue - agenticValue) / legacyValue) * 100);
  };

  return (
    <Card className="glass overflow-hidden">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-primary/20 p-2 rounded-md">
            <Activity className="h-4 w-4 text-primary" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Phase 1: Pain Mapping</span>
        </div>
        <CardTitle className="text-2xl font-headline">Friction-to-Efficiency Visualizer</CardTitle>
        <CardDescription>
          Identify operational bottlenecks and compute the generated Delta of Efficiency (Δ_Efficiency).
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex gap-2">
          <Input 
            placeholder="Describe operational bottleneck (e.g., Manual Data Ingestion)..." 
            value={bottleneck}
            onChange={(e) => setBottleneck(e.target.value)}
            className="bg-background/50 border-white/10"
          />
          <Button onClick={calculateDelta} className="bg-primary hover:bg-primary/80">
            Analyze <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="h-[250px] w-full mt-8">
          <ChartContainer config={chartConfig}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: 'rgba(255,255,255,0.5)', fontSize: 12}} />
              <YAxis hide />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ChartContainer>
        </div>

        {efficiency > 0 && (
          <div className="flex items-center justify-between p-4 rounded-lg bg-primary/10 border border-primary/20 animate-in fade-in slide-in-from-bottom-2">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary font-bold">Optimization Integral</p>
              <h4 className="text-2xl font-headline font-bold text-glow">Δ_Efficiency: +{efficiency.toFixed(1)}%</h4>
            </div>
            <Zap className="h-8 w-8 text-primary" />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
