import React, { useState } from 'react';
import AuthCard from '../components/AuthCard';
import axios from '../services/api';
import toast from 'react-hot-toast';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    registration_key: 'NIHUB_SUPER_SECRET'
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('/auth/register', formData);
      setSuccess(response.data.message);
      toast.success('Suggestion submitted successfully!');
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <AuthCard title="Admin Registration">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm">Username</label>
          <input
            type="text"
            name="username"
            className="w-full border rounded px-3 py-2"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
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
        </div>
        <input type="hidden" name="registration_key" value={formData.registration_key} />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
        >
          Register
        </button>
      </form>

      {error && <p className="mt-4 text-red-500 text-sm">{error}</p>}
      {success && <p className="mt-4 text-green-600 text-sm">{success}</p>}
    </AuthCard>
  );
};

export default Register;
