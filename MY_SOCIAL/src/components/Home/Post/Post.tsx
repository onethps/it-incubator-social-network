import React from 'react';

import style from './styles/Post.module.scss';

import imgPhoto from 'assets/cat_ava.jpeg';
import commentsIcon from 'assets/icons/comments.svg';
import likesICON from 'assets/icons/likes.svg';
import postMenuIcon from 'assets/icons/post_menu_iconm.svg';
import repostIcon from 'assets/icons/reposts.svg';
import shareIcon from 'assets/icons/share.svg';

const Post = () => (
  <>
    <div className={style.post}>
      <div className={style.postHeader}>
        <img className={style.postHeaderUserPhoto} src={imgPhoto} />

        <div className={style.postHeaderUserAndMenu}>
          <div className={style.postHeaderUserInfo}>
            <div className={style.postHeaderUserName}>Anastasia Kovel</div>
            <div className={style.postHeaderUserId}>id 14121</div>
          </div>
          <img alt="postMenuIcon" src={postMenuIcon} />
        </div>
      </div>

      <div className={style.postMessage}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industrys standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type specimen
        book. It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </div>

      <div className={style.postSocialBlock}>
        <div className={style.postSocialBlockMain}>
          <div className={style.postLikes}>
            <img alt="likesICON" src={likesICON} />
            <span>15</span>
          </div>

          <div className={style.postReposts}>
            <img alt="repostIcon" src={repostIcon} />
            <span>22</span>
          </div>

          <div className={style.postComments}>
            <img alt="commentsIcon" src={commentsIcon} />
            <span>15 Comments</span>
          </div>
        </div>

        <div className={style.postShare}>
          <img alt="shareIcon" src={shareIcon} />
          <span>Share</span>
        </div>
      </div>
    </div>
  </>
);

export default Post;
