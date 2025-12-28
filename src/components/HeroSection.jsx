import React from "react";
import SectionContainer from "./SectionContainer";

export default function HeroSection() {
  // prefer AVIF/WebP background when available (browsers will pick the supported format)
  const bg = `image-set(url('/src/assets/optimized/IMG_0669_up.avif') type('image/avif'), url('/src/assets/optimized/IMG_0669_up.webp') type('image/webp'), url('/src/assets/raw_assets/IMG_0669_up.png') type('image/png'))`;

  return (
    <SectionContainer id="hero" bg={null} className="hero-section" style={{ backgroundImage: bg }}>
      <div className="hero-content">
        <p className="subtitle">Vamos celebrar juntos</p>
        <h1 className="hero-title">Juliane &amp; Samuel</h1>
        <p className="hero-date">07 • 03 • 26</p>
      </div>
    </SectionContainer>
  );
}
