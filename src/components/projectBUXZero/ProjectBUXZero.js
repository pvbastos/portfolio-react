import React from 'react';
import './ProjectBUXZero.css';
import BUXZeroVideo from '../../images/bux-zero-logo-animation.mp4'


const about = props => (

  <div className="wrapper-project" id="bux-zero">
    <div className="full-image">
      <video src={BUXZeroVideo} width="100%" autoPlay loop mute></video>

    </div>
    <div className="text-container">
    <p>BUX Zero is the app that allows people to buy and sell shares with zero commission. The purpose of the app is to make investing accessible to all audiences and this has to be reflected throughout the app's UI, visual identity and advertisements.</p>
    </div>
  </div>


);

export default about;
