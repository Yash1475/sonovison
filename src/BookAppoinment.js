// src/components/SonographyBooking.js
import React, { useState } from 'react';
import './BookAppoinment.css';

const SonographyBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sonographyType: 'Ultrasound',
    date: '',
    time: '',
  });

  const [errors, setErrors] = useState({});
  const [isBookingSuccess] = useState(false);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 
  const validateForm = () => {
    const formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = 'Email is invalid';
    if (!formData.phone) formErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone)) formErrors.phone = 'Phone number must be 10 digits';
    if (!formData.date) formErrors.date = 'Date is required';
    if (!formData.time) formErrors.time = 'Time is required';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

 
  const placeorder = async (e) => {
    e.preventDefault();
    const totalAmount = parseFloat(1000) * 100; 
  
    
    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded. Please check your internet connection.");
      return;
    }
  
    const options = {
      key: "rzp_test_0bV74XPpfIFULY", 
      amount: totalAmount,
      currency: "INR",
      name: "Ecommerce ",
      description: "Purchase Order",
      handler: function (response) {
        alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
        
      },
      prefill: {
        name: "Sneha Maske",
        email: "sneha@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      }
    };
  
    const razorpayInstance = new window.Razorpay(options);
    razorpayInstance.open();
  };

  return (
    <div className="sonography-booking">
      <h2>Book Your Sonography Appointment</h2>
      <form onSubmit={placeorder} className="booking-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleInputChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}3
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            className={errors.phone ? 'error' : ''}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>
        <div className="form-group">
          <select
            name="sonographyType"
            value={formData.sonographyType}
            onChange={handleInputChange}
          >
            <option value="Ultrasound">Ultrasound scanning</option>
            <option value="3D Imaging">Endoscopic ultrasound</option>
            <option value="Prenatal Scan">Therapeutic ultrasound</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className={errors.date ? 'error' : ''}
          />
          {errors.date && <span className="error-message">{errors.date}</span>}
        </div>
        <div className="form-group">
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            className={errors.time ? 'error' : ''}
          />
          {errors.time && <span className="error-message">{errors.time}</span>}
        </div>
        <button type="submit" className="submit-btn">Proceed to Payment</button>
      </form>

      {isBookingSuccess && (
        <div className="success-message">
          <h3>Your appointment has been successfully booked!</h3>
          <p>Thank you for booking with us. We will contact you soon.</p>
        </div>
      )}
    </div>
  );
};

export default SonographyBooking;
