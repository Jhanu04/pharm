import React from 'react';
import { useNavigate } from 'react-router-dom';
import pharBackground from '../assets/phar.jpg';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleShopClick = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      navigate('/shop');
    } else {
      alert('Please login or signup first!');
      navigate('/login');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          backgroundImage: `url(${pharBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          flex: '1',
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
          padding: '0 20px',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Welcome to <span style={{ color: '#4DB6AC' }}>MedEase 🩺</span>
        </h1>
        <p
          style={{
            fontSize: '1.5rem',
            marginBottom: '40px',
            textAlign: 'center',
          }}
        >
          Your trusted online pharmacy
        </p>
        <button
          onClick={handleShopClick}
          style={{
            padding: '15px 30px',
            fontSize: '1.2rem',
            backgroundColor: '#4DB6AB',
            color: '#fff',
            border: 'none',
            borderRadius: '30px',
            cursor: 'pointer',
            boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#00b8d4')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#4DB6AB')}
        >
          Shop Now
        </button>
      </div>

    
      <style>
        {`
          @media (max-width: 768px) {
            h1 {
              font-size: 2rem;
              text-align: center;
            }
            p {
              font-size: 1.2rem;
              text-align: center;
            }
            button {
              padding: 12px 25px;
              font-size: 1rem;
            }
          }

          @media (max-width: 480px) {
            h1 {
              font-size: 1.8rem;
            }
            p {
              font-size: 1rem;
            }
            button {
              padding: 10px 20px;
              font-size: 0.9rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LandingPage;






