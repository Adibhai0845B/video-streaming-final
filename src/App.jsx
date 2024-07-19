/*import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import SignupForm from './SignupForm';
import Login from './Login';
import Logout from './Logout';
import ChangePassword from './ChangePassword';
import ForgetPassword from './ForgetPassword';
import MainContent from './MainContent';
import Profile from './Profile';
import Songs from './Songs';
import VideoMode from './VideoMode';
import GetSongs from './GetSongs';
import GetVideos from './GetVideos';
import 'tailwindcss/tailwind.css';
import './App.css';
import backg from './backg.jpg';
import Vstreamlogo from './Vstreamlogo2.png';
import quote from './quote.png';
import loginbackground from './loginbackground.jpg';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

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

  const isAuthPage = location.pathname === '/signup' || location.pathname === '/login';

  return (
    <div className={`flex flex-col h-screen ${!isAuthPage ? 'bg-center bg-cover' : ''}`} style={{ backgroundImage: !isAuthPage ? `url(${backg})` : '' }}>
      {!isAuthPage && (
        <>
          <div className="flex justify-between p-4 opacity-75">
            <NavigationButtons isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
          </div>
          <div className="flex justify-center p-4">
            <form onSubmit={handleSearchSubmit} className="flex items-center">
              <input
                type="text"
                placeholder="🔎 Explore"
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-56 px-4 py-2 bg-pink-200 rounded-l-lg h-587 focus:outline-none"
              />
              <button type="submit" className="px-4 py-2 text-white rounded-r-lg">
                Search
              </button>
            </form>
          </div>
          <div className="flex flex-col items-center p-4">
            <div className="mb-4 text-center">
              <img src={quote} alt="Quote" className="w-400 h-100" />
            </div>
          </div>
        </>
      )}
      <Routes>
        <Route
          path="/signup"
          element={
            <div
              className="flex items-center justify-center min-h-screen"
              style={{ backgroundImage: `url(${loginbackground})` }}
            >
              <div className="p-8 transition duration-500 transform rounded-lg hover:scale-105">
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
        <Route path="/Getsong" element={<GetSongs />} />
        <Route path="/videoMode" element={<VideoMode />} />
        <Route path="/Getvideos" element={<GetVideos />} />
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
              <div className="flex flex-col flex-grow bg-white bg-opacity-75">
                <MainContent />
              </div>
            </>
          }
        />
      </Routes>
    </div>
  );
};

const NavigationButtons = ({ isAuthenticated, handleLogout }) => {
  const navigate = useNavigate();
  return (
    <div className="flex ml-auto space-x-4">
      <button onClick={() => navigate('/signup')} className="px-4 py-2 text-lg text-white">
        Register
      </button>
      <button onClick={() => navigate('/login')} className="px-4 py-2 text-lg text-white">
        Login
      </button>
      <button onClick={() => navigate('/premium')} className="px-4 py-2 text-lg text-white">
        Go Premium
      </button>
      <button onClick={() => navigate('/chat')} className="px-4 py-2 text-lg text-white">
        💬 Chat
      </button>
      {isAuthenticated && (
        <>
          <button onClick={() => navigate('/profile')} className="px-4 py-2 text-lg text-white">
            Profile
          </button>
          <button
            onClick={() => {
              navigate('/logout');
              handleLogout();
            }}
            className="px-4 py-2 text-lg text-white"
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default App;
*/
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import SignupForm from './SignupForm';
import Login from './Login';
import Logout from './Logout';
import ChangePassword from './ChangePassword';
import ForgetPassword from './ForgetPassword';
import MainContent from './MainContent';
import Profile from './Profile';
import Songs from './Songs';
import VideoMode from './VideoMode';
import GetSongs from './GetSongs';
import GetVideos from './GetVideos';
import Sidebar from './Sidebar';
import 'tailwindcss/tailwind.css';
import './App.css';
import backg from './backg.jpg';
import quote from './quote.png'; // Import the quote image
import loginbackground from './loginbackground.jpg';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

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

  const isAuthPage = location.pathname === '/signup' || location.pathname === '/login';

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`flex h-screen ${!isAuthPage ? 'bg-center bg-cover' : ''}`} style={{ backgroundImage: !isAuthPage ? `url(${backg})` : '' }}>
      {!isAuthPage && (
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          navigateToVideoMode={() => navigate('/videoMode')}
          navigateToSongs={() => navigate('/songs')}
        />
      )}
      <div className="flex flex-col flex-grow">
        {!isAuthPage && (
          <>
            <div className="flex justify-between p-4 opacity-75">
              <div className="flex-grow"></div> {/* Spacer to push buttons to the right */}
              <NavigationButtons isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
            </div>
            <div className="flex flex-col items-center p-4">
              <form onSubmit={handleSearchSubmit} className="flex items-center mb-4">
                <input
                  type="text"
                  placeholder="🔎 Explore"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-56 px-4 py-2 bg-pink-200 rounded-l-lg focus:outline-none"
                />
                <button type="submit" className="px-4 py-2 font-semibold text-white transition duration-300 bg-blue-500 rounded-r-lg hover:bg-gray-400">
                  Search
                </button>
              </form>
              <img src={quote} alt="Quote" className="mb-4 w-240" /> {/* Increased size of quote image */}
            </div>
          </>
        )}
        <div className="flex-grow"> {/* Push MainContent down */}
          <Routes>
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
            <Route path="/changepassword" element={<ChangePassword />} />
            <Route path="/forgetpassword" element={<ForgetPassword />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/songs" element={<Songs />} />
            <Route path="/videoMode" element={<VideoMode />} />
            <Route path="/getSongs" element={<GetSongs />} />
            <Route path="/getVideos" element={<GetVideos />} />
            <Route path="/" element={<MainContent />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

const NavigationButtons = ({ isAuthenticated, handleLogout }) => {
  const navigate = useNavigate();

  return (
    <div className="flex space-x-6">
      <button
        className="px-4 py-2 text-xl font-semibold text-white transition duration-300 rounded-lg"
        onClick={() => navigate('/chat')}
      >
        💬 Chat
      </button>
      <button
        className="px-4 py-2 text-xl font-semibold text-white transition duration-300 rounded-lg"
        onClick={() => navigate('/gopremium')}
      >
        Go Premium
      </button>
      {isAuthenticated ? (
        <>
          <button
            className="px-4 py-2 text-xl font-semibold text-white transition duration-300 rounded-lg hover:bg-gray-400"
            onClick={() => navigate('/profile')}
          >
            Profile
          </button>
          <button
            className="px-4 py-2 text-xl font-semibold text-white transition duration-300 rounded-lg hover:bg-gray-400"
            onClick={handleLogout}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <button
            className="px-4 py-2 text-xl font-semibold text-white transition duration-300 rounded-lg hover:bg-gray-400"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
          <button
            className="px-4 py-2 text-xl font-semibold text-white transition duration-300 rounded-lg hover:bg-gray-400"
            onClick={() => navigate('/signup')}
          >
            Signup
          </button>
        </>
      )}
    </div>
  );
};

export default App;
