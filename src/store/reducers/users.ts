// Reducer...

import { Dispatch } from 'redux';

import { USERS } from 'api/users';
import { HOME_PAGE_CONSTS } from 'enums';
import { getSuggestedUsersTC } from 'store/reducers/home';
import { IUser } from 'store/reducers/types';
import { AppRootStateType, AppThunk } from 'store/store';

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

enum USERS_CONST_TYPES {
  SET_USERS = 'users/IS-AUTH',
  SET_LOADING_STATUS = 'users/SET-LOADING-STATUS',
  SET_PAGE_PARAMS = 'users/SET-PAGE-PARAMS',
}

const initState = {
  followedUsers: [],
  loading: 'loading',
  currentPage: 1,
  pageCount: 9,
};

type initStateType = {
  followedUsers: IUser[];
  loading: string;
  currentPage: number;
  pageCount: number;
};

export const users = (
  state: initStateType = initState,
  action: AuthActionsTypes,
): initStateType => {
  switch (action.type) {
    case USERS_CONST_TYPES.SET_LOADING_STATUS:
      return {
        ...state,
        ...action.payload,
      };

    case USERS_CONST_TYPES.SET_USERS:
      return {
        ...state,
        ...action.payload,
      };
    case USERS_CONST_TYPES.SET_PAGE_PARAMS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const setUsersAC = (followedUsers: IUser[]) => ({
  type: USERS_CONST_TYPES.SET_USERS,
  payload: {
    followedUsers,
  },
});

const setLoadingStatusAC = (loading: RequestStatusType) => ({
  type: USERS_CONST_TYPES.SET_LOADING_STATUS,
  payload: {
    loading,
  },
});

// action
export const setPageParamsAC = (currentPage: number, pageCount: number) => ({
  type: USERS_CONST_TYPES.SET_PAGE_PARAMS,
  payload: {
    currentPage,
    pageCount,
  },
});

// thunk
export const getFollowedUsers =
  (currentPage: number, pageCount: number): AppThunk =>
  async (dispatch: Dispatch<AuthActionsTypes>) => {
    try {
      const res = await USERS.getFollowedUsers(currentPage, pageCount);
      dispatch(setUsersAC(res.data.items));
    } catch (e: any) {
      throw new Error(e);
    } finally {
      dispatch(setLoadingStatusAC('succeeded'));
    }
  };

export const unFollowUserTC =
  (userID: number): AppThunk =>
  async (dispatch, getState: () => AppRootStateType) => {
    try {
      await USERS.unFollow(userID);
      const { currentPage, pageCount } = getState().users;
      dispatch(getFollowedUsers(currentPage, pageCount));
    } catch (e: any) {
      throw new Error(e);
    }
  };

export const followTC =
  (userID: number): AppThunk =>
  async dispatch => {
    try {
      await USERS.follow(userID);
      dispatch(getSuggestedUsersTC());
    } catch (e) {
      console.log(e);
    }
  };

// actions types
export type AuthActionsTypes =
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof setLoadingStatusAC>
  | ReturnType<typeof setPageParamsAC>
  | any;
