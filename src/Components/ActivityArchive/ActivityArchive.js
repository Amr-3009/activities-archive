import React from "react";
import "./ActivityArchive.css";
import { Link } from "react-router-dom";
import thumbnail1 from "../../assets/images/event1_thumbnail.png";

const ActivityArchive = () => {
  return (
    <div className="archive-body">
      <div className="archive-content">
        {/* Parent Meeting */}
        <div className="activity-card">
          <div className="activity-image">
            <img src={thumbnail1} alt="Activity" />
          </div>
          <div className="activity-info">
            <h2>Parent Meeting</h2>
            <h3>1st Trimester 2024-2025</h3>
            <Link to="/activities-archive/archive/parent-meeting-1">
              See more
            </Link>
          </div>
        </div>
        {/* Equestrian Club */}
        <div className="activity-card">
          <div className="activity-image">
            <img src={thumbnail1} alt="Activity" />
          </div>
          <div className="activity-info">
            <h2>Equestrian Club Trip</h2>
            <h3>1st Trimester 2024-2025</h3>
            <Link>See more</Link>
          </div>
        </div>
        {/* Football Olympics */}
        <div className="activity-card">
          <div className="activity-image">
            <img src={thumbnail1} alt="Activity" />
          </div>
          <div className="activity-info">
            <h2>Football Olympics</h2>
            <h3>1st Trimester 2024-2025</h3>
            <Link>See more</Link>
          </div>
        </div>
        {/* Cultures Day */}
        <div className="activity-card">
          <div className="activity-image">
            <img src={thumbnail1} alt="Activity" />
          </div>
          <div className="activity-info">
            <h2>Cultural Day</h2>
            <h3>1st Trimester 2024-2025</h3>
            <Link>See more</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityArchive;
