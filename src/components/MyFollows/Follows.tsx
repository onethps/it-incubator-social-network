import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import s from './Follows.module.scss';

import noUserIcon from 'assets/no-user.svg';
import { IUser } from 'store/reducers/types';
import { getUsers } from 'store/reducers/users';
import { AppDispatch, AppRootStateType } from 'store/store';

const Follows = () => {
  const dispatch: AppDispatch = useDispatch();

  const followedUsers = useSelector<AppRootStateType, IUser[]>(
    state => state.users.followedUsers,
  );
  const [pageCount, setPageCount] = useState(6);
  useEffect(() => {
    dispatch(getUsers(1, pageCount));
  }, [pageCount]);

  return (
    <div>
      <div className={s.root}>
        {followedUsers.map(({ name, id }) => (
          <div className={s.followUser}>
            <img className={s.followUserPhoto} src={noUserIcon} />
            <h3 className={s.followUserName}>{name}</h3>
            <div className={s.followUserId}>id {id}</div>
            <button className={s.followUserButton}>Unfollow</button>
          </div>
        ))}
      </div>
      <div className={s.followUserButtonBlock}>
        <button
          className={s.loadMoreButton}
          onClick={() => setPageCount(() => pageCount +3)}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Follows;
