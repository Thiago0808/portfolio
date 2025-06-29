import './App.css'
import Header from './components/Header'
import Experience from './sections/experience'
import Education from './sections/formation'
import Projects from './sections/projects'

function App() {

  return (
    <div className='container'>
      <Header />
      {/* Sobre Mim */}
      <Projects />
      <hr />
      <Education />
      <hr />
      <Experience />
      {/* Experiências */}
      {/* Contatos */}
    
    </div>
  )
}

export default App
