import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import backg from './backg.jpg';

const VideoMode = () => {
  const [videoName, setVideoName] = useState('');
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('videoName', videoName);
    formData.append('video', file);

    try {
      const response = await axios.post('https://vstream-jylj.onrender.com/api/v1/videos/upload-video', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('File uploaded successfully', response.data);
      navigate('/videos-list');
    } catch (error) {
      console.error('Error uploading file', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100" style={{ backgroundImage: `url(${backg})` }}>
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
        <h2 className="mb-4 text-2xl font-bold">Upload a Video</h2>
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="mb-4">
            <label className="block text-gray-700">Video Name</label>
            <input
              type="text"
              value={videoName}
              onChange={(e) => setVideoName(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Video File</label>
            <input
              type="file"
              accept="video/*"
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
        <h2 className="mb-4 text-2xl font-bold">Watch Videos</h2>
        <button onClick={() => navigate('/getvideos')} className="w-full p-2 mb-4 text-white bg-blue-500 rounded hover:bg-blue-600">
          View Videos
        </button>
      </div>
    </div>
  );
};

export default VideoMode;
