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
          <ProgressBar title="Html" percentage={94} />
          <ProgressBar title="css" percentage={95} />
          <ProgressBar title="javascript" percentage={98} />
          <ProgressBar title="React" percentage={94} />
          <ProgressBar title="Nextjs" percentage={85} />
          <ProgressBar title="Node" percentage={89} />
          <ProgressBar title="Mern Stack" percentage={85} />
          <ProgressBar title="Python" percentage={89} />
          <ProgressBar title="PostgreSQL" percentage={92} />
          <ProgressBar title="Typescript" percentage={88} />
          <ProgressBar title="Flutter" percentage={82} />
          <ProgressBar title="Figma" percentage={90} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
