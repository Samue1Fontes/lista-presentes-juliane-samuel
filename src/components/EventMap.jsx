import React from "react";
import "../styles/EventMap.css";

export default function EventMap() {
  return (
    <div className="map-container">
      <iframe
        title="Mapa do Evento Happy Fest"
        src="https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1772778602742!5m2!1spt-BR!2sbr!6m8!1m7!1sxYmcCFux6WIilfD79a2oew!2m2!1d-5.831114693635844!2d-35.25392793851385!3f71.08283369934107!4f2.5625093856941135!5f2.463336916932054"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}