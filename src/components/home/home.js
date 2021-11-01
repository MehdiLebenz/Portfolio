import * as React from 'react'
import Typewriter from 'typewriter-effect'
import Accounts from './Accounts'
import Experience from '../custom/experience'
import mehdi from '../../images/mehdi.png'
import altavia from '../../images/altavia.png'
import psm from '../../images/psm.png'
import pal from '../../images/pal.png'
import pspoi from '../../images/pspoi.png'
import HomeWrapper from "./homeWrapper"
import '../layout.css'
import Certification from '../custom/certification/certifications'
import certif from '../../images/certif.png'
function Home() {

  return(
    <HomeWrapper>
  <div className="container">
  <div class="custom-shape-divider-top-1632239671">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
    <div className="avatar">
      <img
        alt="mehdi"
        src={mehdi}
      />
    </div>
    <div className="badge">
      <img className="psm" src={psm} alt="psm"/>
      <img className="pal" src={pal} alt="pal"/>
      <img className="pal" src={pspoi} alt="PSPO"/>
    </div>
  
    <div className="content">
      <h2>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('<span>Mehdi Benzarti</span> <br/>')
            typewriter
              .typeString('<span className=test>Head of Operations + Agile Coach </span> ')
              .start()
          }}
        />
    <img className="oyez" src={altavia} alt="oyez"/>
      </h2>
      <p>Follow me on:</p>
      <Accounts />
      
    </div>

    <div className="quotes">
     
      <div className="card">
        <div className="box box1">
          <br></br>
          <blockquote className="blockquote">
            Growth and change can be painful, but nothing is more painful than
            getting stuck somewhere you don't want to be{' '}

          </blockquote>
          <h2>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Mehdi Benzarti ').start()
              }}
            />
            <br></br>
          </h2>
        </div>
      </div>
    </div>
    <div className="carouselContainer">
      <h3 className="carousel"> Experience:  </h3>
    <Experience />
    </div>
    <div className="bigContainer">
    <div className="CertifContainer">
      <h3 className="certif"> Certifications:  </h3>
      <div className="imageBlock">
      <Certification/>
<img className="imagecert" src={certif} />
      </div>


</div>
</div>
       </div>
    </HomeWrapper>
  
  )
}


export default Home
