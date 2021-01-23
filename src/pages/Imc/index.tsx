import React, { useState, FormEvent } from 'react';
import Head from 'next/head'

import { Container, Result } from './styles';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Input from '../../components/Input';
import Button from '../../components/Button/Button';


const Imc: React.FC = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [tot, setTot] = useState('');


  const [toggle, setToggle] = useState(false)

  function handleImc(e: FormEvent) {
    e.preventDefault();

    const imc = parseFloat(weight) / (parseFloat(height) * 2)
    const tot = (imc)

    setTot(tot.toFixed(2))
    setToggle(true);
  }
  return (

    <>

      <Head>
        <title>Imc</title>
      </Head>

      <Header />

      <Container>
        <main>
          <form onSubmit={handleImc} >
            <fieldset>
              <Input
                value={height}
                name="height"
                label="Altura"
                onChange={(e) => { setHeight(e.target.value) }}
              />

              <Input
                value={weight}
                name="weight"
                label="Peso"
                onChange={(e) => { setWeight(e.target.value) }}
              />

              <Button children="Calcule" />

            </fieldset>



          </form>
          {toggle && (
            <Result>
              <h1>Resultado</h1>
              <ul>
                <li>
                  Seu IMC: <strong> {tot}</strong>
                </li>
              </ul>
            </Result>
          )}
        </main>

      </Container>

      <Footer />


    </>

  );
};

export default Imc;
