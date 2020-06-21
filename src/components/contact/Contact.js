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
            hello@pvbastos.com
            <div className="round-rectangle">
            </div>
          </div>

        </div>
        <div className="contact-social">
          <img src={Linkedin} className="image-social"/>
          <img src={Dribbble} className="image-social"/>
        </div>
      </div>
    </div>
  </div>


);

export default contact;
