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
import Thomas from '../../assets/thomas2.png';
import ThomasLinked from '../../assets/ThomasLinked.png';
import ThomasGit from '../../assets/ThomasGit.png';
import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <div>
        <h1 className="about-title">MerchOn</h1>
      
        <div className="about-text">
          <h2>Meet the Creators:</h2>
        </div>
        <div className="creators">
          <div className="connor">
            <img className="con-img" src= { Connor }></img>
            <h3>Connor McCue</h3>
            <p>Software Engineer</p>
            <div className="socials">
              <div className="con-linked">
                <p>LinkedIn</p>
              </div>
              <div className="con-git">
                <p>GitHub</p>
              </div>
            </div>
            <a href="https://www.linkedin.com/in/connor-mccue/" target="_blank" rel="noreferrer">
              <img className="qr" src={ ConnorLinked }></img>
            </a>
            <a href="https://github.com/csmccue" target="_blank" rel="noreferrer">
              <img className="qr" src={ ConnorGit }></img>
            </a>
          </div>

          <div className="emily">
            <img className="em-img" src= { Emily }></img>
            <h3>Emily Pisaygnane</h3>
            <p>Software Engineer</p>
            <div className="socials">
              <div className="con-linked">
                <p>LinkedIn</p>
              </div>
              <div className="em-git">
                <p>GitHub</p>
              </div>
            </div>
            <a href="https://www.linkedin.com/in/emily-pisaygnane/" target="_blank" rel="noreferrer">
              <img className="qr" src={ EmilyLinked }></img>
            </a>
            <a href="https://github.com/emilypisaygnane" target="_blank" rel="noreferrer">
              <img className="qr" src={ EmilyGit }></img>
            </a>
          </div>

          <div className="tanner">
            <img className="tan-img" src= { Tanner }></img>
            <h3>Tanner Richards</h3>
            <p>Software Developer</p>
            <div className="socials">
              <div className="tan-linked">
                <p>LinkedIn</p>
              </div>
              <div className="tan-git">
                <p>GitHub</p>
              </div>
            </div>
            <a href="https://www.linkedin.com/in/tannerrichards/" target="_blank" rel="noreferrer">
              <img className="qr" src={ TannerLinked }></img>
            </a>
            <a href="https://github.com/TannerRichards990" target="_blank" rel="noreferrer">
              <img className="qr" src={ TannerGit }></img>
            </a>
          </div>

          <div className="thomas">
            <img className="tom-img" src={ Thomas }></img>
            <h3>Thomas P. Jenkins</h3>
            <p>Software Developer</p>
            <div className="socials">
              <div className="tom-linked">
                <p>LinkedIn</p>
              </div>
              <div className="tom-git">
                <p>GitHub</p>
              </div>
            </div>
            <a href="https://www.linkedin.com/in/thomas-p-jenkins/" target="_blank" rel="noreferrer">
              <img className="qr" src={ ThomasLinked }></img>
            </a>
            <a href="https://github.com/Thomas-Jenkins" target="_blank" rel="noreferrer">
              <img className="qr" src={ ThomasGit }></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}