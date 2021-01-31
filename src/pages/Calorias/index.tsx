import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

import {
  Container, Form, FormGroup,
  Label, Input, Result, ResultContainer,
  ResultContent, Select
}
  from './styles';

const Calorias: React.FC = () => {

  const [genre, setGenre] = useState('')
  const [age, setAge] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [activity, setActivity] = useState('')
  const [tmb, setTmb] = useState(0)
  const [maintenance, setMaintenance] = useState(0);
  const [loseWeight, setLoseWeight] = useState(0);
  const [gainWeight, setGainWeight] = useState(0);
  const [toggle, setToggle] = useState(false);


  const calculate = (e) => {
    e.preventDefault();
    const tmb =
      genre === 'female'
        ? (655 + (9.6 * Number(weight)) + (1.8 * Number(height)) - (4.7 * Number(age)))
        : ((66 + 13.6 * Number(weight)) + (5 * Number(height)) - (6.8 * Number(age)))

    const maintenance = (tmb * Number(activity))

    setTmb(Math.round(tmb));
    setMaintenance(Math.round(maintenance));
    setLoseWeight(Math.round(maintenance - 450));
    setGainWeight(Math.round(maintenance + 450));

    setToggle(true);

  }
  return (

    <Container>
      <Header />
      <Form id="form" onSubmit={calculate}>
        <FormGroup>
          <Label htmlFor="gender">Seu gênero</Label>
          <Select
            id="gender"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="">Selecione</option>
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="age">Sua idade</Label>
          <Input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="weight">Seu peso</Label>
          <Input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="height">Sua altura</Label>
          <Input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="activity_level">
            Seu nível de atividade física
            </Label>
          <Select
            id="activity_level"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          >
            <option value="">Selecione</option>
            <option value="1.2">Sedentário</option>
            <option value="1.375">Pouca atividade</option>
            <option value="1.55">Atividade moderada</option>
            <option value="1.725">Atividade intensa</option>
            <option value="1.9">Atividade muito intensa</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Button >Calcular!</Button>
        </FormGroup>
      </Form>

      {toggle && (
        <Result>
          <ResultContainer>
            <h2>Aqui está o resultado:</h2>

            <ResultContent>
              <ul>
                <li>
                  Seu metabolismo basal é de <strong>{tmb} calorias</strong>.
                  </li>
                <li>
                  Para manter o seu peso você precisa consumir em média{" "}
                  <strong>{maintenance} calorias</strong>.
                  </li>
                <li>
                  Para perder peso você precisa consumir em média{" "}
                  <strong>{loseWeight} calorias</strong>.
                  </li>
                <li>
                  Para ganhar peso você precisa consumir em média{" "}
                  <strong>{gainWeight} calorias</strong>.
                  </li>
              </ul>
            </ResultContent>
          </ResultContainer>
        </Result>
      )}
      <Footer />
    </Container>
  );
};

export default Calorias;
