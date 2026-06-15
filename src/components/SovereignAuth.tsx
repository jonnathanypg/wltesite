"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Fingerprint, ShieldCheck, Key, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function SovereignAuth() {
  const [isAuthed, setIsAuthed] = useState(false);
  const [loading, setLoading] = useState(false);

  const simulatePasskey = () => {
    setLoading(true);
    setTimeout(() => {
      setIsAuthed(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="glass p-8 rounded-3xl max-w-md w-full mx-auto relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-50 pointer-events-none" />
      
      <div className="relative z-10 space-y-6 text-center">
        <div className="mx-auto w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center border border-primary/30 group-hover:scale-110 transition-transform duration-500">
          <ShieldCheck className="h-8 w-8 text-primary" />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-2xl font-headline font-bold">Identity Sovereignty</h3>
          <p className="text-sm text-muted-foreground">
            No OAuth. No Centralized DB. Your identity remains native to your hardware using WebAuthn protocols.
          </p>
        </div>

        {!isAuthed ? (
          <div className="space-y-3">
            <Button 
              onClick={simulatePasskey} 
              disabled={loading}
              className="w-full h-12 bg-white text-black hover:bg-white/90 font-bold flex items-center justify-center"
            >
              {loading ? "Establishing DID..." : <><Fingerprint className="mr-2 h-5 w-5" /> Login with Passkey</>}
            </Button>
            <div className="flex items-center gap-2 justify-center">
              <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-tighter">Powered by Protocol</span>
              <Badge variant="secondary" className="text-[10px] bg-secondary/20 text-secondary border-none">DID:WEBLIFE</Badge>
            </div>
          </div>
        ) : (
          <div className="space-y-4 animate-in zoom-in-95 duration-500">
            <div className="flex flex-col items-center gap-2 py-4 px-6 bg-primary/10 border border-primary/20 rounded-xl">
              <Lock className="h-6 w-6 text-primary mb-2" />
              <p className="text-xs uppercase font-bold tracking-widest text-primary">Sovereign State Verified</p>
              <p className="font-code text-[11px] text-muted-foreground break-all">did:sov:0x71C7656EC7ab88b098defB751B7401B5f6d8976F</p>
            </div>
            <Button variant="link" onClick={() => setIsAuthed(false)} className="text-muted-foreground hover:text-foreground">
              Revoke Session
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
