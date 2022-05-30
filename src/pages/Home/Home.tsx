import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import noUserIcon from 'assets/no-user.svg';
import LinearLoader from 'components/common/LinearLoader/LinearLoader';
import CreateNewPost from 'components/CreateNewPost/CreateNewPost';
import Post from 'components/Post/Post';
import SearchUsers from 'components/SearchBar/SearchUsers';
import SuggestUsers from 'components/SuggestUsers/SuggestUsers';
import style from 'pages/Home/Home.module.scss';
import { getPosts, getSuggestedUsersTC, setLimitPostsAC } from 'store/reducers/home';
import { AppDispatch, AppRootStateType } from 'store/store';
import { HomePostType } from 'types/homeTypes';

const Home = () => {
  const dispatch: AppDispatch = useDispatch();

  const posts = useSelector<AppRootStateType, HomePostType[]>(state => state.home.posts);
  const profilePhoto = useSelector<AppRootStateType, string>(
    state => state.profile.photos.small,
  );
  const isValidPhotoChecker = profilePhoto || noUserIcon;

  // linearLoaderForAddsPosts
  const loading = useSelector<AppRootStateType, string>(state => state.home.loading);
  const limitPosts = useSelector<AppRootStateType, number>(
    state => state.home.postsPerPage,
  );

  useEffect(() => {
    dispatch(getSuggestedUsersTC());
    dispatch(getPosts(limitPosts));
  }, [limitPosts]);

  const onLoadMorePostsHandle = () => {
    dispatch(setLimitPostsAC(limitPosts + 2));
  };

  return (
    <main>
      {loading === 'loading' && <LinearLoader />}

      <SearchUsers />
      <SuggestUsers />
      <CreateNewPost isValidPhotoChecker={isValidPhotoChecker} posts={posts} />

      <div className={style.PostList}>
        {posts.map(({ id, post }) => (
          <Post key={id} id={id} post={post} photo={isValidPhotoChecker} />
        ))}
      </div>

      <div className={style.buttonLoadPostsBlock}>
        {/* check difference count of posts from request - 
        if we get differnce count of posts from limit number = hide Button
        */}
        {posts.length === limitPosts && (
          <button
            disabled={loading === 'loading'}
            onClick={onLoadMorePostsHandle}
            className={
              loading === 'loading'
                ? style.disabledButtonLoadPosts
                : style.defaultButtonLoadPosts
            }
          >
            Load More
          </button>
        )}
      </div>
    </main>
  );
};

export default Home;
