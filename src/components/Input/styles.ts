import styled from 'styled-components';

export const Container = styled.div`
.input-block{
    position: relative;
  
}
.input-block + .input-block{
    margin-top: 1.4rem;
    margin-bottom:1rem;
}

 .input-block label{
    font-size: 1.4rem;
    font-weight: bold;
    font-family: "Montserrat Bold", sans-serif;
    line-height: 30px;  
}

/* None arrows in input */
input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;    
}
 .input-block input{
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background:  #FFF;
    color:#1a1a1a;
    border: 1px solid ${props => props.theme.colors.primaryLight};
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;

}

#search-teachers .input-block:focus-within::after{
    width: calc(100% -3.2rem);
    height: 2px;
    content: '';
    background:  ${props => props.theme.colors.primaryDark};
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;


}


`;
