import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import { Slider } from "react-slick";
import { Router, Routes } from "react-router-dom";
import Account from "./Components/AccountPage/Account";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Routes>
        <Router path="/account" element={<Account/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
