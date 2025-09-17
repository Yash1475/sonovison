// src/Home.js
import React from 'react';
import Card from './Card';
import Footer from './Footer';  // Import Footer
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Sonovision</h1>
        <p>Your health, our priority. Discover advanced imaging solutions.</p>
      </section>
      <div className="home-cards">
        <Card
          title="Ultrasound Scanning"
          description="An ultrasound scan, also known as a sonogram. Get accurate and real-time images for the diagnosis."
          image="https://www.shutterstock.com/image-photo/doctor-using-ultrasound-machine-work-260nw-1179312421.jpg"
          
        />
        <Card
          title="Endoscopic ultrasound"
          description="Advanced 3D imaging for better clarity and precision."
          image="https://www.shutterstock.com/image-photo/modern-medical-equipment-clinic-ultrasound-260nw-2411982811.jpg"
        />
        <Card
          title="Therapeutic ultrasound"
          description="Ensure the health of both mother and baby with our detailed scans."
          image="https://www.shutterstock.com/image-photo/modern-ultrasound-machine-against-white-260nw-1329861968.jpg"
        />
      </div>
      <Footer />  {/* Add Footer component here */}
    </div>
  );
};

export default Home;
