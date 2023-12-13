import React from 'react'
import './projects.scss';
import data from '../../json/projects.json'

export default function Projects() {
  return (
    <>
        <section id='projects' className='projects-section'>
            <h2>Mes p<span className='sp-regular'>rr</span>ojets</h2>
            <div className='projects-grid'>
            {data.map(item => 
              <div key={item.title} className='project'>
                <div>
                  <img className='project__image' src="./src/assets/img/qjfvffyzgsm11.png" alt="" />
                </div>
                <div className='project__info'>
                  <h3 className='project__title'>{item.title}</h3>
                  <div className='project__tags'>
                    {item.tags.map(tag =>
                      <div className='project__tag'><p className='project__tag__text'>{tag}</p></div>
                    )}
                  </div>
                  <p className='project__info__description'>{item.description}</p>
                </div>
              </div>
            )}
            </div>
        </section>
    </>
  )
}
