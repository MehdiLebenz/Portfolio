import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/header/header"
import "./layout.css"
import Footer from '../components/custom/footer'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="layout" style={{width:"100%", height:"100vh"}}>
      <div className="mainContainer"
      >
        <header>
          <Header/>
        </header>
        <main>{children}
        <footer>
          <Footer/>
        </footer>
        </main>

      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
