import { instance } from 'api/config';

export const USERS = {
  getSuggestedUsers() {
    return instance.get('users/?count=4&page=4000');
  },

  getFollowedUsers() {
    return instance.get('users/?count=4&page=1&friend=true');
  },
};
