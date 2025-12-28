import React from "react";
import SectionContainer from "./SectionContainer";

export default function WelcomeSection() {
  return (
    <SectionContainer id="welcome" bg={null} className="section-light">
      <div className="split">
        <div className="split-media reveal fade-left">
          <picture>
            <source srcSet="/src/assets/optimized/IMG_1125.avif" type="image/avif" />
            <source srcSet="/src/assets/optimized/IMG_1125.webp" type="image/webp" />
            <img src="/src/assets/optimized/IMG_1125.webp" alt="Boas-vindas" className="contained-image" loading="lazy" />
          </picture>
        </div>
        <div className="split-text reveal fade-up">
          <h2>Seja bem-vindo(a)</h2>
          <p>
            Este encontro foi pensado com muito carinho para celebrar um momento especial 
            que estamos vivendo juntos: o início da nossa nova fase.
            <br />
            <br />
            Ainda não é o grande dia do casamento, mas é uma oportunidade íntima e cheia de afeto 
            de reunir pessoas queridas que fazem parte da nossa história.
            <br />
            <br />
            Ficamos muito felizes em poder compartilhar esse momento com você e somos imensamente 
            gratos por todo o carinho, presença e apoio 🧡
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
