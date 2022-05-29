import React, { useEffect, useState } from 'react';

import { RiSendPlane2Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';

import noUserIcon from 'assets/no-user.svg';
import LinearLoader from 'components/common/LinearLoader/LinearLoader';
import Modal from 'components/common/Modal/Modal';
import Post from 'components/Post/Post';
import SearchUsers from 'components/Search/SearchUsers';
import SuggestUsers from 'components/SuggestUsers/SuggestUsers';
import { POST_QUERYS } from 'enums';
import style from 'pages/Home/Home.module.scss';
import { addNewPost, getPosts, getSuggestedUsersTC } from 'store/reducers/home';
import { AppDispatch, AppRootStateType } from 'store/store';
import { HomePostType } from 'types/homeTypes';

const Home = () => {
  const dispatch: AppDispatch = useDispatch();

  const posts = useSelector<AppRootStateType, HomePostType[]>(state => state.home.posts);
  const profilePhoto = useSelector<AppRootStateType, string>(
    state => state.profile.photos.small,
  );
  const isValidPhoto = profilePhoto || noUserIcon;

  // linearLoaderForAddsPosts
  const loading = useSelector<AppRootStateType, string>(state => state.home.loading);

  const [postsPerPage, setPostsPerPage] = useState(POST_QUERYS.LIMIT_POSTS_PER_PAGE);

  useEffect(() => {
    dispatch(getSuggestedUsersTC());
    dispatch(getPosts(postsPerPage));
  }, [postsPerPage]);

  const [modal, setModal] = useState(false);
  const [modalTextArea, setModalTextArea] = useState('');

  const buttonHandler = () => {
    if (modalTextArea.trim()) {
      dispatch(addNewPost(modalTextArea, posts[0].postID + 1));
      setModal(false);
      setModalTextArea('');
    }
  };

  const onLoadMorePostsHandle = () => {
    setPostsPerPage(postsPerPage + 2);
  };

  const openModalOnInputHandle = () => {
    setModal(true);
  };

  return (
    <main>
      {loading === 'loading' && <LinearLoader />}

      <SearchUsers />

      <SuggestUsers />

      {/* CREATE POST BLOCK */}
      <h3 className={style.createPostTitle}>Create Post</h3>
      <div className={style.createPost}>
        <img className={style.createPostAva} src={isValidPhoto} />
        <div className={style.createPostInputBlock}>
          <input
            onClick={openModalOnInputHandle}
            placeholder="What Your Mind? Hamse"
            disabled={modal}
          />
        </div>
      </div>

      <Modal active={modal} setActive={setModal}>
        <div className={style.createPostModalBox}>
          <textarea
            autoFocus={modal}
            value={modalTextArea}
            onChange={e => setModalTextArea(e.currentTarget.value)}
            placeholder="Whatis in your mind"
            className={style.createPostArea}
          />
          <div className={style.createPostSubmitBox}>
            <button onClick={buttonHandler}>
              <RiSendPlane2Fill size="20px" />
              <span>POST</span>
            </button>
          </div>
        </div>
      </Modal>

      <div className={style.PostList}>
        {posts.map(({ id, post }) => (
          <Post key={id} post={post} photo={isValidPhoto} />
        ))}
      </div>

      <div className={style.buttonLoadPostsBlock}>
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
      </div>
    </main>
  );
};

export default Home;