import * as React from 'react'
import Typewriter from 'typewriter-effect'
import Accounts from './Accounts'
import Services from '../custom/services'
import Experience from '../custom/experience'
import mehdi from '../../images/mehdi.png'
import oyez from '../../images/oyez.png'
import psm from '../../images/psm.png'
import pal from '../../images/pal.png'
import blog from '../../images/blog.jpg'

import '../layout.css'
const Home = () => (
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
    <img className="oyez" src={oyez} alt="oyez"/>
      </h2>
      <p>Follow me on:</p>
      <Accounts />
      
    </div>

    <div className="quotes">
      <div className="card">
        <div className="box box1">
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
          </h2>
        </div>
      </div>
    </div>
    <h1 style={{
          marginTop: '5%',
      }
    }>Where I worked  </h1>
    <Experience />
    {/* <h1 style={{
          textAlign: 'right',
          marginTop: '5%',
      }
    }>My services </h1>
    <Services /> */}
    </div>

  
)
export default Home
