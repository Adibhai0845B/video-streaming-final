import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch(`https://vstream-jylj.onrender.com/api/v1/users/logout`
        , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });

      if (response.ok) {
        console.log('Logout successful');
        onLogout(); // Call the onLogout function to update the authentication state
        navigate('/login'); // Redirect to login page after logout
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 font-medium text-white transition-transform duration-300 transform bg-red-600 rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 hover:scale-105"
    >
      Logout
    </button>
  );
};

export default Logout;
