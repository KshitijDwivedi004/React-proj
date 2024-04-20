import { useState } from 'react'
import './App.css'

function App() {
  const[color,setColor] =useState("olive")
  return (
    <>
      <div style={{backgroundColor:color}} className='w-full h-screen duration-200'>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
            <button onClick={()=> setColor("red")} className='outline-none bg-red-500 px-4 py-2 rounded-full text-white shadow-lg' >Red</button>
            <button onClick={()=> setColor("green")} className='outline-none bg-green-500 px-4 py-2 rounded-full text-white shadow-lg' >Green</button>
            <button onClick={()=> setColor("blue")} className='outline-none bg-blue-500 px-4 py-2 rounded-full text-white shadow-lg' >Blue</button>
            <button onClick={()=> setColor("orange")} className='outline-none bg-orange-500 px-4 py-2 rounded-full text-white shadow-lg' >Orange</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
