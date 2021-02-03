import React from 'react';
import Link from 'next/link'
import { Navbar, NavMenu, NavBtn } from './styles'
import SideBar from '../SideBar';




const Header: React.FC = () => {



  return (

    <Navbar>

      <Link href="/">
        <a >Home</a>
      </Link>


      <NavMenu>

        <Link href="/Churrascrometro">
          <a>Churras</a>
        </Link>
        <Link href="/CalDog">
          <a>Caculo Dog</a>
        </Link>

        <Link href="/Imc">
          <a>IMC</a>
        </Link>
        <Link href="/Calorias">
          <a>Calorias</a>
        </Link>
        {/* <NavBtn>
          <Link href="">
            <a className="button">Sobre</a>
          </Link>
        </NavBtn> */}

      </NavMenu>

      <SideBar />
    </Navbar>


  );
}

export default Header;
