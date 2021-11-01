import React from 'react'
import pl from '../../images/companies/pl.png'
import altaviapink from '../../images/altaviapink.png'
import ftav from '../../images/companies/ftav.jpg'
import gmc from '../../images/companies/gmc.png'
import tunisair from '../../images/companies/tunisair.png'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ExperienceWrapper from './css/Wrapperexperience'


function Experience() {
    return (
        <ExperienceWrapper>
        <Carousel  autoPlay infiniteLoop >
        <div className="test">
            <img src={altaviapink} />
        </div>
        <div>
            <img src={ftav} />
        </div>
        <div>
            <img src={tunisair} />
        </div>
        <div>
            <img src={pl} />
        </div>
        <div>
            <img src={gmc} />
        </div>
    </Carousel>
    </ExperienceWrapper>
    )
}

// const Experience = () => {
//     return(
//         <div className="experiencestyle">
//         <img className="polytech"
//         src={PL}
//         alt="Polytech"
//         />
//         <img className="oyezt"
//         src={altaviapink}
//         alt="oyez"
//         />
//             <img className="ftav"
//         src={ftav}
//         alt="FTAV"
//         />
//             <img className="gmc"
//         src={gmc}
//         alt="gomycode"
//         />
//             <img className="tunisair"
//         src={tunisair}
//         alt="Tunisair"
//         />


//         </div>
        


//     ) 

// }
export default Experience;