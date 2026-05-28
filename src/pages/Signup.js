import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

function Signup() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
    role: 'student'
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    console.log("Form submitted:", form);
    
    if (form.password !== form.password2) {
      setError("Passwords do not match");
      toast.error("Passwords do not match");
      return;
    }
    
    try {
      
      const response = await axios.post('/api/auth/register/', {
        username: form.username,
        email: form.email,
        password: form.password,
        password2: form.password2,
        role: form.role
      });
      
      console.log("Success:", response.data);
      setSuccess("Registration successful! Redirecting to login...");
      toast.success("Registration successful! Please login.");
      setTimeout(() => navigate('/login'), 2000);
      
    } catch (err) {
      console.log("Error:", err.response?.data);
      toast.error("Registration failed. Please try again.");
      if (err.response?.data?.password) {
        setError(err.response.data.password.join(', '));
      } else if (err.response?.data?.username) {
        setError(err.response.data.username.join(', '));
      } else {
        setError("Registration failed. Please try again.");
      }
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '60px auto', padding: '20px' }}>
      <div style={{ background: 'white', borderRadius: '20px', padding: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
          Sign <span style={{ color: '#FFD700' }}>Up</span>
        </h1>
        
        {error && <div style={{ background: '#fee2e2', color: 'red', padding: '10px', borderRadius: '10px', marginBottom: '20px' }}>{error}</div>}
        {success && <div style={{ background: '#d1fae5', color: 'green', padding: '10px', borderRadius: '10px', marginBottom: '20px' }}>{success}</div>}
        
        <form onSubmit={handleSubmit}>
          <input name="username" placeholder="Username" value={form.username} onChange={handleChange} required
            style={{ width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '10px', border: '2px solid #e0e0e0' }} />
          
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required
            style={{ width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '10px', border: '2px solid #e0e0e0' }} />
          
          <input name="password" type="password" placeholder="Password (min 8 characters)" value={form.password} onChange={handleChange} required
            style={{ width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '10px', border: '2px solid #e0e0e0' }} />
          
          <input name="password2" type="password" placeholder="Confirm Password" value={form.password2} onChange={handleChange} required
            style={{ width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '10px', border: '2px solid #e0e0e0' }} />
          
          <select name="role" value={form.role} onChange={handleChange}
            style={{ width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '10px', border: '2px solid #e0e0e0' }}>
            <option value="student">🎓 Student - Find Tutors</option>
            <option value="tutor">👨‍🏫 Tutor - Teach Students</option>
          </select>
          
          <button type="submit"
            style={{ width: '100%', background: '#FFD700', color: '#111827', padding: '12px', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>
            Create Account
          </button>
        </form>
        
        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          Already have an account? <Link to="/login" style={{ color: '#FFD700' }}>Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;