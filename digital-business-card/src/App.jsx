import './App.css'

import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Info />
      <main>
        <About />
        <Interests />
      </main> 
      <Footer />
    </>
  )
}

export default App
