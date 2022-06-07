// Types...

import { photosType } from 'types/profile';

export type UserResponseType = {
  items: IUser[];
  totalCount: number;
  error: string | null;
};

export type IUser = {
  id: number;
  name: string;
  status: string;
  photos: photosType;
  followed: boolean;
};
