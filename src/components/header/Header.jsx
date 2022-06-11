import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/m.png'
import HeaderSocial from './HeaderSocial'

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Yonier Zapata Asprilla</h1>
        <h5 className="text-light">System Engineer</h5>
        <CTA />
        <HeaderSocial />
      
        <div className="me">
          <img src={ME} alt="Me" />
        </div>

        <a href="#contact" className='scroll__down'>Scrown Down</a>
      </div>
    </header>
  )
}
export default Header