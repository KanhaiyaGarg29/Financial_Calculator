import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";
import axios from 'axios'

 const Signup = () => {
    const [formData, setFormData] = useState({
        name:'',
        email: '',
        password: '',
      });

      const navigate = useNavigate();
      const handleChange = (e) => {
        // const { name, value } = e.target;
        // setFormData({
        //   ...formData,
        //   [name]: value,
        // });
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }));
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register',{formData}).then(result => console.log(result))
        .catch(err => console.log(err))
         navigate("/")
        // const isValidUser = formData.email && formData.password;
    
        // if (isValidUser) {
        //   navigate("/home");
        // } else {
        //   console.error("Invalid login credentials");
        // }
      };
  return (
    <div className='main-container'>
    <div className="login-container">
      <h2 className='login-heading'>Signup</h2>
      
      <form  onSubmit={handleSubmit} className="login-form">
      <div className="login-group">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Username"
            required
          />
        </div>
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

        

        <button type="submit" className="login-button button.effect-2">
          Signup
        </button>
      </form>
      
      <Link to="/">Already have an account? Login</Link>
    </div>

  </div>
);
}

export default Signup