import React, { useState, useEffect } from 'react';

const Booking = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setName(user.name); 
      setPhone(user.phone);  
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #ffffff, #e0f7fa)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px 20px',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <div
        style={{
          background: '#ffffff',
          padding: '40px',
          borderRadius: '20px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', color: '#00796b', marginBottom: '30px' }}>
          Booking Confirmation 
        </h1>

        {isSubmitted ? (
          <div>
            <p style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#4caf50' }}>
              Thank you for choosing MedEase, {name}! 
            </p>
            <p style={{ fontSize: '1.2rem', color: '#555' }}>
              Your order will be processed shortly!  
              <br />Your medicines will be delivered to your address.
            </p>
          </div>
        ) : (
          <div>
            <p style={{ marginBottom: '30px', fontSize: '1.2rem', color: '#555' }}>
              Please fill in your details to complete the order:
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Name Input Field */}
              <div style={{ textAlign: 'left' }}>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                  Full Name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Enter your full name"
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '10px',
                    border: '1px solid #ccc',
                    outline: 'none',
                  }}
                />
              </div>

              
              <div style={{ textAlign: 'left' }}>
                <label htmlFor="address" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                  Delivery Address:
                </label>
                <textarea
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  placeholder="Enter your delivery address"
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '10px',
                    border: '1px solid #ccc',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              <div style={{ textAlign: 'left' }}>
                <label htmlFor="phone" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                  Phone Number:
                </label>
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder="Enter your phone number"
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '10px',
                    border: '1px solid #ccc',
                    outline: 'none',
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  padding: '15px',
                  backgroundColor: '#00bcd4',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '30px',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  marginTop: '10px',
                  boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#0097a7';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#4DB6AC';
                }}
              >
                Confirm Order 
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;


