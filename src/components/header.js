import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

function Header() {
  const [isActive, setisActive] = React.useState(false)
  return (
    <header>
      <div className="container is-fullhd">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <a
            role="button"
            className="navbar-burger is active"
            aria-label="menu"
            aria-expanded="false"
            onClick={() => {
              setisActive(!isActive)
            }}
            role="button"
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"> </span>
            <span aria-hidden="true"> </span>
            <span aria-hidden="true"></span>
          </a>
          <div
            id="navbarBasicExample"
            className={`navbar-menu ${isActive ? 'is-active' : ''}`}
          >
            <div className="navbar-start">
              <div className="navbar-item">
                <Link to="/">
                  <a className="navbar-item">Home</a>
                </Link>
              </div>

              <div className="navbar-item">
                <Link to="/page-2/">
                  <a className="navbar-item">Blog</a>
                </Link>
              </div>
              <div className="navbar-item">
                <Link to="/projects/">
                <a className="navbar-item">Project</a>
                </Link>
              </div>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <Link to="contact">
                    <a className="button is-primary">
                      <strong>Contact me</strong>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
