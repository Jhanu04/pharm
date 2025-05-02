import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#4DB6AC',
    color: '#fff',
    padding: '4px 0',
    textAlign: 'center',
    fontSize: '1rem',
    position: 'relative',
    width: '100%',
    bottom: '0',
    marginTop: 'auto',
  };

  const footerTextStyle = {
    marginBottom: '10px',
  };

  const linkStyle = {
    color: '#ffffff',
    textDecoration: 'underline',
    marginLeft: '5px',
  };

  const mediaQueryStyles = {
    '@media (max-width: 768px)': {
      padding: '10px 0',
      fontSize: '0.9rem',
    },
    '@media (max-width: 480px)': {
      padding: '12px 0',
      fontSize: '0.8rem',
    },
  };

  return (
    <footer
      style={{
        ...footerStyle,
        ...(window.innerWidth <= 768 && mediaQueryStyles['@media (max-width: 768px)']),
        ...(window.innerWidth <= 480 && mediaQueryStyles['@media (max-width: 480px)']),
      }}
    >
      <p style={footerTextStyle}>© 2025 MedEase. All rights reserved.</p>
      <p>
        Contact us: 
        <a 
          href="mailto:support@medease.com" 
          style={linkStyle}
        >
          support@medease.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;

