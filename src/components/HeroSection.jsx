import React from "react";
import SectionContainer from "./SectionContainer";

import IMG_0669_AVIF from "../assets/optimized/IMG_0669_up.avif";
import IMG_0669_WEBP from "../assets/optimized/IMG_0669_up.webp";
import IMG_0669_PNG from "../assets/polaroids/IMG_0669_up.png";

export default function HeroSection() {

  return (
    <SectionContainer id="hero" bg={IMG_0669_PNG} className="hero-section">
      <div className="hero-content">
        <p className="subtitle">Vamos celebrar juntos</p>
        <h1 className="hero-title">Juliane &amp; Samuel</h1>
        <p className="hero-date">07 • 03 • 26</p>
      </div>
    </SectionContainer>
  );
}
