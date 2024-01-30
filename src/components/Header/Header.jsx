import React from 'react'
import Button from '../../components/Button/Button'
import './header.scss'

export default function Header() {
  return (
    <header>
      <nav>
        <div className='nav-item nav-left'>
          <ul>
            <li><a href="./img/CV Hawksley MOUQUET.png" className='btn' download="CV Hawksley MOUQUET.png">Télécharger CV</a></li>
          </ul>
        </div>
        <div className='nav-item nav-center'>
          <ul>
            <li><a href="#profile">Profil</a></li>
            <li><a href="#skills">Compétences</a></li>
            <li><a href="#career">Parcours</a></li>
            <li><a href="#projects">Projets</a></li>
          </ul>
        </div>
        <div className='nav-item nav-right'>
          <ul>
            <li><a href="#contact" className='btn'>Me contacter</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
