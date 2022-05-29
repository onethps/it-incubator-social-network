import { Dispatch } from 'redux';

import { PROFILE } from 'api/profile';
import { ResponseCode } from 'enums';
import { AppRootStateType, AppThunk } from 'store/store';
import { profileType } from 'types';

enum PROFILE_CONST_TYPES {
  SET_PROFILE_DATA = 'profile/SET-PROFILE-DATA',
  SET_LOADING_STATUS = 'auth/SET-LOADING-STATUS',
  SET_STATUS = 'profile/SET-STATUS',
}

const initState = {
  profileStatus: '',
  aboutMe: '',
  userId: null,
  lookingForAJob: 'No',
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
    case PROFILE_CONST_TYPES.SET_STATUS:
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

export const setStatusAC = (status: string) => ({
  type: PROFILE_CONST_TYPES.SET_STATUS,
  payload: {
    status,
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

export const fetchStatusTC =
  (userID: number): AppThunk =>
  async (dispatch) => {
    try {
      const res = await PROFILE.getStatus(userID);
      dispatch(setStatusAC(res.data));
    } catch (e: any) {
      throw new Error(e);
    }
  };

export const changeStatusTC =
  (status: string): AppThunk =>
  async (dispatch, getState: () => AppRootStateType) => {
    const { id } = getState().auth;
    try {
      await PROFILE.changeStatus(status);
      dispatch(fetchStatusTC(id!));
    } catch (e: any) {
      throw new Error(e);
    }
  };

export const updateMyProfile =
  (data: profileType): AppThunk =>
  async (dispatch, getState: () => AppRootStateType) => {
    try {
      const { userId } = getState().profile;
      const response = await PROFILE.updateMyProfile(data);
      dispatch(setProfileTC(userId));
      // check if response will be with not right result code
      if (response.data.resultCode > ResponseCode.Successes) {
        console.log(response.data.messages[0]);
      }
    } catch (e: any) {
      throw new Error(e);
    }
  };

// actions
export type AuthActionsTypes =
  | ReturnType<typeof setProfileDataAC>
  | ReturnType<typeof setStatusAC>
  | any;
