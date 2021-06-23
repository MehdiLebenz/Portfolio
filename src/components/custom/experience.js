import React from 'react'
import './css/experience.css'
import PL from '../../images/companies/PL.png'
import oyez from '../../images/oyez.png'
import ftav from '../../images/companies/ftav.jpg'
import gmc from '../../images/companies/gmc.png'
import tunisair from '../../images/companies/tunisair.png'



const Experience = () => {
    return(
        <div className="experiencestyle">
        <img className="polytech"
        src={PL}
        alt="Polytech"
        />
        <img className="oyezt"
        src={oyez}
        alt="oyez"
        />
            <img className="ftav"
        src={ftav}
        alt="FTAV"
        />
            <img className="gmc"
        src={gmc}
        alt="gomycode"
        />
            <img className="tunisair"
        src={tunisair}
        alt="Tunisair"
        />


        </div>
        


    ) 

}
export default Experience;