import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import s from './Follows.module.scss';

import Spinner from 'components/common/Spinner/Spinner';
import FollowedUser from 'components/MyFollows/FollowedUser/FollowedUser';
import { MY_FOLLOWS_CONSTS } from 'enums';
import { IUser } from 'store/reducers/types';
import { getFollowedUsers, setPageParamsAC, unFollowUserTC } from 'store/reducers/users';
import { AppDispatch, AppRootStateType } from 'store/store';

const Follows = () => {
  const dispatch: AppDispatch = useDispatch();

  const loadingStatus = useSelector<AppRootStateType, string>(
    state => state.users.loading,
  );

  const followedUsers = useSelector<AppRootStateType, IUser[]>(
    state => state.users.followedUsers,
  );

  const currentPage = useSelector<AppRootStateType, number>(
    state => state.users.currentPage,
  );
  const pageCount = useSelector<AppRootStateType, number>(state => state.users.pageCount);

  useEffect(() => {
    dispatch(getFollowedUsers(currentPage, pageCount));
  }, [pageCount]);

  const onUnfolowUserHandle = (userID: number) => {
    dispatch(unFollowUserTC(userID));
  };

  const onLoadMoreFollowers = () => {
    dispatch(
      setPageParamsAC(
        currentPage,
        pageCount + MY_FOLLOWS_CONSTS.INC_COUNT_OF_USERS_ON_SECOND_LOAD,
      ),
    );
  };

  if (loadingStatus === 'loading') {
    return <Spinner />;
  }

  return (
    <div>
      <div className={s.root}>
        {followedUsers.map(({ name, id, photos }) => (
          <FollowedUser
            key={id}
            onUnfolowUserHandle={onUnfolowUserHandle}
            name={name}
            id={id}
            photos={photos}
          />
        ))}
      </div>
      <div className={s.followUserButtonBlock}>
        {followedUsers.length >= 9 && (
          <button className={s.loadMoreButton} onClick={onLoadMoreFollowers}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Follows;
