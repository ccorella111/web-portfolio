import { Header } from './components/layout/Header';
import { Hero } from './components/sections/hero/Hero';
import { Facts } from './components/sections/facts/Facts';
import { TechMarquee } from './components/sections/marquee/TechMarquee';
import { About } from './components/sections/about/About';
import { Experience } from './components/sections/experience/Experience';
import { Education } from './components/sections/education/Education';
import { Projects } from './components/sections/projects/Projects';
import { Skills } from './components/sections/skills/Skills';
import { Contact } from './components/sections/contact/Contact';
import { Footer } from './components/layout/Footer';

function App() {

  return (
    <>
      <Header />
      <main>
        <div className="wrap" id="inicio">
          <Hero />
          <Facts />
        </div>

        <TechMarquee />

        <div className='wrap'>
          <About />
          <Experience />
          <Projects />
          <Education />
          <Skills />
        </div>

        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
