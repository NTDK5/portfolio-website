import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProgressBar = ({ title, percentage }) => {
  const [size, setSize] = useState(100); // Default size for the circle
  const radius = size / 2 - 5; // Adjust radius to fit within the circle
  const circumference = 2 * Math.PI * radius;
  const numericPercentage = Math.max(0, Math.min(100, Number(percentage)));
  const progressOffset = circumference - (circumference * numericPercentage) / 100;

  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  }, []);

  useEffect(() => {
    // Adjust circle size dynamically based on screen width
    const handleResize = () => {
      if (window.innerWidth <= 480) setSize(70); // Small screens
      else if (window.innerWidth <= 768) setSize(80); // Medium screens
      else setSize(100); // Default size
    };

    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize); // Update size on resize
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="progress-bar-container"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="300"
      data-aos-offset="50"
    >
      <div className="progress-bar-card">
        <div className="progress-bar-box">
          <div className="progress-bar-percent" style={{ width: size, height: size }}>
            <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke="#f0f0f0"
                strokeWidth="10"
                fill="none"
              />
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke="#3498db"
                strokeWidth="10"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={progressOffset}
                strokeLinecap="round"
                style={{
                  transition: "stroke-dashoffset 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              />
            </svg>
            <div className="progress-bar-num">
              <h2>
                {numericPercentage}
                <span>%</span>
              </h2>
            </div>
          </div>
          <h2 className="progress-bar-text">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
