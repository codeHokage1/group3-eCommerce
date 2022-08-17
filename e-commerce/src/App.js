import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BonusTop from './components/BonusTop/BonusTop';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account/Account';
import Checkout from './pages/Checkout';
import Help from './pages/Help';
import Footer2 from './components/Footer2/Footer2';


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
      <Footer2 />
      </BrowserRouter>
  );
}

export default App;
