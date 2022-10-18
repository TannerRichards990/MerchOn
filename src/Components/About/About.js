import React from 'react';
import './About.css';
import ConnorLinked from '../../assets/ConnorLinked.png';
import ConnorGit from '../../assets/ConnorGit.png';

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
            <img src={ConnorLinked}></img>
          </a>
          <p>GitHub</p>
          <a href="https://github.com/csmccue" target="_blank" rel="noreferrer">
            <img src={ConnorGit}></img>
          </a>

          <h3>Emily Pisaygnane</h3>
          <p>LinkedIn</p>
          <p>GitHub</p>

          <h3>Tanner Richards</h3>
          <p>LinkedIn</p>
          <p>GitHub</p>

          <h3>Thomas P. Jenkins</h3>
          <p>LinkedIn</p>
          <p>GitHub</p>
        </div>
      </div>
    </div>
  );
}