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
      {image ? (
        <>
          <img src={image?.urls?.regular} alt={image?.alt_description} />
          <p>Автор: {image?.user?.name}</p>
          <p>Лайків: {image?.likes}</p>
        </>
      ) : (
        <p>Зображення не доступне</p>
      )}
      <button onClick={onClose}>Закрити</button>
    </Modal>
  );
};

export default ImageModal;
