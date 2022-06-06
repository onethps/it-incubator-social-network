import { userLoginType } from 'api/auth/types';
import { instance } from 'api/config';

export const AUTH = {
  authMe() {
    return instance.get('auth/me');
  },
  login(loginData: userLoginType) {
    return instance.post<ResponseData<{ userId: number }>>('/auth/login', loginData);
  },
  logout() {
    return instance.delete('/auth/login');
  },
};

type ResponseData<D = {}> = {
  resultCode: number;
  messages: Array<string>;
  data: D;
};
