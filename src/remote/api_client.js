import axios from "axios";

// Define the base URL with a fallback option
const BASE_URL = "http://192.168.1.69:3001/api";

// Create an axios instance with default configuration
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // Add other headers like authorization token here, if needed
  },
});
// Define common API methods
const _get = async (url, config = {}) => {
  return apiClient.get(url, config);
};

const _delete = (url, config = {}) => {
  return apiClient.delete(url, config);
};

const _put = (url, data, config = {}) => {
  return apiClient.put(url, data, config);
};

const _post = (url, data, config = {}) => {
  return apiClient.post(url, data, config);
};

// Export API methods
export { _get, _delete, _put, _post };
