import React from 'react';
import './About.css';
import ConnorLinked from '../../assets/ConnorLinked.png';
import ConnorGit from '../../assets/ConnorGit.png';
import EmilyLinked from '../../assets/EmilyLinked.png';
import EmilyGit from '../../assets/EmilyGit.png';
import TannerLinked from '../../TannerLinked.png';
import TannerGit from '../../TannerGit.png';

export default function About() {
  return (
    <div className="main-container">
      <div className="about-page">
        <h1>MerchOn</h1>
      
        <div className="about-text">
          <h2>Meet the Founders:</h2>

          <h3>Connor McCue</h3>
          <p>LinkedIn</p>
          <a href="https://www.linkedin.com/in/connor-mccue/" target="_blank" rel="noreferrer">
            <img src={ ConnorLinked }></img>
          </a>
          <p>GitHub</p>
          <a href="https://github.com/csmccue" target="_blank" rel="noreferrer">
            <img src={ ConnorGit }></img>
          </a>

          <h3>Emily Pisaygnane</h3>
          <p>LinkedIn</p>
          <a href="https://www.linkedin.com/in/emily-pisaygnane/" target="_blank" rel="noreferrer">
            <img src={ EmilyLinked }></img>
          </a>
          <p>GitHub</p>
          <a href="https://github.com/emilypisaygnane" target="_blank" rel="noreferrer">
            <img src={ EmilyGit }></img>
          </a>

          <h3>Tanner Richards</h3>
          <p>LinkedIn</p>
          <a href="https://www.linkedin.com/in/tannerrichards/" target="_blank" rel="noreferrer">
            <img src={ TannerLinked }></img>
          </a>
          <p>GitHub</p>
          <a href="https://github.com/TannerRichards990" target="_blank" rel="noreferrer">
            <img src={ TannerGit }></img>
          </a>

          <h3>Thomas P. Jenkins</h3>
          <p>LinkedIn</p>
          <a href=""target="_blank" rel="noreferrer">
            <img src={}></img>
          </a>
          <p>GitHub</p>
          <a href=""target="_blank" rel="noreferrer">
            <img src={}></img>
          </a>
        </div>
      </div>
    </div>
  );
}