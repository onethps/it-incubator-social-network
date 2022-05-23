import { instance } from 'api/config';
import { authMeType, ResponseType } from 'api/types';

export const AUTH = {
  authMe() {
    return instance.get<ResponseType<authMeType>>(`auth/me`);
  },
  login(email: string, password: string, rememberMe: boolean = false) {
    return instance.post<ResponseType>(`auth/login`, { email, password, rememberMe });
  },
  logout() {
    return instance.delete<ResponseType>(`auth/login`);
  },
};
