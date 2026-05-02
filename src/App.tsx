import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import About from "./sections/about";
import Experience from "./sections/experience";
import Footer from "./sections/footer";
import Education from "./sections/formation";
import Projects from "./sections/projects";
import Skills from "./sections/skills";
import Achievements from "./sections/achievements";

export type Language = "br" | "en";

export interface SectionsProps {
  language: Language;
}

function App() {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <div className="container">
      <Header language={language} setLanguage={setLanguage} />

      <About language={language} />
      <hr />

      <Skills language={language} />
      <hr />

      <Projects language={language} />
      <hr />

      <Education language={language} />
      <hr />

      <Experience language={language} />
      <hr />

      <Achievements language={language} />
      <hr />

      <Footer language={language} />
    </div>
  );
}

export default App;
