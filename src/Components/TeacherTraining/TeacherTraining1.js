import React from "react";
import "./teachertraining.css";
import { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// Import images
import image1 from "../../assets/images/teacher-training/1.jpg";
import image2 from "../../assets/images/teacher-training/2.jpg";
import image3 from "../../assets/images/teacher-training/3.jpg";
import image4 from "../../assets/images/teacher-training/4.jpg";
import image5 from "../../assets/images/teacher-training/5.jpg";
import video1 from "../../assets/videos/teacher-training/1.mp4";
import video2 from "../../assets/videos/teacher-training/2.mp4";
import video3 from "../../assets/videos/teacher-training/3.mp4";

const TeacherTraining1 = () => {
  return (
    <div className="teacher-training-container">
      <div className="carousel-container">
        <Carousel infiniteLoop={true} showThumbs={false} showStatus={false}>
          <div>
            <img src={image1} alt="teacher-training-1" />
          </div>
          <div>
            <img src={image2} alt="teacher-training-2" />
          </div>
          <div>
            <img src={image3} alt="teacher-training-3" />
          </div>
          <div>
            <img src={image4} alt="teacher-training-4" />
          </div>
          <div>
            <img src={image5} alt="teacher-training-5" />
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
        </Carousel>
      </div>
    </div>
  );
};

export default TeacherTraining1;
