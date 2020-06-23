import React from 'react';
import './Projects.css';
import BUXXVideo from '../../images/bux-x-logo-animation.mp4';
import XAppstore01 from '../../images/bux-x-appstore/appstore-01.jpg';
import XAppstore02 from '../../images/bux-x-appstore/appstore-02.jpg';
import XAppstore03 from '../../images/bux-x-appstore/appstore-03.jpg';
import XAppstore04 from '../../images/bux-x-appstore/appstore-04.jpg';
import XAppstore05 from '../../images/bux-x-appstore/appstore-05.jpg';
import XAppstore06 from '../../images/bux-x-appstore/appstore-06.jpg';
import XAppstore07 from '../../images/bux-x-appstore/appstore-07.jpg';
//import ReelBUXZero from '../../images/reel-bux-zero.mp4';
//import IconAnimations from '../../images/bux-zero-icons-animations.mp4';



const about = props => (

  <div className="wrapper-project" id="bux-zero">
    <div className="full-image">
      <video src={BUXXVideo} width="100%" autoPlay loop mute></video>
    </div>
    <div className="subtitle">
      <p>Logo rebranding animation</p>
    </div>
    <div className="text-container">
    <p>BUX X is the app that takes the complexity out of the financial markets and simplify the trading experience. It allows users to trade easily on a variety of products such as CFDs on stocks, cryptos and forex.</p>
    </div>

    <div className="scroll-card padding-top-80">
      <div className="gradient-overlay">
      </div>
      <div className="card">
        <img src={XAppstore01} ></img>
      </div>
      <div className="card padding-left-20px">
        <img src={XAppstore02} ></img>
      </div>
      <div className="card padding-left-20px">
        <img src={XAppstore03} ></img>
      </div>
      <div className="card padding-left-20px">
        <img src={XAppstore04} ></img>
      </div>
      <div className="card padding-left-20px">
        <img src={XAppstore05} ></img>
      </div>
      <div className="card padding-left-20px">
        <img src={XAppstore06} ></img>
      </div>
      <div className="card padding-left-20px">
        <img src={XAppstore07} ></img>
      </div>
    </div>
    <div className="subtitle">
      <p>Appstore presence</p>
    </div>

    <div className="text-container">
    <p>When the app was rebranded from BUX to BUX X, it was a great time to rethink and refresh the app's and the company's identity and communications.</p>
    </div>

    



  </div>




);

export default about;
