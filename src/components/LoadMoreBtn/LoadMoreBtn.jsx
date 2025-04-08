import React from 'react';
import './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className="loadMoreBtn" onClick={onClick}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
