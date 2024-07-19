import React from 'react';

const VideoCard = ({ title, image, duration, videoUrl }) => {
  return (
    <div className="relative overflow-hidden transition-transform transform bg-gray-800 rounded-lg shadow-lg hover:scale-105">
      <a href={videoUrl} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} className="object-cover w-full h-48" />
      </a>
    </div>
  );
};

export default VideoCard;
