import React from "react";
import "./CulturalDay.css";
import { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// Import images
import image1 from "../../assets/images/cultural-day/1.jpg";
import image2 from "../../assets/images/cultural-day/2.jpg";
import image3 from "../../assets/images/cultural-day/3.jpg";
import image4 from "../../assets/images/cultural-day/4.jpg";
import image5 from "../../assets/images/cultural-day/5.jpg";
import image6 from "../../assets/images/cultural-day/6.jpg";
import image7 from "../../assets/images/cultural-day/7.jpg";
import image8 from "../../assets/images/cultural-day/8.jpg";
import image9 from "../../assets/images/cultural-day/9.jpg";
import image10 from "../../assets/images/cultural-day/10.jpg";
import image11 from "../../assets/images/cultural-day/11.jpg";
import image12 from "../../assets/images/cultural-day/12.jpg";
import image13 from "../../assets/images/cultural-day/13.jpg";
import image14 from "../../assets/images/cultural-day/14.jpg";
import image15 from "../../assets/images/cultural-day/15.jpg";
import image16 from "../../assets/images/cultural-day/16.jpg";
import image17 from "../../assets/images/cultural-day/17.jpg";
import image18 from "../../assets/images/cultural-day/18.jpg";

const CulturalDay = () => {
  return (
    <div className="culture-day-container">
      <div className="carousel-container">
        <Carousel infiniteLoop={true} showThumbs={false} showStatus={false}>
          <div>
            <img src={image1} alt="cultural-day-1" />
          </div>
          <div>
            <img src={image2} alt="cultural-day-2" />
          </div>
          <div>
            <img src={image3} alt="cultural-day-3" />
          </div>
          <div>
            <img src={image4} alt="cultural-day-4" />
          </div>
          <div>
            <img src={image5} alt="cultural-day-5" />
          </div>
          <div>
            <img src={image6} alt="cultural-day-6" />
          </div>
          <div>
            <img src={image7} alt="cultural-day-7" />
          </div>
          <div>
            <img src={image8} alt="cultural-day-8" />
          </div>
          <div>
            <img src={image9} alt="cultural-day-9" />
          </div>
          <div>
            <img src={image10} alt="cultural-day-10" />
          </div>
          <div>
            <img src={image11} alt="cultural-day-11" />
          </div>
          <div>
            <img src={image12} alt="cultural-day-12" />
          </div>
          <div>
            <img src={image13} alt="cultural-day-13" />
          </div>
          <div>
            <img src={image14} alt="cultural-day-14" />
          </div>
          <div>
            <img src={image15} alt="cultural-day-15" />
          </div>
          <div>
            <img src={image16} alt="cultural-day-16" />
          </div>
          <div>
            <img src={image17} alt="cultural-day-17" />
          </div>
          <div>
            <img src={image18} alt="cultural-day-18" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CulturalDay;
