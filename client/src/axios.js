import * as Axios from 'axios';

const instance = Axios.create({
    baseURL: "http://localhost:7000/api",
    withCredentials: false,
    headers: {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
  });

export default instance;
