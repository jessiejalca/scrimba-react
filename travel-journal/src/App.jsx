import { useState } from 'react'
import './styles/App.css'

import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Card />
    </>
  )
}

export default App
