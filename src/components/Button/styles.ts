import styled from 'styled-components';

export const Container = styled.div`
button{ 
    width:300px;
    height:100px;
    background:transparent;
    border:none;
    color: #FFF;
    border-radius:4px;
    transition: ease-out 0.3s;
    font-size: 2rem;
    font-family: 'Alfa Slab One', cursive;
    outline:none;
    border: 3px solid #42FBF2;
    position: relative;
    z-index: 1;
    text-decoration:none;
    overflow: hidden;
    
&:hover{
    color: #FFF;
    cursor: pointer;
}
&:before{
    transition: 0.5s all ease;
    position: absolute;
    top:0;
    right: 50%;
    left:50%;
    bottom:0;
    opacity:0;
    content:"";
    background-color: #42FBF2;
  
}
&:hover:before{
    transition: 0.5s all ease;
    left:0;
    right:0;
    opacity:1;
    z-index: -1;
}
}
`
