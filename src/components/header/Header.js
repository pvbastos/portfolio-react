import React from 'react';
import './Header.css';
import Logo from '../../images/paulo-bastos-logo.svg';
import { Transition } from 'react-transition-group';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch
} from "react-router-dom";

import { HashLink as Link } from 'react-router-hash-link';



const header = props => (


  <header className="header">

    <nav className="header-main-nav">
      <div className="header-logo">
      <Link
        className="menu-link"
        to="/work"
        // scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
        >
          <img src={Logo} className="logo"/>
        </Link>
      </div>
      <ul>
        <li className="menu-item">
          <Link
            className="menu-link"
            to="/work"
            // scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
            >
            work
            </Link>
        </li>
        <li className="menu-item">
          <Link
            className="menu-link"
            to="/about"
            // scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}

          >
          about
          </Link>
        </li>
        <li className="last-menu-item">
          <Link
            className="menu-link"
            to="/contact"
            // scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
          >
          contact
          </Link>
        </li>
      </ul>
    </nav>
    <div className="hamburger-menu">

    </div>

  </header>

);

export default header;
