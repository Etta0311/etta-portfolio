import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <pre className="anime">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(1500)
              .typeString(
                `const greeting = () => {
let name = "Etta Ho"; 
innovativeSoftwareEngineer();
};

Console.log(Nice to meet you);
letsknowaboutme();`
              )
              .pauseFor(1000)
              .start();
          }}
        />
      </pre>
    </div>
  );
};

export default Home;
