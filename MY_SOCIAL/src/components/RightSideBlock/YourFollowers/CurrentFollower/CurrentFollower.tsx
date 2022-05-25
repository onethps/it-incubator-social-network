import React from 'react';

import s from './CurrentFollower.module.scss';

import noUserIcon from 'assets/no-user.svg';

const CurrentFollower = ({
  id,
  name,
  followed,
}: {
  id: number;
  name: string;
  followed: boolean;
}) => (
  <div>
    <div className={s.followListBorderLine} />
    <div className={s.followerBlock}>
      <img alt="photo" src={noUserIcon} />

      <div className={s.followUserInfo}>
        <span className={s.followUserName}>{name}</span>
        <span className={s.followUserId}>id {id}</span>
      </div>
      {followed ? (
        <button className={`${s.followButton} ${s.active}`}>Unfollow</button>
      ) : (
        <button className={s.followButton}>+Follow</button>
      )}
    </div>
  </div>
);

export default CurrentFollower;
