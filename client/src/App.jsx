import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
const App = () => {
  return (
    <div className='w-full h-screen bg-[--background]'>
      <Header />
      <Home />
    </div>
  )
}

export default App