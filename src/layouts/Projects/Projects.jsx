import React from 'react'
import './projects.scss';
import Project from '../../components/Project/Project';

export default function Projects() {
  return (
    <>
        <section id='projects' className='projects-section'>
            <h2>Mes p<span className='sp-regular'>rr</span>ojets</h2>
            <div className='projects-grid'>
                <Project></Project>
                <Project></Project>
                <Project></Project>
                <Project></Project>
            </div>
        </section>
    </>
  )
}
