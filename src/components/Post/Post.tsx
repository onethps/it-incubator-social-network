import React, { useState } from 'react';

import { AiOutlineLike, AiOutlineMessage } from 'react-icons/ai';
import { BiRepost } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { RiShareForwardLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';

import style from 'components/Post/styles/Post.module.scss';
import { AppRootStateType } from 'store/store';

const Post = ({ post, photo }: { post: string; photo: string }) => {
  const profileName = useSelector<AppRootStateType, string>(state => state.auth.login);

  const [editPostMode, setEditPostMode] = useState(false);

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

            <div onBlur={() => setEditPostMode(false)} className={style.postActionMenu}>
              <div
                onClick={() => setEditPostMode(true)}
                className={style.postHeaderBgMenuIcon}
              >
                <BsThreeDotsVertical size="25px" color="6C757D" />
              </div>
              {editPostMode && (
                <div className={style.postActionBox}>
                  <div>Edit</div>
                  <div>Delete</div>
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
