import React from 'react'

function SlideHome() {
  return (
    <div>
       <nav>
        <ul>
          <li className="mb-4 transition duration-500 ease-in-out transform hover:scale-105">Video Mode</li>
          <li className="mb-4 transition duration-500 ease-in-out transform hover:scale-105">Audio Mode</li>
          <li className="mb-4 transition duration-500 ease-in-out transform hover:scale-105">Download</li>
        </ul>
        <hr className="my-8" />
        <ul>
          <li className="mb-4 transition duration-500 ease-in-out transform hover:scale-105">Playlist</li>
          <li className="mb-4 transition duration-500 ease-in-out transform hover:scale-105">Subscription</li>
          <li className="mb-4 transition duration-500 ease-in-out transform hover:scale-105">Watch History</li>
          <li className="mb-4 transition duration-500 ease-in-out transform hover:scale-105">Liked-Video</li>
        </ul>
      </nav>
    </div>
  )
}

export default SlideHome
 