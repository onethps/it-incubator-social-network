export type profileType = {
  aboutMe?: string;
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
  github?: string | null;
  vk?: string | null;
  facebook?: string | null;
  instagram?: string | null;
  twitter?: string | null;
  website?: string | null;
  youtube?: string | null;
  mainLink?: string | null;
};
