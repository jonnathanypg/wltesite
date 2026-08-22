import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { LanguageProvider } from '@/lib/LanguageContext';
import { Footer } from '@/components/Footer';
import AikrofyWidget from '@/components/ui/AikrofyWidget';

export const metadata: Metadata = {
  metadataBase: new URL('https://weblifetech.com'),
  title: 'WEBLIFETECH | Del Chat de IA a Producción Enterprise',
  description: 'Convertimos su MVP creado en Lovable, Replit, Bolt o Cursor en una infraestructura escalable, segura y lista para operar a nivel enterprise. Reingeniería con IA y despliegues en semanas.',
  keywords: [
    'Vibe-to-Prod', 'Reingeniería de MVP', 'Lovable a producción', 'Replit a AWS',
    'Escalar Vibe Coding', 'Seguridad B2G ISO 27001', 'Forward Deployed Engineering LatAm'
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'WEBLIFETECH | Del Chat de IA a Producción Enterprise',
    description: 'Convertimos MVPs de Vibe Coding en infraestructura enterprise. Reingeniería con IA en semanas.',
    url: 'https://weblifetech.com',
    siteName: 'WEBLIFETECH',
    images: [{ url: '/logos/logo-og.png', width: 1080, height: 1080, alt: 'WEBLIFETECH — Innovate Faster, Grow Smarter' }],
    locale: 'es_LA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WEBLIFETECH | Del Chat de IA a Producción Enterprise',
    description: 'Convertimos MVPs de Vibe Coding en infraestructura enterprise.',
    images: ['/logos/logo-og.png'],
  },
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
        {/* Preconnect to AI Agent Server */}
        <link rel="preconnect" href="https://app.aikrofy.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://app.aikrofy.com" />
      </head>
      <body className="font-body antialiased bg-background text-foreground selection:bg-primary selection:text-primary-foreground min-h-screen flex flex-col">
        <LanguageProvider>
          <Navigation />
          <div className="flex-1 pt-20">
            {children}
          </div>
          <Footer />
          <AikrofyWidget />
          {/* Aikrofy Conversational AI Webchat & CRM Lead Capture */}
          <Script
            id="aikrofy-widget-script"
            src="https://app.aikrofy.com/widget.js"
            data-widget-id="cccce8d4-a48a-4ba9-9d9f-66ef41b656dc"
            strategy="afterInteractive"
          />
        </LanguageProvider>
      </body>
    </html>
  );
}
