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
        <h2 class="card-title">Lactalis - Technical project manager (2021) </h2>
        <p class="card-intro">mysql database transfer to Postgresql , development of dedicated microservice to manage the conditions of import and export, connecting of daily flows and verification of all conditions, for BI side connecting Domo and server management 
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
        <h2 class="card-title"> Porsche France - Project Director (2020)</h2>
        <p class="card-intro">Lead Management mobile application <br/>  </p>
      </div>
    </div>
  </div>
  <div class="cards">
    <div class="card-item">
      <div class="card-image">
        <img className="image" src={carrefour}/>
      </div>
      <div class="card-info">
        <h2 class="card-title">Scrum Master - Carrefour Nova (2019)</h2>
        <p class="card-intro">Mobile application <br/> #react-native #nodejs #GCP #graphql  </p>
      </div>
    </div>
  </div>
  <div class="cards">
    <div class="card-item">
      <div class="card-image">
      <img className="image"  src={monoprix}/>
      </div>
      <div class="card-info">
        <h2 class="card-title">Monoprix France - Project Manager (2018) </h2>
        <p class="card-intro">Complete overhaul of the monoprix site, order funnel, product management, payment, stock management, delivery management.. <br/> 
        #Reactjs #Apollo #Nodejs #GCP #GRAPHQL #Microservices
        </p>
      </div>
    </div>
  </div>
  <div class="cards">
    <div class="card-item">
      <div class="card-image">
      <img className="image"  src={hyperspread}/>
      </div>
      <div class="card-info">
        <h2 class="card-title">HyperSpread - Project Director (2020) </h2>
        <p class="card-intro">First Saas dedicated to local marketing in France<br/> #REACT #NODE #MICROSERVICES #GRAPHQL #GRAPHQL  </p>
      </div>
    </div>
  </div>
  <div class="cards">
    <div class="card-item">
      <div class="card-image">
      <img className="image"  src={vyv}/>
      </div>
      <div class="card-info">
        <h2 class="card-title">Scrum Master - VYV (2020)</h2>
        <p class="card-intro">Healthcare plateform <br/>#REACT #NODE #MICROSERVICES #GRAPHQL #GRAPHQL</p>
      </div>
    </div>
  </div>
  <div class="cards">
    <div class="card-item">
      <div class="card-image">
      <img className="image" src={lacoste}/>
      </div>
      <div class="card-info">
        <h2 class="card-title">Lacoste - Technical Project Manager (2021) </h2>
        <p class="card-intro"> Digital sales experience in 2 Showrooms (Paris / Shanghai) for their wholesaler..</p>
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
        <p class="card-intro">Creation of 2 distinct platforms (ACCESSORIES SITES, MONTHLY FILE) to revitalize the commercial dynamics of the "DPS" parts and services department. <br/> #SHOPIFY #NEXTJS #VERCEL #NODEJS #PIMCORE </p>
      </div>
    </div>
  </div>
</div>
</Wrapper>
  
    
  )
}


export default Projects;