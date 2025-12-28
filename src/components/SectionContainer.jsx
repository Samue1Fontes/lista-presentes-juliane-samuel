import React from "react";

export default function SectionContainer({ id, bg, children, className = "", style = {} }) {
  const bgStyle = bg ? { backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center" } : {};
  const merged = { ...bgStyle, ...style };
  const hasBg = !!bg || !!style?.backgroundImage;
  return (
    <section id={id} className={`panel reveal ${className}`} style={merged}>
      {/* overlay para fundos com imagem — se quiser remover, ajuste no CSS */}
      {hasBg && <div className="section-overlay" aria-hidden />}
      <div className="section-inner">{children}</div>
    </section>
  );
}
