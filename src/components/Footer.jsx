import React, { useState } from "react";
import { FaInstagram, FaChevronUp } from "react-icons/fa";
import "../styles/footer.css";

export default function Footer() {

  const [hovered, setHovered] = useState(false);

  const scrollToTop = () => {
  document.documentElement.scrollTo?.({ top: 0, behavior: "smooth" });
  document.body.scrollTo?.({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-grid">
        {/* ---- Left: redes sociais ---- */}
        <div className="footer-social">
          <p className="social-redes">
            Instagram dos Noivos
          </p>
          <a
            href="https://www.instagram.com/julianerbds"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaInstagram />
            <span>@julianerbds</span>
          </a>
          <a
            href="https://www.instagram.com/samuel_fontesgtr"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaInstagram />
            <span>@samuel_fontesgtr</span>
          </a>
        </div>

        {/* ---- Center: título e seções ---- */}
        <div className="footer-center">
          <h4
            className="footer-title"
            style={{ cursor: "pointer" }}
            onClick={() => {
              const hero = document.getElementById("hero");
              hero?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Juliane &amp; Samuel
          </h4>

          <p className="footer-date">07 • 03 • 26</p>

          <nav className="footer-nav">
            <a href="#welcome">Boas-vindas </a>
            |
            <a href="#event">Local</a>
            |
            <a href="#gifts">Presentes</a>
          </nav>

          <p className="copyright">
            © {new Date().getFullYear()} Juliane &amp; Samuel
          </p>
          <p className="credit" style={{ cursor: "pointer" }}>
            Desenvolvido com ❤ por&nbsp; 
            <a 
              href="https://github.com/Samue1Fontes" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'inherit' }}
            >
              Samuel Fontes
            </a>
          </p>
        </div>

        {/* ---- Right: voltar ao topo ---- */}
        <div className="footer-top">
          {/* Setas acima do botão */}
          <div className={`arrow-container ${hovered ? 'visible' : ""}`}>
            <FaChevronUp className="arrow-up first" />
            <FaChevronUp className="arrow-up second" />
          </div>

          <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={scrollToTop}
            className="btn-top"
          >
            Voltar ao topo
          </button>
        </div>
      </div>
    </footer>
  );
}
