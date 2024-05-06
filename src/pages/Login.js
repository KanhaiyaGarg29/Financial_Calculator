import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValidUser = formData.email && formData.password;

    if (isValidUser) {
      navigate("/home");
    } else {
      console.error("Invalid login credentials");
    }
  };

  return (
    <div className='main-container'>
      <div className="login-container">
        <h2 className='login-heading'>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="login-group">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              required
            />
          </div>

          <Link to="/forgot-password" className="forgot-password-link">
            Forgot Password?
          </Link> {/*forgot password link*/}

          <button type="submit" className="login-button button.effect-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;