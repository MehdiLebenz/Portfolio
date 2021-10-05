import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Home from '../components/home/home'
import back from '../images/back.png'
const IndexPage = () => (
  <Layout style={{backgroundImage: `url(${back})`}}
  >
    <Seo title="Home" />
    <Home />
    <h1 className="section1" style ={{
          textAlign: 'center',
          marginTop: '5%',
      }
    }>my achievements
</h1>
  </Layout>
)

export default IndexPage
