import React from "react";
import "./skills.css";
import ProgressBar from "../../ProgressBar";

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills-container">
        <div className="skills-title">
          <h2>Skills</h2>
          <p>
            As a seasoned web developer, I possess a diverse range of skills
            that empower me to deliver exceptional results. I thrive on the
            challenges presented by the ever-evolving digital landscape and
            continuously strive for excellence in every project I undertake.
          </p>
        </div>
        <div className="skills-list">
          <ProgressBar title="Html" percentage={90} />
          <ProgressBar title="css" percentage={90} />
          <ProgressBar title="javascript" percentage={90} />
          <ProgressBar title="React" percentage={90} />
          <ProgressBar title="Nextjs" percentage={85} />
          <ProgressBar title="Node" percentage={80} />
          <ProgressBar title="Mern Stack" percentage={75} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
