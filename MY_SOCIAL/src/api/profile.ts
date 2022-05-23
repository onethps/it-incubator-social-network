import { instance } from 'api/config';
import { ResponseType } from 'api/types';

export const PROFILE = {
  updateStatus(status: string) {
    return instance.put<ResponseType>(`profile/status/`, { status });
  },
  uploadPhoto(image: any) {
    return instance.post(`profile/photo`, image, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  deleteFollow(userID: number) {
    return instance.delete<ResponseType>(`follow/${userID}`);
  },
  postFollow(userID: number) {
    return instance.post<ResponseType>(`follow/${userID}`);
  },
};
