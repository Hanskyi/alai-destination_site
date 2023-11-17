import React from 'react';
import ReactStars from 'react-rating-stars-component';

export interface IRatingProps {
  value?: number;
  size: number;
  onChange?: (newRate: number) => void;
  isEdit: boolean;
}

const Rating: React.FC<IRatingProps> = ({ value, size, onChange, isEdit }) => {
  return (
    <ReactStars
      count={5}
      onChange={onChange}
      size={size}
      value={value}
      activeColor="#ffd700"
      edit={isEdit}
    />
  );
};

export default Rating;
