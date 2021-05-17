import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from '.././components/custom/footer'
import Header from "./header"
import Certifications from './custom/certifications'
import "./layout.css"
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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="mainContainer"
      >
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
