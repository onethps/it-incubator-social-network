// Reducer...

import { Dispatch } from 'redux';

import { AUTH } from 'api/auth';
import { userLoginType } from 'api/auth/types';

export enum LOGIN_REDUCER_CONST {
  IS_LOGGED_IN = 'login/IS-LOGGED-IN',
  IS_LOADING_STATUS = 'login/IS-LOADING-STATUS',
}

const initialState = {
  isLoggedIn: false,
};

type intiStateType = typeof initialState;

export const login = (state: intiStateType = initialState, action: loginTypes) => {
  switch (action.type) {
    case LOGIN_REDUCER_CONST.IS_LOGGED_IN:
    case LOGIN_REDUCER_CONST.IS_LOADING_STATUS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

// action
export const setLogginAC = (isLoggedIn: boolean) => ({
  type: LOGIN_REDUCER_CONST.IS_LOGGED_IN,
  payload: {
    isLoggedIn,
  },
});

const setIsLoadingAC = (loading: string) => ({
  type: LOGIN_REDUCER_CONST.IS_LOADING_STATUS,
  payload: {
    loading,
  },
});

// types
export type loginTypes = ReturnType<typeof setLogginAC> | any;

// thunk
export const loginTC = (loginData: userLoginType) => async (dispatch: Dispatch) => {
  try {

    const res = AUTH.login(loginData);
    dispatch(setLogginAC(true));
    dispatch(setIsLoadingAC('success'));
  } catch (e: any) {
    throw new Error(e);
  }
};

export const logOutTC = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setIsLoadingAC('loading'));
    await AUTH.logout();
    dispatch(setLogginAC(false));
    dispatch(setIsLoadingAC('success'));
  } catch (e: any) {
    throw new Error(e);
  }
};
