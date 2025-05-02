import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const totalAmount = cart.reduce((sum, item) => {
    const numericPrice = parseFloat(item.price.replace('₹', ''));
    return sum + numericPrice * item.quantity;
  }, 0);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #e0f7fa, #ffffff)',
        padding: '40px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      {cart.length > 0 && (
  <h1 style={{ fontSize: '2.8rem', color: '#00796b', marginBottom: '30px' }}>
    Your Cart 🛒
  </h1>
)}


      {cart.length === 0 ? (
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <div
            style={{
              background: '#ffffff',
              padding: '40px',
              borderRadius: '20px',
              boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
              textAlign: 'center',
            }}
          >
            <p style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#555' }}>
              Your cart is empty
            </p>
            <button
              onClick={() => navigate('/shop')}
              style={{
                padding: '12px 25px',
                backgroundColor: '#00bcd4',
                border: 'none',
                borderRadius: '30px',
                color: '#fff',
                fontSize: '1.1rem',
                cursor: 'pointer',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              }}
            >
              Back to Shop
            </button>
          </div>
        </div>
      ) : (
        <>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px',
              width: '100%',
              maxWidth: '1200px',
              marginBottom: '50px',
            }}
          >
            {cart.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  padding: '20px',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'contain',
                    marginBottom: '20px',
                  }}
                />
                <h3 style={{ color: '#00796b', marginBottom: '10px' }}>{item.name}</h3>
                <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '10px' }}>
                  {item.description}
                </p>
                <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>
                  Price: ₹{parseFloat(item.price.replace('₹', '')) * item.quantity}
                </p>
                <p style={{ marginBottom: '20px' }}>
                  Quantity: {item.quantity}
                </p>
                <button
                  onClick={() => removeFromCart(idx)}
                  style={{
                    padding: '8px 20px',
                    backgroundColor: '#f44336',
                    border: 'none',
                    borderRadius: '20px',
                    color: '#fff',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div
            style={{
              background: '#ffffff',
              padding: '30px',
              borderRadius: '20px',
              boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
              width: '100%',
              maxWidth: '500px',
              textAlign: 'center',
            }}
          >
            <h2 style={{ marginBottom: '20px', color: '#00796b' }}>Cart Summary </h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
              <strong>Total Items:</strong> {totalItems}
            </p>
            <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
              <strong>Total Amount:</strong> ₹{totalAmount}
            </p>
            <button
              onClick={() => navigate('/booking')}
              style={{
                padding: '12px 30px',
                backgroundColor: '#00bcd4',
                border: 'none',
                borderRadius: '30px',
                color: '#fff',
                fontSize: '1.2rem',
                cursor: 'pointer',
                boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
              }}
            >
              Proceed to Booking 
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
