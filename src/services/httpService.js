import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
const baseURL = process.env.REACT_APP_API_URL;
const api_key = process.env.REACT_APP_API_KEY;

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  baseURL,
  api_key,
};
