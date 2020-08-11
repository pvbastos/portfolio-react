import React from 'react';
import './Projects.css';
import VictoriaBouzasImg01 from '../../images/victoria-bouzas-website-01.png';
import VictoriaBouzasImg02 from '../../images/victoria-bouzas-website-02.png';
import VictoriaBouzasImg03 from '../../images/victoria-bouzas-website-03.png';
import VictoriaBouzasImg04 from '../../images/victoria-bouzas-website-04.png';

import VictoriaBouzasLogoExtended from '../../images/victoria-bouzas-logo-extended.svg';



const about = props => (

  <div className="wrapper-project" id="codhab">



  <div className="full-image-empty">
    <img src={VictoriaBouzasLogoExtended}></img>
  </div>

    <div className="text-container padding-top-80">
      <p>Victoria Bouzas is a seasoned fashion photographer born in Argentina and currently living in Amsterdam. For this client, I was responsible for designing her logo and designing and developing her website using React JS.</p>
    </div>

    <div className="full-image-web padding-top-80">
      <img src={VictoriaBouzasImg01}></img>
    </div>

    <div className="text-container padding-top-80">
      <div className="website"><a href="http://www.vicbouzas.com" target="_blank">www.vicbouzas.com</a></div>
    </div>

    <div className="full-image-web padding-top-80">
      <img src={VictoriaBouzasImg02} ></img>
    </div>
    <div className="text-container padding-top-80">
    <p></p>
    </div>
    <div className="full-image-web-no-shadow ">
      <img src={VictoriaBouzasImg03}></img>
    </div>







  </div>




);

export default about;
