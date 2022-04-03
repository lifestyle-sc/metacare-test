import axios from 'axios';

const instance = axios.create({
  baseURL: "https://mock-stocks-api.herokuapp.com/",
});

export default instance;
