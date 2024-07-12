// Songs.jsx

import React, { useState } from 'react';
import axios from 'axios';
import getSongs from './getSongs'; // Import the SongsList component
import { useNavigate } from 'react-router-dom';
const Songs = () => {
  const [songName, setSongName] = useState('');
  const [file, setFile] = useState(null);
  const navigate = useNavigate(); 
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('songName', songName);
    formData.append('song', file);

    try {
      const response = await axios.post('{{server}}/songs/upload-song', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('File uploaded successfully', response.data);
      history.push('/songs-list');
    } catch (error) {
      console.error('Error uploading file', error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
        <h2 className="mb-4 text-2xl font-bold">Upload a Song</h2>
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="mb-4">
            <label className="block text-gray-700">Song Name</label>
            <input
              type="text"
              value={songName}
              onChange={(e) => setSongName(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Song File</label>
            <input
              type="file"
              accept="audio/*"
              onChange={handleFileChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Upload
          </button>
        </form>
        <h2 className="mb-4 text-2xl font-bold">Listen to Songs</h2>
        {/* Button to navigate to songs list page */}
        <button onClick={() => navigate('/getsong')} className="w-full p-2 mb-4 text-white bg-blue-500 rounded hover:bg-blue-600">
          View Songs
        </button>
      </div>
    </div>
  );
};

export default Songs;
