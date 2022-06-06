import { userLoginType } from 'api/auth/types';
import { instance } from 'api/config';

export const AUTH = {
  authMe() {
    return instance.get('auth/me');
  },
  login(loginData: userLoginType) {
    return instance.post('/auth/login', loginData);
  },
  logout() {
    return instance.delete('/auth/login');
  },
};
