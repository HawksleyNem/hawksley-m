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
            <div className='info'>
              <p>
                Suite à l'obtention de mon baccalauréat, j'ai décidé de m'orienter dans le domaine de l'<span className='highlight'>informatique</span>,
                car je suis passionné par l'univers du <span className='highlight'>jeu-vidéo</span>. J'ai d'abord intégré un <span className='highlight'>BUT Informatique</span> à l'IUT d'Amiens (80) pendant un an,
                là où j'ai découvert le développement <span className='highlight'>Front-end</span> et <span className='highlight'>Back-end</span>, ainsi qu'une lueur de <span className='highlight'>design</span>.
                Le peu de design étudié durant cette première année de BUT m'a fait réaliser que je voulais <span className='highlight'>approfondir</span> ce domaine.
                J'ai décidé par la suite d'intégrer le <span className='highlight'>Bachelor</span> Web Design UI - UX & Développement Web à <span className='highlight'>La Manu</span>,
                école supérieure des métiers du numérique, à Amiens. Dans ce Bachelor, en 1ère année, j'ai exercé à la fois le développement <span className='highlight'>Front-end</span> et <span className='highlight'>Back-end</span>,
                ainsi que le <span className='highlight'>design</span>.<br /><br />
                Actuellement en 2e année, je suis <span className='highlight'>passioné</span> par tous ces domaines, avec une préférence pour le développement web.
                L'idée d'intégrer une équipe afin de réaliser des <span className='highlight'>projets</span> divers et variés m'enthousiasme fortement.
              </p>
              <p><span className='highlight'>Âge</span> - 20 ans <br />
              <span className='highlight'>Localisation</span> - Amiens et les alentours <br />
              <span className='highlight'>Hobbies</span> - Animés, anime artworks, mangas, jeux-vidéo, écrire des histoires</p>
            </div>
          </div>
        </section>
    </>
  )
}
