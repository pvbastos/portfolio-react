import React from 'react';
import './Header.css';
import { Transition } from 'react-transition-group';
import { ReactComponent as Hamburger } from '../../images/hamburger-icon.svg';
import { useScrollPosition } from "../../hooks/useScrollPosition"


import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch
} from "react-router-dom";

import { HashLink as Link } from 'react-router-hash-link';



const header = ({ open, setOpen, openMenu, closeMenu }) => (

  

  <header className="header">

    <nav className="header-main-nav">
      <div className="header-logo">
      <Link className="menu-link" to="/">
          <div className="header-logo">
          </div>
        </Link>
      </div>
      <div className="hamburger-icon" open={open} onClick={openMenu}><Hamburger />
</div>
      <ul>
        <li className="menu-item">
          <Link
            className="menu-link"
            to="/"
            >
            work
            </Link>
        </li>
        <li className="menu-item">
          <Link
            className="menu-link"
            to="/about"
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
