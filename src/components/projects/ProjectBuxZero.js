import React from 'react';
import './Projects.css';
import BUXZeroVideo from '../../images/bux-zero-logo-animation.mp4';
import BUXZeroAppstore from '../../images/bux-zero-appstore-images.png';
import Appstore01 from '../../images/bux-zero-appstore/appstore-01.jpg';
import Appstore02 from '../../images/bux-zero-appstore/appstore-02.jpg';
import Appstore03 from '../../images/bux-zero-appstore/appstore-03.jpg';
import Appstore04 from '../../images/bux-zero-appstore/appstore-04.jpg';
import Appstore05 from '../../images/bux-zero-appstore/appstore-05.jpg';
import Appstore06 from '../../images/bux-zero-appstore/appstore-06.jpg';
import ReelBUXZero from '../../images/reel-bux-zero.mp4';
import IconAnimations from '../../images/bux-zero-icons-animations.mp4';
import BUXZeroAppstoreVideo from '../../images/bux-zero-appstore/App-preview-video-6-inches-NL.mp4';



const about = props => (

  <div className="wrapper-project" id="bux-zero">
    <div className="full-image">
      <video src={BUXZeroVideo} width="100%" autoPlay loop mute></video>
    </div>
    <div className="subtitle">
      <p>Logo animation</p>
    </div>
    <div className="text-container">
    <p>BUX Zero is the app that allows people to buy and sell shares with zero commission. The purpose of the app is to make investing accessible to all audiences and this has to be reflected throughout the app's UI, visual identity and advertisements.</p>
    </div>

    <div className="scroll-card padding-top-80">
      <div className="gradient-overlay">
      </div>
      <div className="card">
        <video src={BUXZeroAppstoreVideo} height="auto" controls></video>
      </div>
      <div className="card padding-left-20px">
        <img src={Appstore01} ></img>
      </div>
      <div className="card padding-left-20px">
        <img src={Appstore02} ></img>
      </div>
      <div className="card padding-left-20px">
        <img src={Appstore03} ></img>
      </div>
      <div className="card padding-left-20px">
        <img src={Appstore04} ></img>
      </div>
      <div className="card padding-left-20px">
        <img src={Appstore05} ></img>
      </div>
      <div className="card padding-left-20px">
        <img src={Appstore06} ></img>
      </div>

    </div>
    <div className="subtitle">
      <p>Appstore presence</p>
    </div>

    <div className="text-container">
    <p>As part of the design team at BUX I was responsible, together with the other designers, for shaping BUX Zero's visual identity and communications.</p>
    </div>

    <div className="full-image padding-top-80">
      <video src={ReelBUXZero} width="30%" controls loop></video>
    </div>
    <div className="subtitle">
      <p>BUX Zero ads for Facebook and Instagram</p>
    </div>


    <div className="text-container">
    <p>Ads are tailored and optimised for each advertising network or platform and many variations of one single concept are tested in order to understand what resonates best with the target audience.</p>
    </div>


    <div className="full-image padding-top-80">
      <video src={IconAnimations} width="100%" autoPlay loop mute></video>
    </div>
    <div className="subtitle">
      <p>Animated icons for the product website</p>
    </div>



  </div>




);

export default about;
