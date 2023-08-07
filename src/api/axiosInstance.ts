import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BE_ENDPOINT,
});

export default axiosInstance;
