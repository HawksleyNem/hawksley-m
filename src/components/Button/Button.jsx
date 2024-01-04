import React from 'react'
import './button.scss'

export default function Button({content, href}) {
  return (
    <a className='btn' href={href} target='blank'>{content}</a>
  )
}