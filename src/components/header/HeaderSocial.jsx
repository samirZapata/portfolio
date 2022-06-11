import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

export const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="https://www.linkedin.com/in/samzap/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/samirZapata" target="_blank"><FaGithub/></a>
    </div>
  )
}
export default HeaderSocial