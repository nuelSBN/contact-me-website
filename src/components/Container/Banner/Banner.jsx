import React from "react";
import "./banner.css";

function Banner() {
  return (
    <main>
      <div className="bannerText">
        <h1 className="helloText">
          Hello! <span> I am</span>{" "}
        </h1>
        <h1 className="fullname">IGWENAGU EMMANUEL</h1>
        <small>Front-end web Developer</small>
      </div>
      <div className="bannerImage">
        <img src={window.location.origin + "/emma.png"} alt="" />
      </div>
    </main>
  );
}

export default Banner;
