import "./App.css";
import LoginPage from "./pages/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Nabar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import img from "./pages/fruit-gb.png";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <body style={{ backgroundImage: `url(${img})` }}>
        <div>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/home" element={""} />
              <Route path="/addlist" element={""} />
            </Routes>
            <LoginPage />
          </BrowserRouter>
        </div>
      </body>
    </>
  );
}

export default App;
