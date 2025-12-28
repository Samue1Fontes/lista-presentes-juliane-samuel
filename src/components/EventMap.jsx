import React from "react";
import "../styles/EventMap.css";

export default function EventMap() {
  return (
    <div className="map-container">
      <iframe
        title="Mapa do Evento Flor & Flor"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1215.7467592344667!2d-35.19161179314356!3d-5.863835426431206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2ff3ececf4c53%3A0x7d71ce7adae98964!2sFlor%20%26%20Flor%20%7C%20Espa%C3%A7o%20para%20eventos%20e%20decora%C3%A7%C3%A3o!5e1!3m2!1spt-BR!2sbr!4v1762247537521!5m2!1spt-BR!2sbr"
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
