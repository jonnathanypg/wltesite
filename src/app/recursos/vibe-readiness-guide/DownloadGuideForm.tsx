"use client";

import { Button } from '@/components/ui/button';

export function DownloadGuideForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Guía enviada a su correo!');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 pt-2">
      <input 
        type="email" 
        required
        placeholder="Tu email principal"
        className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm text-white focus:outline-none focus:border-cyan-400"
      />
      <Button type="submit" className="w-full sm:w-auto h-auto min-h-11 py-2.5 px-6 sm:px-8 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-full whitespace-normal leading-snug text-center max-w-full">
        Descargar PDF Gratis →
      </Button>
    </form>
  );
}
