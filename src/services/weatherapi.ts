import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://api.weatherapi.com/v1/'
});
export default instance;