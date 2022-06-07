import { ChangeEvent, useState } from 'react';

import { AiOutlineLike, AiOutlineMessage } from 'react-icons/ai';
import { BiRepost } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { RiShareForwardLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';

import Modal from 'components/common/Modal/Modal';
import style from 'components/Post/styles/Post.module.scss';
import { deletePost, editPostTC } from 'store/reducers/home';
import { AppDispatch, AppRootStateType } from 'store/store';

const Post = ({ id, post, photo }: { id: string; post: string; photo: string }) => {
  const dispatch: AppDispatch = useDispatch();
  const profileName = useSelector<AppRootStateType, string>(state => state.auth.login);
  const [OnDialogMenu, setOnDialogMenu] = useState(false);
  const [editModalMode, setEditModalMode] = useState(false);

  const deletePostHandler = () => {
    dispatch(deletePost(id));
  };

  const editHandler = () => {
    setOnDialogMenu(false);
    setEditModalMode(true);
    // dispatch(deletePost(id));
  };

  const [currentEditPost, setCurrentEditPost] = useState(post);

  const changePostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentEditPost(e.currentTarget.value);
  };

  const submitEditTextHandler = () => {
    dispatch(editPostTC(currentEditPost, id));
    setEditModalMode(false);
  };

  return (
    <>
      <div className={style.post}>
        <div className={style.postHeader}>
          <img className={style.postHeaderUserPhoto} src={photo} />

          <div className={style.postHeaderUserAndMenu}>
            <div className={style.postHeaderUserInfo}>
              <div className={style.postHeaderUserName}>{profileName}</div>
              <div className={style.postHeaderUserId}>id 14121</div>
            </div>

            <Modal setActive={setEditModalMode} active={editModalMode}>
              <div className={style.ModalBlockStyle}>
                <h3>Edit Post</h3>
                <textarea
                  defaultValue={currentEditPost}
                  onChange={changePostTextHandler}
                />
                <button onClick={submitEditTextHandler}>Save Edit</button>
              </div>
            </Modal>

            <div className={style.postActionMenu}>
              <div
                onClick={() => setOnDialogMenu(true)}
                className={style.postHeaderBgMenuIcon}
              >
                <BsThreeDotsVertical size="25px" color="6C757D" />
              </div>
              {OnDialogMenu && (
                <div className={style.postAction}>
                  <div className={style.postActionBox}>
                    <div onClick={editHandler}>Edit</div>
                    <div onClick={deletePostHandler}>Delete</div>
                  </div>
                  <div
                    onClick={() => setOnDialogMenu(false)}
                    className={style.bgPostActionBlock}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={style.postMessage}>
          <p>{post}</p>
        </div>

        <div className={style.postSocialBlock}>
          <div className={style.postSocialBlockMain}>
            <div className={style.postLikes}>
              <AiOutlineLike />
              <span>0</span>
            </div>

            <div className={style.postReposts}>
              <BiRepost />
              <span>0</span>
            </div>

            <div className={style.postComments}>
              <AiOutlineMessage />
              <span>0 Comments</span>
            </div>
          </div>

          <div className={style.postShare}>
            <RiShareForwardLine />
            <span>Share</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
