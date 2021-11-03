import React from 'react'; 
import Wrapper from'./WrapperProject'
import lactalis from '../../images/projects/lactalis.png'
import porsche from '../../images/porsche.png'
import carrefour from '../../images/projects/carrefour.svg'
import vyv from '../../images/projects/vyv.png'
import hyperspread from '../../images/projects/hyperspread.jpeg'
import monoprix from '../../images/projects/monoprix.png'
import lacoste from '../../images/projects/lacoste.png'
import Volkswagen from '../../images/projects/Volkswagen.png'
import '../layout.css'



const Projects = () => {
  return (
<Wrapper>
      <div class="container">
  <div class="cards">
    <div class="card-item">
      <div class="card-image">
        <img className="image" src={lactalis}/>
      </div>
      <div class="card-info">
        <h2 class="card-title">Lactalis - Project technical Manager</h2>
        <p class="card-intro">Migration of a 300 GB database to an AWS environment on Postgresql using Lambda and glue services
.</p>
      </div>
    </div>
  </div>
  <div class="cards">
    <div class="card-item">
      <div class="card-image">
        <img className="image" src={porsche}/>
      </div>
      <div class="card-info">
        <h2 class="card-title">A new trail you can't miss</h2>
        <p class="card-intro">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>
    </div>
  </div>
  <div class="cards">
    <div class="card-item">
      <div class="card-image">
        <img className="image" src={carrefour}/>
      </div>
      <div class="card-info">
        <h2 class="card-title">Inside the Outdoors</h2>
        <p class="card-intro">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>
    </div>
  </div>
  <div class="cards">
    <div class="card-item">
      <div class="card-image">
      <img className="image"  src={monoprix}/>
      </div>
      <div class="card-info">
        <h2 class="card-title">Essential hiking hacks</h2>
        <p class="card-intro">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>
    </div>
  </div>
  <div class="cards">
    <div class="card-item">
      <div class="card-image">
      <img className="image"  src={hyperspread}/>
      </div>
      <div class="card-info">
        <h2 class="card-title">Discovering this hidden gem</h2>
        <p class="card-intro">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>
    </div>
  </div>
  <div class="cards">
    <div class="card-item">
      <div class="card-image">
      <img className="image"  src={vyv}/>
      </div>
      <div class="card-info">
        <h2 class="card-title">1 Day routes for this weekend</h2>
        <p class="card-intro">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>
    </div>
  </div>
  <div class="cards">
    <div class="card-item">
      <div class="card-image">
      <img className="image" src={lacoste}/>
      </div>
      <div class="card-info">
        <h2 class="card-title">1 Day routes for this weekend</h2>
        <p class="card-intro">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>
    </div>
  </div>
  <div class="cards">
    <div class="card-item">
      <div class="card-image">
      <img className="image" src={Volkswagen}/>
      </div>
      <div class="card-info">
        <h2 class="card-title">1 Day routes for this weekend</h2>
        <p class="card-intro">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>
    </div>
  </div>
</div>
</Wrapper>
  
    
  )
}


export default Projects;