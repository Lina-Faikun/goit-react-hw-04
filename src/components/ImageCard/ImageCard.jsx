import React from 'react';
import styles from './ImageCard.module.css';

const ImageCard = ({ image, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={image.webformatURL} alt={image.tags} />
      <p>{image.tags}</p>
    </div>
  );
};

export default ImageCard;
