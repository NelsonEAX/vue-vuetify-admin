import axios from 'axios';
import store from '@/store';

// create an axios instance
const service = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/', // process.env.BASE_API,
  timeout: 5000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    if (store.getters.token) {
      // Let each request carry a token-- ['X-Token']
      // For the custom key, please modify it according to the actual situation.
      // eslint-disable-next-line
      config.headers['X-Token'] = store.getters.token; // getToken();
    }
    return config;
  },
  (error) => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  },
);

// response interceptor
service.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(`err ${error}`); // for debug
    return Promise.reject(error);
  },
);

export default service;
