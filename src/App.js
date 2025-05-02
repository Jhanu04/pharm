import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Shop from './components/Shop';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import './App.css';
import Booking from './components/Booking';
import Footer from './components/Footer';
import LoginSignup from './components/LoginSignup';
import AboutUs from './components/Aboutus'; 

function App() {
  const [cart, setCart] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <NavBar />
        <div style={{ flex: '1' }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/shop"
              element={loggedInUser ? <Shop cart={cart} setCart={setCart} /> : <LoginSignup setLoggedInUser={setLoggedInUser} />}
            />
            <Route
              path="/cart"
              element={loggedInUser ? <Cart cart={cart} setCart={setCart} /> : <LoginSignup setLoggedInUser={setLoggedInUser} />}
            />
            <Route path="/booking" element={<Booking />} />
            <Route
              path="/login"
              element={<LoginSignup setLoggedInUser={setLoggedInUser} />}
            />
            <Route
              path="/about"
              element={<AboutUs />} 
            />
            <Route
              path="*"
              element={loggedInUser ? <Shop cart={cart} setCart={setCart} /> : <LoginSignup setLoggedInUser={setLoggedInUser} />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;




