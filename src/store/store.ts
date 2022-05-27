import { Action, AnyAction, applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { auth } from 'store/reducers/auth';
import { home } from 'store/reducers/home';
import { login } from 'store/reducers/login';
import { profile } from 'store/reducers/profile';
import { users } from 'store/reducers/users';

const rootReducer = combineReducers({
  auth,
  login,
  users,
  profile,
  home,
});

export type AppRootStateType = ReturnType<typeof rootReducer>;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type AppDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>;

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;
