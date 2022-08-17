import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import BonusTop from './components/BonusTop/BonusTop'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import Account from '../src/pages/Account'
import Checkout from '../src/pages/Checkout'
import Help from '../src/pages/Help'

function App() {
  return (
    <BrowserRouter>
      <BonusTop />
      <NavBar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/account'} element={<Account />} />
        <Route path={'/cart'} element={<Checkout />} />
        <Route path={'/help'} element={<Help />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
