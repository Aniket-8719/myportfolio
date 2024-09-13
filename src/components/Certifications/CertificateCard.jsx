// CertificateCard.js
import React from 'react';

const CertificateCard = ({ image, title, description, link }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 max-w-sm hover:shadow-xl transition-shadow duration-300">
      <img className="w-full h-48 object-cover rounded-t-lg" src={image} alt={title} />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          View Certificate
        </a>
      </div>
    </div>
  );
};

export default CertificateCard;
