import React from 'react';
import './Projects.css';
import VictoriaBouzasImg01 from '../../images/victoria-bouzas-website-01.png';
import VictoriaBouzasImg02 from '../../images/victoria-bouzas-website-02.png';
import VictoriaBouzasImg03 from '../../images/victoria-bouzas-website-03.png';


const about = props => (

  <div className="wrapper-project" id="codhab">
    <div className="full-image-web">
      <img src={VictoriaBouzasImg01}></img>
    </div>
    <div className="text-container">
    <p className="bold-paragraph">Awarded 2nd place in nation-wide contest</p>
    </div>
    <div className="text-container">
    <p>CODHAB is a Brazilian public company created with the purpose of developing social housing in the country's capital. Aiming to improve their reputation and credibility, they created a national contest for a new logo.</p>
    </div>
    <div className="full-image-web padding-top-80">
      <img src={VictoriaBouzasImg02} ></img>
    </div>
    <div className="full-image-web-no-shadow padding-top-80 ">
      <img src={VictoriaBouzasImg03}></img>
    </div>







  </div>




);

export default about;
