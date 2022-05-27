import React from 'react';

import s from './FollowedUser.module.scss';

import noUserIcon from 'assets/no-user.svg';
import { photosType } from 'types/profile';

type FollowedUserType = {
  id: number;
  photos: photosType;
  name: string;
  onUnfolowUserHandle: (userId: number) => void;
};

const FollowedUser = ({ id, photos, name, onUnfolowUserHandle }: FollowedUserType) => (
  <>
    <div key={id} className={s.followUser}>
      <img className={s.followUserPhoto} src={photos.small ? photos.small : noUserIcon} />
      <h3 className={s.followUserName}>{name}</h3>
      <div className={s.followUserId}>id {id}</div>
      <button className={s.followUserButton} onClick={() => onUnfolowUserHandle(id)}>
        Unfollow
      </button>
    </div>
  </>
);

export default FollowedUser;
