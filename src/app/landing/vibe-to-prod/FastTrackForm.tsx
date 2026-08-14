"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export function FastTrackForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    projectUrl: '',
    mainProblem: 'La base de datos es lenta o da errores'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Guardar o redirigir dinámicamente a /calificar
    router.push('/calificar');
  };

  return (
    <form onSubmit={handleSubmit} className="glass p-6 sm:p-8 rounded-3xl border-orange-500/30 space-y-4 shadow-2xl">
      <div className="text-center mb-4">
        <h3 className="text-xl font-headline font-bold text-white">Formulario Fast-Track</h3>
        <p className="text-xs text-muted-foreground">Captura de Lead de Alta Intención</p>
      </div>

      <div>
        <label className="block text-xs font-mono text-muted-foreground mb-1">Nombre Completo</label>
        <input 
          type="text" 
          required
          placeholder="Ej. Carlos Mendoza"
          value={formData.fullName}
          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500"
        />
      </div>

      <div>
        <label className="block text-xs font-mono text-muted-foreground mb-1">Email Corporativo / Profesional</label>
        <input 
          type="email" 
          required
          placeholder="carlos@tuempresa.com"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500"
        />
      </div>

      <div>
        <label className="block text-xs font-mono text-muted-foreground mb-1">URL del MVP o Plataforma Usada</label>
        <input 
          type="text" 
          placeholder="Lovable / Replit / Bolt / Cursor"
          value={formData.projectUrl}
          onChange={(e) => setFormData({...formData, projectUrl: e.target.value})}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500"
        />
      </div>

      <div>
        <label className="block text-xs font-mono text-muted-foreground mb-1">Principal Problema Actual ▼</label>
        <select 
          value={formData.mainProblem}
          onChange={(e) => setFormData({...formData, mainProblem: e.target.value})}
          className="w-full bg-card border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500"
        >
          <option value="La base de datos es lenta o da errores">La base de datos es lenta o da errores</option>
          <option value="Tengo marcas de agua y límites de la plataforma">Tengo marcas de agua y límites de la plataforma</option>
          <option value="Mi cliente me pide pruebas de seguridad / ISO / SOC2">Mi cliente me pide pruebas de seguridad / ISO / SOC2</option>
          <option value="Quiero migrar a mi propio hosting / AWS / Vercel">Quiero migrar a mi propio hosting / AWS / Vercel</option>
        </select>
      </div>

      <Button type="submit" className="w-full h-14 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold rounded-xl text-sm shadow-xl shadow-orange-500/20 mt-4">
        SOLICITAR VIBE AUDIT EXPRÉS EN 5 DÍAS →
      </Button>
    </form>
  );
}
