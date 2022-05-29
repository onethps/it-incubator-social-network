import React, { ReactElement } from 'react';

import s from './RightSideBlock.module.scss';

import News from 'components/RightSideBlock/News/News';

const RightSideBlock = (): ReactElement => (
  <div className={s.rightSideBlock}>
    <News />
  </div>
);

export default RightSideBlock;
