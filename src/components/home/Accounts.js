import * as React from "react"
import { FaGithub, FaAddressCard, FaMedium, FaLinkedin } from "react-icons/fa";

const Accounts = ()=> {
    return(
        <nav className="nav">
        <div className="level-item has-text-centered">
          <div>
            <a href="https://github.com/MehdiLebenz"className="titlenav"><FaGithub/></a>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
          <a href="mailto:mehdilebenz@gmail.com" className="titlenav"><FaAddressCard /></a>
           
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
          <a href='https://medium.com/@mehdilebenz' className="titlenav"> <FaMedium/> </a>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
           <a href="https://www.linkedin.com/in/mehdi-benzarti-307bb2121" className="titlenav" ><FaLinkedin/></a>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
          </div>
        </div>
      </nav>
  
    )
}
export default Accounts;