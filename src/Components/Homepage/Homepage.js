import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";

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
          <Link className="fill" to="/activities-archive/archive">
            View Activities ➡
          </Link>
          <Link className="fill" to="/activities-archive/contact-us">
            Contact us ➡
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
