import { POSTS } from 'api/posts';
import { USERS } from 'api/users';
import { RequestStatusType } from 'store/reducers/auth';
import { IUser } from 'store/reducers/types';
import { AppThunk } from 'store/store';
import { HomePostType } from 'types/homeTypes';

enum HOME_CONST_TYPES {
  SET_LOADING_STATUS = 'home/SET-LOADING-STATUS',
  SET_POSTS = 'home/SET-POSTS',
  SET_SUGGEST_USERS = 'home/SET-SUGGEST-USERS',
}

const initState = {
  posts: [],
  suggestedUsers: [],
  loading: 'loading',
};

type initStateType = {
  posts: HomePostType[];
  suggestedUsers: IUser[];
  loading: RequestStatusType | string;
};

export const home = (
  state: initStateType = initState,
  action: HomeActionsTypes,
): initStateType => {
  switch (action.type) {
    case HOME_CONST_TYPES.SET_SUGGEST_USERS:
      return { ...state, ...action.payload };
    case HOME_CONST_TYPES.SET_POSTS:
      return { ...state, posts: action.posts.reverse() };
    case HOME_CONST_TYPES.SET_LOADING_STATUS:
      return { ...state, loading: action.loading };
    default:
      return state;
  }
};

// actions
export const setSuggestedUsersAC = (suggestedUsers: IUser[]) => ({
  type: HOME_CONST_TYPES.SET_SUGGEST_USERS,
  payload: {
    suggestedUsers,
  },
});

export const setPostsAC = (posts: HomePostType[]) => ({
  type: HOME_CONST_TYPES.SET_POSTS,
  posts,
});

export const setLoadingAC = (loading: string) => ({
  type: HOME_CONST_TYPES.SET_LOADING_STATUS,
  loading,
});

// thunk
export const getPosts = (): AppThunk => async dispatch => {
  try {
    const response = await POSTS.getPosts();
    dispatch(setPostsAC(response.data));
  } catch (e: any) {
    throw new Error(e);
  } finally {
    dispatch(setLoadingAC('succeeded'));
  }
};

export const addNewPost =
  (newPost: string): AppThunk =>
  async dispatch => {
    dispatch(setLoadingAC('loading'));
    try {
      await POSTS.addPost(newPost);
      dispatch(getPosts());
    } catch (e: any) {
      throw new Error(e);
    } finally {
      dispatch(setLoadingAC('succeeded'));
    }
  };

export const getSuggestedUsersTC = (): AppThunk => async dispatch => {
  try {
    const response = await USERS.getSuggestedUsers();
    dispatch(setSuggestedUsersAC(response.data.items));
  } catch (e: any) {
    throw new Error(e);
  }
};

// actionTypes
export type HomeActionsTypes =
  | ReturnType<typeof setPostsAC>
  | ReturnType<typeof setLoadingAC>
  | ReturnType<typeof setSuggestedUsersAC>
  | any;
