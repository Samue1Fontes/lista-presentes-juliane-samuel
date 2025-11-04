import React from "react";
import SectionContainer from "./SectionContainer";
import heroImg from "../assets/hero.png";

export default function HeroSection() {
  return (
    <SectionContainer id="hero" bg={heroImg} className="hero-section">
      <div className="hero-content">
        <p className="subtitle">Vamos celebrar juntos</p>
        <h1 className="hero-title">Juliane &amp; Samuel</h1>
        <p className="hero-date">07 • 03 • 26</p>
      </div>
    </SectionContainer>
  );
}
