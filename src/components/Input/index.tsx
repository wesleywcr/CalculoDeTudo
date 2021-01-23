import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string,
  name: string,


}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <Container>
      <div className="input-block">
        <label htmlFor={name}>{label}</label>
        <input type="number" id={name} {...rest} />

      </div>
    </Container>
  );
}

export default Input;
