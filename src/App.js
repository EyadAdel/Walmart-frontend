import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Account from "./Components/AccountPage/Account";
import { Route, Routes } from "react-router-dom";
import LoginEmail from "./Pages/loginEmail/login";
import LoginPassword from "./Pages/loginPassword/loginPassword";
import Signup from "./Pages/signup/signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginEmail />} />
        <Route path="/loginpass" element={<LoginPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
