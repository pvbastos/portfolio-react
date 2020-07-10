import React from 'react';
import './Work-menu.css';
import LogoZero from '../../images/bux-zero-logo.svg';
import LogoX from '../../images/bux-x-logo.svg';
import LogoCrypto from '../../images/bux-c-logo.svg';
import LogoC4C from '../../images/c4c-logo.svg';
import LogoCodHab from '../../images/codhab-logo.svg';
import LogoRioZoo from '../../images/image-rio-zoo.svg';
import LogoVictoriaBouzas from '../../images/victoria-bouzas-logo.svg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useParams,
  useRouteMatch
} from "react-router-dom";


const workMenu = props => (



  <div className="wrapper" >
    <div className="container" id="work">

        <div className="top-row">


          <div className="work-item animation-fade-in-01">
            <NavLink
            className="work-link"
            to="/projects/bux-zero"
            >
              <img src={LogoZero} className="work-logo"/>
            </NavLink>
          </div>


          <div className="work-item animation-fade-in-02">
            <NavLink
            className="work-link"
            to="/projects/bux-x"

            >

              <img src={LogoX} className="work-logo"/>

            </NavLink>
          </div>

          <div className="work-item animation-fade-in-03">
            <NavLink className="work-link" to="/projects/victoria-bouzas">
              <img src={LogoVictoriaBouzas} className="work-logo"/>
            </NavLink>
          </div>
        </div>
        <div className="bottom-row">
          <div className="work-item animation-fade-in-04">
            <NavLink className="work-link" to="/projects/creatives-for-climate">
              <img src={LogoC4C} className="work-logo"/>
            </NavLink>
          </div>
          <div className="work-item animation-fade-in-05">
            <NavLink className="work-link" to="/projects/riozoo">
              <img src={LogoRioZoo} className="work-logo"/>
            </NavLink>
          </div>
          <div className="work-item animation-fade-in-06">
            <NavLink className="work-link" to="/projects/codhab">
              <img src={LogoCodHab} className="work-logo"/>
            </NavLink>
          </div>
        </div>

    </div>
  </div>


);

export default workMenu;
