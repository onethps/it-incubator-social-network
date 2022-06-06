import axios from 'axios';

const settings = {
  withCredentials: true,
  headers: {
    'API-KEY': '53743326-f61f-4a39-ac8a-be7cd4a5c568',
  },
};
export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  ...settings,
});

export const mockInstance = axios.create({
  baseURL: 'https://6287b890e9494df61b3eb7a1.mockapi.io/api/v1/',
});
