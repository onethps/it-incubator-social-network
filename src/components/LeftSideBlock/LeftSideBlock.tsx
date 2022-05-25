import { AiFillHome, AiFillSetting, FaUserAlt, RiLoginBoxFill } from 'react-icons/all';
import { NavLink } from 'react-router-dom';

import imgAva from 'assets/cat_ava.jpeg';
import style from 'components/LeftSideBlock/LeftSideBlock.module.scss';
import { RouteNames } from 'routes/routes';

export const LeftSideBlock = () => {
  const NavStyle = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${style.navLinkStyleItem} ${style.active}` : style.navLinkStyleItem;

  return (
    <div className={style.sidebar}>
      <div className={style.welcomeBlock}>
        <img alt="imgPhoto" src={imgAva} />
        <div className={style.textBlock}>
          <div>Welcome 👋</div>
          <h3>Super Cat</h3>
        </div>
      </div>

      <nav>
        <ul className={style.NavBlock}>
          <NavLink to={RouteNames.HOME1} className={isActive => NavStyle(isActive)}>
            <AiFillHome size="30px" />
            <span>HOME</span>
          </NavLink>

          {/* <NavLink to={RouteNames.DIALOGS} className={isActive => NavStyle(isActive)}> */}
          {/*  <AiFillMessage size="30px" /> */}
          {/*  <span>DIALOGS</span> */}
          {/* </NavLink> */}

          {/* <li> */}
          {/*  <NavLink to={RouteNames.USERS}>Users</NavLink> */}
          {/* </li> */}

          <NavLink to="/settings" className={isActive => NavStyle(isActive)}>
            <AiFillSetting size="30px" />
            <span>SETTINGS</span>
          </NavLink>

          <NavLink to="/profile" className={isActive => NavStyle(isActive)}>
            <FaUserAlt size="30px" />
            <span>PROFILE</span>
          </NavLink>

          <NavLink to="/login" className={isActive => NavStyle(isActive)}>
            <RiLoginBoxFill size="30px" />
            <span>LOGOUT</span>
          </NavLink>
        </ul>
      </nav>
      {/* <div className={style.friendsBlock}>{friendsElems}</div> */}
    </div>
  );
};

export default LeftSideBlock;
