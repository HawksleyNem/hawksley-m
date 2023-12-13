import React from 'react'
import './footer.scss'

export default function () {
  return (
    <>
      <footer className='footer'>
        <div className='footer__social'>
          <a href='https://www.linkedin.com/in/hawksley-mouquet-254566235/' target="_blank" className='footer__social__name'>LinkedIn</a>
        </div>
        <div className='footer__social'>
          <a href='https://github.com/HawksleyNem' target="_blank" className='footer__social__name'>Github</a>
        </div>
      </footer>
    </>
  )
}