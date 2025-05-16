import React, { useState } from "react";

type StarRatingProps = {
  value: number | null;
  max?: number;
  onChange: (value: number) => void;
};

export const StarRating: React.FC<StarRatingProps> = ({ value, max = 10, onChange }) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const handleStarClick = () => {
    if (hoverValue !== null) {
      onChange(hoverValue);
    }
  };

  const handleStarHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const star = e.target as HTMLElement;
    const rating = Number(star.getAttribute('data-star-rating'));
    if (star) {
      setHoverValue(rating);
    }
  };

  const handleStarLeave = () => {
    setHoverValue(null);
  };

  return (
    <div
      className="star-rating"
      onClick={handleStarClick}
      onMouseMove={handleStarHover}
      onMouseLeave={handleStarLeave}
    >
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className="star"
          data-star-rating={i + 1}
          style={{
            color: (hoverValue !== null && i < hoverValue) || value !== null && i < value ? "var(--star-color)" : "var(--star-default-color)",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};