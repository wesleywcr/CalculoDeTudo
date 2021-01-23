import React, { InputHTMLAttributes } from 'react';
import { Formik, Field, Form } from 'formik';

import { Container } from './styles';


interface FormValues {
  cal: number;
  amount: number

}
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  result: string,
  label: string
}


const Inputs: React.FC<InputProps> = ({ label, result }) => {

  function onSubmit(values: FormValues, actions) {
    const numberInput = values.cal
    console.log(values.amount)


  }

  return (
    <Container>
      <Formik

        onSubmit={onSubmit}
        initialValues={{
          cal: 0,
          amount: 0,
        }}
        render={({ values, handleChange }) => (
          <Form>
            <div>
              <label>{label}</label>
              <Field

                name="cal"
                type="number"
                placeholder="Idade do Cachorro"
                onChange={e => {
                  handleChange(e);
                  values.cal
                }}
              />


              <p> {result}</p>
              <div className="resul">
                {values.cal == 0 ? JSON.stringify(0) : JSON.stringify((values.cal - 2) * 4 + 21)}
              </div>
            </div>






          </Form>
        )}
      />

    </Container>
  );
};

export default Inputs;
