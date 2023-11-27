import React from 'react'
import './header.scss'
import PrimaryButton from '../Buttons/PrimaryButton/PrimaryButton'

export default function Header() {
  return (
    <header>
      <nav>
        <div className='nav-item nav-left'>
          <ul>
            <li>いらっしゃいませ</li>
          </ul>
        </div>
        <div className='nav-item nav-center'>
          <ul>
            <li><a href="#profile">Mon profil</a></li>
            <li><a href="#skills">Mes compétences</a></li>
            <li><a href="#career">Mon parcours</a></li>
            <li><a href="#projects">Mes projets</a></li>
          </ul>
        </div>
        <div className='nav-item nav-right'>
          <ul>
            <li><PrimaryButton content='Me contacter'></PrimaryButton></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
