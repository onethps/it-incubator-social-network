import React from 'react';

import s from 'components/RightSideBlock/News/News.module.scss';
import NewsPost from 'components/RightSideBlock/News/NewsPost/NewsPost';

const News = () => (
  <aside className={s.news}>
    <h3 className={s.newsTitle}>News</h3>

    <div className={s.newsBlock}>
      <NewsPost />
      <NewsPost />
      <NewsPost />
      <NewsPost />
    </div>
  </aside>
);

export default News;
