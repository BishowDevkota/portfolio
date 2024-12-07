import './App.css'
import Header from './components/Header'
<<<<<<< HEAD
import About from './pages/About'
const App = () => {
  return (
    <div className='w-full h-auto bg-[--background]'>
      <Header/>
      <About/>
      
=======
import Home from './pages/Home'
const App = () => {
  return (
    <div className='w-full h-screen bg-[--background]'>
      <Header />
      <Home />
>>>>>>> 0bc6666e47e1de3ca28edc8ac95e2fa54b4abcfd
    </div>
  )
}

export default App