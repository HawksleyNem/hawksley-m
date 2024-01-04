import '../../sass/main.scss'
import '../../sass/_reset.scss'
import '../../sass/_base.scss'
import './app.scss'
import Header from '../Header'
import Footer from '../Footer'
import HeroBanner from '../../layouts/HeroBanner'
import Profile from '../../layouts/Profile'
import Projects from '../../layouts/Projects'

function App() {

  return (
    <>
      <Header></Header>
      <main>
        <HeroBanner></HeroBanner>
        <Profile></Profile>
        <Projects></Projects>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
