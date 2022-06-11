import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {RiUser6Line} from 'react-icons/ri'
import {VscRocket} from 'react-icons/vsc'
import {RiServiceLine} from 'react-icons/ri'
import {GiMailbox} from 'react-icons/gi'
import { useState } from 'react'

export const Nav = () => {

  //CAMBIANDO EL ESTADO DE LA BARRA DE NAVEGACION CON LA CLASE ACTIVE
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><RiUser6Line/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><VscRocket/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><GiMailbox/></a>
    </nav>
  )
}
export default Nav