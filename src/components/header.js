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

//         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
//         el.classList.toggle('is-active');
//         target.classList.toggle('is-active');

//       });
//     });
//   }

// });

const Header = ({  }) => (
  
  <header>
            <div class="container is-fullhd">

<nav class="navbar" role="navigation" aria-label="main navigation" >
    <a role="button" class="navbar-burger is active" aria-label="menu" aria-expanded="false" >
      <span aria-hidden="true"> </span>
      <span aria-hidden="true">  </span>
      <span aria-hidden="true"></span>
    </a>
    <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
    <div class="navbar-item">
    <Link to="/" >

      <a class="navbar-item">
        Home
      </a>
      </Link>
      </div>

      <div class="navbar-item">
      <Link to="/page-2/"  >
      <a class="navbar-item">
        Page 2  
      </a>
      </Link>
      </div>
      <a class="navbar-item">
        Documentation
      </a>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>
        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
        </div>
      </div>
      </div>
      <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
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
