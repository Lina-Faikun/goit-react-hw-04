import React from 'react';
import styles from './ImageCard.module.css';



const ImageCard = ({ image, onClick }) => {
  const imageUrl = image?.urls?.small;

  if (!imageUrl) {
    return <div>Image not available</div>;
  }

  return (
    <div className={styles.imageCard} onClick={onClick}>
      <img src={imageUrl} alt={image.alt_description || 'Image'} />
    </div>
  );
};



export default ImageCard;
