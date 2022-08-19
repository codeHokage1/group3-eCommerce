import "./App.css";
import LoginPage from "./pages/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import img from "./pages/fruit-gb.png";
import Header from "./components/Header";
//import "./pages/form.css";
import SignUp from "./pages/SignUp";
import "./pages/signup.css";

function App() {
  return (
    <body className="myBody" style={{ backgroundImage: `url(${img})` }}>
      <Header />

      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/home" element={""} />
            <Route path="/addlist" element={""} />
          </Routes>
        </BrowserRouter>
      </div>
      {/* <LoginPage /> */}
      <SignUp />
    </body>
  );
}

export default App;
