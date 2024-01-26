import '../../sass/main.scss'
import '../../sass/_reset.scss'
import '../../sass/_base.scss'
import './app.scss'
import Header from '../Header'
import Footer from '../Footer'
import HeroBanner from '../../layouts/HeroBanner'
import Profile from '../../layouts/Profile'
import Projects from '../../layouts/Projects'
import Skills from '../../layouts/Skills'
import Career from '../../layouts/Career'

function App() {

  return (
    <>
      <Header></Header>
      <main>
        <HeroBanner></HeroBanner>
        <Profile></Profile>
        <Career></Career>
        <Skills></Skills>
        <Projects></Projects>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
