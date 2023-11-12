import axios from "axios";

export const apiFetch = axios.create({
  baseURL: "http://localhost:5000/api",
});

const getAuthToken = () => {
  return localStorage.getItem("token");
};

// Set the default Authorization header using the getAuthToken function
apiFetch.interceptors.request.use((config) => {
  const authToken = getAuthToken();
  if (authToken) {
    config.headers["Authorization"] = `Bearer ${authToken}`;
  }
  return config;
});
