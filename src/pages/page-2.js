import React from 'react'; 
import Fetchdata from '../components/utils/fetchmediumdata';
import Header from "../components/header/header";
import Layout from "../components/layout"

const SecondPage = () => {
  return (
    <Layout>
    <Fetchdata/>
    </Layout>
    
  )
}

export default SecondPage;