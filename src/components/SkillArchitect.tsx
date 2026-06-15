"use client";

import { useState } from "react";
import { generateAutonomousSkill, type GenerateAutonomousSkillOutput } from "@/ai/flows/generate-autonomous-skill-flow";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Code, Terminal, Sparkles, Download } from "lucide-react";

export function SkillArchitect() {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GenerateAutonomousSkillOutput | null>(null);

  const handleGenerate = async () => {
    if (!description) return;
    setLoading(true);
    try {
      const output = await generateAutonomousSkill({ businessProblemDescription: description });
      setResult(output);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="glass col-span-1 lg:col-span-2">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-primary/20 p-2 rounded-md">
            <Sparkles className="h-4 w-4 text-primary" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Phase 3: Zero-Friction MVP</span>
        </div>
        <CardTitle className="text-2xl font-headline">Autonomous Skill Architect</CardTitle>
        <CardDescription>
          Transform natural language problem sets into modular Agentic Skills. Complexity is handled by our predictive engine.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea 
          placeholder="Describe a business process to automate (e.g., An agent that analyzes invoice discrepancies against procurement contracts)..." 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="min-h-[120px] bg-background/50 border-white/10 text-lg p-6 focus:ring-primary"
        />
        <Button 
          onClick={handleGenerate} 
          disabled={loading || !description}
          className="w-full h-12 text-lg bg-primary hover:bg-primary/90"
        >
          {loading ? (
            <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Architecting Skill...</>
          ) : (
            <><Terminal className="mr-2 h-5 w-5" /> Generate Sovereign Skill</>
          )}
        </Button>

        {result && (
          <div className="mt-8 space-y-4 animate-in fade-in zoom-in-95 duration-500">
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
              <h4 className="text-lg font-bold text-primary mb-1">{result.skillName}</h4>
              <p className="text-sm text-muted-foreground">{result.skillDescription}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black/40 rounded-lg border border-white/10 overflow-hidden">
                <div className="bg-white/5 px-4 py-2 text-[10px] font-bold uppercase flex justify-between items-center">
                  <span>Input JSON Schema</span>
                  <Code className="h-3 w-3" />
                </div>
                <pre className="p-4 text-[11px] overflow-auto max-h-[200px] text-primary/80 font-code">
                  {JSON.stringify(JSON.parse(result.inputJsonSchema), null, 2)}
                </pre>
              </div>
              <div className="bg-black/40 rounded-lg border border-white/10 overflow-hidden">
                <div className="bg-white/5 px-4 py-2 text-[10px] font-bold uppercase flex justify-between items-center">
                  <span>Output JSON Schema</span>
                  <Code className="h-3 w-3" />
                </div>
                <pre className="p-4 text-[11px] overflow-auto max-h-[200px] text-secondary/80 font-code">
                  {JSON.stringify(JSON.parse(result.outputJsonSchema), null, 2)}
                </pre>
              </div>
            </div>
          </div>
        )}
      </CardContent>
      {result && (
        <CardFooter>
          <Button variant="outline" className="w-full border-white/10 hover:bg-white/5">
            <Download className="mr-2 h-4 w-4" /> Export for Decentralized Deployment
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
