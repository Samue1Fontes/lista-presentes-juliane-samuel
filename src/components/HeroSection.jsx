import React from "react";
import SectionContainer from "./SectionContainer";

import IMG_0669_AVIF from "../assets/optimized/IMG_0669_up.avif";
import IMG_0669_WEBP from "../assets/optimized/IMG_0669_up.webp";

export default function HeroSection() {
  const bg = `image-set(url('${IMG_0669_AVIF}') type('image/avif'), url('${IMG_0669_WEBP}') type('image/webp'))`;

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
