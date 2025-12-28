import React from "react";
import "./styles/index.css"; // ajustado para nova estrutura
import HeroSection from "./components/HeroSection";
import WelcomeSection from "./components/WelcomeSection";
import EventSection from "./components/EventSection";
import GiftsInfoSection from "./components/GiftsInfoSection";
import useSimpleObserver from "./hooks/useSimpleObserver";
import useGsapEntrance from "./hooks/useGsapEntrance";
import Footer from "./components/Footer";

export default function App() {
  // hook global — inicia observer para todas as seções com classe .reveal
  useSimpleObserver();
  useGsapEntrance();

  return (
  <>
    <HeroSection />
    <WelcomeSection />
    <EventSection />
    <GiftsInfoSection />
    <Footer />
  </>
  );
}
