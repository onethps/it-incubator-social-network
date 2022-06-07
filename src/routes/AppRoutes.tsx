import React from 'react';

import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import style from 'App.module.scss';
import Spinner from 'components/common/Spinner/Spinner';
import Navbar from 'components/Navbar/Navbar';
import RightSideBlock from 'components/RightSideBlock/RightSideBlock';
import { HOME_ROUTE } from 'constants/base';
import Error404 from 'pages/Error404';
import Login from 'pages/Login/Login';
import { routes } from 'routes/routes';
import { AppRootStateType } from 'store/store';

export const AppRouters = () => {
  const isLoggedStatus = useSelector<AppRootStateType, boolean>(
    state => state.login.isLoggedIn,
  );

  const isLoadingStatus = useSelector<AppRootStateType, string>(
    state => state.login.loading,
  );

  if (isLoadingStatus === 'loading') {
    return (
      <div className={style.loadingSpinner}>
        <Spinner />
      </div>
    );
  }
  return (
    <>
      {isLoggedStatus ? (
        <div className={style.appWrapper}>
          <Navbar />
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="/" element={<Navigate to={HOME_ROUTE} />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <RightSideBlock />
        </div>
      ) : (
        <Routes>
          <Route path="*" element={<Login />} />
        </Routes>
      )}
    </>
  );
};

export default AppRouters;
