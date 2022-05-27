import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from './SuggestUsers.module.scss';

import imgPhoto from 'assets/no-user.svg';
import { IUser } from 'store/reducers/types';
import { followTC } from 'store/reducers/users';
import { AppDispatch, AppRootStateType } from 'store/store';

const SuggestUsers = () => {
  const dispatch: AppDispatch = useDispatch();

  const users = useSelector<AppRootStateType, IUser[]>(
    state => state.home.suggestedUsers,
  );

  // disableButtonsOnRequest
  const [usersId, setUsersId] = useState<number[]>([]);

  const onClickHandler = (userID: number) => {
    dispatch(followTC(userID));
    setUsersId([...usersId, userID]);
  };

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
            <button
              disabled={usersId.some(u => u === id)}
              onClick={() => onClickHandler(id)}
              className={
                usersId.some(u => u === id)
                  ? style.disabledButton
                  : style.suggestedUserItemButton
              }
            >
              +Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestUsers;
