import axios from "axios";

const axiosInstance = axios.create(); // create method returns a object instance

axiosInstance.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axiosInstance.defaults.withCredentials = true;



export default axiosInstance;