import styled from 'styled-components';

export const Container = styled.div`

display:none;
@media screen and ( max-width: 768px){

display:block;
width:100vw;
height:100vh;
margin-left:23rem;
z-index:1000;


.navbar {
  background-color: transparent;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu-bars {
  margin-left: 2rem;
  font-size: 2rem;
  background: none;
}

.nav-menu {
  background: ${props => props.theme.colors.primaryDark};
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: -100%;
  transition: 850ms;
}

.nav-menu.active {
  left: 0;
  transition: 350ms;
}

.nav-text {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px 0px 8px 16px;
  list-style: none;
  height: 60px;
}

.nav-text span {
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-radius: 4px;
  margin:0 auto;
}

.nav-text span:hover {
  background-color: #08d5f0;
  transition:0.3s linear;
}

.nav-menu-items {
  width: 100%;
}

.navbar-toggle {
  background-color: ${props => props.theme.colors.primaryDark};
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
}

span {
  margin: 10px;
}
}

`;
