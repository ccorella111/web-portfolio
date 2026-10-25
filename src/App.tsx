import { Header } from './components/layout/Header';
import { Hero } from './components/sections/hero/Hero';
import { Facts } from './components/sections/facts/Facts';
import { TechMarquee } from './components/sections/marquee/TechMarquee';
import { About } from './components/sections/about/About';

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
        </div>

      </main>
    </>
  )
}

export default App
