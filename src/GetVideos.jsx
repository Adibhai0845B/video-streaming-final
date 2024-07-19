import React, { useEffect, useState } from 'react';

const GetVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('https://vstream-jylj.onrender.com/api/v1/videos/get-videos')
      .then(response => response.json())
      .then(data => setVideos(data))
      .catch(error => console.error('Error fetching videos:', error));
  }, []);

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-3xl font-bold">Video List</h1>
      <ul>
        {videos.map(video => (
          <li key={video.id} className="p-4 mb-2 border rounded-lg shadow">
            <h2 className="text-2xl font-semibold">{video.title}</h2>
            <video controls className="w-full mt-2">
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video element.
            </video>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetVideos;
