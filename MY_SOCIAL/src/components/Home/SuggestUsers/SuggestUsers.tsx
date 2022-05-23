import React from 'react';

import style from './SuggestUsers.module.scss';

import imgPhoto from 'assets/cat_ava.jpeg';
import imgSengMessage from 'assets/icons/send_message.svg';

const SuggestUsers = () => (
  <>
    <h3 className={style.suggestedUsersTitle}>Suggested Users</h3>
    <div className={style.suggestedUsers}>
      <div className={style.suggestedUserItem}>
        <img src={imgPhoto} className={style.suggestedUserItemPhoto} />
        <span className={style.suggestedUserItemName}>Anastasia Kovel</span>
        <span className={style.suggestedUserItemId}>id 45484</span>
        <button className={style.suggestedUserItemButton}>+Follow</button>
      </div>

      <div className={style.suggestedUserItem}>
        <img src={imgPhoto} className={style.suggestedUserItemPhoto} />
        <span className={style.suggestedUserItemName}>Anastasia Kovel</span>
        <span className={style.suggestedUserItemId}>id 45484</span>
        <button className={style.suggestedUserItemButton}>+Follow</button>
      </div>

      <div className={style.suggestedUserItem}>
        <img src={imgPhoto} className={style.suggestedUserItemPhoto} />
        <span className={style.suggestedUserItemName}>Anastasia Kovel</span>
        <span className={style.suggestedUserItemId}>id 45484</span>
        <button className={style.suggestedUserItemButton}>+Follow</button>
      </div>

      <div className={style.suggestedUserItem}>
        <img src={imgPhoto} className={style.suggestedUserItemPhoto} />
        <span className={style.suggestedUserItemName}>Anastasia Kovel</span>
        <span className={style.suggestedUserItemId}>id 45484</span>
        <button className={style.suggestedUserItemButton}>+Follow</button>
      </div>
    </div>


  </>
);

export default SuggestUsers;
