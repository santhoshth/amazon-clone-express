import './App.css';
import 'react-toastify/dist/ReactToastify.css';
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
import Register from './screens/Register';
import Account from './screens/Account';
import Profile from './screens/Profile';
import Shipping from './screens/Shipping';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import SearchProduct from './screens/SearchProduct';
import NotFound from './screens/NotFound';

// stripe public key
const stripePromise = loadStripe("pk_test_51KxVxUSGSdcNvrR9hr9VVKCOcI8hyhthnxdEvYxr0eCPTZ4JY8bQdLbideYnaqPilC6UOmeGfRFkGGGJZiXSaWCr00oGzEDBVK");

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<><Header /><Home /><Footer /></>} />
          <Route path="/search/:keyword" element={<><Header /><SearchProduct /><Footer /></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products/:id" element={<><Header /><SingleProduct /><Footer /></>} />
          <Route path="/cart" element={<><Header /><Checkout /></>} />
          <Route path="/cart/:id" element={<><Header /><Checkout /></>} />

          {/* Private Routes only for Users */}
          <Route path="/account" element={<><Header /><Account /><Footer /></>} />
          <Route path="/profile" element={<><Header /><Profile /><Footer /></>} />
          <Route path="/orders/:id" element={<><Header /><Orders /></>} />
          <Route path="/orders" element={<><Header /><Orders /></>} />
          <Route path="/shipping" element={<><Header /><Shipping /><Footer /></>} />
          <Route path="/payment" element={
            <>
              <Header />
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </>
          } />
          <Route path="*" element={<><NotFound /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
