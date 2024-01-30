import React from 'react'
import './heroBanner.scss'

export default function HeroBanner() {
  return (
    <section className='hero-banner'>
      <div className='video-gradient'></div>
      <video playsinline autoPlay muted loop>
        <source src="/videos/campaign_sky2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='space-blur blur-purple blur-1'></div>
      <div className='space-blur blur-pink blur-2'></div>
      <p className='upper-title'>こんにちは、私の名前は</p>
      <h1>Hawksley Mouquet</h1>
      <p>Je suis étudiant en 2e année de Bachelor Web Design UI - UX & Développement Web<br />à La Manu - École supérieure des métiers du numérique</p>
    </section>
  )
}
