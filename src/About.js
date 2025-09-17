// src/pages/AboutUs.js
import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="about-intro">
        <h1>About Sonography</h1>
        <p>
          Welcome to Sonography, your trusted partner in providing high-quality diagnostic imaging services. We specialize in non-invasive ultrasound imaging to help diagnose and monitor medical conditions with accuracy and precision.
        </p>
        <p>
          Our team is dedicated to providing compassionate care, using the latest technologies to ensure the best outcomes for our patients. Whether you're visiting us for a routine exam or more specialized services, we are here to ensure your comfort and safety.
        </p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          At Sonography, our mission is to empower healthcare professionals and patients with accurate, detailed ultrasound imaging. We are committed to advancing medical diagnostics and delivering exceptional service every step of the way.
        </p>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://media.istockphoto.com/id/1270275531/photo/calm-sonographer-watching-his-movements-during-the-scanning.jpg?s=612x612&w=0&k=20&c=Uu5OAXP5ZIoMHwh7mXIbV7TKxiJY36MrdR6EeDS4Xck=" alt="John Doe" />
            <h3>Dr.Balavant Chavan</h3>
            <p>Lead Sonographer</p>
          </div>
          <div className="team-member">
            <img src="https://www.philips.com/c-dam/corporate/innovation-and-you/global/dec-2021/01-image-blog-ultrasound-epiq-aaa.jpg" alt="Jane Smith" />
            <h3>Dr.Yash Chavan</h3>
            <p>Ultrasound Technician</p>
          </div>
          <div className="team-member">
            <img src="https://www.shutterstock.com/image-photo/healthcare-teamwork-male-doctor-assistant-260nw-2303441667.jpg" alt="Emily Clark" />
            <h3>Dr.Hemant Patil</h3>
            <p>Patient Coordinator</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
