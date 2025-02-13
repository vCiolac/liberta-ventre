import { AppProps } from 'next/app';
import Script from 'next/script';
import '@/styles/global.css';
import '@fontsource/inter';

import { setup } from 'twind';
import { trackEvent } from '@/utils/trackEvent';
import { useEffect } from 'react';
import twindConfig from '../twind.config';

if (typeof window !== `undefined`) {
  setup(twindConfig);
}

const PIXEL_ID = process.env.META_PIXEL_ID;

// Função para capturar e armazenar o "fbc" no cookie
function captureFBC() {
  const urlParams = new URLSearchParams(window.location.search);
  const fbclid = urlParams.get(`fbclid`);

  if (fbclid) {
    document.cookie = `_fbc=fb.1.${Date.now()}.${fbclid}; path=/; max-age=7776000; SameSite=Lax`;
  }
}

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    captureFBC();
    trackEvent(`PageView`, {
      content_name: `Página Inicial`,
      event_label: `Entrou no site`,
    });
  }, []);
  return (
    <>
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}
            (window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL_ID}');
          `,
        }}
      />

      <Component {...pageProps} />
    </>
  );
}
