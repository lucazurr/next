import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Navigation = (props) => {
  const location = useLocation();
  const isApplePage = location.pathname === '/apple';
  const isGamesPage = location.pathname === '/';
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
          style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}
        >
          <div style={{flex: '0 0 auto'}}>
            <a className="navbar-brand page-scroll" href="#page-top" style={{fontSize: '18px', fontWeight: 'bold', textDecoration: 'none', color: 'inherit', padding: '15px 0'}}>
              Next Game
            </a>
          </div>
          
          <div style={{flex: '1', display: 'flex', justifyContent: 'center'}}>
            <ul className="nav navbar-nav" style={{display: 'flex', alignItems: 'center', margin: 0, padding: 0, listStyle: 'none'}}>
              <li style={{margin: '0 15px'}}>
                <Link to="/" className="page-scroll" style={{
                  textDecoration: 'none', 
                  color: 'inherit',
                  borderBottom: isGamesPage ? '2px solid #fff' : 'none',
                  paddingBottom: '5px'
                }}>
                  Games
                </Link>
              </li>
              <li style={{margin: '0 15px'}}>
                <a href="#team" className="page-scroll">
                  Blog
                </a>
              </li>
              <li style={{margin: '0 15px'}}>
                <Link to="/apple" className="page-scroll" style={{
                  textDecoration: 'none', 
                  color: 'inherit',
                  borderBottom: isApplePage ? '2px solid #fff' : 'none',
                  paddingBottom: '5px'
                }}>
                  Apple
                </Link>
              </li>

            </ul>
          </div>
          
          <div style={{flex: '0 0 auto', width: '120px'}}>
            {/* Spazio per bilanciare il layout */}
          </div>
        </div>
      </div>
    </nav>
  );
};
