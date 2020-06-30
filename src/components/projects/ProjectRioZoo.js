import React from 'react';
import './Projects.css';
import RioZooManual from '../../images/riozoo-manual.jpg';
import RioZooSymbol from '../../images/rio-zoo-symbol.png';
import RioZooLogoH from '../../images/rio-zoo-main.png';





const about = props => (

  <div className="wrapper-project" id="codhab">


    <div className="full-image padding-top-80 more-margin">
      <img src={RioZooLogoH}></img>
    </div>
    <div className="subtitle">
      <p>RioZoo logo proposition</p>
    </div>
    <div className="text-container padding-top-80">
    <p>Founded in 1945 and located in Rio de Janeiro, RioZoo is Brazil’s oldest zoo and offers a unique history and extraordinary fauna.</p>
    </div>

    <div className="full-image padding-top-80">
      <img src={RioZooSymbol} width="100%"></img>
    </div>

    <div className="subtitle">
      <p>RioZoo symbol proposition</p>
    </div>

    <div className="text-container padding-top-80">
    <p>The Mico Leão Dourado is Rio de Janeiro's most iconic animal and the proposed brand was created with the purpose of raising awareness to the fact that this little monkey is on the verge of extinction. The symbol was imagined as a mix of animals, all together in harmony, from every group to represent the unity RioZoo represents.</p>
    </div>

    <div className="full-image padding-top-80">
      <img src={RioZooManual} width="100%"></img>
    </div>

    <div className="subtitle">
      <p>Brand identity manual</p>
    </div>

    <div className="text-container padding-top-80">
    <p>This is a personal project and had no real life application.</p>
    </div>








  </div>


);

export default about;
