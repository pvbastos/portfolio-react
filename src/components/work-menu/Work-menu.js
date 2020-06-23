import React from 'react';
import './Work-menu.css';
import LogoZero from '../../images/bux-zero-logo.svg';
import LogoX from '../../images/bux-x-logo.svg';
import LogoCrypto from '../../images/bux-c-logo.svg';
import LogoC4C from '../../images/c4c-logo.svg';
import LogoCodHab from '../../images/codhab-logo.svg';
import LogoRioZoo from '../../images/image-rio-zoo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch
} from "react-router-dom";

import { HashLink as Link } from 'react-router-hash-link';

const workMenu = props => (



  <div className="wrapper" >
    <div className="container" id="work">

        <div className="top-row">


          <div className="work-item animation-fade-in-01">
            <Link
            className="work-link"
            to="/projects/bux-zero"
            // scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
            >

              <img src={LogoZero} className="logo"/>

            </Link>
          </div>


          <div className="work-item animation-fade-in-02">
            <Link
            className="work-link"
            to="/projects/bux-x"

            >

              <img src={LogoX} className="logo"/>

            </Link>
          </div>

          <div className="work-item animation-fade-in-03">
            <Link className="work-link" to="/projects/bux-crypto">
              <img src={LogoCrypto} className="work-logo"/>
            </Link>
          </div>
        </div>
        <div className="bottom-row">
          <div className="work-item animation-fade-in-04">
            <Link className="work-link" to="/projects/creatives-for-climate">
              <img src={LogoC4C} className="work-logo"/>
            </Link>
          </div>
          <div className="work-item animation-fade-in-05">
            <Link className="work-link" to="/projects/riozoo">
              <img src={LogoRioZoo} className="work-logo"/>
            </Link>
          </div>
          <div className="work-item animation-fade-in-06">
            <Link className="work-link" to="/projects/codhab">
              <img src={LogoCodHab} className="work-logo"/>
            </Link>
          </div>
        </div>

    </div>
  </div>


);

export default workMenu;
