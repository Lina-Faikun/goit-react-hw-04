import React, { useState } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageModal from './ImageModal/ImageModal';     

const ParentComponent = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

 
  const handleImageClick = (image) => {
    setSelectedImage(image);  
    setIsModalOpen(true);      
  };


  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      
      
      <ImageGallery images={images} onImageClick={handleImageClick} />
      
      <ImageModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        image={selectedImage}
      />
    </div>
  );
};

export default ParentComponent;
