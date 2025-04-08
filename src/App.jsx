import React, { useState, useEffect } from 'react';
import { fetchImages } from './services/pixabay-api';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchImages(query, page);
        if (data.hits.length === 0) {
          toast.error('No images found!');
        }
        setImages(prev => (page === 1 ? data.hits : [...prev, ...data.hits]));
      } catch (err) {
        setError('Something went wrong!');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const handleSearch = (searchQuery) => {
    if (!searchQuery.trim()) {
      toast.error('Please enter a search term!');
      return;
    }

    
    setQuery('');
    setTimeout(() => {
      setQuery(searchQuery);
      setPage(1);
      setImages([]);
    }, 0);
  };

  const handleLoadMore = () => setPage(prev => prev + 1);
  const handleImageClick = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="app-container">
      <Toaster position="top-center" />
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal image={selectedImage} isOpen={true} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;
