import styled from 'styled-components'

export const Container = styled.div`
  background: linear-gradient(to right top, #c81912, #240b36);
  width: 100%;
  height:100vh;


  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


  
  h1 {
  
    color: #fff;
    font-family: 'Gentium Book Basic', serif;
    font-size: 5rem;
    margin-bottom: 5rem;
    display:flex;
    justify-content: center;
    text-align: center;
    text-shadow: 0.3rem 0.1rem 0.1rem #000;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;

  }
`
