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
          <Route exact path="/">
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
        </Switch>



      </Router>
    </div>
  );
}

export default App;
