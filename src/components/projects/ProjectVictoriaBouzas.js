import React from 'react';
import './Projects.css';
import VictoriaBouzasImg01 from '../../images/victoria-bouzas-website-01.png';
import VictoriaBouzasImg02 from '../../images/victoria-bouzas-website-02.png';
import VictoriaBouzasImg03 from '../../images/victoria-bouzas-website-03.png';


const about = props => (

  <div className="wrapper-project" id="codhab">
    <div className="full-image-web padding-top-20">
      <img src={VictoriaBouzasImg01} width="80%"></img>
    </div>
    <div className="text-container">
    <p className="bold-paragraph">Awarded 2nd place in nation-wide contest</p>
    </div>
    <div className="text-container">
    <p>CODHAB is a Brazilian public company created with the purpose of developing social housing in the country's capital. Aiming to improve their reputation and credibility, they created a national contest for a new logo.</p>
    </div>
    <div className="full-image-web padding-top-80">
      <img src={VictoriaBouzasImg02} width="100%"></img>
    </div>
    <div className="text-container">
    <p className="bold-paragraph">Concept</p>
    </div>
    <div className="text-container">
    <p>When you don't have a lot of resources and you're granted with a new home, everything in your life changes, giving you the strenght and solid base needed to move forward.</p>
    </div>
    <div className="text-container">
    <p>The symbol is the main element of the brand identity. It was developed in a modular way and identifies, in the most basic way, the four walls that surround our home. The geometric form represents the balance and stability our home provide us while the darker arrows point to the future and indicate the change that will happen in one's life.</p>
    </div>
    <div className="full-image-web-no-shadow padding-top-80 ">
      <img src={VictoriaBouzasImg03} width="100%"></img>
    </div>







  </div>




);

export default about;
