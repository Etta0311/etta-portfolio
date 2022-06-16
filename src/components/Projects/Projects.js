import React from "react";
import "./Projects.css";
import crypto from '../assets/CryptoWorld.gif';
import fitmate from '../assets/Fit-Mate.gif';
import WD from '../assets/WeatherDashboard.gif';
import codequiz from '../assets/Code-Quiz.gif';

const Projects = () => {
  return (
    <div className="testimonials">
      <div className="test-carts">
        <img src={crypto} class="img-thumbnail image" alt="Cryptoworld"></img>
        <h3>CryptoWorld</h3>
        <p>1st Project - All-rounded website for Cryptocurrency</p>
        <ul>
          <li>
            <a href="https://etta0311.github.io/CryptoWorld/">
              Website link
            </a>
          </li>
          <li>
            <a href="https://github.com/Etta0311/CryptoWorld">
              Github Code
            </a>
          </li>
        </ul>
      </div>

      <div className="test-carts">
      <img src={fitmate} class="img-thumbnail image" alt="Fit-Mate"></img>
        <h3>Fit-Mate</h3>
        <p>2nd Project - Personal Daily Exercise Tracker</p>
        <ul>
          <li>
            <a href="https://morning-fortress-74236.herokuapp.com/">
              Website link
            </a>
          </li>
          <li>
            <a href="https://github.com/Etta0311/fit-mate">Github Code</a>
          </li>
        </ul>
      </div>

      <div className="test-carts">
      <img src={WD} class="img-thumbnail image" alt="Weather Dashboard"></img>
        <h3>Weather Dashboard</h3>
        <p>API application to check up-to-date weather and forcasts</p>
        <ul>
          <li>
            <a href="https://etta0311.github.io/Weather-Dashboard/">
              Website link
            </a>
          </li>
          <li>
            <a href="https://github.com/Etta0311/Weather-Dashboard">
              Github Code
            </a>
          </li>
        </ul>
      </div>

      <div className="test-carts">
      <img src={codequiz} class="img-thumbnail image" alt="CodeQuiz"></img>
        <h3>Code Quiz</h3>
        <p>Simple Code Quiz testing knowledage for new developers</p>
        <ul>
          <li>
            <a href="https://etta0311.github.io/CodeQuiz/">Website link</a>
          </li>
          <li>
            <a href="https://github.com/Etta0311/CodeQuiz">Github Code</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
