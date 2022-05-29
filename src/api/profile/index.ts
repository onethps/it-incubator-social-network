import { instance } from 'api/config';
import { profileType } from 'types';

export const PROFILE = {
  getMyProfile(usedId: number) {
    return instance.get<profileType>(`profile/${usedId}`);
  },
  updateMyProfile(data: profileType) {
    return instance.put(`profile`, { ...data });
  },
  getStatus(userID: number) {
    return instance.get(`profile/status/${userID}`);
  },
  changeStatus(status: string) {
    return instance.put(`profile/status/`, { status });
  },
};
