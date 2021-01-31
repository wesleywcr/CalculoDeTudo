import styled from 'styled-components';

export const Container = styled.div`
    margin:0;
  width:100%;
  height:100%;
  background:  linear-gradient(to right top, #c81912, #240b36);
`;

export const Form = styled.form`
  box-sizing: content-box;
  padding:3rem 20rem 0rem 20rem;
`;
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-family: "Montserrat Semibold", sans-serif;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  background: #1a1a1a;
  width: 94%;
  height: 45px;
  border: 1px solid transparent;
  border-radius: 5px;
  font-family: "Montserrat", sans-serif;
  color: white;
  font-size: 14px;
  padding: 0 15px;
  outline: none;
  transition: border-color 0.2s ease-in;
  &:focus {
    border-color: #ff7373;
  }
`;

export const Select = styled.select`
  background: #1a1a1a;
  width: 100%;
  height: 45px;
  border: 1px solid transparent;
  border-radius: 5px;
  font-family: "Montserrat", sans-serif;
  color: white;
  font-size: 14px;
  padding: 0 15px;
  outline: none;
  transition: border-color 0.2s ease-in;
  &:focus {
    border-color: #ff7373;
  }
`;



export const Result = styled.div`
  margin-bottom: 20px;
  padding:0 20%;
`;

export const ResultContainer = styled.div`
  margin-top: 50px;
`;

export const ResultContent = styled.div`
  margin-top: 10px;
  background: #1a1a1a;
  border-radius: 5px;
  padding: 10px;
  ul {
    list-style: none;
  }
  ul li {
    font-size: 14px;
    font-weight: bold;
    font-family: "Montserrat Bold", sans-serif;
    line-height: 30px;
  }
  ul li strong {
    color: #ff7373;
  }
`;