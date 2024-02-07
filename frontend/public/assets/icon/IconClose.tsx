import React from 'react';

interface Props {
  onClick: () => void;
}

const IconClose: React.FC<Props> = ({ onClick }) => {
  return (
    <div onClick={onClick} className="close-btn">
      <svg
        version="1.1"
        role="presentation"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        className="icon"
      >
        <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path>
      </svg>
    </div>
  );
};

export default IconClose;
