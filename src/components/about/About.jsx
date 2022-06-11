import React from 'react'
import './about.css'
import ME from '../../assets/mu.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsJournalCode} from 'react-icons/bs'

export const About = () => {
  return (
    <section id='about'>
      <h5 className='h5'>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>DirecTV</small><br/>
                <small>1+ Year Working</small>
            </article>

            <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Education</h5>
                <small>USBBOG</small><br/>
                <small>System Engineer</small>
            </article>

            <article className='about__card'>
                <BsJournalCode className='about__icon'/>
                <h5>Proyects</h5>
                <small>5+ Completed</small>
            </article>
          </div>

          <p>
            I'm a software engineer with a passion for building things that people love.
            I'm currently working as a full stack developer at 
            where I work on a variety of projects ranging from web applications to mobile applications.
            I'm also a student at 
            where I'm learning to code.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About