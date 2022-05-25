import React from 'react';

import { useSelector } from 'react-redux';

import style from './SuggestUsers.module.scss';

import imgPhoto from 'assets/no-user.svg';
import { IUser } from 'store/reducers/types';
import { AppRootStateType } from 'store/store';

const SuggestUsers = () => {
  const users = useSelector<AppRootStateType, IUser[]>(state => state.users.newUsers);
  return (
    <div>
      <h3 className={style.suggestedUsersTitle}>Suggested Users</h3>
      <div className={style.suggestedUsers}>
        {users.map(({ id, name, photos }) => (
          <div key={id} className={style.suggestedUserItem}>
            <img
              src={photos.small ? photos.small : imgPhoto}
              className={style.suggestedUserItemPhoto}
            />
            <span className={style.suggestedUserItemName}>{name}</span>
            <span className={style.suggestedUserItemId}>{id}</span>
            <button className={style.suggestedUserItemButton}>+Follow</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestUsers;
