import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    Authorization: localStorage.getItem('Token')
  }
});

export default axiosConfig;
