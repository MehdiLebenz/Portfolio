import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Home from '../components/home/home'
import back from '../images/back.png'
import Header from '../components/header/header'
const IndexPage = () => (
  <Layout style={{backgroundImage: `url(${back})`}}
  >
    <Seo title="Home" />
    <Home />
    
  </Layout>
)

export default IndexPage
