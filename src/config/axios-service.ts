import axios from "axios";

axios.interceptors.request.use((config) => {
  config.baseURL = "https://newsapi.org/v2";
  config.headers.Authorization = process.env.VITE_API_SECRET;
  return config;
});

export default axios;
