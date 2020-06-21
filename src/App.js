import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Work from './components/work-menu/Work-menu';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import ProjectBUXZero from './components/projectBUXZero/ProjectBUXZero';


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



  return (
    <div className="App">
      <Router>

        <Header />


        <Switch>
          <Route exact path="/work">
            <Work id="work"/>
          </Route>
          <Route path="/about">
            <About id="about"/>

          </Route>
          <Route path="/contact">
            <Contact id="contact"/>
          </Route>
        </Switch>

        <Switch>
          <Route path="/projects">
            <ProjectBUXZero />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
