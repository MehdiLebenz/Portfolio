import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Home from '../components/home/home'
import Certifications from '../components/custom/certifications'
const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Home />
    <h1 className="section1" style ={{
          textAlign: 'center',
          marginTop: '5%',
      }
    }>my achievements
</h1>
    <Certifications/>
  </Layout>
)

export default IndexPage
