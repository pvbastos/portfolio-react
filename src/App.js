import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Work from './components/work-menu/Work-menu';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import ProjectBUXZero from './components/projects/ProjectBuxZero';
import ProjectBUXx from './components/projects/ProjectBuxX';
import ProjectC4C from './components/projects/ProjectC4C';
import ProjectCodhab from './components/projects/ProjectCodhab';
import ProjectRioZoo from './components/projects/ProjectRioZoo';
import ProjectBUXCrypto from './components/projects/ProjectBuxCrypto';
import Menu from './components/menu/Menu';
import ScrollToTop from './components/scroll/ScrollToTop'

import { useState } from 'react';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import {

  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { HashLink as Link } from 'react-router-hash-link';


const App = () => {

  const [open, setOpen] = useState(false);

  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);



  return (

    <div className="App">

      <Router>
      <ScrollToTop/>
        <div>
          <Header open={open} setOpen={setOpen} openMenu={openMenu} closeMenu={closeMenu}/>
          <Menu open={open} setOpen={setOpen} openMenu={openMenu} closeMenu={closeMenu}/>
        </div>


        <Switch>
          <Route exact path="/">
            <Work />
          </Route>
          <Route exact path="/work">
            <Work />
          </Route>
          <Route path="/about">
            <About />

          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/projects/bux-zero">
            <ProjectBUXZero />
          </Route>
          <Route path="/projects/creatives-for-climate">
            <ProjectC4C />
          </Route>
          <Route path="/projects/bux-x">
            <ProjectBUXx />
          </Route>
          <Route path="/projects/codhab">
            <ProjectCodhab />
          </Route>
          <Route path="/projects/riozoo">
            <ProjectRioZoo />
          </Route>
          <Route path="/projects/bux-crypto">
            <ProjectBUXCrypto />
          </Route>
        </Switch>



      </Router>
    </div>
  );
}

export default App;
