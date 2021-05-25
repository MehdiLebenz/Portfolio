import * as React from 'react'
import { Link } from 'gatsby'
import './page2.css'
import { GrCaretNext } from 'react-icons/gr'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Footer from '../components/custom/footer'
import Header from '../components/header'
import denoAPI from '../images/denoAPI.png'

const SecondPage = () => (
  <div>
    <header>
      <Header />
    </header>
    <h3>Welcome to my Blog </h3>
    <section className="content-block">
      <h2>Simple React SSR app using Deno</h2>
      <img src={denoAPI} alt=""></img>
      <h2>
        Find the full article here <GrCaretNext />{' '}
        <Link to="/deno-ssr"> Deno</Link>{' '}
      </h2>
    </section>
    {/* 
<section class="content-block">
  <h1>Simple Deno API
</h1>
  <h2>Lorem ipsum?</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adip*isicing elit, sed do eiusmod *tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adip*isicing elit, sed do eiusmod *tempor incididunt ut labore et dolore magna aliqua.</p>
  <p>Lorcontent-blockem ipsum dolor sit amet, consectetur adip*isicing elit, sed do eiusmod *tempor incididunt ut labore et dolore magna aliqua.</p>
</section> */}
    {/* 
<section class="content-block">
  <h1>Lorem ipsum dolor sit amet</h1>
  <h2>Lorem ipsum?</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adip*isicing elit, sed do eiusmod *tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adip*isicing elit, sed do eiusmod *tempor incididunt ut labore et dolore magna aliqua.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adip*isicing elit, sed do eiusmod *tempor incididunt ut labore et dolore magna aliqua.</p>
</section> */}

    <Footer />
  </div>
  // <Layout>
  //   <Seo title="Blog" />
  //   <main>
  //   <Link to="/my-first-post">first</Link>
  //   <Link to="/deno-ssr"> Deno</Link>
  //   </main>
  // </Layout>
)

export default SecondPage
