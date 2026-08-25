'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

export default function AikrofyWidget() {
  const pathname = usePathname();
  const widgetId = process.env.NEXT_PUBLIC_AIKROFY_WIDGET_ID || 'f97f9776-e3e5-4891-ad7f-5e54f91462c1';

  useEffect(() => {
    // Ensure widget presence and visibility on every SPA page navigation
    if (typeof window !== 'undefined') {
      try {
        const fabRoot = document.getElementById('aikrofy-fab-root');
        if (fabRoot) {
          fabRoot.style.display = 'flex';
        }
      } catch (err) {
        console.warn('Aikrofy widget navigation sync warning:', err);
      }
    }
  }, [pathname]);

  return (
    <Script
      id="aikrofy-widget-script"
      src="/widget.js"
      data-widget-id={widgetId}
      data-api-host="https://aikrofy.com"
      strategy="afterInteractive"
      onError={(e) => {
        console.warn('Aikrofy widget script failed to load:', e);
      }}
    />
  );
}

