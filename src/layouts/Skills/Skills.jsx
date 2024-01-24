import React from 'react'
import './skills.scss'
import DevSkillsData from '../../json/dev_skills.json'
import AppSkillsData from '../../json/app_skills.json'
import DevOpsSkillsData from '../../json/devops_skills.json'
import ServicesSkillsData from '../../json/services_skills.json'
import CMSSkillsData from '../../json/cms_skills.json'

export default function Skills() {
  return (
    <section id='skills' className='skills-section'>
        <div className='section-title'>
            <h2>Compét<span className='sp-regular'>ee</span>nces</h2>
        </div>
        <div className='skill-title'>
            <h4>Développement</h4>
            <hr />
        </div>
        <div className='skills-list'>
            {DevSkillsData.map(item => 
                <div className='skill-card'>
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                </div>
            )}
        </div>

        <div className='skill-title'>
            <h4>Apps</h4>
            <hr />
        </div>
        <div className='skills-list'>
            {AppSkillsData.map(item => 
                <div className='skill-card'>
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                </div>
            )}
        </div>

        <div className='skill-title'>
            <h4>DevOps</h4>
            <hr />
        </div>
        <div className='skills-list'>
            {DevOpsSkillsData.map(item => 
                <div className='skill-card'>
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                </div>
            )}
        </div>

        <div className='skill-title'>
            <h4>CMS</h4>
            <hr />
        </div>
        <div className='skills-list'>
            {CMSSkillsData.map(item => 
                <div className='skill-card'>
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                </div>
            )}
        </div>
        
        <div className='skill-title'>
            <h4>Services</h4>
            <hr />
        </div>
        <div className='skills-list'>
            {ServicesSkillsData.map(item => 
                <div className='skill-card'>
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                </div>
            )}
        </div>
    </section>
  )
}
