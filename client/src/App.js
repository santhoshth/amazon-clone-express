import './App.css';
import Header from './components/Header';
import Home from './screens/Home';
import Checkout from './screens/Checkout';
import Payment from './screens/Payment';
import Orders from './screens/Orders';
import Login from './screens/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import Footer from './components/Footer';
import SingleProduct from './screens/SingleProduct';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/products/:category/:id" element={<><Header /><SingleProduct /><Footer /></>} />
          <Route path="/orders" element={<><Header /><Orders /></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<><Header /><Payment /></>} />
          <Route path="/checkout" element={<><Header /><Checkout /></>} />
          <Route path="/" element={<><Header /><Home /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
