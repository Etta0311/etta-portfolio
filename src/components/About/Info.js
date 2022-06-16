import React from "react";
import "./Info.css";
import propic from "../assets/propic.JPG";

const Info = () => {
  return (
    <div className="info-section p-5">
      <div className="row">
        <div className="col text-center">
          <img
            src={propic}
            alt="profile pic"
            className="img"
          />
        </div>
        <div className="info-about col">
          <h2>
            About <span>ETTA</span>
          </h2>
          <p className="info-about-status">
            Etta is a Full-Stack Web Developer who came from Hong Kong. She
            graduated from her aviation degree at UNSW in 2021 and finished Full
            stack Web-developing course from USYD in 2022. Enthusiatics in
            Coding, Bug-fixing & working out projects in teams.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
