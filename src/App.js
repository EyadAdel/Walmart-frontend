import Home from "./Pages/Home/Home";
import Account from "./Pages/AccountPage/Account";
import { Route, Routes } from "react-router-dom";
import LoginEmail from "./Pages/loginEmail/login";
import LoginPassword from "./Pages/loginPassword/loginPassword";
import Signup from "./Pages/signup/signup";
import Electronics from "./Pages/Electronics/Electronics";
import Product from "./Pages/Product/Product";

import { useState } from "react";

import Order from "./Pages/Order/Order";
import Reorder from "./Pages/MyItems/Reorder";
import Lists from "./Pages/MyItems/Lists";
import Registeres from "./Pages/MyItems/Registeres";
import CustomerList from "./Pages/MyItems/CustomerList";



function App() {
  const [email, setEmail] = useState("");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginEmail setEmail={setEmail} />} />
        <Route path="/loginpass" element={<LoginPassword email={email} />} />
        <Route path="/signup" element={<Signup email={email} />} />
        <Route path="/account" element={<Account />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/order" element={<Order/>}/>
        <Route path="/details/:id" element={<Product />} />
        <Route path="/reorder" element={<Reorder/>} />
        <Route path="/lists" element={<Lists/>} />
        <Route path="/registries" element={<Registeres/>} />
        <Route path="/customerlist" element={<CustomerList/>} />
      </Routes>
    </div>
  );
}

export default App;
