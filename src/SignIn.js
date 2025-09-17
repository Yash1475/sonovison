import React, { useState } from 'react';
import './SignIn.css';  // Include your custom styles
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    pEmail: '',
    pPass: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:8080/patients/signin?pEmail=${formData.pEmail}&pPass=${formData.pPass}`
      )
      .then((response) => {
        const responseData = response.data;
        console.log('Response Data:', responseData);

        if (response) {
          window.alert('Login successful');
          navigate('/booking');
        } else {
          window.alert('Login failed: Invalid response format');
        }
      })
      .catch((error) => {
        console.error('Error during sign-in:', error);
        window.alert('Login failed');
    });
};


    return (
        <div className="signin-container">
            <div className="signin-form">
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="pEmail">Email:</label>
                        <input
                            type="email"
                            name='pEmail'
                            id="pEmail"
                            value={formData.pEmail}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="pPass">Password:</label>
                        <input
                            type="password"
                            name='pPass'
                            id="pPass"
                            value={formData.pPass}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit" className="signin-button">Sign In</button>
                </form>
                <p>Don't have an account? <a href="/signup">Sign Up</a></p>
            </div>
        </div>
    );
};


export default SignIn;







