import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <div id="intro" className="intro">
      <img src="/assets/prof.jpg" alt="Profile Picture" />
      <div className="intro-content">
        <h1>
          <span>Mahnoor</span>Junaid
        </h1>
        <p>
          Hi there! I'm a Developer from Islamabad, Pakistan, with a knack for
          coding and problem-solving. Currently studying Computer Science, I'm
          eager to create innovative solutions that make a difference.
        </p>
      </div>
    </div>
  );
};

export default Intro;
