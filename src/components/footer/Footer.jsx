import React from 'react'
import './footer.css'
import {SiLinkedin} from 'react-icons/si'
import {GrGithub} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
      <a href="/#" className="footer__logo">Robert Rish</a>

      <ul className='permalinks'>
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/robert-rish-b0b901132/"><SiLinkedin/></a>
        <a href="https://github.com/RobertRish"><GrGithub/></a>
      </div>

      <div className="footer_-copyright">
        <small>&copy; Robert Rish.  All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer