import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
// document.addEventListener('DOMContentLoaded', () => {

 
//   // Get all "navbar-burger" elements
//   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

//   // Check if there are any navbar burgers
//   if ($navbarBurgers.length > 0) {

//     // Add a click event on each of them
//     $navbarBurgers.forEach( el => {
//       el.addEventListener('click', () => {

//         // Get the target from the "data-target" attribute
//         const target = el.dataset.target;
//         const $target = document.getElementById(target);

//         // Toggle the "is-active" className on both the "navbar-burger" and the "navbar-menu"
//         el.classNameList.toggle('is-active');
//         target.classNameList.toggle('is-active');

//       });
//     });
//   }

// });

const Header = ({  }) => (
  
  <header>
            <div className="container is-fullhd">

<nav className="navbar" role="navigation" aria-label="main navigation" >
    <a role="button" className="navbar-burger is active" aria-label="menu" aria-expanded="false" >
      <span aria-hidden="true"> </span>
      <span aria-hidden="true">  </span>
      <span aria-hidden="true"></span>
    </a>
    <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
    <div className="navbar-item">
    <Link to="/" >

      <a className="navbar-item">
        Home
      </a>
      </Link>
      </div>

      <div className="navbar-item">
      <Link to="/page-2/"  >
      <a className="navbar-item">
        Blog
      </a>
      </Link>
      </div>
      <a className="navbar-item">
        Project
      </a>
      </div>
      <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-primary">
            <strong>Contact me</strong>
          </a>
          </div>
          </div>
          </div>



      </div>
</nav>
</div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
