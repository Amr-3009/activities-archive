import React from "react";
import "./Titlebar.css";
import Logo from "../../assets/images/logo.png";

const Titlebar = () => {
  return (
    <div className="titlebar">
      <img src={Logo} alt="logo" />
      <p>Qurtoba 2 International Schools</p>
    </div>
  );
};

export default Titlebar;
