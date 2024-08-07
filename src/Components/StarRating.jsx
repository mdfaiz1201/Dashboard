import React from 'react';

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const stars = Array.from({ length: totalStars }, (_, index) => index + 1);

  return (
    <div className="flex">
      {stars.map((star) => (
        <span
          key={star}
          className={`text-3xl ${
            star <= rating ? 'text-yellow-500' : 'text-gray-300'
          }`}
        >
          {star <= rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
