import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from 'C:/Users/jhanu/Desktop/pharmacy-ecommerce/src/assets/medease.png';

const NavBar = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 10,
      width: '99%',
      zIndex: 1000,
      padding: '10px 20px',
      background: '#4DB6AC',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      color: 'white',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)'
    }}>
      {/* Logo */}
      <img src={logo} alt="MedEase Logo" style={{ width: '50px', height: 'auto', marginRight: '10px' }} />

      <div>
        <h3 style={{ margin: 0, fontSize: '24px' }}>MEDEASE</h3>
        <span style={{ fontSize: '14px', color: '#fff' }}>YOUR HEALTH,OUR PRIORITY</span>
      </div>

      {/* Navigation Links */}
      <div style={{ marginLeft: 'auto' }}>
        <Link to="/" style={linkStyle}><b>HOME</b></Link>
        <Link to="/about" style={linkStyle}><b>ABOUT US</b></Link>
        <Link to="/login" style={linkStyle}><b>REGISTER</b></Link>

        {!loggedInUser ? (
          <>
            <Link to="/login" style={linkStyle} onClick={() => navigate("/login")}><b>SHOP</b></Link>
            <Link to="/login" style={linkStyle} onClick={() => navigate("/login")}><b>CART</b></Link>
          </>
        ) : (
          <>
            <Link to="/shop" style={linkStyle}><b>SHOP</b></Link>
            <Link to="/cart" style={linkStyle}><b>CART</b></Link>
          </>
        )}
      </div>
    </nav>
  );
};

const linkStyle = {
  margin: '0 10px',
  color: 'white',
  textDecoration: 'none'
};

export default NavBar;





