import React from 'react'
import './footer.scss'

export default function () {
  return (
    <>
      <footer id='contact' className='footer'>
        <a href='https://www.linkedin.com/in/hawksley-mouquet-254566235/' target="_blank" className='footer__social'>LinkedIn</a>
        <a href='https://github.com/HawksleyNem' target="_blank" className='footer__social'>Github</a>
        <p className='footer__social email'>hawksley.mqt@gmail.com</p>
      </footer>
      <nav className='mobile-nav'>
        <ul>
        <li><a href="./src/assets/img/CV Hawksley MOUQUET.png" className='btn' download="CV Hawksley MOUQUET.png">Télécharger CV</a></li>
          <li><a href="#contact" className='btn'>Me contacter</a></li>
        </ul>
      </nav>
    </>
  )
}