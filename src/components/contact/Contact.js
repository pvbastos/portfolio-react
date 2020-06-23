import React from 'react';
import './Contact.css';
import Linkedin from '../../images/linkedin.svg';
import Dribbble from '../../images/dribbble.svg';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch
} from "react-router-dom";


const contact = props => (



  <div className="wrapper-contact" id="contact">
    <div className="container-contact">
      <div className="contact-content">
        <div className="contact-center">
          <div className="contact-question">
            Want to get in touch?
          </div>
          <div className="contact-email"

          >
            <a href={"mailto:hello@pvbastos.com"} target="_blank">hello@pvbastos.com</a>
            <div className="round-rectangle">
            </div>
          </div>

        </div>
        <div className="contact-social">
          <a href={"https://www.linkedin.com/in/pvbastos/"} target="_blank"><img src={Linkedin} className="image-social"/></a>
          <a href={"https://dribbble.com/pvbastos"} target="_blank"><img src={Dribbble} className="image-social"/></a>
        </div>
      </div>
    </div>
  </div>


);

export default contact;
