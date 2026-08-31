'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

export default function AikrofyWidget() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const widgetId = process.env.NEXT_PUBLIC_AIKROFY_WIDGET_ID || '4f548c30-1cb6-48c0-aa43-f07a5a28a825';
  const apiHost = process.env.NEXT_PUBLIC_AIKROFY_API_HOST || 'https://app.aikrofy.com';

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return;
    try {
      const fabRoot = document.getElementById('aikrofy-fab-root');
      if (fabRoot) {
        fabRoot.style.display = 'flex';
      }
    } catch (err) {
      console.warn('Aikrofy widget navigation sync warning:', err);
    }
  }, [pathname, mounted]);

  if (!mounted) return null;

  return (
    <Script
      id="aikrofy-widget-script"
      src="https://app.aikrofy.com/widget.js"
      data-widget-id={widgetId}
      data-api-host={apiHost}
      strategy="lazyOnload"
      onError={(e) => {
        console.warn('Aikrofy widget script failed to load:', e);
      }}
    />
  );
}

