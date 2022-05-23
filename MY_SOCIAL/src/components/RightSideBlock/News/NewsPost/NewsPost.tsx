import React from 'react';

import s from './NewsPost.module.scss';

import newsImgExample from 'assets/icons/news_img_example.svg';

const NewsPost = () => (
  <>
    <div className={s.newsBlockBorderLine} />
    <span className={s.newsBlockCategory}>Desgin. Life</span>
    <div className={s.newsBlockMainContent}>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum
      </p>
      <img className={s.newsBlockImage} src={newsImgExample} />
    </div>
  </>
);

export default NewsPost;
