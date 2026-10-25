import { Header } from './components/layout/Header'
import { Hero } from './components/sections/hero/Hero'


function App() {

  return (
    <>
      <Header />
      <main>
        <div className="wrap" id="inicio">
          <Hero />
        </div>
      </main>
    </>
  )
}

export default App
