"use client";

import { useEffect } from "react";

export default function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget rounded-xl overflow-hidden min-h-[700px]"
      data-url="https://calendly.com/shane-24media/30min?hide_gdpr_banner=1"
      style={{ width: "100%", height: "700px" }}
    />
  );
}
