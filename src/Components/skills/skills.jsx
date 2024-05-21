import React from "react";
import "./skills.css";

const skillset = [
  { name: "Flutter", level: "50%" },
  { name: "Solidity", level: "30%" },
  { name: "React JS", level: "40%" },
  { name: "Node JS", level: "70%" },
  { name: ".Net Core", level: "20%" },
];

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <div className="skills-title">
        <h1>
          <span>Sk</span>ills
        </h1>
      </div>
      <div className="skills-container">
        {skillset.map((skill, index) => (
          <div className="skill" key={index}>
            <p>{skill.name}</p>
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="spacer"></div>
    </div>
  );
};

export default Skills;
