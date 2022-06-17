import React from "react";
import "./Footer.css";

// Font awesome names
const icons = [
  {
    // GitHub
    name: "fab fa-github",
    link: "https://github.com/Etta0311",
  },
  {
    // LinkedIm
    name: "fab fa-linkedin",
    link: "https://www.linkedin.com/in/etta-h-758178220/",
  },
  {
    name: "fab fa-instagram",
    link: "https://www.instagram.com/simplyhcy/",
  },
];

const Footer = () => {
  return (
    <section className="container">
      <div className="row mb-5">
        <div className="col-12 footerContainer">
          <h6 className=" d-flex justify-content-center">
            &copy; Etta Ho 2022
          </h6>
          <div className="d-flex justify-content-center">
            <div>
              {icons.map((i) => (
                <a
                  href={i.link}
                  key={i.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icons"
                >
                  <i className={i.name}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
