import React from "react";
import SectionContainer from "./SectionContainer";
import instrRight from "../assets/instr-right.png";

export default function EventSection() {
  return (
    <SectionContainer id="event" bg={null} className="section-beige">
      <div className="split reverse">
        <div className="split-text reveal fade-up">
          <h3>Nosso Chá</h3>
          <p>🗓️ 07 de Março de 2026 — Espaço Bella Vista</p>
          <div className="map-placeholder">[ Mapa interativo futuramente ]</div>
        </div>
        <div className="split-media reveal fade-right">
          <img src={instrRight} alt="Local" className="contained-image" />
        </div>
      </div>
    </SectionContainer>
  );
}
