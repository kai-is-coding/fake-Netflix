import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const api_key = process.env.REACT_APP_API_KEY;
console.log("API_key", api_key);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  api_key,
};
