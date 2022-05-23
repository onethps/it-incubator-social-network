import React from 'react';

import s from './CurrentFollower.module.scss';

import photoGirl from 'assets/girl1.svg';

const CurrentFollower = () => (
  <div>
    <div className={s.followListBorderLine} />
    <div className={s.followerBlock}>
      <img alt="photo" src={photoGirl} />

      <div className={s.followUserInfo}>
        <span className={s.followUserName}>Jassmine</span>
        <span className={s.followUserId}>id 45498</span>
      </div>
      <button className={s.followButton}>+FOLLOW</button>
    </div>
  </div>
);

export default CurrentFollower;
