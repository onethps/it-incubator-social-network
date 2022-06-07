import { instance } from 'api/config';

export const USERS = {
  getSuggestedUsers() {
    return instance.get('users/?count=4&page=4000&friend=false');
  },
  getSearchUsers(searchText: string) {
    return instance.get(`users/?term=${searchText}`);
  },
  getFollowedUsers(currentPage: number, pageCount: number) {
    return instance.get(`users/?count=${pageCount}&page=${currentPage}&friend=true`);
  },
  follow(userID: number) {
    return instance.post(`/follow/${userID}`);
  },
  unFollow(userID: number) {
    return instance.delete(`/follow/${userID}`);
  },
};
