import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { HowToSection } from "./components/howto-section";
import { HowToHeader } from "./components/howto-header";
import { Features } from "./components/features";
import { ScrollToTop } from "./components/scroll-to-top";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
  offset: 80,
});

const HowTo = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  useEffect(() => {
    // Aggiungi la classe howto-page al body
    document.body.classList.add('howto-page');
    
    // Rimuovi la classe quando il componente viene smontato
    return () => {
      document.body.classList.remove('howto-page');
    };
  }, []);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navigation />
      <HowToSection />
      <HowToHeader data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
      <ScrollToTop />
    </div>
  );
};

export default HowTo;