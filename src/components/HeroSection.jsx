import React from "react";
import SectionContainer from "./SectionContainer";

const IMG_0669_AVIF = new URL("../assets/optimized/IMG_0669_up.avif", import.meta.url).href;
const IMG_0669_WEBP = new URL("../assets/optimized/IMG_0669_up.webp", import.meta.url).href;
const IMG_0669_PNG = new URL("../assets/raw_assets/IMG_0669_up.png", import.meta.url).href;

export default function HeroSection() {

  const bg = `image-set(url('${IMG_0669_AVIF}') type('image/avif'), url('${IMG_0669_WEBP}') type('image/webp'), url('${IMG_0669_PNG}') type('image/png'))`;

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
