import { useState } from 'react';
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addValue=()=>{
    setCounter(counter+1)
    console.log("Value added"+counter)
  }
  const removeValue=()=>{
    setCounter(counter-1)
    console.log("Value added"+counter)
  }
  const reset=()=>{
    setCounter(0);
  }
  return (
    <>
    <h1> react and vite</h1>
    <h2> Counter Value : {counter}</h2>

    <button onClick={addValue}>Add</button>
    <button onClick={removeValue}>Remove</button>
    <br />
    <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
