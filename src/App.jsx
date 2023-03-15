import React from 'react'
import {Hero, Card,Header}from './components'

const App = () => {
  let data = []
  for(let i = 1; i < 12; i++) {
    data.push({hour: i, temp: (Math.random()*10 + 13)})
  }
  data.push({value: 12.5});
  return (
    <div>
      <Header/>
      <Hero/>
    </div>
  )
}

export default App