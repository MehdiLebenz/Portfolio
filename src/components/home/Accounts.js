import * as React from "react"
import { FaGithub, FaAddressCard, FaMedium, FaLinkedin } from "react-icons/fa";

const Accounts = ()=> {
    return(
        <nav class="nav">
        <div class="level-item has-text-centered">
          <div>
            <a class="titlenav"><FaGithub/></a>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
          <a href="mailto:mehdilebenz@gmail.com" class="titlenav"><FaAddressCard style={{width:'25p'}}/></a>
           
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
          <a href='' class="titlenav"><FaMedium/></a>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
           <a href="" class="titlenav"><FaLinkedin/></a>
          </div>
        </div>
        <div class="level-item has-text-centered">
           </div>
      </nav>
  
    )
}
export default Accounts;