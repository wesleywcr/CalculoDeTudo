import styled from 'styled-components';



export const Navbar = styled.nav`
  height: 80px;
  background: linear-gradient(to right bottom, #c81912, #240b36);  
  display:flex;
  justify-content:space-between;
  padding: 0.5rem calc((100vw - 1000px)/2);
  z-index: 10;

  a{
    display:flex;
    color: #ddd;
    align-items:center;
    text-decoration:none;
    padding: 0.5rem;
    height:100%;
    cursor: pointer;
    letter-spacing:0.25rem;
      border-radius: 4px;
      transition: .3s linear;  

    &:hover{
      background-color: #4D1945;
      color: #2f3640;
      transform: scale(1.1);
    }
    
    
  }

  `
export const NavMenu = styled.div`
  display:flex;
  align-items: center;
  margin-right: -24px;

  @media screen and ( max-width: 768px){
  display:none;
  position:fixed;
  top:0;
  right:-100%;

  height:100vh;
  margin:0;
  background-color:#222;

  width:100%;
  min-width:250px;

  padding:100px 20px;
  flex-direction: column;
  transition: 0.5s ease
  }
  `
export const NavBtn = styled.nav`
  a.button{
  border-radius: 4px;
  background:#d0b10f;
  color: #fff;
  border: none;
  outline: none;
  cursor:pointer;
  transition: all 0.2s ease-in-out;
  text-decoration:none;
  &:hover{
      color: #2f3640;
      transform: scale(1.1);
    }

  @media screen and ( max-width: 768px){
  background:#fff;
  color: #010606;
  transition: all 0.2s ease-in-out;
  }
  }


  `
