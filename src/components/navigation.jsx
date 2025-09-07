import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Navigation = (props) => {
  const location = useLocation();
  const isTechPage = location.pathname === '/tech';
  const isGamingPage = location.pathname === '/';
  const isStyleGearPage = location.pathname === '/style-gear';
  const isHowToPage = location.pathname === '/how-to';
  

  
  return (
    <nav 
      id="menu" 
      className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <Link 
            to="/" 
            className="navbar-brand"
          >
            Next Game
          </Link>
        </div>
        
        <div className="collapse navbar-collapse">
           <ul className="nav navbar-nav">
             <li className={isGamingPage ? 'active' : ''}>
                <Link 
                  to="/" 
                  className="page-scroll"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Gaming
                </Link>
              </li>
              <li className={isTechPage ? 'active' : ''}>
                <Link 
                  to="/tech" 
                  className="page-scroll"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Tech
                </Link>
              </li>
              <li className={isStyleGearPage ? 'active' : ''}>
                <Link 
                  to="/style-gear" 
                  className="page-scroll"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Style & Gear
                </Link>
              </li>
              <li className={isHowToPage ? 'active' : ''}>
                <Link 
                  to="/how-to" 
                  className="page-scroll"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  How-To
                </Link>
              </li>
              <li>
                <a 
                  href="#team" 
                  className="page-scroll"
                >
                  Blog
                </a>
              </li>
           </ul>
         </div>
         
         <div className="navbar-spacer"></div>
       </div>
     </nav>
   );
 };
