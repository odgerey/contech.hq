// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8888/wordpress/';

export const getSoftware = async () => {
  const response = await axios.get(`${API_URL}/software`);
  return response.data;
};

export const getSoftwareById = async (id) => {
  const response = await axios.get(`${API_URL}/software/${id}`);
  return response.data;
};
