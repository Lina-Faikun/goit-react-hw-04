import axios from 'axios';

const API_KEY = 'iu26jiH747BMEDs57GFdnImL9hktZ4Tv735NIthklMU'; 
const BASE_URL = 'https://api.unsplash.com/search/photos';

export const fetchImages = async (query, page = 1) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        query: query,
        page: page,
        per_page: 12,
        client_id: API_KEY, 
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};
