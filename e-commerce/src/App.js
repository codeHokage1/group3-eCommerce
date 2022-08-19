// // import "./App.css";
// // import LoginPage from "./pages/LoginPage";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import Navbar from "./components/NavBar";
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import img from "./pages/fruit-gb.png";
// // import Header from "./components/Header";
// // //import "./pages/form.css";
// // import SignUp from "./pages/SignUp";
// // import "./pages/signup.css";

// // function App() {
// //   return (
// //     <body className="myBody" style={{ backgroundImage: `url(${img})` }}>
// //       <Header />

//       <div>
//         <BrowserRouter>
//           <Navbar />
//           <Routes>
//             <Route path="/home" element={""} />
//             <Route path="/addlist" element={""} />
//           </Routes>
//         </BrowserRouter>
//       </div>
//       {/* <LoginPage /> */}
//       <SignUp />
//     </body>
//   );
// =======
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import BonusTop from './components/BonusTop/BonusTop'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import Account from '../src/pages/Account/Account'
import Checkout from '../src/pages/Checkout'
import Help from '../src/pages/Help'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProductPage';
import Footer2 from './components/Footer2/Footer2'
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";

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
        <Route path={'/products'} element={<Products />} />
        <Route path={'/products/:id'} element={<SingleProduct />} />
      </Routes>
      <Footer2 />
          {/* <LoginPage /> */}
      <SignUp />
    </BrowserRouter>
  )
}

export default App
