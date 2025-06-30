import './App.css'
import Header from './components/Header'
import Experience from './sections/experience'
import Education from './sections/formation'
import Projects from './sections/projects'
import Skills from './sections/skills'

function App() {

  return (
    <div className='container'>
      <Header />
      {/* Sobre Mim */}
      <Skills />
      <hr />
      <Projects />
      <hr />
      <Education />
      <hr />
      <Experience />
      {/* Contatos */}
    
    </div>
  )
}

export default App
