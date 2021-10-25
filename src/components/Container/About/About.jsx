import React from "react";
import "./about.css";

function About() {
  return (
    <div className="aboutMeContainer">
      <div className="aboutHeading">
        <h3>About Me</h3>
      </div>
      <div className="aboutBody">
        <div className="aboutImage">
          <img src={window.location.origin + "/emmaTwo.png"} alt="" />
        </div>
        <div className="aboutText">
          <blockquote className="firstQoute">
            Highly Driven Individual, Exceptionally Well-Equipped Information
            Technologist With Sophisticated Technical Skills And A Passion.
            Adept At Maintaining Focus And Exceptional With Hardworking Nature
            Along With Good Communication Skills, Able To Communicate And
            Utilize The Knowledge Already Gained In A Responsible And Proper
            Manner.
          </blockquote>
          <blockquote className="secondQoute">
            Looking For Opportunities To Build A Career That Would Help Me
            Contribute To Making Nigeria A Strong IT Hub In Africa And The World
            At Large Thereby Achieving Greater Excellence In The
            Softwareindustry Resulting In Greater Organizational Productivity.
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default About;
