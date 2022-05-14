import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Header/>
    <Main/>
    </div>
  )
}

export default App
