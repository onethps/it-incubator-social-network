import React from 'react';

import { useSelector } from 'react-redux';

import styles from './YourFollowers.module.scss';

import CurrentFollower from 'components/RightSideBlock/YourFollowers/CurrentFollower/CurrentFollower';
import { IUser } from 'store/reducers/types';
import { AppRootStateType } from 'store/store';

const YourFollowers = () => {
  // const myFollows = useSelector<AppRootStateType, IUser[]>(
  //   state => state.users.followedUsers,
  // ).slice(0,5);


  return (
    <div className={styles.followList}>
      <h3>My Last Follows</h3>

      {/*{myFollows.map(({ id, name, followed }) => (*/}
      {/*  <CurrentFollower key={id} id={id} name={name} followed={followed} />*/}
      {/*))}*/}
    </div>
  );
};

export default YourFollowers;
