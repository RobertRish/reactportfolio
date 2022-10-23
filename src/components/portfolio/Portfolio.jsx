import React from "react";
import "./portfolio.css";
import SNACKR from "../../assets/SNACKR.png";
import SaySomething from "../../assets/SaySomething.png";
import EmployeeTracker from "../../assets/employee-tracker.png";
import ReadMeGenerator from "../../assets/readme.png";
import EtchASketch from "../../assets/etch.png";
import Quiz from "../../assets/quiz.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={EtchASketch} alt="Etch-a-Sketch application page" />
          </div>
          <h3>Etch-a-Sketch</h3>
          <p className="tech-used">(HTML, CSS, JavaScript, Google Fonts API)</p>
          <p>
            A sketch pad application that allows users to choose the level of
            pixelation thereof. 
          </p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/RobertRish/etch-a-sketch" className="btn">
              GitHub
            </a>
            <a
              href="https://robertrish.github.io/etch-a-sketch/"
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
            <img src={Quiz} alt="SaySomething home page" />
          </div>
          <h3>Multiple Choice Quiz</h3>
          <p className="tech-used">
            (HTML, CSS, JavaScript, Google Fonts API)
          </p>
          <p>A quiz application that utilizes client-side storage to save quiz scores.</p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/RobertRish/quiz-js"
              className="btn"
            >
              GitHub
            </a>
            <a
              href="https://robertrish.github.io/quiz-js/"
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
            <img src={SNACKR} alt="SNACKR home page" />
          </div>
          <h3>SNACKR</h3>
          <p className="tech-used">(HTML, CSS, JavaScript, Server-side API)</p>
          <p>
            An application that allows users to search for dishes from a recipe
            API and then drag and drop recipe cards into a weekly meal planner.
          </p>
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
          <p className="tech-used">
            (HTML, CSS, JavaScript, Server-side API, Node, Express, SQL,
            Sequelize (ORM), Handlebars.js)
          </p>
          <p>A social media application.</p>
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
          <h3>Employee Tracker</h3>
          <p className="tech-used">(Node, Inquirer.js, SQL, mySQL)</p>
          <p>
            A CLI application that allows users to manage a company database.
          </p>
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
          <h3>README.md Generator</h3>
          <p className="tech-used">(Node, Inquirer.js)</p>
          <p>
            An application that generates professional quality README.md files
            for your GitHub projects using user inputs in the command line
          </p>
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
