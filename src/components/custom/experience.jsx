import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import polytech from '../../images/companies/polytech.png';
import altaviapink from '../../images/altaviapink.png';
import ftav from '../../images/companies/ftav.jpg';
import gmc from '../../images/companies/gmc.png';
import tunisair from '../../images/companies/tunisair.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ExperienceWrapper from './css/Wrapperexperience';

function Experience() {
  return (
    <ExperienceWrapper>
      <Carousel autoPlay infiniteLoop>
        <div className="test">
          <img src={altaviapink} alt="altavia" />
        </div>
        <div>
          <img src={ftav} alt="ftava" />
        </div>
        <div>
          <img src={tunisair} alt="tunisair"/>
        </div>
        <div>
          <img src={polytech} alt="polytech" />
        </div>
        <div>
          <img src={gmc} alt="gmc"/>
        </div>
      </Carousel>
    </ExperienceWrapper>
  );
};
export default Experience;
