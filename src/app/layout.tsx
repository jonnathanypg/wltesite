import type { Metadata } from 'next';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { LanguageProvider } from '@/lib/LanguageContext';

export const metadata: Metadata = {
  title: 'WEBLIFETECH | Del Chat de IA a Producción Enterprise',
  description: 'Convertimos su MVP creado en Lovable, Replit, Bolt o Cursor en una infraestructura escalable, segura y lista para operar a nivel enterprise. Reingeniería con IA y despliegues en semanas.',
  keywords: [
    'Vibe-to-Prod', 'Reingeniería de MVP', 'Lovable a producción', 'Replit a AWS', 
    'Escalar Vibe Coding', 'Seguridad B2G ISO 27001', 'Forward Deployed Engineering LatAm'
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
        {/* WLT Conversational Navigator & Aikrofy Universal Webchat */}
        <script
          src="/agent/wlt-chat.js"
          data-agent-id="wlt-site-main"
          data-widget-id="f97f9776-e3e5-4891-ad7f-5e54f91462c1"
          data-api-url="https://api.weblifetech.com"
          data-crm-endpoint="https://crm.weblifetech.com/ingest"
          data-theme="dark"
          data-brand-color="#00E5FF"
          data-brand-secondary="#FF6B00"
          data-lang="es"
          data-site-name="WEBLIFETECH"
          async
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground selection:bg-primary selection:text-primary-foreground min-h-screen flex flex-col">
        <LanguageProvider>
          <Navigation />
          <div className="flex-1 pt-20">
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
