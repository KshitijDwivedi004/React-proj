import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const myObj={
    name: "Kshitij",
    age: 23,
    city: "Bangalore"
  }

  return (
    <>
    <Card username='kshitij' age='20' />
    <Card username='aman' age='25'/>
    </>
  )
}

export default App
