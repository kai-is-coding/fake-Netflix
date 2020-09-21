import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  const exceptedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status <= 500;
  if (!exceptedError) {
    alert("UnExcepted errors happened!");
  }
  return Promise.reject(error);
});

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
// const baseURL = process.env.REACT_APP_API_URL;
const api_key = process.env.REACT_APP_API_KEY;

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  // baseURL,
  api_key,
};
