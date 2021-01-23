import { type } from 'os';
import React from 'react';

import { Container } from './styles';


const Button: React.FC = ({ children }) => {

  return (
    <Container>

      <button type="submit">{children}</button>


    </Container >
  );
};

export default Button;
