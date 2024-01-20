import React from 'react'
import Button from '../../components/Button/Button'
import './projects.scss';
import FullstackData from '../../json/fullstack_projects.json'
import DesignData from '../../json/design_projects.json'

export default function Projects() {
  return (
    <>
        <section id='projects' className='projects-section'>
          <div className='projects-container fullstack-projects'>  
            <div className='section-title'>
              <h2>P<span className='sp-regular'>rr</span>ojets</h2>
              <pre><code className='fullstack-project-title'><span className='vs-gray'>&lt;</span><span className='vs-blue'>p</span><span className='vs-gray'>&gt;</span>Fullstack<span className='vs-gray'>&lt;/</span><span className='vs-blue'>p</span><span className='vs-gray'>&gt;</span></code></pre>
            </div>
              <div className='projects-grid'>
              {FullstackData.map(item => 
                <div key={item.title} className='project'>
                  <div>
                    <img className='project__image' src={item.image} alt="" />
                  </div>
                  <div className='project__info'>
                    <h3 className='project__title'>{item.title}</h3>
                    <div className='project__tags'>
                      {item.tags.map(tag =>
                        <div className='project__tag'><p className='project__tag__text'>{tag}</p></div>
                      )}
                    </div>
                    <p className='project__description'>{item.description}</p>
                    <Button className='project__button' content="Voir le projet" href={item.href}></Button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className='projects-container design-projects'>  
            <div className='section-title'>
              <h2>P<span className='sp-regular'>rr</span>ojets</h2>
              <h3>Design</h3>
            </div>
              <div className='projects-grid'>
              {DesignData.map(item => 
                <div key={item.title} className='project'>
                  <div>
                    <img className='project__image' src={item.image} alt="" />
                  </div>
                  <div className='project__info'>
                    <h3 className='project__title'>{item.title}</h3>
                    <div className='project__tags'>
                      {item.tags.map(tag =>
                        <div className='project__tag'><p className='project__tag__text'>{tag}</p></div>
                      )}
                    </div>
                    <p className='project__description'>{item.description}</p>
                    <Button className='project__button' content="Voir le projet" href={item.href}></Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
    </>
  )
}
