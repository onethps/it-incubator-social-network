interface IUser {
  name: string;
  id: number;
  status: string;
  photos: photosTypes;
  followed: boolean;
}

export type photosTypes = {
  small: string;
  large: string;
};

export type ResponseUsers = {
  error: null | string;
  items: IUser[];
  totalCount: number;
};

export type ResponseType<D = {}> = {
  data: D;
  fieldsErrors?: D;
  messages: Array<any>;
  resultCode: number;
};

export type authMeType = {
  email: string;
  id: number;
  login: string;
};

export interface IProfile {
  aboutMe: string | null;
  contacts: contactsTypes;
  fullName: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  photos: photosTypes;
  userId: number;
}

export type contactsTypes = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};
