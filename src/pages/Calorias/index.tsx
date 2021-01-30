import React, { useState } from 'react';

import { Container } from './styles';

const Calorias: React.FC = () => {

  const [genre, setGenre] = useState('')
  const [age, setAge] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [activity, setActivity] = useState('')
  const [tmb, setTmb] = useState(0)
  const [maintenance, setMaintenance] = useState('');
  const [loseWeight, setLoseWeight] = useState('');
  const [gainWeight, setGainWeight] = useState('');
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
      <h1>Calorias</h1>
    </Container>
  );
};

export default Calorias;
