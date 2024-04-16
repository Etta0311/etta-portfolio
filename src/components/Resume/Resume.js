import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="container py-5">
      <div class="row justify-content-center pb-3">
        <a
          href="https://drive.google.com/file/d/1XFwWLksQYw1eAAf84MANI8g_GPoPWqdO/view?usp=drive_link"
          download
          className="btn button"
          role="button"
        >
          <i class="fa fa-file-pdf-o p-1"></i>
          Resume
        </a>
      </div>
      <h1 className="text-center">EDUCATION</h1>
      <div className="flex-column">
        <div class="container resume-content">
          <div class="row justify-content-center my-3">
            <div class="col-5 text-center eff">
              <p>
                Certificate in Full Stack Web Development<br></br>
                University of Sydney | Sydney NSW
              </p>
            </div>
            <div class="col-5 text-center eff">
              <p>
                Bachelor of Aviation Management<br></br>
                University of New South Wales | Sydney NSW
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center">SKILLS</h1>
      <div className="flex-column">
        <div class="container resume-content">
          <div class="row justify-content-center  my-3">
            <div class="col-5 text-center eff">
              <p>HTML</p>
              <p>CSS</p>
              <p>Javascript</p>
              <p>Scala / Slick</p>
              <p>Express.js</p>
              <p>Node.js</p>
              <p>Sequelize</p>
              <p>jQuery</p>
              <p>Handlebars</p>
            </div>
            <div class="col-5 text-center eff">
              <p>React JS</p>
              <p>Server-side Developments</p>
              <p>MySQL & MongoDB Databases</p>
              <p>Bootstrap & Tailwind CSS</p>
              <p>Data Structure & Algorithm</p>
              <p>API Interaction</p>
              <p>PWA techniques</p>
              <p>Responsive UX & UI design</p>
              <p>GitHub and GitLab applications</p>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Resume;
