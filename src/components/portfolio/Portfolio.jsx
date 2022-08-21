import React from "react";
import "./portfolio.css";
import SNACKR from "../../assets/SNACKR.png";
import SaySomething from "../../assets/SaySomething.png";
import EmployeeTracker from "../../assets/employee-tracker.png";
import ReadMeGenerator from "../../assets/readme.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={SNACKR} alt="SNACKR home page" />
          </div>
          <h3>SNACKR</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/nsvoboda/SNACKR" className="btn">
              GitHub
            </a>
            <a
              href="https://nsvoboda.github.io/SNACKR/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Deployed Project
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={SaySomething} alt="SaySomething home page" />
          </div>
          <h3>SaySomething</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/kazichaska/saysomething"
              className="btn"
            >
              GitHub
            </a>
            <a
              href="https://afternoon-island-61573.herokuapp.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Deployed Project
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={EmployeeTracker} alt="youtube demo" />
          </div>
          <h3>Employee Tracker (MySQL)</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/RobertRish/Employee-Tracker"
              className="btn"
            >
              GitHub
            </a>
            <a
              href="https://www.youtube.com/watch?v=9nrdryTMFgQ&feature=youtu.be"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Deployed Project
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ReadMeGenerator} alt="youtube demo" />
          </div>
          <h3>README.md Generator (Node)</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/RobertRish/Employee-Tracker"
              className="btn"
            >
              GitHub
            </a>
            <a
              href="https://www.youtube.com/watch?v=brNjV9ilbuM&ab_channel=RobbyRish"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Deployed Project
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
