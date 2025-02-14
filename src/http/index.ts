import axios, { AxiosInstance } from 'axios';

const $api: AxiosInstance = axios.create({
  baseURL: 'https://api.github.com',
});

const get = $api.get;

export { get };
