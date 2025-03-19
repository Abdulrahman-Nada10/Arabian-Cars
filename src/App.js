import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import AllProducts from "./pages/all products/AllProducts";
import SingelProducts from "./pages/single product/SingelProducts";
import Cart from "./pages/cart/Cart";
function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/products" element={<AllProducts/>} />
      <Route path="/product/:id" element={<SingelProducts/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
   </Router>
  )
}

export default App;
