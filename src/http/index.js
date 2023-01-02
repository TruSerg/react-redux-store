import axios from "axios";

import { LOCAL_STORAGE_KEYS } from "../constants/localStorageKeys";

const baseURL = "https://fakestoreapi.com/";

const config = {
  baseURL,
};

const api = axios.create(config);

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN);

  config.headers.Authorization = `${token}`;

  return config;
});

export default api;
