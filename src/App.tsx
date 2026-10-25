import { Header } from './components/layout/Header'
import { Hero } from './components/sections/hero/Hero'
import { Facts } from './components/sections/facts/Facts'
import { TechMarquee } from './components/sections/marquee/TechMarquee'


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

      </main>
    </>
  )
}

export default App
