import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleChangePassword = async (e) => {
    e.preventDefault();

    const response = await fetch('https://vstream-jylj.onrender.com/api/v1/users/change-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ oldPassword, newPassword }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('Password change successful', data);
      navigate('/'); // Redirect to home page or another page after successful password change
    } else {
      console.error('Password change failed', data);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 transition duration-500 transform bg-gray-800 rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-extrabold text-center text-white animate-bounce">Change Password</h2>
        <form className="mt-8 space-y-6" onSubmit={handleChangePassword}>
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="old-password" className="sr-only">Old Password</label>
              <input
                id="old-password"
                name="oldPassword"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full px-3 py-2 text-white placeholder-gray-400 transition duration-500 ease-in-out transform bg-gray-700 border border-gray-600 rounded-none appearance-none rounded-t-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Old Password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="new-password" className="sr-only">New Password</label>
              <input
                id="new-password"
                name="newPassword"
                type="password"
                autoComplete="new-password"
                required
                className="relative block w-full px-3 py-2 text-white placeholder-gray-400 transition duration-500 ease-in-out transform bg-gray-700 border border-gray-600 rounded-none appearance-none rounded-b-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition-transform duration-500 transform bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:scale-110"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;

