import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Error from '../components/404/404'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
<Error/>
  </Layout>
)

export default NotFoundPage
