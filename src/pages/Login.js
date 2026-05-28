import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(username, password);
    if (result.success) {
      toast.success('Login successful!');
      navigate('/');
    } else {
      setError('Invalid username or password');
      toast.error('Invalid username or password');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '80px auto', padding: '20px' }}>
      <div style={{ background: 'white', borderRadius: '20px', padding: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Login</h1>
        {error && <div style={{ color: 'red', textAlign: 'center', marginBottom: '20px' }}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required
            style={{ width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '10px', border: '2px solid #e0e0e0' }} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required
            style={{ width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '10px', border: '2px solid #e0e0e0' }} />
          <button type="submit" style={{ width: '100%', background: '#FFD700', padding: '12px', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>Login</button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '20px' }}>Don't have an account? <Link to="/signup" style={{ color: '#FFD700' }}>Sign Up</Link></p>
      </div>
    </div>
  );
}

export default Login;