import React from "react";
import "./ActivityArchive.css";
import { Link } from "react-router-dom";
import thumbnail1 from "../../assets/images/event1_thumbnail.png";
import thumbnail2 from "../../assets/images/event2_thumbnail.png";
import thumbnail3 from "../../assets/images/event3_thumbnail.png";
import thumbnail4 from "../../assets/images/event4_thumbnail.png";
import thumbnail5 from "../../assets/images/event5_thumbnail.png";

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
            <img src={thumbnail2} alt="Activity" />
          </div>
          <div className="activity-info">
            <h2>Equestrian Club Trip</h2>
            <h3>1st Trimester 2024-2025</h3>
            <Link to="/activities-archive/archive/eques-trip">See more</Link>
          </div>
        </div>
        {/* Football Olympics */}
        <div className="activity-card">
          <div className="activity-image">
            <img src={thumbnail3} alt="Activity" />
          </div>
          <div className="activity-info">
            <h2>Football Olympics</h2>
            <h3>1st Trimester 2024-2025</h3>
            <Link to="/activities-archive/archive/football-olympic-1">See more</Link>
          </div>
        </div>
        {/* Cultures Day */}
        <div className="activity-card">
          <div className="activity-image">
            <img src={thumbnail4} alt="Activity" />
          </div>
          <div className="activity-info">
            <h2>Cultural Day</h2>
            <h3>1st Trimester 2024-2025</h3>
            <Link to="/activities-archive/archive/culture-day-1">See more</Link>
          </div>
        </div>
        {/* honoring students */}
        <div className="activity-card">
          <div className="activity-image">
            <img src={thumbnail5} alt="Activity" />
          </div>
          <div className="activity-info">
            <h2>Honoring Students</h2>
            <h3>1st Trimester 2024-2025</h3>
            <Link to="/activities-archive/archive/honoring-students-1">
              See more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityArchive;

// template
{
  /* <div className="activity-card">
  <div className="activity-image">
    <img src={thumbnail1} alt="Activity" />
  </div>
  <div className="activity-info">
    <h2>Football Olympics</h2>
    <h3>1st Trimester 2024-2025</h3>
    <Link>See more</Link>
  </div>
</div>; */
}
