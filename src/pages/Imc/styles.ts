import styled from 'styled-components';

export const Container = styled.div`

main{

  width: 100%;
  max-width:100%;
  height:100%;
  margin:0 auto;
  padding-top: 4rem;
  background:  linear-gradient(to right top, #c81912, #240b36);
  
}
label{
 display:flex;
 align-items:center;
 justify-content:center;
 margin-top:1rem;
}
fieldset{

  border: 0;
 }
input{
  margin-bottom:2rem;
  max-width:30rem;
}
`;
export const Result = styled.div`
  margin-bottom: 20px;
  margin-top: 50px;
  height:100%;
  background: ${props => props.theme.colors.primaryDark};
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

