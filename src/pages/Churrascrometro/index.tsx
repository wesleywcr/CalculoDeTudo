import React, { useState, FormEvent } from 'react'
import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Input from '../../components/Input'

import Image from 'next/image'
import { Container, ResultContainer, ResultContent, Result, Beefs, Drinks, Complements } from './styles';
import Checkbox from '../../components/Checkbox'




const Churrascrometro: React.FC = () => {
  const [men, setMen] = useState('')
  const [woman, setWoman] = useState('')
  const [kid, setKid] = useState('')

  const [toggle, setToggle] = useState(false)

  const [picanha, setPicanha] = useState(false)
  const [alcatra, setAlcatra] = useState(false);
  const [contraFile, setContraFile] = useState(false)
  const [asa, setAsa] = useState(false)
  const [coxinhaAsa, setCoxinhaAsa] = useState(false)
  const [linguica, setLinguica] = useState(false)
  const [cerveja, setCerveja] = useState(false)
  const [refrigerante, setRefrigerante] = useState(false)
  const [suco, setSuco] = useState(false)
  const [paoAlho, setPaoAlho] = useState(false)
  const [carvao, setCarvao] = useState(false)
  const [farofa, setFarofa] = useState(false)
  const [sal, setSal] = useState(false)
  const [vinagrete, setVinagrete] = useState(false)

  const [TotPicanha, setTotPicanha] = useState("")
  const [TotAlcatra, setTotAlcatra] = useState("");
  const [TotContraFile, setTotContraFile] = useState("")
  const [TotAsa, setTotAsa] = useState("")
  const [TotCoxinha, setTotCoxinha] = useState("")
  const [TotLinguica, setTotLinguica] = useState("")
  const [TotCerveja, setTotCerveja] = useState(0)
  const [TotRefrigerante, setTotRefrigerante] = useState(0)
  const [TotSuco, setTotSuco] = useState(0)
  const [TotPaoAlho, setTotPaoAlho] = useState(0)
  const [TotCarvao, setTotCarvao] = useState(0)
  const [TotFarofa, setTotFarofa] = useState("")
  const [TotSal, setTotSal] = useState("")
  const [TotVinagrete, setTotVinagrete] = useState("")


  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const Men = Number(men);
    const Woman = Number(woman);
    const Kid = Number(kid);
    const TotPeople = Men + Woman + Kid

    const TotPicanha = picanha ? Men * 0.09 + Woman * 0.07 + Kid * 0.03 : 0
    const TotAlcatra = alcatra ? Men * 0.09 + Woman * 0.07 + Kid * 0.03 : 0
    const TotContraFile = contraFile ? Men * 0.09 + Woman * 0.07 + Kid * 0.03 : 0

    const TotAsa = asa ? Men * 0.05 + Woman * 0.04 + Kid * 0.02 : 0
    const TotCoxinha = coxinhaAsa ? Men * 0.05 + Woman * 0.04 + Kid * 0.02 : 0
    const TotLinguica = linguica ? Men * 0.05 + Woman * 0.04 + Kid * 0.02 : 0

    const TotCerveja = cerveja ? (Men * 8) + (Woman * 6) : 0
    const TotRefrigerante = refrigerante ? TotPeople >= 6 ? TotPeople * 0.5 : 1 : 0
    const TotSuco = suco ? Men * 1 : 0
    const TotPaoAlho = paoAlho ? Men * 1 + Woman * 1 : 0
    const TotCarvao = carvao ? TotPeople >= 6 ? TotPeople / 6 : 1 : 0
    const TotFarofa = farofa ? Men * 0.030 + Woman * 0.030 : 0
    const TotSal = sal ? TotPeople >= 6 ? TotPeople / 6 : 1 : 0
    const TotVinagrete = vinagrete ? Men * 0.035 + Woman * 0.035 : 0

    setTotPicanha(TotPicanha.toFixed(2))
    setTotAlcatra(TotAlcatra.toFixed(2))
    setTotContraFile(TotContraFile.toFixed(2))
    setTotAsa(TotAsa.toFixed(2))
    setTotCoxinha(TotCoxinha.toFixed(2))
    setTotLinguica(TotLinguica.toFixed(2))

    setTotCerveja(TotCerveja)
    setTotRefrigerante(TotRefrigerante)
    setTotSuco(TotSuco)
    setTotPaoAlho(TotPaoAlho)
    setTotCarvao(Math.round(TotCarvao))
    setTotFarofa(TotFarofa.toFixed(2))
    setTotSal(TotSal.toFixed(2))
    setTotVinagrete(TotVinagrete.toFixed(2))


    setToggle(true);

  }




  return (

    <Container>

      <Header />

      <main>
        <form onSubmit={handleSubmit}>
          <fieldset>


            <Input
              value={men}
              name="men"
              label="Homens"
              onChange={(e) => { setMen(e.target.value) }}
            />
            <Input
              value={woman}
              name="woman"
              label="Mulheres"
              onChange={(e) => { setWoman(e.target.value) }}
            />
            <Input
              value={kid}
              name="kid"
              label="Crianças"
              onChange={(e) => { setKid(e.target.value) }}

            />
            <h1> CARNES </h1>

            <Beefs>
              <div className="beefs-outer">
                <section>
                  < Checkbox
                    name="Picanha"
                    onChange={(e) => { setPicanha(e.target.checked) }}

                  />
                  <Checkbox
                    name="Alcatra"
                    onChange={(e) => { setAlcatra(e.target.checked) }}
                  />



                  <Checkbox
                    name="ContraFilé"
                    onChange={(e) => { setContraFile(e.target.checked) }}
                  />
                  <Checkbox
                    name="Asinha"
                    onChange={(e) => { setAsa(e.target.checked) }}
                  />
                  <Checkbox
                    name="Coxinha"
                    onChange={(e) => { setCoxinhaAsa(e.target.checked) }}
                  />
                  <Checkbox
                    name="Linguiça"
                    onChange={(e) => { setLinguica(e.target.checked) }}
                  />
                </section>
              </div>
            </Beefs>

            <h1>Bebidas</h1>
            <Drinks>
              <section>
                <Checkbox
                  name="Cerveja"
                  onChange={(e) => { setCerveja(e.target.checked) }}
                />
                <Checkbox
                  name="Refrigerante"
                  onChange={(e) => { setRefrigerante(e.target.checked) }}
                />
                <Checkbox
                  name="Suco"
                  onChange={(e) => { setSuco(e.target.checked) }}
                />
              </section>
            </Drinks>

            <h1> Complementos</h1>
            <Complements>
              <div className="complements-outer">
                <section>
                  {/* <Checkbox
                    name="Pão de Alho"
                    onChange={(e) => { setPaoAlho(e.target.checked) }}
                  /> */}
                  <Checkbox
                    name="Carvão"
                    onChange={(e) => { setCarvao(e.target.checked) }}
                  />
                  <Checkbox
                    name="Sal Grosso"
                    onChange={(e) => { setSal(e.target.checked) }}
                  />
                  <Checkbox
                    name="Farofa"
                    onChange={(e) => { setFarofa(e.target.checked) }}
                  />
                  <Checkbox
                    name="Vinagrete"
                    onChange={(e) => { setVinagrete(e.target.checked) }}
                  />
                </section>
              </div>
            </Complements>

          </fieldset>

          <Button children="Calcule" />

        </form>
        {toggle && (
          <Result>
            <ResultContainer>

              <h1>Resultado</h1>
              <ResultContent>
                <h1>CARNES</h1>
                <ul>
                  <li>
                    Picanha <strong> {TotPicanha} KG</strong>
                  </li>
                  <li>
                    Alcatra <strong> {TotAlcatra} KG</strong>
                  </li>
                  <li>
                    Contra Filé<strong> {TotContraFile} KG</strong>
                  </li>
                  <li>
                    Asa <strong> {TotAsa} KG</strong>
                  </li>
                  <li>
                    Coxinha <strong> {TotCoxinha} KG</strong>
                  </li>
                  <li>
                    Linguiça <strong> {TotLinguica} KG</strong>
                  </li>
                  <h1>BEBIDAS</h1>
                  <li>
                    Cerveja <strong>{TotCerveja} Latas (600ml)</strong>
                  </li>
                  <li>
                    Refrigerante <strong>{TotRefrigerante}  Litros</strong>
                  </li>
                  <li>
                    Suco <strong>{TotSuco} Litros</strong>
                  </li>
                  <h1>COMPLEMENTOS</h1>
                  <li>
                    Carvão <strong>{TotCarvao} Sacos</strong>
                  </li>
                  {/* <li>
                    Pão de Alho <strong>{TotPaoAlho} UND</strong>
                  </li> */}
                  <li>
                    Sal Grosso<strong> {TotSal} KG</strong>
                  </li>
                  <li>
                    Vinagrete <strong>{TotVinagrete} KG</strong>
                  </li>
                  <li>
                    Farofa <strong>{TotFarofa} KG</strong>
                  </li>

                </ul>
              </ResultContent>


            </ResultContainer>
          </Result>
        )}
      </main>

      <Footer />

    </Container>
  );
};

export default Churrascrometro;
