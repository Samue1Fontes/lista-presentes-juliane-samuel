import React from "react";
import SectionContainer from "./SectionContainer";

export default function GiftsInfoSection() {
  return (
    <SectionContainer id="gifts" bg={null} className="section-light">
      <div className="centered reveal fade-up">
        <h3>Como nos presentear</h3>
        <p className="muted">
          Em breve você poderá selecionar um presente. Também haverá opção de enviar via Pix
          usando QR Code. Por enquanto, essa seção é informativa.
        </p>
        <button className="btn-primary">Lista de Presentes</button>
      </div>
    </SectionContainer>
  );
}
