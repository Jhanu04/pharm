import React, { useState } from 'react';
import { Search } from 'lucide-react';
import paracetamolImg from '../assets/paracetamol.jpg';
import coughSyrupImg from '../assets/cough_syrup.jpg';
import vitaminD3Img from '../assets/vitamin_d3.jpg';
import cetirizineImg from '../assets/cetirizine.jpg';
import amoxicillinImg from '../assets/amoxicillin.jpg';
import ibuprofenImg from '../assets/ibuprofen.jpg';
import azithromycinImg from '../assets/azithromycin.jpg';
import calpolImg from '../assets/calpol.jpg';
import allegraImg from '../assets/allegra.jpg';
import pantoprazoleImg from '../assets/pantoprazole.jpg';
import doloImg from '../assets/dolo.jpg';
import combiflamImg from '../assets/combiflam.jpg';
import aspirinImg from '../assets/aspirin.jpg';
import montelukastImg from '../assets/montelukast.jpg';
import metforminImg from '../assets/metformin.jpg';
import omezImg from '../assets/omez.jpg';
import glucovanceImg from '../assets/glucovance.jpg';
import avilImg from '../assets/avil.jpg';
import neurobionImg from '../assets/neurobion.jpg';
import rantacImg from '../assets/rantac.jpg';

const Shop = ({ cart, setCart }) => {
  const [popupMsg, setPopupMsg] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const medicines = [
    { id: 1, name: 'Paracetamol', price: '₹20', description: 'Relieves fever and mild pain.', image: paracetamolImg },
    { id: 2, name: 'Cough Syrup', price: '₹50', description: 'Soothes cough and sore throat.', image: coughSyrupImg },
    { id: 3, name: 'Vitamin D3', price: '₹150', description: 'Boosts bone strength and immunity.', image: vitaminD3Img },
    { id: 4, name: 'Cetirizine', price: '₹15', description: 'Relieves allergy symptoms.', image: cetirizineImg },
    { id: 5, name: 'Amoxicillin', price: '₹75', description: 'Antibiotic for bacterial infections.', image: amoxicillinImg },
    { id: 6, name: 'Ibuprofen', price: '₹30', description: 'Reduces inflammation and pain.', image: ibuprofenImg },
    { id: 7, name: 'Azithromycin', price: '₹85', description: 'Treats chest and throat infections.', image: azithromycinImg },
    { id: 8, name: 'Calpol', price: '₹25', description: 'Fever reducer and pain reliever.', image: calpolImg },
    { id: 9, name: 'Allegra', price: '₹45', description: 'Relieves sneezing and itching.', image: allegraImg },
    { id: 10, name: 'Pantoprazole', price: '₹60', description: 'Reduces stomach acid.', image: pantoprazoleImg },
    { id: 11, name: 'Dolo 650', price: '₹22', description: 'Used for fever and body pain.', image: doloImg },
    { id: 12, name: 'Combiflam', price: '₹35', description: 'Painkiller for joint pain.', image: combiflamImg },
    { id: 13, name: 'Aspirin', price: '₹40', description: 'Reduces pain, fever, and inflammation.', image: aspirinImg },
    { id: 14, name: 'Montelukast', price: '₹90', description: 'Treats allergies and asthma.', image: montelukastImg },
    { id: 15, name: 'Metformin', price: '₹65', description: 'Controls blood sugar levels.', image: metforminImg },
    { id: 16, name: 'Omez', price: '₹55', description: 'Used to treat acid reflux and ulcers.', image: omezImg },
    { id: 17, name: 'Glucovance', price: '₹120', description: 'Manages type 2 diabetes.', image: glucovanceImg },
    { id: 18, name: 'Avil 25', price: '₹18', description: 'Relieves allergic skin conditions.', image: avilImg },
    { id: 19, name: 'Neurobion Forte', price: '₹85', description: 'Supports nerve health and energy.', image: neurobionImg },
    { id: 20, name: 'Rantac 150', price: '₹40', description: 'Relieves acidity and heartburn.', image: rantacImg },
  ];

  const filteredMeds = medicines.filter(
    (med) =>
      med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      med.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getQuantity = (id) => {
    const item = cart.find(item => item.id === id);
    return item ? item.quantity : 0;
  };

  const increment = (medicine) => {
    const exists = cart.find(item => item.id === medicine.id);
    if (exists) {
      setCart(cart.map(item =>
        item.id === medicine.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...medicine, quantity: 1 }]);
    }
    setPopupMsg(`${medicine.name} added to cart!`);
    setTimeout(() => setPopupMsg(''), 1500);
  };

  const decrement = (medicine) => {
    const exists = cart.find(item => item.id === medicine.id);
    if (exists.quantity === 1) {
      setCart(cart.filter(item => item.id !== medicine.id));
    } else {
      setCart(cart.map(item =>
        item.id === medicine.id ? { ...item, quantity: item.quantity - 1 } : item
      ));
    }
  };

  return (
    <div style={{ padding: '40px 20px', background: 'linear-gradient(to right, #e3f2fd, #ffffff)', fontFamily: 'Poppins, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#4DB6AC', marginBottom: '30px', fontSize: '2.8rem' }}>Available Medicines 🩺</h1>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '10px 20px',
          borderRadius: '30px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: '90%', maxWidth: '500px'
        }}>
          <Search size={20} style={{ marginRight: '10px', color: '#777' }} />
          <input
            type="text"
            placeholder="Search by name or condition..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ border: 'none', outline: 'none', width: '100%', fontSize: '1rem', backgroundColor: 'transparent', color: '#333' }}
          />
        </div>
      </div>

      {popupMsg && (
        <div style={{
          backgroundColor: '#c8e6c9', color: '#2e7d32', padding: '10px 20px',
          borderRadius: '10px', textAlign: 'center', marginBottom: '20px',
          fontWeight: '500', maxWidth: '400px', margin: '10px auto'
        }}>
          ✅ {popupMsg}
        </div>
      )}

      <div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 250px))',
  justifyContent: 'center',
  gap: '30px',
  marginTop: '20px'
}}>

        {filteredMeds.length === 0 ? (
          <div style={{
            gridColumn: '1/-1', textAlign: 'center', fontSize: '1.5rem',
            color: '#757575'
          }}>
            Oops! No medicines found. 💬 <br /> Try a different name or symptom!
          </div>
        ) : (
          filteredMeds.map((med) => {
            const quantity = getQuantity(med.id);
            return (
              <div key={med.id} style={{
                backgroundColor: '#ffffff', borderRadius: '20px', padding: '20px',
                textAlign: 'center', boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease'
              }}>
                <img src={med.image} alt={med.name} style={{
                  width: '100%', height: '180px', objectFit: 'cover',
                  borderRadius: '15px', marginBottom: '15px'
                }} />
                <h3 style={{ color: '#0288d1', fontSize: '1.3rem', marginBottom: '10px' }}>{med.name}</h3>
                <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '10px' }}>{med.description}</p>
                <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#2e7d32', marginBottom: '15px' }}>{med.price}</p>

                {quantity > 0 ? (
                  <div style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    gap: '15px'
                  }}>
                    <button onClick={() => decrement(med)} style={{
                      padding: '6px 14px', borderRadius: '50%', backgroundColor: '#ef9a9a',
                      border: 'none', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer'
                    }}>−</button>
                    <span style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{quantity}</span>
                    <button onClick={() => increment(med)} style={{
                      padding: '6px 14px', borderRadius: '50%', backgroundColor: '#81c784',
                      border: 'none', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer'
                    }}>+</button>
                  </div>
                ) : (
                  <button onClick={() => increment(med)} style={{
                    padding: '10px 20px', backgroundColor: '#00acc1', color: '#fff',
                    border: 'none', borderRadius: '30px', cursor: 'pointer', fontSize: '1rem'
                  }}>
                    Add to Cart
                  </button>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Shop;

