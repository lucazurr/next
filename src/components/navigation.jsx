import React from "react";

export const Navigation = (props) => {
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
                <a href="#features" className="page-scroll">
                  Our Service
                </a>
              </li>
              <li style={{margin: '0 15px'}}>
                <a href="#team" className="page-scroll">
                  Team
                </a>
              </li>
              <li style={{margin: '0 15px'}}>
                <a href="#contact" className="page-scroll">
                  Contact
                </a>
              </li>
              <li style={{margin: '0 15px 0 30px'}}>
                <span style={{fontWeight: 'bold', color: '#999', cursor: 'default'}}>
                  Blog
                </span>
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
