import React from 'react';
import './AboutUs.css'; 
import about2 from '../assets/about2.jpg';
import about1 from '../assets/about1.jpg';
import about3 from '../assets/about3.jpg';



const AboutUs = () => {
  return (
    <div className="about-container">
     
  <section className="about-intro green-card">
    <h1>About <span className="highlight">MedEase</span></h1>
    <p>
      At MedEase, we believe healthcare should be accessible, trustworthy, and right at your fingertips.Our mission is to provide high-quality medicines and healthcare products with the ease of a click.
    </p>
  </section>



      <section className="card-section">
        <div className="about-card">
          <img src={about1} alt="Trusted Service" />
          <h3>Trusted Pharmacy</h3>
          <p>We partner only with licensed and reliable distributors to ensure every medicine is authentic.</p>
        </div>

        <div className="about-card">
        <img src={about2} alt="Fast Delivery" />

          <h3>Fast & Safe Delivery</h3>
          <p>Your orders are delivered quickly and safely, maintaining all necessary health protocols.</p>
        </div>

        <div className="about-card">
          <img src={about3} alt="Support Team" />
          <h3>24/7 Support</h3>
          <p>Our team is always ready to help you with your needs, queries, or emergencies.</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
