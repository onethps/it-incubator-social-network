import React from 'react';

import {
  AiOutlineLike,
  AiOutlineMessage,
  BiRepost,
  BsThreeDotsVertical,
  RiShareForwardLine,
} from 'react-icons/all';

import imgPhoto from 'assets/cat_ava.jpeg';
import style from 'components/Home/Post/styles/Post.module.scss';

const Post = ({ post }: { post: string }) => (
  <>
    <div className={style.post}>
      <div className={style.postHeader}>
        <img className={style.postHeaderUserPhoto} src={imgPhoto} />

        <div className={style.postHeaderUserAndMenu}>
          <div className={style.postHeaderUserInfo}>
            <div className={style.postHeaderUserName}>Anastasia Kovel</div>
            <div className={style.postHeaderUserId}>id 14121</div>
          </div>
          <div className={style.postHeaderBgMenuIcon}>
            <BsThreeDotsVertical size="25px" color="6C757D" />
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
            <span>15</span>
          </div>

          <div className={style.postReposts}>
            <BiRepost />
            <span>22</span>
          </div>

          <div className={style.postComments}>
            <AiOutlineMessage />
            <span>15 Comments</span>
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

export default Post;
