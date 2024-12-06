import React from 'react'
import './App.css'
import Header from './components/Header'
import About from './pages/About'
const App = () => {
  return (
    <div className='w-full h-auto bg-[--background]'>
      <Header/>
      <About/>
      
    </div>
  )
}

export default App