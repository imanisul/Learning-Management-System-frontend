import axios from 'axios';

const BASE_URL = "http://localhost:4400/api/v1";

const axiosaInstance = axios.create();

axiosaInstance.defaults.baseURL = BASE_URL;
axiosaInstance.defaults.withCredentials = true;

export default axiosaInstance;

