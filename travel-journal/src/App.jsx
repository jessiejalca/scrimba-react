import { useState } from 'react'
import './styles/App.css'

import Navbar from './components/Navbar'
import Card from './components/Card'

import data from './data'

function App() {
  const CARDS = data.map(item => {
    return (
      <Card 
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <>
      <Navbar />
      <main>
        {CARDS}
      </main>
    </>
  )
}

export default App
