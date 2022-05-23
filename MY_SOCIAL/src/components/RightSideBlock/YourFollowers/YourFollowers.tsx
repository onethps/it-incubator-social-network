import React from 'react';

import s from './YourFollowers.module.scss';

import CurrentFollower from 'components/RightSideBlock/YourFollowers/CurrentFollower/CurrentFollower';

const YourFollowers = () => (
  <div className={s.followList}>
    <h3>Your Followers</h3>

    <CurrentFollower />
    <CurrentFollower />
    <CurrentFollower />
    <CurrentFollower />
  </div>
);

export default YourFollowers;
