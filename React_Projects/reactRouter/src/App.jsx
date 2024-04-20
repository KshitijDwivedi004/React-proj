import { useState } from 'react'
import Header from './components/Header/Header.jsx';
import './App.css'
import Footer from './components/Footer/Footer.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Footer/>
      <Header/>
    </>
  )
}

export default App
