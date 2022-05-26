import { Dispatch } from 'redux';

import { PROFILE } from 'api/profile';
import { AppThunk } from 'store/store';
import { profileType } from 'types';

enum PROFILE_CONST_TYPES {
  SET_PROFILE_DATA = 'profile/SET-PROFILE-DATA',
  SET_LOADING_STATUS = 'auth/SET-LOADING-STATUS',
}

const initState = {
  aboutMe: '',
  userId: null,
  lookingForAJob: false,
  lookingForAJobDescription: '',
  fullName: '',
  contacts: {
    github: '',
    vk: '',
    facebook: '',
    instagram: '',
    twitter: '',
    website: '',
    youtube: '',
    mainLink: '',
  },
  photos: {
    small: '',
    large: '',
  },
};

export const profile = (
  state: typeof initState = initState,
  action: AuthActionsTypes,
) => {
  switch (action.type) {
    case PROFILE_CONST_TYPES.SET_PROFILE_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const setProfileDataAC = ({ ...profileData }: profileType) => ({
  type: PROFILE_CONST_TYPES.SET_PROFILE_DATA,
  payload: {
    ...profileData,
  },
});

// thunk
export const setProfileTC =
  (userID: number): AppThunk =>
  async (dispatch: Dispatch) => {
    try {
      const res = await PROFILE.getMyProfile(userID);
      dispatch(setProfileDataAC(res.data));
    } catch (e: any) {
      throw new Error(e);
    }
  };

// actions
export type AuthActionsTypes = ReturnType<typeof setProfileDataAC> | any;
