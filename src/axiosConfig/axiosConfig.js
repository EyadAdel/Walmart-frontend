import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    Authorization: localStorage.getItem('token')
  }
});

export default axiosConfig;
