import { instance } from 'api/config';

export const AUTH = {
  authMe() {
    return instance.get('auth/me');
  },
};
