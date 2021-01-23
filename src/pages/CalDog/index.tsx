import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Input from '../../components/Input';
import Inputs from '../../components/Inputs';

import Head from 'next/head'
import Image from 'next/image'

import { Container } from './styles';


const CalDog: React.FC = () => {
  return (

    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <Header />

      <Container>


        <Image src="/img/logo.svg" width={150} height={33} />
        <Inputs
          label="Calculo Dog"
          result="A idade do seu cachorro se fosse um humano seria de: "
        />
      </Container>
      <Footer />


    </>
  );
};

export default CalDog;
