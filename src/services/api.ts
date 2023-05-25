import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL ?? '';
const timeout = 180 * 1000;
export const getToken = () => localStorage.getItem('@Prixsia:token') || '';

const api = axios.create({
  baseURL,
  timeout,
});

api.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers!.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
