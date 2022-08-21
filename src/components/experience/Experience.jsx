import React from "react";
import "./experience.css";
import {GrMysql} from "react-icons/gr"
import {SiMongodb} from "react-icons/si"
import {SiHtml5} from "react-icons/si"
import {SiCss3} from "react-icons/si"
import {SiJavascript} from "react-icons/si"
import {SiJquery} from "react-icons/si"
import {SiBootstrap} from "react-icons/si"
import {SiReact} from "react-icons/si"
import {SiNodedotjs} from "react-icons/si"
import {SiExpress} from "react-icons/si"

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiHtml5 className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiCss3 className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiJavascript className='experience__details-icon'/>
              <div>
                <h4>JavaScript ES6</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiJquery className='experience__details-icon'/>
              <div>
                <h4>jQuery</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiBootstrap className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiReact className='experience__details-icon'/>
              <div>
                <h4>React</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiNodedotjs className='experience__details-icon'/>
              <div>
                <h4>Node</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiExpress className='experience__details-icon'/>
              <div>
                <h4>Express</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className='experience__details-icon'/>
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className="experience__details">
              <GrMysql className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
