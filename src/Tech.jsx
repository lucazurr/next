import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { TechSection } from "./components/tech-section";
import { AppleHeader } from "./components/apple-header";
import { Features } from "./components/features";
import { ScrollToTop } from "./components/scroll-to-top";




import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import "./apple-style.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
  offset: 80,
});

const Tech = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  useEffect(() => {
    // Aggiungi la classe apple-page al body
    document.body.classList.add('apple-page');
    
    // Rimuovi la classe quando il componente viene smontato
    return () => {
      document.body.classList.remove('apple-page');
    };
  }, []);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navigation />
      <TechSection />
      <AppleHeader data={landingPageData.Header} />
      <Features data={landingPageData.Features} />




      <Team data={landingPageData.Team} />
        <Contact data={landingPageData.Contact} />
      <ScrollToTop />
    </div>
  );
};

export default Tech;