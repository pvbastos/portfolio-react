import React, {useState} from 'react';
import './Header.css';
import './MenuHighlight.css';
import { Transition } from 'react-transition-group';
import { ReactComponent as Hamburger } from '../../images/hamburger-icon.svg';
import { useScrollPosition } from "../../hooks/useScrollPosition"
import useDocumentScrollThrottled from "../../hooks/useDocumentScrollThrottled"


import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useParams,
  useRouteMatch
} from "react-router-dom";


function Header({ open, setOpen, openMenu, closeMenu }) {

  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 300;
  const TIMEOUT_DELAY = 10;

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const shadowStyle = shouldShowShadow ? 'shadow' : '';
  const hiddenStyle = shouldHideHeader ? 'hidden' : '';

  return(



  <header className={`header ${shadowStyle} ${hiddenStyle}`}>

    <nav className="header-main-nav">
      <div className="header-logo">
      <NavLink className="menu-link" to="/">
          <div className="header-logo">
          </div>
        </NavLink>
      </div>

      <div>
        <ul>
          <li className="menu-item">
            <NavLink
              className="menu-link"
              activeClassName="underline"
              to="/work"
              >
              work
              </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              className="menu-link"
              activeClassName="underline"
              to="/about"
            >
            about
            </NavLink>
          </li>
          <li className="last-menu-item">
            <NavLink
              className="menu-link"
              activeClassName="underline"
              to="/contact"
              // scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
            >
            contact
            </NavLink>
          </li>
        </ul>
        <span className="target">
        </span>
      </div>
      <div className="hamburger-icon" open={open} onClick={openMenu}><Hamburger />
      </div>
    </nav>
    <div className="hamburger-menu">

    </div>

  </header>

)};

export default Header;
