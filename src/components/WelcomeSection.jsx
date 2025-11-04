import React from "react";
import SectionContainer from "./SectionContainer";
import welcomeLeft from "../assets/welcome-left.png";

export default function WelcomeSection() {
  return (
    <SectionContainer id="welcome" bg={null} className="section-light">
      <div className="split">
        <div className="split-media reveal fade-left">
          <img src={welcomeLeft} alt="Boas-vindas" className="contained-image" />
        </div>
        <div className="split-text reveal fade-up">
          <h2>Seja bem-vindo(a)</h2>
          <p>
            Estamos muito felizes por ter você conosco neste momento tão especial. Sua
            presença é a melhor parte dessa celebração.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
