import React from 'react';

function Card({ im, heading }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-80 hover:scale-105 transition-transform duration-300">
      <img src={im} alt={heading} className="w-full h-48 object-cover" />
      <div className="p-5 text-center">
        <h5 className="text-xl font-semibold text-gray-800 mb-2">{heading}</h5>
        <p className="text-gray-500 mb-4">
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </p>
        <a
          href="#"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-full transition-colors"
        >
          Order Now
        </a>
      </div>
    </div>
  );
}

export default Card;
