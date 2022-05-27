export type profileType = {
  aboutMe?:string,
  userId?: number | null;
  lookingForAJob?: boolean;
  lookingForAJobDescription?: string;
  fullName?: string;
  contacts: contactsType;
  photos?: photosType;
};

export type photosType = {
  small?: string;
  large?: string;
};

export type contactsType = {
  github?: string;
  vk?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  website?: string;
  youtube?: string;
  mainLink?: string;
};
