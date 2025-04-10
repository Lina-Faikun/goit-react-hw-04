import React from 'react';
import styles from './ImageCard.module.css';



const ImageCard = ({ image, onClick }) => {
  const imageUrl = image?.urls?.small;

  if (!imageUrl) {
    return <div>Image not available</div>;
  }

 return (
  <div className={styles.imageCard}>
    <img
      src={imageUrl}
      alt={image.alt_description || 'Image'}
      onClick={onClick} 
      className={styles.image}
    />
  </div>
);
};



export default ImageCard;
