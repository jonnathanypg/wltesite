"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Cpu, Users, Shield, Zap } from "lucide-react";

export function SymbiosisDashboard() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Data Validation", mode: "Autonomous", type: "Core" },
    { id: 2, name: "Risk Assessment", mode: "Assisted", type: "Decision" },
    { id: 3, name: "Customer Triage", mode: "Autonomous", type: "Edge" },
    { id: 4, name: "Creative Ideation", mode: "Assisted", type: "Human-First" },
  ]);

  const toggleTask = (id: number) => {
    setTasks(prev => prev.map(t => 
      t.id === id ? { ...t, mode: t.mode === "Autonomous" ? "Assisted" : "Autonomous" } : t
    ));
  };

  return (
    <Card className="glass">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-secondary/20 p-2 rounded-md">
            <Users className="h-4 w-4 text-secondary" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-secondary">Phase 2: Symbiosis Design</span>
        </div>
        <CardTitle className="text-2xl font-headline">Value Architecture Board</CardTitle>
        <CardDescription>
          Map human-agent interaction topologies. Transition logic seamlessly to decentralized ready states.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 transition-all hover:border-secondary/30">
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${task.mode === 'Autonomous' ? 'bg-primary/20' : 'bg-secondary/20'}`}>
                  {task.mode === 'Autonomous' ? <Cpu className="h-5 w-5 text-primary" /> : <Users className="h-5 w-5 text-secondary" />}
                </div>
                <div>
                  <h4 className="font-medium">{task.name}</h4>
                  <Badge variant="outline" className="text-[10px] mt-1 border-white/10 opacity-70">
                    {task.type}
                  </Badge>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-end mr-2">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground">{task.mode}</span>
                </div>
                <Switch 
                  checked={task.mode === "Autonomous"} 
                  onCheckedChange={() => toggleTask(task.id)}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-lg bg-white/5 border border-dashed border-white/10 flex items-center gap-3">
          <Shield className="h-5 w-5 text-secondary opacity-50" />
          <p className="text-xs text-muted-foreground">
            All topologies are exported as <span className="text-foreground font-bold">State Machines</span> compatible with DIDs and edge computation protocols.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
