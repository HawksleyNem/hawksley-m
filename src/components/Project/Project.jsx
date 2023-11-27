import React from 'react'
import './project.scss'
import PrimaryButton from '../Buttons/PrimaryButton/PrimaryButton'

export default function Project() {
  return (
    <>
      <div className='project'>
        <img className='project__image' src="./src/assets/img/pexels-l-m-19031635.jpg" alt="" />
        <div className='project__info'>
          <h3 className='project__info__title'>Title</h3>
          <div className='project__info__tag'></div>
          <p className='project__info__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit adipisci modi quam fugiat repellat obcaecati autem beatae.</p>
          <PrimaryButton content='Voir le projet'></PrimaryButton>
        </div>
      </div>
    </>
  )
}
