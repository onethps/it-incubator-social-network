import {} from 'react-icons/bs';
import { AiFillHome, AiFillSetting } from 'react-icons/ai';
import { FaUserAlt, FaUserFriends } from 'react-icons/fa';
import { RiLoginBoxFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import noUserIcon from 'assets/no-user.svg';
import style from 'components/LeftSideBlock/LeftSideBlock.module.scss';
import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  MY_FOLLOWS_ROUTE,
  PROFILE_ROUTE,
  SETTINGS_ROUTE,
} from 'constants/base';
import { AppRootStateType } from 'store/store';

export const LeftSideBlock = () => {
  const NavStyle = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${style.navLinkStyleItem} ${style.active}` : style.navLinkStyleItem;

  const login = useSelector<AppRootStateType, string>(state => state.auth.login);
  const myId = useSelector<AppRootStateType, number | null>(state => state.auth.id);

  const profilePhoto = useSelector<AppRootStateType, string>(
    state => state.profile.photos.small,
  );

  return (
    <div className={style.sidebar}>
      <div className={style.welcomeBlock}>
        <img alt="imgPhoto" src={profilePhoto || noUserIcon} />
        <div className={style.textBlock}>
          <div>Welcome 👋</div>
          <h3>{login}</h3>
        </div>
      </div>

      <nav>
        <ul className={style.NavBlock}>
          <NavLink to={HOME_ROUTE} className={isActive => NavStyle(isActive)}>
            <AiFillHome size="30px" />
            <span>HOME</span>
          </NavLink>

          <NavLink
            to={`${PROFILE_ROUTE}/${myId}`}
            className={isActive => NavStyle(isActive)}
          >
            <FaUserAlt size="30px" />
            <span>MY PROFILE</span>
          </NavLink>

          <NavLink to={LOGIN_ROUTE} className={isActive => NavStyle(isActive)}>
            <RiLoginBoxFill size="30px" />
            <span>LOGOUT</span>
          </NavLink>

          <NavLink to={MY_FOLLOWS_ROUTE} className={isActive => NavStyle(isActive)}>
            <FaUserFriends size="30px" />
            <span>MY FOLLOWS</span>
          </NavLink>

          <NavLink to={SETTINGS_ROUTE} className={isActive => NavStyle(isActive)}>
            <AiFillSetting size="30px" />
            <span>SETTINGS</span>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default LeftSideBlock;
