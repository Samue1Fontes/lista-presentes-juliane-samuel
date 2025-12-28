import React, { useMemo } from "react";
import SectionContainer from "./SectionContainer";
import PolaroidGallery from "./PolaroidGallery";
import { loadPolaroidImages } from "../utils/loadPolaroids";
import { shuffleArray } from "../utils/shuffle";

export default function GiftsInfoSection() {
  const { topPhotos, bottomPhotos } = useMemo(() => {
    const allPhotos = loadPolaroidImages();

    const shuffled = shuffleArray(allPhotos);

    return {
      topPhotos: shuffled.slice(0, 4),
      bottomPhotos: shuffled.slice(4, 8),
    };
  }, []); // ← recria sempre que o componente monta

  return (
    <SectionContainer id="gifts" bg={null} className="section-light">
      <PolaroidGallery photos={topPhotos} position="top" />

      <div className="section-inner" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <h3 className="text-3xl font-playfair mb-4" style={{ color: "#AA552C" }}>
            Como nos presentear
          </h3>

          <p className="text-lg leading-relaxed mb-6" style={{ color: "#333", fontWeight: 500 }}>
            Este chá representa o início de uma nova fase para nós dois, e os presentes fazem parte desse momento tão especial para nós.
            <br/>
            <br/>
            Pensando em facilitar e organizar tudo com carinho, montamos uma lista de casamento na Ferreira Costa, 
            com itens que escolhemos cuidadosamente e que farão parte do nosso novo lar.
            <br/>
            <br/>
            Cada presente representa não apenas um item, mas o apoio, o carinho e a presença de pessoas importantes 
            que acreditam e torcem por nós.
            <br/>
            <br/>
            Você pode escolher o presente da forma que preferir:<br/>
            – comprando <strong>online</strong>, pelo site<br/>
            – ou <strong>presencialmente</strong> na loja Ferreira Costa
            <br/>
            <br/>
            <strong>OBS: Para compras presenciais, basta ir até o Atendimento ao Cliente e solicitar a lista de casamento de 
            Juliane Roberta & Samuel Fontes. A equipe da loja irá explicar e ajudar em todo o processo.</strong>
            <br/>
            <br/>
            <strong>Home Center Ferreira Costa</strong><br/>
            Av. Engenheiro Roberto Freire, 142 – Capim Macio<br/>
            Natal – RN
            <br/>
            <br/>
            Desde já, agradecemos de coração por fazer parte desse momento e por nos 
            ajudar a construir o nosso começo. 🧡
          </p>

          <p
            style={{
              fontSize: "0.9rem",
              color: "#666",
              marginBottom: "0.75rem",
              fontStyle: "italic",
            }}
          >
            Para acessar a lista de presentes, clique no botão abaixo
          </p>

          <button
            type="button"
            className="btn-primary"
            onClick={() =>
              window.open(
                "https://www.ferreiracosta.com/lista-de-casamento/presentes/julianeesamuel",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Lista de Presentes
          </button>
        </div>
      </div>

      <PolaroidGallery photos={bottomPhotos} position="bottom" />
    </SectionContainer>
  );
}
