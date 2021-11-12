import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import hyperspread from '../../images/projects/hyperspread.jpeg';
import carrefour from '../../images/projects/carrefour.svg';
import lacoste from '../../images/projects/lacoste.png';
import lactalis from '../../images/projects/lactalis.png';
import vyv from '../../images/projects/vyv.png';
import Volkswagen from '../../images/projects/Volkswagen.png';
import monoprix from '../../images/projects/monoprix.png';
import porsche from '../../images/porsche.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ClientsWrapper from './ClientsWrapper';

const Clients = function clients () {
  return (
    <ClientsWrapper>
      <Carousel autoPlay infiniteLoop>
        <div className="">
          <img src={Volkswagen} alt="vgf" />
        </div>
        <div>
          <img src={porsche}alt="porsche" />
        </div>
        <div>
          <img src={lactalis} alt="lactalis"/>
        </div>
        <div>
          <img src={carrefour} alt="carrefour" />
        </div>
        <div>
          <img src={monoprix} alt="mpx"/>
        </div>
        <div>
          <img src={vyv} alt="vyv" />
        </div>
        <div>
          <img src={lacoste} alt="lacoste" />
        </div>
        <div>
          <img src={hyperspread} alt="hyp" />
        </div>
      </Carousel>
    </ClientsWrapper>
  );
};
export default Clients;
