import React from "react";
import "./Footer.css";
import { SiSnapchat } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="privacy-policy">
        <a href="https://trbyh.edu.sa/privacy-policy-2/?lang=en" target="blank">
          Privacy Policy
        </a>
      </div>
      <div className="short-summary">
        One of the leading institutions under the National Company for Learning
        and Education, Tarbyh Namouthajiyah Schools is a pioneer in delivering
        high-quality education.
      </div>
      <div className="social-media">
        <a href="https://www.snapchat.com/add/tns-mgr" target="blank">
          <SiSnapchat size={28} />
        </a>
        <a href="https://www.instagram.com/trbyh/" target="blank">
          <FaInstagram size={28} />
        </a>
        <a href="https://twitter.com/trbyh" target="blank">
          <BsTwitterX size={28} />
        </a>
        <a href="https://www.youtube.com/user/trbyh" target="blank">
          <FaYoutube size={28} />
        </a>
        <a href="https://wa.me/966920003488" target="blank">
          <FaWhatsapp size={28} />
        </a>
        <a href="https://www.facebook.com/altarbiya" target="blank">
          <FaFacebook size={28} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
