// Reducer...

import { Dispatch } from 'redux';

import { AUTH } from 'api/auth';
import { ResponseCode } from 'enums';
import { fetchOwnerProfileDataTC, fetchStatusTC, setProfileDataTC, } from 'store/reducers/profile';
import { AppThunk } from 'store/store';

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

enum AUTH_CONST_TYPES {
  SET_LOGIN_DATA = 'auth/IS-AUTH',
  SET_LOADING_STATUS = 'auth/SET-LOADING-STATUS',
}

const initState = {
  isAuth: false,
  id: null,
  login: '',
  email: '',
  loading: 'loading',
};

type initStateType = {
  isAuth: boolean;
  loading: string;
  id: null | number;
  login: string;
  email: string;
};

export const auth = (
  state: initStateType = initState,
  action: AuthActionsTypes,
): initStateType => {
  switch (action.type) {
    case AUTH_CONST_TYPES.SET_LOGIN_DATA:
      return { ...state, ...action.payload };
    case AUTH_CONST_TYPES.SET_LOADING_STATUS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const SetAuthDataAC = (
  isAuth: boolean,
  id: number,
  email: string,
  login: string,
) => ({
  type: AUTH_CONST_TYPES.SET_LOGIN_DATA,
  payload: {
    isAuth,
    id,
    login,
    email,
  },
});

const setLoadingStatusAC = (loading: RequestStatusType) => ({
  type: AUTH_CONST_TYPES.SET_LOADING_STATUS,
  payload: {
    loading,
  },
});

// thunk
export const authTC = (): AppThunk => async (dispatch: Dispatch<AuthActionsTypes>) => {
  try {
    const res = await AUTH.authMe();
    if (res.data.resultCode === ResponseCode.Successes) {
      const { id, email, login } = res.data.data;
      dispatch(SetAuthDataAC(true, id, email, login));
      dispatch(fetchOwnerProfileDataTC(id));
      dispatch(setProfileDataTC(id));
      dispatch(fetchStatusTC(id));
    }
    if (res.data.resultCode !== ResponseCode.Successes) {
    }
  } catch (e: any) {
    throw new Error(e);
  } finally {
    dispatch(setLoadingStatusAC('succeeded'));
  }
};

// actions
export type AuthActionsTypes =
  | ReturnType<typeof setLoadingStatusAC>
  | ReturnType<typeof SetAuthDataAC>
  | any;
