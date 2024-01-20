import React from 'react'
import './skills.scss'
import SkillsData from '../../json/skills.json'

export default function Skills() {
  return (
    <section id='skills' className='skills-section'>
        <div className='section-title'>
            <h2>Compét<span className='sp-regular'>ee</span>nces</h2>
        </div>
        <div className='skills-list'>
            {SkillsData.map(item => 
                <div className='skill-card'>
                    <img src="./src/assets/img/Figma-logo.svg" alt="Figma" />
                    <p>Lorem</p>
                </div>
            )}
        </div>
    </section>
  )
}
