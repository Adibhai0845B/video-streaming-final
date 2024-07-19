import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginbackground from './loginbackground.jpg'; // Ensure the correct path to your image

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`https://vstream-jylj.onrender.com/api/v1/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful', data);
        onLogin(); // Call the onLogin function to update the authentication state
        navigate('/'); // Redirect to home page or another page after successful login
      } else {
        console.error('Login failed', data);
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('An error occurred', error);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r" style={{ backgroundImage: `url(${loginbackground})` }}>
      <div className="w-full max-w-md p-8 space-y-6 transition duration-500 transform rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl bg-opacity-80">
        <h2 className="text-3xl font-extrabold text-center text-white animate-bounce">Login</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="username" className="sr-only">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="relative block w-full px-3 py-2 text-white placeholder-gray-400 transition duration-500 ease-in-out transform bg-gray-700 border border-gray-600 rounded-none appearance-none rounded-t-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username or E-mail"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full px-3 py-2 text-white placeholder-gray-400 transition duration-500 ease-in-out transform bg-gray-700 border border-gray-600 rounded-none appearance-none rounded-b-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="text-sm text-red-500">
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition-transform duration-500 transform bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:scale-110"
              disabled={loading}
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <Link
              to="/forget-password"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forget Password
            </Link>
            <Link
              to="/change-password"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              Change Password
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
