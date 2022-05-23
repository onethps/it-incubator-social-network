import React, { ReactElement } from 'react';

import s from './RightSideBlock.module.scss';

import News from 'components/RightSideBlock/News/News';
import YourFollowers from 'components/RightSideBlock/YourFollowers/YourFollowers';

const RightSideBlock = (): ReactElement => (
  <div className={s.rightSideBlock}>
    <News />
    <YourFollowers />
  </div>
);

export default RightSideBlock;
