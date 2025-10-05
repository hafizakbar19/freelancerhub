import { useState } from 'react';
import API from '../services/api';

const CreateJob = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    budget: '',
    deadline: '',
    paid: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/jobs', formData);
      alert('Job created!');
    } catch (err) {
      console.error(err.response?.data?.message || 'Error creating job');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" onChange={handleChange} />
      <textarea name="description" placeholder="Description" onChange={handleChange} />
      <input name="category" placeholder="Category" onChange={handleChange} />
      <input name="budget" type="number" placeholder="Budget" onChange={handleChange} />
      <input name="deadline" type="date" onChange={handleChange} />
      <label>
        <input name="paid" type="checkbox" checked={formData.paid} onChange={handleChange} />
        Paid
      </label>
      <button type="submit">Create Job</button>
    </form>
  );
};

export default CreateJob;