import React from 'react';

import s from './LinearLoader.module.scss';

const LinearLoader = () => (
  <div className={s.root}>
    <div className={s.loading} />
  </div>
);

export default LinearLoader;
