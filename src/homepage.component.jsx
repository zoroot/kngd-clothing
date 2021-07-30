import React from "react";
import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">CHAPEAUX</h1>
          <span className="title">VOIR</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">PULLS</h1>
          <span className="title">VOIR</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">CHAUSSURES</h1>
          <span className="title">VOIR</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">FEMME</h1>
          <span className="title">VOIR</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">HOMME</h1>
          <span className="title">VOIR</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
