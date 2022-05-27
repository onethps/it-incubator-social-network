import React, { useEffect, useState } from 'react';

import { BiSearch } from 'react-icons/bi';
import { RiSendPlane2Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';

import imgPhoto from 'assets/cat_ava.jpeg';
import Modal from 'components/common/Modal/Modal';
import style from 'components/Home/Home.module.scss';
import Post from 'components/Home/Post/Post';
import SuggestUsers from 'components/Home/SuggestUsers/SuggestUsers';
import { addNewPost, getPosts } from 'store/reducers/home';
import { AppDispatch, AppRootStateType } from 'store/store';
import { HomePostType } from 'types/homeTypes';
import LinearLoader from "components/common/LinearLoader/LinearLoader";

const Home = () => {
  const dispatch: AppDispatch = useDispatch();

  const posts = useSelector<AppRootStateType, HomePostType[]>(
    state => state.home.posts,
  ).reverse();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const [modal, setModal] = useState(false);
  const [modalTextArea, setmodalTextArea] = useState('');

  const buttonHandler = () => {
    dispatch(addNewPost(modalTextArea));
    setModal(false);
    setmodalTextArea('');
  };

  return (
    <main>
        <LinearLoader/>
      <Modal active={modal} setActive={setModal}>
        <div className={style.createPostModalBox}>
          <textarea
            autoFocus={modal}
            value={modalTextArea}
            onChange={e => setmodalTextArea(e.currentTarget.value)}
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
      <div className={style.searchUsers}>
        <input placeholder="Search Users..." />
        <BiSearch />
      </div>

      <SuggestUsers />

      {/* CREATE POST BLOCK */}
      <h3 className={style.createPostTitle}>Create Post</h3>
      <div className={style.createPost}>
        <img className={style.createPostAva} src={imgPhoto} />
        <div className={style.createPostInputBlock}>
          <input
            onClick={() => setModal(true)}
            placeholder="What Your Mind? Hamse"
            disabled={modal}
          />
        </div>
      </div>

      <div className={style.PostList}>
        {posts.map(({ id, post }) => (
          <Post key={id} post={post} />
        ))}
      </div>
    </main>
  );
};

export default Home;
