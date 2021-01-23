import React, { useState, useRef } from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import Header from '../components/Header/Header'


import Inputs from '../components/Inputs'
import Footer from '../components/Footer/Footer'


import Image from 'next/image'


const Home: React.FC = () => {

  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <Header />

      <Container>

        <h1>Bem Vindo ao Calcula de Tudo</h1>

      </Container>
      <Footer />


    </>
  )
}

export default Home
