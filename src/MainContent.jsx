/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VideoCard from './VideoCard';
import Vstreamlogo from './Vstreamlogo.jpg';
import backg from './backg.jpg';

const MainContent = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const navigateToSongs = () => {
    navigate('/songs');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const video = () => {
    navigate('./VideoMode');
  };

  return (
    <div className="flex min-h-screen text-white bg-center bg-cover" style={{ backgroundImage: `url(${backg})` }}>
      {isSidebarOpen && (
        <div className="flex-shrink-0 w-1/4 p-6 bg-black">
          <div className="space-y-6">
            <div className="flex items-center justify-center">
              <img src={Vstreamlogo} alt="Vstream Logo" className="w-24 h-24" />
              <span className="ml-4 text-4xl font-semibold">Vstream</span>
            </div>
            <button className="w-full py-3 text-3xl font-semibold text-white transition duration-300 bg-black rounded-lg hover:bg-gray-400" onClick={video}>
              📸 Video Mode
            </button>
            <button className="w-full py-3 text-3xl font-semibold text-white transition duration-300 bg-black rounded-lg" onClick={navigateToSongs}>
              🎧 Audio Mode
            </button>
            <button className="w-full py-3 text-3xl font-semibold text-white transition duration-300 bg-black rounded-lg">
              ⬇ Download
            </button>
            <br></br>
            <br />
            <br />
            <hr />
            <nav className="mt-10 space-y-4">
              <a href="#" className="block px-4 py-3 text-3xl text-white transition duration-300 rounded-lg">
                ⏯ Playlist
              </a>
              <a href="#" className="block px-4 py-3 text-3xl text-white transition duration-300 bg-black rounded-lg">
                🎓 Subscription
              </a>
              <a href="#" className="block px-4 py-3 text-3xl text-white transition duration-300">
                🎓 Subscribers
              </a>
              <a href="#" className="block px-4 py-3 text-3xl text-white transition duration-300 bg-black rounded-lg hover:bg-gray-400">
                🚾 Watch History
              </a>
              <a href="#" className="block px-4 py-3 text-3xl text-white transition duration-300 bg-black rounded-lg hover:bg-gray-400">
                👍🏻 Liked Video
              </a>
            </nav>
          </div>
        </div>
      )}
      {isSidebarOpen && <div className="w-0.5 bg-gray-400"></div>}
      <div className={`flex-grow p-10 bg-opacity-75 bg-gradient-to-r from-black via-gray-900 to-black ${isSidebarOpen ? 'ml-0' : 'ml-0'}`}>
        <button className="py-3 text-4xl font-semibold transition duration-300 bg-black rounded-lg" onClick={toggleSidebar}>
          {isSidebarOpen ? '🟰' : '🟰'}
        </button>
        <div className="mt-6 mb-10">
          <h2 className="mb-6 text-3xl font-semibold text-white">Recent Add</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <VideoCard title="Ve Yaara" image="https://th.bing.com/th/id/OIP.lqe3bGjsENPjsDDBkSmitwHaEK?w=279&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" duration="3:17" videoUrl="https://youtu.be/iSo9l950QLo?si=A5nGRi2fTeMIWyCq" />
            <VideoCard title="DEKHHA TENU" image="https://th.bing.com/th/id/OIP.pJ4yLpQXmm6kZAkzbsgUbgHaEo?w=275&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" duration="3:17" videoUrl="https://www.youtube.com/watch?v=example2" />
            <VideoCard title="Pehli Dafa" image="https://th.bing.com/th/id/OIP.UoGP2n4Kx-T33Gw9zYJ7SwAAAA?w=308&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" duration="3:17" videoUrl="https://www.youtube.com/watch?v=example3" />
          </div>
        </div>
        <div>
          <h2 className="mb-6 text-3xl font-semibold">Popular Right Now</h2>
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
*/
import VideoCard from './VideoCard';
import React from 'react';
import backg from './backg.jpg';
const MainContent = () => {
  return (
    <div className="flex flex-col flex-grow min-h-screen p-6 text-white bg-center bg-cover" style={{ backgroundImage: `url(${backg})` }}>
      <div className="mt-6 mb-10">
        <h2 className="mb-6 text-3xl font-semibold">Recent Add</h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          <VideoCard image="https://th.bing.com/th/id/OIP.lqe3bGjsENPjsDDBkSmitwHaEK?w=279&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" videoUrl="https://youtu.be/iSo9l950QLo?si=A5nGRi2fTeMIWyCq" />
          <VideoCard image="https://th.bing.com/th/id/OIP.pJ4yLpQXmm6kZAkzbsgUbgHaEo?w=275&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" videoUrl="https://www.youtube.com/watch?v=example2" />
          <VideoCard image="https://th.bing.com/th/id/OIP.UoGP2n4Kx-T33Gw9zYJ7SwAAAA?w=308&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" videoUrl="https://www.youtube.com/watch?v=example3" />
        </div>
      </div>
      <div>
        <h2 className="mb-6 text-3xl font-semibold">Popular Right Now</h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          <VideoCard image="" />
          <VideoCard image="https://th.bing.com/th/id/OIP.EXbaWRIEb3GPCUM1KTFDLAHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" videoUrl="https://www.youtube.com/watch?v=example5" />
          <VideoCard image="https://th.bing.com/th/id/OIP.c7h50kM1xmzWgdeO5kbxkwHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7" videoUrl="https://www.youtube.com/watch?v=example6" />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
