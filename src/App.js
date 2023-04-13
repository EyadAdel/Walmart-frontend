import Home from "./Pages/Home/Home";
import Account from "./Pages/AccountPage/Account";
import { Route, Routes } from "react-router-dom";
import LoginEmail from "./Pages/loginEmail/login";
import LoginPassword from "./Pages/loginPassword/loginPassword";
import Signup from "./Pages/signup/signup";
import Electronics from "./Pages/Electronics/Electronics";
import Product from "./Pages/Product/Product";
import Order from "./Pages/Order/Order";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginEmail />} />
        <Route path="/loginpass" element={<LoginPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/order" element={<Order/>}/>
        <Route path="/details/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
