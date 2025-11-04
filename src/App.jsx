import React from "react";
import "./styles/index.css"; // ajustado para nova estrutura
import HeroSection from "./components/HeroSection";
import WelcomeSection from "./components/WelcomeSection";
import EventSection from "./components/EventSection";
import GiftsInfoSection from "./components/GiftsInfoSection";
import useSimpleObserver from "./hooks/useSimpleObserver";

export default function App() {
  // hook global — inicia observer para todas as seções com classe .reveal
  useSimpleObserver();

  return (
    <div className="app-root">
      <HeroSection />
      <WelcomeSection />
      <EventSection />
      <GiftsInfoSection />
      <footer className="site-footer">© Juliane & Samuel • 07 • 03 • 26</footer>
    </div>
  );
}
