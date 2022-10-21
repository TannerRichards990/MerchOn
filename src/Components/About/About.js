import React from 'react';
import Connor from '../../assets/connor_pic.png';
import ConnorLinked from '../../assets/ConnorLinked.png';
import ConnorGit from '../../assets/ConnorGit.png';
import Emily from '../../assets/emily.png';
import EmilyLinked from '../../assets/EmilyLinked.png';
import EmilyGit from '../../assets/EmilyGit.png';
import Tanner from '../../assets/tanner.png';
import TannerLinked from '../../assets/TannerLinked.png';
import TannerGit from '../../assets/TannerGit.png';
import ThomasLinked from '../../assets/ThomasLinked.png';
import ThomasGit from '../../assets/ThomasGit.png';
import './About.css';

export default function About() {
  return (
    <div className="main-container">
      <div>
        <h1 className="about-title">MerchOn</h1>
      
        <div className="about-text">
          <h2>Meet the Creators:</h2>
        </div>
        <div className="creators">
          <div className="connor">
            <img src= { Connor }></img>
            <h3>Connor McCue</h3>
            <p>Software Engineer</p>
            <p>LinkedIn</p>
            <a href="https://www.linkedin.com/in/connor-mccue/" target="_blank" rel="noreferrer">
              <img src={ ConnorLinked }></img>
            </a>
            <p>GitHub</p>
            <a href="https://github.com/csmccue" target="_blank" rel="noreferrer">
              <img src={ ConnorGit }></img>
            </a>
          </div>

          <div className="emily">
            <img src= { Emily }></img>
            <h3>Emily Pisaygnane</h3>
            <p>Software Engineer</p>
            <p>LinkedIn</p>
            <a href="https://www.linkedin.com/in/emily-pisaygnane/" target="_blank" rel="noreferrer">
              <img src={ EmilyLinked }></img>
            </a>
            <p>GitHub</p>
            <a href="https://github.com/emilypisaygnane" target="_blank" rel="noreferrer">
              <img src={ EmilyGit }></img>
            </a>
          </div>

          <div className="tanner">
            <img src= { Tanner }></img>
            <h3>Tanner Richards</h3>
            <p>Software Developer</p>
            <div className="t-richy">
              <p>LinkedIn</p>
              <a href="https://www.linkedin.com/in/tannerrichards/" target="_blank" rel="noreferrer">
                <img src={ TannerLinked }></img>
              </a>
              <p>GitHub</p>
              <a href="https://github.com/TannerRichards990" target="_blank" rel="noreferrer">
                <img src={ TannerGit }></img>
              </a>
            </div>
          </div>

          <div className="thomas">
            <h3>Thomas P. Jenkins</h3>
            <p>Software Developer</p>
            <p>LinkedIn</p>
            <a href="https://www.linkedin.com/in/thomas-p-jenkins/" target="_blank" rel="noreferrer">
              <img src={ ThomasLinked }></img>
            </a>
            <p>GitHub</p>
            <a href="https://github.com/Thomas-Jenkins" target="_blank" rel="noreferrer">
              <img src={ ThomasGit }></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}