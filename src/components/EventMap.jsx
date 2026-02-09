import React from "react";
import "../styles/EventMap.css";

export default function EventMap() {
  return (
    <div className="map-container">
      <iframe
        title="Mapa do Evento Realize Recepções"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d361.4703720109771!2d-35.26197223906483!3d-5.822482140891015!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b255dd553e68bb%3A0x35606d3a529852ac!2sREALIZE%20RECEPCOES!5e1!3m2!1spt-BR!2sbr!4v1770664594451!5m2!1spt-BR!2sbr"
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
