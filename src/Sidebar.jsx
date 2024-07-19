/*import React from 'react';
import Vstreamlogo from './Vstreamlogo2.png'; // Ensure you have the correct path

const Sidebar = ({ isSidebarOpen, toggleSidebar, navigateToVideoMode, navigateToSongs }) => {
  return (
    <>
      {isSidebarOpen && (
        <div className="flex-shrink-0 w-1/4 p-6 bg-black">
          <div className="space-y-6">
            <div className="flex items-center justify-center">
              <img src={Vstreamlogo} alt="Vstream Logo" className="w-24 h-24" />
              <span className="ml-4 text-4xl font-semibold">Vstream</span>
            </div>
            <button className="w-full py-3 text-3xl font-semibold text-white transition duration-300 bg-black rounded-lg hover:bg-gray-400" onClick={navigateToVideoMode}>
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
    </>
  );
};

export default Sidebar;
*/import React from 'react';
import Vstreamlogo from './Vstreamlogo2.png'; // Ensure you have the correct path

const Sidebar = ({ isSidebarOpen, toggleSidebar, navigateToVideoMode, navigateToSongs }) => {
  return (
    <>
      {isSidebarOpen && (
        <div className="flex-shrink-0 w-1/4 p-6 bg-black">
          <div className="space-y-6">
            <div className="flex items-center justify-center">
              <img src={Vstreamlogo} alt="Vstream Logo" className="w-24 h-24" />
              <span className="ml-4 text-4xl font-semibold">Vstream</span>
            </div>
            <button className="w-full py-3 text-3xl font-semibold text-white transition duration-300 bg-black rounded-lg hover:bg-gray-400" onClick={navigateToVideoMode}>
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
    </>
  );
};

export default Sidebar;
