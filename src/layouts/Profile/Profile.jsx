import React from 'react'
import './profile.scss'

export default function Profile() {
  return (
    <>
        <section id='profile' className='profile-section'>
          <div className='section-title'>
            <h2>Pro<span className='sp-regular'>ff</span>il</h2>
          </div>
          <div className='profile-content'>
            <div className='me'></div>
            {/* <p>Âge</p> */}
             <p>
                Suite à l'obtention de mon baccalauréat, j'ai décidé de m'orienter dans le domaine de l'informatique,
                car je suis passionné par l'univers du jeu-vidéo. J'ai d'abord intégré un BUT Informatique à l'IUT d'Amiens (80) pendant un an,
                là où j'ai découvert le développement Front-end et Back-end, ainsi qu'une lueur de design.
                Le peu de design étudié durant cette première année de BUT m'a fait réaliser que je voulais approfondir ce domaine.
                J'ai décidé par la suite d'intégrer le Bachelor Web Design UI - UX & Développement Web à La Manu,
                école supérieure des métiers du numérique, à Amiens. Dans ce Bachelor, en 1ère année, j'ai exercé à la fois le développement Front-end et Back-end,
                ainsi que le design.<br /><br />
                Actuellement en 2e année, je suis passionné par tous ces domaines, avec une préférence pour le développement web.
                L'idée d'intégrer une équipe afin de réaliser des projets divers et variés m'enthousiasme fortement.
              </p>
          </div>
        </section>
    </>
  )
}
