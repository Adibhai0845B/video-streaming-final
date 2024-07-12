import React from 'react';
import { useNavigate } from 'react-router-dom';
import VideoCard from './VideoCard';
import Vstreamlogo from './Vstreamlogo.jpg';
import backg from './backg.jpg';

const MainContent = () => {
  const navigate = useNavigate();

  const navigateToSongs = () => {
    navigate('/songs');
  };

  return (
    <div className="flex min-h-screen text-white bg-center bg-cover" style={{ backgroundImage: `url(${backg})` }}>
      {/* Sidebar */}
      <div className="w-1/4 p-6 bg-gradient-to-b from-gray-900 to-gray-800 bg-opacity-80">
        <div className="mb-10 text-center">
          <img src={Vstreamlogo} alt="VStream logo" className="w-32 h-32 mx-auto mb-6 transition-transform duration-500 rounded-full hover:scale-110" />
          <h1 className="text-5xl font-extrabold text-indigo-400 transition-colors duration-500 hover:text-indigo-300">VStream</h1>
        </div>
        <div className="space-y-6">
          <button className="w-full py-3 text-xl font-semibold transition duration-300 bg-indigo-500 rounded-lg hover:bg-indigo-400">Video Mode</button>
          <button className="w-full py-3 text-xl font-semibold transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-400" onClick={navigateToSongs}>Audio Mode</button>
          <button className="w-full py-3 text-xl font-semibold transition duration-300 bg-green-500 rounded-lg hover:bg-green-400">Download</button>
          <nav className="mt-10 space-y-4">
            <a href="#" className="block px-4 py-3 text-lg transition duration-300 bg-gray-700 rounded-lg hover:bg-gray-600">Playlist</a>
            <a href="#" className="block px-4 py-3 text-lg transition duration-300 bg-gray-700 rounded-lg hover:bg-gray-600">Subscription</a>
            <a href="#" className="block px-4 py-3 text-lg transition duration-300 bg-gray-700 rounded-lg hover:bg-gray-600">Subscribers</a>
            <a href="#" className="block px-4 py-3 text-lg transition duration-300 bg-gray-700 rounded-lg hover:bg-gray-600">Watch History</a>
            <a href="#" className="block px-4 py-3 text-lg transition duration-300 bg-gray-700 rounded-lg hover:bg-gray-600">Liked Video</a>
          </nav>
        </div>
      </div>
      <div className="flex-grow p-10 bg-opacity-75 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="mb-10">
          <h2 className="mb-6 text-3xl font-semibold text-yellow-400">Recent Add</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <VideoCard title="Ve Yaara" image="https://th.bing.com/th/id/OIP.lqe3bGjsENPjsDDBkSmitwHaEK?w=279&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" duration="3:17" videoUrl="https://youtu.be/iSo9l950QLo?si=A5nGRi2fTeMIWyCq" />
            <VideoCard title="DEKHHA TENU" image="https://th.bing.com/th/id/OIP.pJ4yLpQXmm6kZAkzbsgUbgHaEo?w=275&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" duration="3:17" videoUrl="https://www.youtube.com/watch?v=example2" />
            <VideoCard title="Pehli Dafa" image="https://th.bing.com/th/id/OIP.UoGP2n4Kx-T33Gw9zYJ7SwAAAA?w=308&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" duration="3:17" videoUrl="https://www.youtube.com/watch?v=example3" />
          </div>
        </div>
        <div>
          <h2 className="mb-6 text-3xl font-semibold text-yellow-400">Popular Right Now</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <VideoCard title="Kahani Meri" image="" />
            <VideoCard title="Tu Hai" image="https://th.bing.com/th/id/OIP.EXbaWRIEb3GPCUM1KTFDLAHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" duration="3:17" videoUrl="https://www.youtube.com/watch?v=example5" />
            <VideoCard title="AAJ BHI" image="https://th.bing.com/th/id/OIP.c7h50kM1xmzWgdeO5kbxkwHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7" duration="3:17" videoUrl="https://www.youtube.com/watch?v=example6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
