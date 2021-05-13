import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Blog" />
    <main>
    <Link to="/my-first-post">first</Link>
    <Link to="/deno-ssr"> Deno</Link>
    </main>
  </Layout>
)

export default SecondPage
