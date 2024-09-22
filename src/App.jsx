import './App.css'
import Navbar from './components/nav/Navbar.jsx'
import Header from './components/header/Header.jsx'
import AboutMe from './components/about_me/AboutMe.jsx'
import Projects from './components/projects/Project.jsx'
import Skill from './components/skill/Skill.jsx'
import Education from './components/education/Education.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'

function App() {
 

  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <AboutMe />
      <Skill />
      <Projects />
      <Education />
      <Contact />
      <Footer />

    </>
  )
}

export default App
