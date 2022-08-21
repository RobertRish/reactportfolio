import React from "react";
import "./about.css";
import ME from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";
import { FaUserNinja } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

       <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div> 

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Web Development Certificate</h5>
              <small>
                Michigan State University <br></br> Full Stack Web Development Coding Boot
                Camp
              </small>
            </article>
            <article className="about__card">
              <FaUserNinja className="about__icon" />
              <h5>Sensei at Code Ninjas</h5>
              <small>
                1+ years work experience. <br></br> Taught children ages 6-13 to code
                their own video games with a curriculum that utilizes Javascript
                and educational games such as Code Combat.
              </small>
            </article>
          </div>

          <p>
            Fullstack web developer seeking to help make engaging and useful web
            applications. Earned a certificate in Full Stack Web Development
            from the Michigan State University Coding Boot Camp. Strengths in
            creativity, clear communication, and building projects from ideation
            to execution.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
