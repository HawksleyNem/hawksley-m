import React from 'react'
import './career.scss'
import CareerPathData from '../../json/carrer_path.json'
import ExperienceData from '../../json/experience.json'

export default function Career() {
  return (
    <>
        <section id='career' className='career-section'>
            <div className='section-title'>
                <h2>Pa<span className='sp-regular'>rr</span>cours</h2>
            </div>
            <div className='career-content'>
                <div className='experience'>
                <div className='skill-title'>
                    <h4>Expérience</h4>
                    <hr />
                    <div className='experience-list'>
                        {ExperienceData.map(item => 
                            <div className='career-card'>
                                <div>
                                    <p className='career-card__title'>{item.title}</p>
                                    <p className='career-card__desc'>{item.desc}</p>
                                </div>
                                <p className='career-card__date'>{item.date}</p>
                            </div>
                        )}
                    </div>
                </div>
                </div>
                <div className='path'>
                <div className='skill-title'>
                    <h4>Formation</h4>
                    <hr />
                    <div className='career-list'>
                        {CareerPathData.map(item => 
                            <div className='career-card'>
                                <div>
                                    <p className='career-card__title'>{item.title}</p>
                                    <p className='career-card__desc'>{item.desc}</p>
                                </div>
                                <p className='career-card__date'>{item.date}</p>
                            </div>
                        )}
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}
