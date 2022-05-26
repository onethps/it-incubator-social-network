// Reducer...

import { Dispatch } from 'redux';

import { USERS } from 'api/users';
import { IUser } from 'store/reducers/types';
import { AppThunk } from 'store/store';

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

enum USERS_CONST_TYPES {
  SET_USERS = 'auth/IS-AUTH',
  SET_LOADING_STATUS = 'auth/SET-LOADING-STATUS',
}

const initState = {
  newUsers: [],
  followedUsers: [],
  loading: 'loading',
};

type initStateType = {
  newUsers: IUser[];
  followedUsers: IUser[];
  loading: string;
};

export const users = (
  state: initStateType = initState,
  action: AuthActionsTypes,
): initStateType => {
  switch (action.type) {
    case USERS_CONST_TYPES.SET_USERS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const setUsersAC = (newUsers: IUser[], followedUsers: IUser[]) => ({
  type: USERS_CONST_TYPES.SET_USERS,
  payload: {
    newUsers,
    followedUsers,
  },
});

const setLoadingStatusAC = (loading: RequestStatusType) => ({
  type: USERS_CONST_TYPES.SET_LOADING_STATUS,
  payload: {
    loading,
  },
});

// thunk
export const getUsers =
  (currentPage: number, pageCount: number): AppThunk =>
  async (dispatch: Dispatch<AuthActionsTypes>) => {
    try {
      const { getSuggestedUsers, getFollowedUsers } = USERS;
      const res = await Promise.all([
        getSuggestedUsers(),
        getFollowedUsers(currentPage, pageCount),
      ]);
      dispatch(setUsersAC(res[0].data.items, res[1].data.items));
    } catch (e: any) {
      throw new Error(e);
    } finally {
      // dispatch(setLoadingStatusAC('succeeded'));
    }
  };

export const followTC =
  (userID: number): AppThunk =>
  async dispatch => {
    try {
      await USERS.follow(userID);
      dispatch(getUsers(1, 4));
    } catch (e) {
      console.log(e);
    }
  };

// actions
export type AuthActionsTypes =
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof setLoadingStatusAC>
  | any;
