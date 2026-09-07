import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import ScreenShelf from './Pages/ScreenShelf/ScreenShelf'
import ScreenStats from './Pages/ScreenStats/ScreenStats'



// function App() {
//   const [count, setCount] = useState(0)

function App() {
  return(
    <div className="app">
      <Header />
      <ScreenShelf />
      <ScreenStats />
    </div>
  )
}

export default App
