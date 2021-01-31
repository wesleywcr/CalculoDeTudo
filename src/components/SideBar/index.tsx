import React, { useState } from 'react';
import Link from 'next/link'

import * as FaIcons from 'react-icons/fa';
import { GiBarbecue, GiSittingDog } from 'react-icons/gi'
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';

import { Container } from './styles';


const SideBar: React.FC = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <Container>

      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link href="" className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link href="" className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            <li className="nav-text">
              <Link href="/">
                <span>
                  <AiIcons.AiFillHome />
                   Home
                   </span>
              </Link>
            </li>

            <li className="nav-text">
              <Link href="/Churrascrometro">
                <span> <GiBarbecue />Churras</span>
              </Link>
            </li>



            <li className="nav-text">
              <Link href="/Imc">
                <span> <AiIcons.AiFillCalculator />IMC</span>
              </Link>
            </li>

            <li className="nav-text">
              <Link href="/CalDog">
                <span> < GiSittingDog />Calculo Dog</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link href="/Calorias">
                <span> <AiIcons.AiFillThunderbolt />Calculo De Calorias</span>
              </Link>
            </li>


          </ul>
        </nav>
      </IconContext.Provider>

    </Container>
  );
};

export default SideBar;
