import React from 'react';
import './Menu.css';
import { ReactComponent as CloseButton } from '../../images/close-icon.svg';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';



const menu = ({ open, setOpen, openMenu, closeMenu }) => (


    <div className={open ? "wrapper-menu-open" : "wrapper-menu-closed"} open={open}>
      <div className="close-button" onClick={closeMenu}><CloseButton /></div>
      <div className="menu-mobile-content">
        <div className="menu-mobile-items">
          <Link className="menu-link" onClick={closeMenu} to="/"><p>work</p></Link>
          <Link className="menu-link" onClick={closeMenu} to="/about"><p>about</p></Link>
          <Link className="menu-link" onClick={closeMenu} to="/contact"><p>contact</p></Link>
        </div>
      </div>
    </div>


);

export default menu;
