import React from "react";

export default function SectionContainer({ id, bg, children, className = "" }) {
  const style = bg ? { backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center" } : {};
  return (
    <section id={id} className={`panel reveal ${className}`} style={style}>
      {/* overlay para fundos com imagem — se quiser remover, ajuste no CSS */}
      {bg && <div className="section-overlay" aria-hidden />}
      <div className="section-inner">{children}</div>
    </section>
  );
}
