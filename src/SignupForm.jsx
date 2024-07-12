/*import React, { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    avatar: '',
    coverImage: '',
    fullName: '',
    email: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://vstream-jylj.onrender.com/api/v1/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg p-8 mx-auto mt-12 transition-all duration-500 transform bg-gray-800 border border-gray-200 rounded-lg shadow-lg hover:scale-105"
    >
      <h1 className="mb-6 text-3xl font-bold text-center text-white animate-pulse">Register</h1>
      {['username', 'password', 'avatar', 'coverImage', 'fullName', 'email', 'description'].map((field) => (
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
  );
};

export default SignupForm;
*/
import React, { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    avatar: '',
    coverImage: '',
    fullName: '',
    email: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://vstream-jylj.onrender.com/api/v1/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg p-8 mx-auto mt-12 transition-all duration-500 transform bg-gray-800 border border-gray-200 rounded-lg shadow-lg hover:scale-105"
    >
      <h1 className="mb-6 text-3xl font-bold text-center text-white animate-pulse">Register</h1>
      {['username', 'password', 'avatar', 'coverImage', 'fullName', 'email', 'description'].map((field) => (
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
  );
};

export default SignupForm;
