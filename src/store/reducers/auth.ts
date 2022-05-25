// Reducer...

import { Dispatch } from 'redux';

import { AUTH } from 'api/auth';
import { AppThunk } from 'store/store';

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

enum AUTH_CONST_TYPES {
  IS_AUTH = 'auth/IS-AUTH',
  SET_LOADING_STATUS = 'auth/SET-LOADING-STATUS',
}

const initState = {
  isAuth: false,
  loading: 'loading',
};

type initStateType = {
  isAuth: boolean;
  loading: string;
};

export const auth = (state = initState, action: AuthActionsTypes): initStateType => {
  switch (action.type) {
    case AUTH_CONST_TYPES.IS_AUTH:
      return { ...state, ...action.payload };
    case AUTH_CONST_TYPES.SET_LOADING_STATUS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const isAuthAC = (isAuth: boolean) => ({
  type: AUTH_CONST_TYPES.IS_AUTH,
  payload: {
    isAuth,
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
    if (res.data.resultCode === 0) {
      dispatch(isAuthAC(true));
    }
    if (res.data.resultCode !== 0) {
      console.log(res.data.data.messages[0]);
    }
  } catch (e) {
    console.log(e);
  } finally {
    dispatch(setLoadingStatusAC('succeeded'));
  }
};

// actions
export type AuthActionsTypes =
  | ReturnType<typeof isAuthAC>
  | ReturnType<typeof setLoadingStatusAC>
  | any;
