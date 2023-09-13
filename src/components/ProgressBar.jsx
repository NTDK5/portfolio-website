import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProgressBar = ({ title, percentage }) => {
  const progressOffset = 400 - (400 * percentage) / 100;
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="container"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="300"
      data-aos-offset="50"
    >
      <div className="card">
        <div className="box">
          <div className="percent">
            <svg>
              <circle cx="45" cy="45" r="45"></circle>
              <circle
                cx="45"
                cy="45"
                r="45"
                style={{ strokeDashoffset: progressOffset }}
              ></circle>
            </svg>
            <div className="num">
              <h2>
                {percentage}
                <span>%</span>
              </h2>
            </div>
          </div>
          <h2 className="text">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
