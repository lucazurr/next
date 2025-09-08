import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { GamingSection } from "./components/gaming-section";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { ScrollToTop } from "./components/scroll-to-top";




import { Team } from "./components/Team";
import { ImageGallery } from "./components/image-gallery";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
  offset: 80,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navigation />
      <GamingSection />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />




      <Team data={landingPageData.Team} />
      <ImageGallery />
      <Contact data={landingPageData.Contact} />
      <ScrollToTop />
    </div>
  );
};

export default App;
