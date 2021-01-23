import styled from 'styled-components';

export const Container = styled.div`
width:100%;
/* background: #2c173a; */
border-radius:5px;
padding:10px;
margin-bottom:32px;
display:flex;

justify-content:center;
align-content:center;
align-items:center;

/* None arrows in input */
input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;    
}

label{
  
    color: #fff;
    font-family: 'Gentium Book Basic', serif;
    font-size: 5rem;
    margin-bottom: 5rem;
    display:flex;
    justify-content: center;
    text-align: center;
    text-shadow: 0.3rem 0.1rem 0.1rem #000;

 
}
input{
    padding:20px;
    flex:1;  
    justify-content: center;
    align-items:center;
    text-align: center;
    background:transparent;
   
    color:#fff;
    font-size:14px;
    border:solid 3px #000;
    border-radius: 8px;
    margin-left: 3rem;
    margin-bottom:2rem;
    ::placeholder{
color: #e1e1e1;
font-size:15px;
    }
}
  
p{
    font-size:20px;
    font-family:'Impact', sans-serif;
    font-weight:100;


    margin-bottom:30px;
    align-items:center;
  
    text-align:center;
    text-decoration:none;
    text-shadow: 0.4px 0.7px 0.5px #000;
}
.resul{
    font-size:50px;
    color:#e4e3;

    text-align:center;
    text-decoration:none;
    text-shadow: 0.4px 0.7px 0.5px #000;
}

`
