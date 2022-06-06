import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import s from './FollowedUser.module.scss';

import noUserIcon from 'assets/no-user.svg';
import { photosType } from 'types/profile';

type FollowedUserType = {
  id: number;
  photos: photosType;
  name: string;
  onUnfolowUserHandle: (userId: number) => void;
};

const FollowedUser = ({ id, photos, name, onUnfolowUserHandle }: FollowedUserType) => {
  const navigate = useNavigate();

  const [tempUserId, setTempUserId] = useState<number[]>([]);

  const onFollowUserHandler = (): void => {
    onUnfolowUserHandle(id);
    setTempUserId([...tempUserId, id]);
  };

  const onShowUserProfileHandle = (): void => navigate(`/profile/${id}`);

  const isUserIdInArray = tempUserId.includes(id);

  return (
    <>
      <div key={id} className={s.followUser}>
        <div className={s.followUserInfo} onClick={onShowUserProfileHandle}>
          <img
            className={s.followUserPhoto}
            src={photos.small ? photos.small : noUserIcon}
          />
          <h3 className={s.followUserName}>{name}</h3>
          <div className={s.followUserId}>id {id}</div>
        </div>
        <button
          disabled={isUserIdInArray}
          className={isUserIdInArray ? s.disabledFollowUserButton : s.followUserButton}
          onClick={onFollowUserHandler}
        >
          Unfollow
        </button>
      </div>
    </>
  );
};

export default FollowedUser;
