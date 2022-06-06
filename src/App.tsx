import React, { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Spinner from 'components/common/Spinner/Spinner';
import Login from 'pages/Login/Login';
import AppRouters from 'routes/AppRoutes';
import { authTC } from 'store/reducers/auth';
import { AppDispatch, AppRootStateType } from 'store/store';
import { ReturnComponentType } from 'types';

export const App: FC = (): ReturnComponentType => {
  const loadingStatus = useSelector<AppRootStateType, string>(
    state => state.auth.loading,
  );

  const isLoggedStatus = useSelector<AppRootStateType, boolean>(
    state => state.login.isLoggedIn,
  );

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(authTC());
  }, []);

  if (loadingStatus === 'loading') {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          justifyItems: 'center',
          marginTop: '20%',
        }}
      >
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      {isLoggedStatus ? (
        <AppRouters />
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </div>
  );
};
