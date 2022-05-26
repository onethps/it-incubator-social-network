// Reducer...

import { Dispatch } from 'redux';

export enum LOGIN_REDUCER_CONST {
  IS_LOGGED_IN = 'login/IS-LOGGED-IN',
}

const initialState = {
  isLoggedIn: false,
};

type intiStateType = typeof initialState;

export const login = (state: intiStateType = initialState, action: loginTypes) => {
  switch (action.type) {
    case LOGIN_REDUCER_CONST.IS_LOGGED_IN:
      return { ...state };
    default:
      return state;
  }
};

// action
const setLogginAC = (isLoggedIn: boolean) => ({
  type: LOGIN_REDUCER_CONST.IS_LOGGED_IN,
  payload: {
    isLoggedIn,
  },
});

// types
export type loginTypes = ReturnType<typeof setLogginAC> | any;

// thunk
export const loggin =
  (email: string, pass: string, rememberMe: boolean) => async (dispatch: Dispatch) => {
    try {
      dispatch(setLogginAC(true));
    } catch (e: any) {
      throw new Error(e);
    }
  };
