import React from 'react';

import style from './Home.module.scss';

import imgPhoto from 'assets/cat_ava.jpeg';
import imgSengMessage from 'assets/icons/send_message.svg';
import Post from 'components/Home/Post/Post';
import SuggestUsers from 'components/Home/SuggestUsers/SuggestUsers';

const Home = () => (
  <main>
    <div className={style.searchUsers}>
      <input placeholder="Search Users..." />
    </div>

    <SuggestUsers />

    {/* CREATE POST BLOCK */}
    <h3 className={style.createPostTitle}>Create Post</h3>
    <div className={style.createPost}>
      <img className={style.createPostAva} src={imgPhoto} />
      <div className={style.createPostInputBlock}>
        <input placeholder="What Your Mind? Hamse" />
      </div>
      <button className={style.createPostSendButton}>
        <img src={imgSengMessage} />
      </button>
    </div>

    <Post />
    <Post />
    <Post />
    <Post />
  </main>
);

export default Home;
