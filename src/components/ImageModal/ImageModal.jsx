import React from 'react';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button className={styles.closeButton} onClick={onClose}>
        &times;
      </button>
      <img src={image.largeImageURL} alt={image.tags} className={styles.image} />
      <div className={styles.info}>
        <p><strong>Author:</strong> {image.user}</p>
        <p><strong>Likes:</strong> {image.likes}</p>
        <p><strong>Description:</strong> {image.tags}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;
