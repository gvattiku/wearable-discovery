"use client";

import Script from "next/script";

const TALLY_EMBED_URL =
  "https://tally.so/embed/japkRE?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

export function TallyEmbed() {
  const loadEmbeds = () => {
    window.Tally?.loadEmbeds();
  };

  return (
    <>
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="lazyOnload"
        onLoad={loadEmbeds}
      />
      <iframe
        data-tally-src={TALLY_EMBED_URL}
        loading="lazy"
        width="100%"
        height="500"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Burnout Research Study"
      />
    </>
  );
}
