import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BonusTop from './components/BonusTop';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account';
import Checkout from './pages/Checkout';
import Help from './pages/Help';


function App() {
  return (

    <p>Hello</p>

      //   <BrowserRouter>
      //     <BonusTop />
      //     <NavBar />
      //     <Routes>
      //       <Route path={'/'} element={<Home />} />
      //       <Route path={'/account'} element={<Account />} />
      //       <Route path={'/cart'} element={<Checkout />} />
      //       <Route path={'/help'} element={<Help />} />
      //     </Routes>
      // </BrowserRouter>
  );
}

export default App;
