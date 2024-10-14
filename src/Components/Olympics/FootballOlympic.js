import React from "react";
import "./olympics.css";
import { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// Import images
import image1 from "../../assets/images/football-olympics/1.jpg";
import image2 from "../../assets/images/football-olympics/2.jpg";
import image3 from "../../assets/images/football-olympics/3.jpg";
import image4 from "../../assets/images/football-olympics/4.jpg";
import image5 from "../../assets/images/football-olympics/5.jpg";
import image6 from "../../assets/images/football-olympics/6.jpg";
import image7 from "../../assets/images/football-olympics/7.jpg";
import image8 from "../../assets/images/football-olympics/8.jpg";
import image9 from "../../assets/images/football-olympics/9.jpg";
import image10 from "../../assets/images/football-olympics/10.jpg";
import image11 from "../../assets/images/football-olympics/11.jpg";
import image12 from "../../assets/images/football-olympics/12.jpg";
import image13 from "../../assets/images/football-olympics/13.jpg";
import image14 from "../../assets/images/football-olympics/14.jpg";
import image15 from "../../assets/images/football-olympics/15.jpg";
import image16 from "../../assets/images/football-olympics/16.jpg";
import image17 from "../../assets/images/football-olympics/17.jpg";
import image18 from "../../assets/images/football-olympics/18.jpg";
import image19 from "../../assets/images/football-olympics/19.jpg";
import image20 from "../../assets/images/football-olympics/20.jpg";
import image21 from "../../assets/images/football-olympics/21.jpg";
import image22 from "../../assets/images/football-olympics/22.jpg";
import image23 from "../../assets/images/football-olympics/23.jpg";
import video1 from "../../assets/videos/football-olympics/1.mp4";
import video2 from "../../assets/videos/football-olympics/2.mp4";
import video3 from "../../assets/videos/football-olympics/3.mp4";
import video4 from "../../assets/videos/football-olympics/4.mp4";
import video5 from "../../assets/videos/football-olympics/5.mp4";
import video6 from "../../assets/videos/football-olympics/6.mp4";
import video7 from "../../assets/videos/football-olympics/7.mp4";
import video8 from "../../assets/videos/football-olympics/8.mp4";
import video9 from "../../assets/videos/football-olympics/9.mp4";
import video10 from "../../assets/videos/football-olympics/10.mp4";
import video11 from "../../assets/videos/football-olympics/11.mp4";
import video12 from "../../assets/videos/football-olympics/12.mp4";
import video13 from "../../assets/videos/football-olympics/13.mp4";
import video14 from "../../assets/videos/football-olympics/14.mp4";
import video15 from "../../assets/videos/football-olympics/15.mp4";
import video16 from "../../assets/videos/football-olympics/16.mp4";
import video17 from "../../assets/videos/football-olympics/17.mp4";
import video18 from "../../assets/videos/football-olympics/18.mp4";
import video19 from "../../assets/videos/football-olympics/19.mp4";
import video20 from "../../assets/videos/football-olympics/20.mp4";
import video21 from "../../assets/videos/football-olympics/21.mp4";
import video22 from "../../assets/videos/football-olympics/22.mp4";
import video23 from "../../assets/videos/football-olympics/23.mp4";
import video24 from "../../assets/videos/football-olympics/24.mp4";
import video25 from "../../assets/videos/football-olympics/25.mp4";
import video26 from "../../assets/videos/football-olympics/26.mp4";
import video27 from "../../assets/videos/football-olympics/27.mp4";
import video28 from "../../assets/videos/football-olympics/28.mp4";
import video29 from "../../assets/videos/football-olympics/29.mp4";
import video30 from "../../assets/videos/football-olympics/30.mp4";

const FootballOlympic = () => {
  return (
    <div className="olympics-container">
      <div className="carousel-container">
        <Carousel infiniteLoop={true} showThumbs={false} showStatus={false}>
          <div>
            <img src={image1} alt="football-olympics-1" />
          </div>
          <div>
            <img src={image2} alt="football-olympics-2" />
          </div>
          <div>
            <img src={image3} alt="football-olympics-3" />
          </div>
          <div>
            <img src={image4} alt="football-olympics-4" />
          </div>
          <div>
            <img src={image5} alt="football-olympics-5" />
          </div>
          <div>
            <img src={image6} alt="football-olympics-6" />
          </div>
          <div>
            <img src={image7} alt="football-olympics-7" />
          </div>
          <div>
            <img src={image8} alt="football-olympics-8" />
          </div>
          <div>
            <img src={image9} alt="football-olympics-9" />
          </div>
          <div>
            <img src={image10} alt="football-olympics-10" />
          </div>
          <div>
            <img src={image11} alt="football-olympics-11" />
          </div>
          <div>
            <img src={image12} alt="football-olympics-12" />
          </div>
          <div>
            <img src={image13} alt="football-olympics-13" />
          </div>
          <div>
            <img src={image14} alt="football-olympics-14" />
          </div>
          <div>
            <img src={image15} alt="football-olympics-15" />
          </div>
          <div>
            <img src={image16} alt="football-olympics-16" />
          </div>
          <div>
            <img src={image17} alt="football-olympics-17" />
          </div>
          <div>
            <img src={image18} alt="football-olympics-18" />
          </div>
          <div>
            <img src={image19} alt="football-olympics-19" />
          </div>
          <div>
            <img src={image20} alt="football-olympics-20" />
          </div>
          <div>
            <img src={image21} alt="football-olympics-21" />
          </div>
          <div>
            <img src={image22} alt="football-olympics-22" />
          </div>
          <div>
            <img src={image23} alt="football-olympics-23" />
          </div>
          <div>
            <video controls>
              <source src={video1} type="video/mp4" />
            </video>
          </div>
          <div>
            <video controls>
              <source src={video2} type="video/mp4" />
            </video>
          </div>
          <div>
            <video controls>
              <source src={video3} type="video/mp4" />
            </video>
          </div>
          <div>
            <video controls>
              <source src={video4} type="video/mp4" />
            </video>
          </div>
          <div>
            <video controls>
              <source src={video5} type="video/mp4" />
            </video>
          </div>
          <div>
            <video controls>
              <source src={video6} type="video/mp4" />
            </video>
          </div>
          <div>
            <video controls>
              <source src={video7} type="video/mp4" />
            </video>
          </div>
          <div>
            <video controls>
              <source src={video8} type="video/mp4" />
            </video>
          </div>
          <div>
            <video controls>
              <source src={video9} type="video/mp4" />
            </video>
          </div>
          <div>
            <video controls>
              <source src={video10} type="video/mp4" />
            </video>
          </div>
          <div>
            <video controls>
              <source src={video11} type="video/mp4" />
            </video>
          </div>
          <div>
            <video controls>
              <source src={video12} type="video/mp4" />
            </video>
          </div>
          <div>
            <video controls>
              <source src={video13} type="video/mp4" />
            </video>
          </div>
          <div>
            <video controls>
              <source src={video14} type="video/mp4" />
            </video>
          </div>
          <div>
            <video controls>
              <source src={video15} type="video/mp4" />
            </video>
          </div>
          <div>
            <video controls>
              <source src={video16} type="video/mp4" />
            </video>
          </div>
          <div>
            <video controls>
              <source src={video17} type="video/mp4" />
            </video>
          </div>
          <div>
            <video controls>
              <source src={video18} type="video/mp4" />
            </video>
          </div>
          <div>
            <video controls>
              <source src={video19} type="video/mp4" />
            </video>
          </div>
          <div>
            <video controls>
              <source src={video20} type="video/mp4" />
            </video>
          </div>
          <div>
            <video controls>
              <source src={video21} type="video/mp4" />
            </video>
          </div>
          <div>
            <video controls>
              <source src={video22} type="video/mp4" />
            </video>
          </div>
          <div>
            <video controls>
              <source src={video23} type="video/mp4" />
            </video>
          </div>
          <div>
            <video controls>
              <source src={video24} type="video/mp4" />
            </video>
          </div>
          <div>
            <video controls>
              <source src={video25} type="video/mp4" />
            </video>
          </div>
          <div>
            <video controls>
              <source src={video26} type="video/mp4" />
            </video>
          </div>
          <div>
            <video controls>
              <source src={video27} type="video/mp4" />
            </video>
          </div>
          <div>
            <video controls>
              <source src={video28} type="video/mp4" />
            </video>
          </div>
          <div>
            <video controls>
              <source src={video29} type="video/mp4" />
            </video>
          </div>
          <div>
            <video controls>
              <source src={video30} type="video/mp4" />
            </video>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default FootballOlympic;
