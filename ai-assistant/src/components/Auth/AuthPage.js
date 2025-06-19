import React, { useState } from 'react';
import './AuthPage.css';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: '', password: '' });

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setForm({ email: '', password: '' });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const BASE_URL = 'http://localhost:5000/api';
    const endpoint = isLogin ? `${BASE_URL}/login` : `${BASE_URL}/signup`;

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok && data.token) {
        if(isLogin){
        localStorage.setItem('token', data.token);
        alert("Logged in successfully!");
        window.location.href = '/pdf'; 
      } else{
        alert("Sign up Successful! Please login!!!");
        setIsLogin(true);
        setForm({email:'',password:''});
      }
    }
    else {
        alert(data.message || 'Authentication failed');
      }
    } catch (err) {
      console.error(err);
      alert('Server error');
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <h2>{isLogin ? 'Login to Your Account' : 'Create a New Account'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <p onClick={toggleMode} className="auth-toggle">
          {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
}
