import React, { useState, InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface CheckProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string,
}
const CheckboxFinal: React.FC<CheckProps> = ({ name, ...rest }) => {
  const [checked, setChecked] = useState(false)

  function handleChange() {
    const newValue = !checked
    setChecked(newValue)
    console.log(newValue)


  }
  return (
    <Container>

      <label htmlFor={name} className="custom-checkbox">
        <input type="checkbox"
          onChange={handleChange}

          {...rest}
          id={name}

        />
        <span className="checkmark"></span>
        <span className="label">{name}</span>
      </label>


    </Container>
  );
};

export default CheckboxFinal;
