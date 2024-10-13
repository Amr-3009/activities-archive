import React from "react";
import "./Homepage.css";

const Home = () => {
  return (
    <div className="home-body">
      <div className="hero-section">
        <div className="intro-text">
          <p>
            This is the Activities Archive for QRB 2 International Boys School
          </p>
        </div>
        <div className="button-container">
          <button className="fill">View Activities ➡</button>
          <button className="fill">Contact us ➡</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
