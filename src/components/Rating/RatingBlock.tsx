import React from "react";
import { StarRating } from "./StarRating";

type RatingBlockProps = {
  image: string;
  label: string;
  value: number | null;
  onChange: (value: number | null) => void;
};

export const RatingBlock: React.FC<RatingBlockProps> = ({ image, label, value, onChange }) => {

  const handleNotSelectedClick = () => {
    onChange(null);
  }

  const handleStarChange = (newValue: number) => {
    onChange(newValue);
  }

  return (
    <div className="rating-block">
      <div className="rating-content">
        <img src={image} alt={label} className="bar-image" />
        <StarRating
          value={value}
          onChange={handleStarChange}
        />
        <div className="rating-value">
          {value ? value : 'Оценки нет'}
        </div>
      </div>
      <button 
        className="uncertain-btn"
        onClick={handleNotSelectedClick}
      >
        Затрудняюсь ответить
      </button>
    </div>
  );
};