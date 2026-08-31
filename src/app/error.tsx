'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw, AlertTriangle, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log client-side error for observability
    console.error('App-level client runtime error:', error);
  }, [error]);

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-20">
      <div className="glass max-w-lg w-full p-8 sm:p-10 rounded-3xl border-orange-500/30 text-center space-y-6 shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mx-auto">
          <AlertTriangle className="h-8 w-8" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-headline font-bold text-white">
            Experiencia en Actualización
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Se ha producido una sincronización en el navegador móvil o cliente. Puedes reintentar la carga inmediata o volver al inicio.
          </p>
        </div>

        {error?.digest && (
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-muted-foreground break-all">
            Digest: {error.digest}
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button
            onClick={() => reset()}
            className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold rounded-full px-6 py-2.5 shadow-lg"
          >
            <RefreshCw className="h-4 w-4 mr-2" /> Reintentar
          </Button>

          <Link href="/" className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="w-full sm:w-auto border-white/10 text-white rounded-full px-6 py-2.5 hover:bg-white/5"
            >
              <Home className="h-4 w-4 mr-2" /> Ir al Inicio
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
