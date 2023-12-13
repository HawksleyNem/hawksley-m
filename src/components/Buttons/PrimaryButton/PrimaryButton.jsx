import React from 'react'
import './primaryButton.scss'

export default function PrimaryButton({content}) {
  return (
    <a className='nav-btn btn-primary' href="#">{content}</a>
  )
}
