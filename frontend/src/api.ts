import axios from 'axios';

const API_URL = 'http://localhost:8080/api/endpoint'; // バックエンドのURL

export const fetchData = async (): Promise<any> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
