import React from "react";
import SectionContainer from "./SectionContainer";
import EventMap from "./EventMap.jsx";
import SaveCalendar from "./SaveCalendar.jsx";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, } from "react-icons/fa";
import { GiFlowerPot } from 'react-icons/gi';

export default function EventSection() {
  return (
    <SectionContainer id="event" bg={null} className="section-beige">
      <div className="split reverse">
        <div className="split-text reveal fade-up">
          <h3 >Nosso Chá</h3>
          <p>
            Esse dia especial será no&nbsp;
            <a
              href="https://www.instagram.com/florefloroficial"
              target="_blank"
              rel="noopener noreferrer"
              className="event-link"
            >
              Flor & Flor. <GiFlowerPot style={{ fontSize: "2rem", color: "#AA552C" }}/>
            </a>
          </p>
          <p>
            <FaMapMarkerAlt style={{ fontSize: "1rem", marginRight: "0.4rem", color: "#AA552C" }}/>
            Rua Humberto Monte, 1855, Capim Macio, Natal - RN.
          </p>
          <p>
            <FaCalendarAlt style={{ fontSize: "1rem", marginRight: "0.4rem", color: "#AA552C" }}/>
            Data: 07 de Março de 2026
          </p>
          <p>
            <FaClock style={{ fontSize: "1rem", marginRight: "0.4rem", color: "#AA552C" }}/>
            Horário: a partir das 16h
          </p>
          <SaveCalendar />
          <EventMap />
        </div>
        <div className="split-media reveal fade-right">
          <picture>
            <source srcSet="/src/assets/optimized/IMG_1035.avif" type="image/avif" />
            <source srcSet="/src/assets/optimized/IMG_1035.webp" type="image/webp" />
            <img src="/src/assets/optimized/IMG_1035.webp" alt="Local" className="contained-image" loading="lazy" />
          </picture>
        </div>
      </div>
    </SectionContainer>
  );
}
