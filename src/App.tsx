import './App.css'
import Header from './components/Header'
import About from './sections/about'
import Experience from './sections/experience'
import Footer from './sections/footer'
import Education from './sections/formation'
import Projects from './sections/projects'
import Skills from './sections/skills'

function App() {

  return (
    <div className='container'>
      <Header />
      <About />
      <hr />
      <Skills />
      <hr />
      <Projects />
      <hr />
      <Education />
      <hr />
      <Experience />
      <hr />
      <Footer />
    
    </div>
  )
}

export default App
