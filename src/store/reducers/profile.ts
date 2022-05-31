import { PROFILE } from 'api/profile';
import { ResponseCode } from 'enums';
import { AppRootStateType, AppThunk } from 'store/store';
import { profileType } from 'types';

enum PROFILE_CONST_TYPES {
  SET_OWNER_PROFILE_DATA = 'profile/SET-OWNER-PROFILE-DATA',
  SET_PROFILE_DATA = 'profile/SET-PROFILE-DATA',
  SET_LOADING_STATUS = 'profile/SET-LOADING-STATUS',
  SET_STATUS = 'profile/SET-STATUS',
}

const initState = {
  status: '',
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
  profileOwner: {},
  loading: 'loading',
};

export const profile = (
  state: typeof initState = initState,
  action: AuthActionsTypes,
) => {
  switch (action.type) {
    case PROFILE_CONST_TYPES.SET_OWNER_PROFILE_DATA:
    case PROFILE_CONST_TYPES.SET_PROFILE_DATA:
    case PROFILE_CONST_TYPES.SET_LOADING_STATUS:
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
    contacts: {
      ...profileData.contacts,
      website: '',
    },
  },
});

export const setOwnerProfileData = ({ ...profileData }: profileType) => ({
  type: PROFILE_CONST_TYPES.SET_PROFILE_DATA,
  payload: {
    profileOwner: profileData,
  },
});

export const setNewStatusAC = (status: string) => ({
  type: PROFILE_CONST_TYPES.SET_STATUS,
  payload: {
    status,
  },
});

export const setLoadingProfileAC = (loading: string) => ({
  type: PROFILE_CONST_TYPES.SET_LOADING_STATUS,
  payload: {
    loading,
  },
});

// thunk
export const fetchOwnerProfileDataTC =
  (userID: number): AppThunk =>
  async dispatch => {
    dispatch(setLoadingProfileAC('loading'));
    try {
      const res = await PROFILE.getMyProfile(userID);
      dispatch(setOwnerProfileData(res.data));
    } catch (e: any) {
      throw new Error(e);
    } finally {
      dispatch(setLoadingProfileAC('succeeded'));
    }
  };

export const setProfileDataTC =
  (userID: number): AppThunk =>
  async dispatch => {
    dispatch(setLoadingProfileAC('loading'));
    try {
      const res = await PROFILE.getMyProfile(userID);
      dispatch(setProfileDataAC(res.data));
    } catch (e: any) {
      throw new Error(e);
    } finally {
      dispatch(setLoadingProfileAC('succeeded'));
    }
  };

export const fetchStatusTC =
  (userID: number): AppThunk =>
  async dispatch => {
    dispatch(setLoadingProfileAC('loading'));
    try {
      const res = await PROFILE.getStatus(userID);
      dispatch(setNewStatusAC(res.data));
    } catch (e: any) {
      throw new Error(e);
    } finally {
      dispatch(setLoadingProfileAC('succeeded'));
    }
  };

export const setNewStatusTC =
  (status: string): AppThunk =>
  async (dispatch, getState: () => AppRootStateType) => {
    dispatch(setLoadingProfileAC('loading'));
    const { id } = getState().auth;
    try {
      await PROFILE.changeStatus(status);
      dispatch(fetchStatusTC(id!));
    } catch (e: any) {
      throw new Error(e);
    } finally {
      dispatch(setLoadingProfileAC('succeeded'));
    }
  };

export const updateMyProfile =
  (data: profileType): AppThunk =>
  async (dispatch, getState: () => AppRootStateType) => {
    dispatch(setLoadingProfileAC('loading'));
    try {
      const { userId } = getState().profile;
      const response = await PROFILE.updateMyProfile(data);
      dispatch(setProfileDataTC(userId));
      // check if response will be with not right result code
      if (response.data.resultCode > ResponseCode.Successes) {
      }
    } catch (e: any) {
      throw new Error(e);
    } finally {
      dispatch(setLoadingProfileAC('succeeded'));
    }
  };

// actions
export type AuthActionsTypes =
  | ReturnType<typeof setProfileDataAC>
  | ReturnType<typeof setNewStatusAC>
  | ReturnType<typeof setOwnerProfileData>
  | any;
