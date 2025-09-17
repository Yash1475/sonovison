import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './SignUp.css';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({ 
    pNumber:'',
    pName: '',
    pEmail: '',
    pPass: '',
    confirmPassword: '',
  });
  const [errors] = useState({});

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     setIsSignedUp(true);
  //     alert('Signup Successful!');
  //     localStorage.setItem('isSignedUp', 'true'); // Save signup state in localStorage
  //     // navigate('/signin'); // Use navigate() to redirect
  //   }
  // };


  const handleSubmit = (e) => {
    e.preventDefault();
    try {
        if (formData.pPass === formData.confirmPassword) {
            axios.post("http://localhost:8080/patients/signup", formData)
                .then(() => {
                    window.alert('Congratulations!!! Your Registration is Successful');
                    setFormData({
                        pNumber:'',
                        pName:'',
                        pEmail:'',
                        pPass:'',
                        confirmPassword:''
                    });
                })
                .catch(error => {
                    window.alert('An error occurred during registration', error);
                });
            // navigate('/');
        } else {
            window.alert('Passwords do not match');
        }
    } catch (e) {
        window.alert('An error occurred during registration', e);
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup for Our Services</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <input
            type="text"
            name="pName"
            placeholder="Full Name"
            value={formData.pName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="pEmail"
            placeholder="Email Address"
            value={formData.pEmail}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="pNumber"
            placeholder="Mobile Number"
            value={formData.pNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="pPass"
            placeholder="Password"
            value={formData.pPass}
            onChange={handleInputChange}
            className={errors.password ? 'error' : ''}
            required
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
        <div className="form-group">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className={errors.confirmPassword ? 'error' : ''}
            required
          />
          {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
        </div>
        <button type="submit" className="btn-submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
