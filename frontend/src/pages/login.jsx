import React, { useState } from 'react';
import AuthCard from '../components/AuthCard';
import axios from '../services/api';
import toast from 'react-hot-toast';


const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('/auth/login', formData);
      localStorage.setItem('token', response.data.token);
      window.location.href = '/dashboard';
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <AuthCard title="Admin Login">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm">Password</label>
          <input
            type="password"
            name="password"
            className="w-full border rounded px-3 py-2"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <p className="text-xs mt-1 text-gray-400">Hint: The password is "admin123".</p>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
        >
          Login
        </button>
      </form>
      {error && <p className="mt-4 text-red-500 text-sm">{error}</p>}
    </AuthCard>
  );
};

export default Login;
