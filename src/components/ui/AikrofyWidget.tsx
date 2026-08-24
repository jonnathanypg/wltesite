'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

export default function AikrofyWidget() {
  const pathname = usePathname();

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
      src="https://app.aikrofy.com/widget.js"
      data-widget-id="4f548c30-1cb6-48c0-aa43-f07a5a28a825"
      strategy="lazyOnload"
      onError={(e) => {
        console.warn('Aikrofy widget script failed to load (external service unreachable):', e);
      }}
    />
  );
}

