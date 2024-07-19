import React, { useState } from 'react';
import axios from 'axios';
import loginbackground from './loginbackground.jpg';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    avatar: null,
    coverImage: null,
    fullName: '',
    email: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await axios.post('https://vstream-jylj.onrender.com/api/v1/users/register', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Registration successful', response.data);
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert('User with this email or username already exists.');
      } else {
        console.error('Error registering user', error);
        alert('Error registering user. Please try again later.');
      }
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen" >
      <form
        onSubmit={handleSubmit}
        className=""
      >
        <h1 className="mb-6 text-3xl font-bold text-center text-white ">Register</h1>
        {['username', 'password', 'fullName', 'email', 'description'].map((field) => (
          <div key={field} className="mb-6">
            <label
              htmlFor={field}
              className="block mb-2 text-sm font-medium text-gray-300 capitalize"
            >
              {field}
            </label>
            <input
              type={field === 'password' ? 'password' : 'text'}
              id={field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={`Enter your ${field}`}
              className="block w-full px-4 py-2 mt-1 text-white placeholder-gray-400 transition-colors duration-300 bg-gray-700 focus:outline-none sm:text-sm"
            />
          </div>
        ))}
        {['avatar', 'coverImage'].map((field) => (
          <div key={field} className="mb-6">
            <label
              htmlFor={field}
              className="block mb-2 text-sm font-medium text-gray-300 capitalize"
            >
              {field}
            </label>
            <input
              type="file"
              id={field}
              name={field}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-1 text-white placeholder-gray-400 transition-colors duration-300 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full px-4 py-2 text-sm font-medium text-white transition-transform duration-300 transform bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:scale-105"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
