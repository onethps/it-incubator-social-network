import axios from 'axios';

const settings = {
  withCredentials: true,
  headers: {
    'API-KEY': '67dc29a5-3121-4545-ba54-e3fe956aee38',
  },
};
export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  ...settings,
});

export const mockInstance = axios.create({
  baseURL: 'https://6287b890e9494df61b3eb7a1.mockapi.io/api/v1/',
});
