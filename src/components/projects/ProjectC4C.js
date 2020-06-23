import React from 'react';
import './Projects.css';
import C4c from '../../images/c4c-video.mp4';




const about = props => (

  <div className="wrapper-project" id="bux-zero">
    <div className="full-image">
      <video src={C4c} width="100%" controls autoPlay></video>
    </div>
    <div className="subtitle">
      <p>What is Creatives for Climate?</p>
    </div>
    <div className="text-container">
    <p><a href={"https://creativesforclimate.co/"} target="_blank">Creatives for Climate</a> is a non-profit initiative born out of the first Creatives for Climate summit held in September 2019, where 150 of Amsterdam’s brightest minds joined Extinction Rebellion and other brand activists to talk about the climate emergency - and what the creative and ad industry's response could and should be. </p>
    </div>
    <div className="text-container">
    <p>In collaboration with <a href={"https://www.linkedin.com/in/milesrouse/"} target="_blank">Miles Rouse</a> and <a href={"https://www.linkedin.com/in/alex-heringa-258b2412b/"} target="_blank">Alex Heringa</a>.</p>
    </div>







  </div>


);

export default about;
