import React, { Component } from "react";
import "./ParentMeeting.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// Import images
import image1 from "../../assets/images/parent-meeting/1.png";
import image2 from "../../assets/images/parent-meeting/2.png";
import image3 from "../../assets/images/parent-meeting/3.png";
import image4 from "../../assets/images/parent-meeting/4.png";
import image5 from "../../assets/images/parent-meeting/5.png";
import image6 from "../../assets/images/parent-meeting/6.png";
import image7 from "../../assets/images/parent-meeting/7.png";
import image8 from "../../assets/images/parent-meeting/8.png";
import image9 from "../../assets/images/parent-meeting/9.png";
import image10 from "../../assets/images/parent-meeting/10.png";
import image11 from "../../assets/images/parent-meeting/11.png";
import image12 from "../../assets/images/parent-meeting/12.png";
import image13 from "../../assets/images/parent-meeting/13.png";
import image14 from "../../assets/images/parent-meeting/14.png";
import image15 from "../../assets/images/parent-meeting/15.png";
import image16 from "../../assets/images/parent-meeting/16.png";
import image17 from "../../assets/images/parent-meeting/17.png";
import image18 from "../../assets/images/parent-meeting/18.png";
import image19 from "../../assets/images/parent-meeting/19.png";
import image20 from "../../assets/images/parent-meeting/20.png";
import image21 from "../../assets/images/parent-meeting/21.png";
import image22 from "../../assets/images/parent-meeting/22.png";
import image23 from "../../assets/images/parent-meeting/23.png";
import image24 from "../../assets/images/parent-meeting/24.png";
import image25 from "../../assets/images/parent-meeting/25.png";
import image26 from "../../assets/images/parent-meeting/26.png";
import image27 from "../../assets/images/parent-meeting/27.png";

const ParentMeeting = () => {
  return (
    <div className="parent-meeting-container">
      <div className="carousel-container">
        <Carousel infiniteLoop={true} showThumbs={false} showStatus={false}>
          <div>
            <img src={image1} alt="parent-meeting-1" />
          </div>
          <div>
            <img src={image2} alt="parent-meeting-2" />
          </div>
          <div>
            <img src={image3} alt="parent-meeting-3" />
          </div>
          <div>
            <img src={image4} alt="parent-meeting-4" />
          </div>
          <div>
            <img src={image5} alt="parent-meeting-5" />
          </div>
          <div>
            <img src={image6} alt="parent-meeting-6" />
          </div>
          <div>
            <img src={image7} alt="parent-meeting-7" />
          </div>
          <div>
            <img src={image8} alt="parent-meeting-8" />
          </div>
          <div>
            <img src={image9} alt="parent-meeting-9" />
          </div>
          <div>
            <img src={image10} alt="parent-meeting-10" />
          </div>
          <div>
            <img src={image11} alt="parent-meeting-11" />
          </div>
          <div>
            <img src={image12} alt="parent-meeting-12" />
          </div>
          <div>
            <img src={image13} alt="parent-meeting-13" />
          </div>
          <div>
            <img src={image14} alt="parent-meeting-14" />
          </div>
          <div>
            <img src={image15} alt="parent-meeting-15" />
          </div>
          <div>
            <img src={image16} alt="parent-meeting-16" />
          </div>
          <div>
            <img src={image17} alt="parent-meeting-17" />
          </div>
          <div>
            <img src={image18} alt="parent-meeting-18" />
          </div>
          <div>
            <img src={image19} alt="parent-meeting-19" />
          </div>
          <div>
            <img src={image20} alt="parent-meeting-20" />
          </div>
          <div>
            <img src={image21} alt="parent-meeting-21" />
          </div>
          <div>
            <img src={image22} alt="parent-meeting-22" />
          </div>
          <div>
            <img src={image23} alt="parent-meeting-23" />
          </div>
          <div>
            <img src={image24} alt="parent-meeting-24" />
          </div>
          <div>
            <img src={image25} alt="parent-meeting-25" />
          </div>
          <div>
            <img src={image26} alt="parent-meeting-26" />
          </div>
          <div>
            <img src={image27} alt="parent-meeting-27" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ParentMeeting;
