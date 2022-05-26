import { instance } from 'api/config';
import { profileType } from 'types';

export const PROFILE = {
  getMyProfile(usedId: number) {
    return instance.get<profileType>(`profile/${usedId}`);
  },
};
