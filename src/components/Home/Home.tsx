import React, { useEffect, useState } from 'react';

import { BiSearch } from 'react-icons/bi';
import { RiSendPlane2Fill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';

import { ProfilePostType } from 'api';
import { POSTS } from 'api/posts';
import imgPhoto from 'assets/cat_ava.jpeg';
import Modal from 'components/common/Modal/Modal';
import style from 'components/Home/Home.module.scss';
import Post from 'components/Home/Post/Post';
import SuggestUsers from 'components/Home/SuggestUsers/SuggestUsers';
import { AppDispatch } from 'store/store';

const Home = () => {
  const dispatch: AppDispatch = useDispatch();

  const [state, setState] = useState<ProfilePostType[]>([]);
  const [updatePosts, setUpdatePosts] = useState(false);

  enum USERS_VALUES {
    CURRENT_PAGE = 1,
    PAGE_COUNT = 4,
  }

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const data = await POSTS.getPosts();
      setState(data.data.reverse());
      setUpdatePosts(false);
    };
    // dispatch(getUsers(USERS_VALUES.CURRENT_PAGE, USERS_VALUES.PAGE_COUNT));
    // call the function
    fetchData();
  }, [updatePosts]);

  const [modal, setModal] = useState(false);
  const [text, setText] = useState('');

  const buttonHandler = () => {
    POSTS.addPost(text);
    setModal(false);
    setUpdatePosts(true);
    setText('');
  };

  return (
    <main>
      <Modal active={modal} setActive={setModal}>
        <div className={style.createPostModalBox}>
          <textarea
            autoFocus={modal}
            value={text}
            onChange={e => setText(e.currentTarget.value)}
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
        {state.map(({ id, post }) => (
          <Post key={id} post={post} />
        ))}
      </div>
    </main>
  );
};

export default Home;
