import React from 'react';

const VideoCard = ({ title, image, duration, videoUrl }) => {
  return (
    <div className="relative overflow-hidden transition-transform transform bg-gray-800 rounded-lg shadow-lg hover:scale-105">
      <img src={image} alt={title} className="object-cover w-full h-48" />
      <div className="p-4">
        <h3 className="mb-2 text-2xl font-bold text-white">{title}</h3>
        <p className="text-gray-400">{duration}</p>
        <a href={videoUrl} className="inline-block mt-4 text-lg font-semibold text-indigo-400 transition duration-300 hover:text-indigo-200">
          Watch Now
        </a>
      </div>
    </div>
  );
};

export default VideoCard;
