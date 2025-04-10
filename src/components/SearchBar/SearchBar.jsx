import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
      setInput('');
    } else {
      toast.error('Please enter a search term'); 
    }
  };

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search images"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
