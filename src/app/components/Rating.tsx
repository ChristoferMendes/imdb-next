'use client';

import { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface RatingProps {
  rating: number;
}

function renderStars(rating: number, onHover: (rating: number) => void): JSX.Element[] {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const starElements = Array.from({ length: fullStars }, (_, i) => (
    <FaStar
      key={i}
      className="text-amber-600 fill-current cursor-pointer text-3xl md:text-xl"
      onMouseEnter={() => onHover(i + 1)}
      onMouseLeave={() => onHover(0)}
      onClick={() => onHover(i + 1)}
    />
  ));

  if (hasHalfStar) {
    starElements.push(
      <FaStarHalfAlt
        key={fullStars}
        className="text-amber-600 fill-current cursor-pointer text-3xl md:text-xl"
        onMouseEnter={() => onHover(fullStars + 0.5)}
        onMouseLeave={() => onHover(0)}
        onClick={() => onHover(fullStars + 0.5)}
      />
    );
  }

  const remainingStars = Math.floor(5 - rating);
  const emptyStars = Array.from({ length: remainingStars }, (_, i) => (
    <FaRegStar
      key={`empty-${i}`}
      className="text-gray-400 fill-current cursor-pointer text-3xl md:text-xl"
      onMouseEnter={() => onHover(fullStars + i + 1)}
      onMouseLeave={() => onHover(0)}
      onClick={() => onHover(fullStars + i + 1)}
    />
  ));

  return [...starElements, ...emptyStars];
}

function Rating({ rating }: RatingProps) {
  const [hoverRating, setHoverRating] = useState(0);
  const ratingOnFiveStarBase = rating / 2
  const ratingSerialized = Number(ratingOnFiveStarBase.toFixed(1))


  const handleHoverRating = (rating: number) => {
    setHoverRating(rating);
  };


  return (
    <div className='flex items-center'>
      {renderStars(hoverRating > 0 ? hoverRating : ratingSerialized, handleHoverRating)}
      <p className='ml-2'>{ratingSerialized} / 5</p>
    </div>
  );
}

export default Rating;
