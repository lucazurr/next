import React from "react";

export const GamingSection = () => {
  return (
    <section id="gaming-section" className="gaming-section">
      <div className="container">
        <div className="gaming-categories">
          <div className="gaming-category">
            <a href="#image-gallery" className="page-scroll">
              <h3>Console</h3>
            </a>
          </div>
          
          <div className="gaming-category">
            <h3>PC</h3>
          </div>
          
          <div className="gaming-category">
            <h3>Mobile Games</h3>
          </div>
          
          <div className="gaming-category">
            <h3>Recensioni Giochi</h3>
          </div>
        </div>
      </div>
    </section>
  );
};