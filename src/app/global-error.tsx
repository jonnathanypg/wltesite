'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global root layout error:', error);
  }, [error]);

  return (
    <html lang="es" className="dark">
      <body className="bg-[#0a0a14] text-white min-h-screen flex items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full p-8 rounded-3xl bg-white/[0.03] border border-white/10 text-center space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mx-auto text-2xl">
            ⚡
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-white">WEBLIFETECH</h1>
            <p className="text-sm text-gray-400">
              Ocurrió un error en la carga del cliente móvil. Puedes refrescar para continuar.
            </p>
          </div>
          <button
            onClick={() => reset()}
            className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold rounded-full py-3 text-sm shadow-xl"
          >
            Reintentar Carga
          </button>
        </div>
      </body>
    </html>
  );
}
