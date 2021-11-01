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
  <div className="container">
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
  
  )
}


export default Home
