import { useSelector } from 'react-redux';

import noUserIcon from 'assets/no-user.svg';
import MobileNavigation from 'components/Navbar/MobileNavigation';
import style from 'components/Navbar/Navbar.module.scss';
import Navigation from 'components/Navbar/Navigation';
import { AppRootStateType } from 'store/store';

export const Navbar = () => {
  const login = useSelector<AppRootStateType, string>(state => state.auth.login);

  const profilePhoto = useSelector<AppRootStateType, string>(
    state => state.profile.photos.small,
  );

  return (
    <>
      <div className={style.root}>
        <div className={style.sidebar}>
          <div className={style.welcomeBlock}>
            <img alt="imgPhoto" src={profilePhoto || noUserIcon} />
            <div className={style.textBlock}>
              <div>Welcome 👋</div>
              <h3>{login}</h3>
            </div>
          </div>

          <Navigation />
          <MobileNavigation />
        </div>
      </div>
    </>
  );
};

export default Navbar;
