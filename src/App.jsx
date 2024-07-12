import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import SignupForm from './SignupForm';
import Login from './Login';
import Logout from './Logout';
import ChangePassword from './ChangePassword';
import ForgetPassword from './ForgetPassword';
import MainContent from './MainContent';
import Profile from './Profile';
import Songs from './Songs';
import 'tailwindcss/tailwind.css';
import './App.css';
import getSongs from './getSongs';
import backg from './backg.jpg';
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim() === '') {
      alert('Please enter a search query.');
      return;
    }
    console.log('Search query:', searchQuery);
    // Add your search logic here
  };

  return (
    <Router>
      <div className="flex flex-col h-screen bg-center bg-cover" style={{ backgroundImage: `url(${backg})` }}>
        <div className="flex justify-between p-4 opacity-75">
          <NavigationButtons isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
        </div>
        <div className="flex justify-center p-4">
          <form onSubmit={handleSearchSubmit} className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="px-4 py-2 rounded-l-lg focus:outline-none"
            />
            <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-r-lg hover:bg-blue-600">
              Search
            </button>
          </form>
        </div>
        <Routes>
          <Route
            path="/signup"
            element={
              <div className="flex items-center justify-center min-h-screen bg-opacity-75">
                <div className="p-8 transition-all duration-500 transform bg-white rounded-lg shadow-lg hover:scale-105 animate-fade-in">
                  <SignupForm />
                </div>
              </div>
            }
          />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/getsong" element={<getSongs />} />
          <Route
            path="/*"
            element={
              <>
                <header className="flex items-center justify-between p-4 text-xl text-white bg-opacity-75">
                  {isAuthenticated && (
                    <button onClick={() => navigate('/profile')} className="text-3xl">
                      👤
                    </button>
                  )}
                </header>
                <div className="flex items-center justify-center flex-grow">
                  <button className="absolute right-0 m-4 btn-premium">Go Premium</button>
                </div>
                <div className="flex flex-col flex-grow bg-white bg-opacity-75">
                  <MainContent />
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

const NavigationButtons = ({ isAuthenticated, handleLogout }) => {
  const navigate = useNavigate();
  return (
    <div className="flex ml-auto space-x-4">
      <button onClick={() => navigate('/signup')} className="btn-indigo">
        Register
      </button>
      <button onClick={() => navigate('/login')} className="btn-indigo">
        Login
      </button>
      {isAuthenticated && (
        <>
          <button onClick={() => navigate('/profile')} className="btn-indigo">
            Profile
          </button>
          <button
            onClick={() => {
              navigate('/logout');
              handleLogout();
            }}
            className="btn-red"
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default App;
