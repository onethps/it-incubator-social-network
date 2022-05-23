import { instance } from 'api/config';
import { IProfile, ResponseUsers } from 'api/types';

export const USERS = {
  getUsers(currentPage: number, pageSize: number) {
    return instance.get<ResponseUsers>(`users?page=${currentPage}&count=${pageSize}`);
  },
  getUsersCountPerPage(pageNumber: number, pageSize: number) {
    return instance.get<ResponseUsers>(`users?page=${pageNumber}&count=${pageSize}`);
  },

  getCurrentUserProfile(userID: number) {
    return instance.get<IProfile>(`profile/${userID}`);
  },
  getCurrentUserStatus(userID: number) {
    return instance.get<string>(`profile/status/${userID}`);
  },
};
