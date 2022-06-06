import React, { FC, useState } from 'react';

import { RiSendPlane2Fill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';

import style from './CreateNewPost.module.scss';

import Modal from 'components/common/Modal/Modal';
import { addNewPost } from 'store/reducers/home';
import { AppDispatch } from 'store/store';
import { HomePostType } from 'types/homeTypes';

export type CreatePostType = {
  isValidPhotoChecker: string;
  posts: HomePostType[];
};

const CreateNewPost: FC<CreatePostType> = ({ isValidPhotoChecker, posts }) => {
  const dispatch: AppDispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [modalTextArea, setModalTextArea] = useState('');

  const openModalOnInputHandle = () => {
    setModal(true);
  };

  const buttonHandler = () => {
    if (modalTextArea.trim()) {
      dispatch(addNewPost(modalTextArea, posts[0].postID + 1));
      setModal(false);
      setModalTextArea('');
    }
  };

  return (
    <div className={style.root}>
      <h3 className={style.createPostTitle}>Create Post</h3>
      <div className={style.createPost}>
        <img className={style.createPostAva} src={isValidPhotoChecker} />
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
          <h3>Add new Post</h3>
          <textarea
            autoFocus={modal}
            defaultValue={modalTextArea}
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
    </div>
  );
};

export default CreateNewPost;
