import React, { useEffect, useState } from 'react';

const GetSongs = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch('https://vstream-jylj.onrender.com/api/v1/songs/get-songs')
      .then(response => response.json())
      .then(data => setSongs(data))
      .catch(error => console.error('Error fetching songs:', error));
  }, []);

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-3xl font-bold">Song List</h1>
      <ul>
        {songs.map(song => (
          <li key={song.id} className="p-4 mb-2 border rounded-lg shadow">
            <h2 className="text-2xl font-semibold">{song.title}</h2>
            <audio controls className="w-full mt-2">
              <source src={song.url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetSongs;
