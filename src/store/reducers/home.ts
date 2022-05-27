import { Dispatch } from 'redux';

import { POSTS } from 'api/posts';
import { IUser } from 'store/reducers/types';
import { AppThunk } from 'store/store';
import { HomePostType } from 'types/homeTypes';

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

enum HOME_CONST_TYPES {
  SET_POSTS = 'home/SET-POSTS',
  SET_LOADING_STATUS = 'auth/SET-LOADING-STATUS',
}

const initState = {
  posts: [],
  suggestedUsers: [],
};

type initStateType = {
  posts: HomePostType[];
  suggestedUsers: IUser[];
};

export const home = (
  state: initStateType = initState,
  action: HomeActionsTypes,
): initStateType => {
  switch (action.type) {
    case HOME_CONST_TYPES.SET_POSTS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const setSuggestedUsersAC = () => {};

export const setPostsAC = (posts: HomePostType[]) => ({
  type: HOME_CONST_TYPES.SET_POSTS,
  payload: {
    posts,
  },
});

// thunk
export const getPosts = (): AppThunk => async dispatch => {
  try {
    const response = await POSTS.getPosts();
    dispatch(setPostsAC(response.data));
  } catch (e: any) {
    throw new Error(e);
  }
};

export const addNewPost =
  (newPost: string): AppThunk =>
  async dispatch => {
    try {
      await POSTS.addPost(newPost);
      dispatch(getPosts());
    } catch (e: any) {
      throw new Error(e);
    }
  };

// actions
export type HomeActionsTypes = ReturnType<typeof setPostsAC> | any;
