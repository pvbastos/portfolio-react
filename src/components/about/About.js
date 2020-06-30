import React from 'react';
import './About.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch
} from "react-router-dom";

const about = props => (

  <div className="wrapper-about" id="about">
    <div className="container-about">
      <div className="container-content">
        <div className="container-center">
          <div className="about-photo"></div>
          <div className="about-content">
            <p>I’m a visual designer experienced in online marketing and performance-based design. I work closely with other designers, marketers and copywriters to conceptualise and deliver high quality creative work while being quick and paying attention to details.</p>
            <p className="padding-top-40">I was born in Rio de Janeiro – Brazil, where I studied Graphic Design in Universidade Federal do Rio de Janeiro. Since 2016 I live in Amsterdam, The Netherlands, and work in the design team of BUX, a fintech company, where I work closely with the performance marketing team.</p>
            <p className="padding-top-40">In 2019 I started amarelo.studio, a one-man design studio (me, I’m the one man). My goal is to also provide design services as a freelancer.</p>
          </div>
        </div>
      </div>
    </div>
  </div>


);

export default about;
