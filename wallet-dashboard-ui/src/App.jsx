import './App.css'
import Header from './Components/Header/Header'
import MainContent from './Components/MainContent/MainContent'
import { CurrencyProvider } from './Context/UseCurrency'


function App() {

  return (
    <div className="App">
    <CurrencyProvider>
      <Header/>
      <MainContent/>
    </CurrencyProvider>
    </div>
  )
}

export default App
