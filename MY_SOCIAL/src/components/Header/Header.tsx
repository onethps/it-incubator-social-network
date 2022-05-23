import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

import style from 'components/Header/Header.module.scss';
import { initStateAuthType } from 'redux/reducers/AuthReducer';

type HeaderType = {
  LoginData: initStateAuthType;
  LogoutTC: () => void;
};

export const Header: FC<HeaderType> = ({ LoginData, LogoutTC }) => (
  <header>
    <div className={style.headerWrap}>
      <div className={style.headerInner}>

        <div className={style.logoHeaderStyle}>
          <img alt="logoIMG" src="https://cdn.icon-icons.com/images/icon-icons.svg" />
        </div>

        <div className={style.LoginStyle}>
          {' '}
          {LoginData.isAuth ? (
            <div>
              <div>{LoginData.login}</div>
              <button onClick={LogoutTC}>LOGOUT</button>
            </div>
          ) : (
            <NavLink to="/login">LOGIN</NavLink>
          )}
        </div>



      </div>
    </div>
  </header>
);
