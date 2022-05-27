import React, { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Spinner from 'components/common/Spinner/Spinner';
import Login from 'components/Login/Login';
import AppRouters from 'routes/AppRoutes';
import { authTC } from 'store/reducers/auth';
import { AppDispatch, AppRootStateType } from 'store/store';
import { ReturnComponentType } from 'types';

export const App: FC = (): ReturnComponentType => {
  const loadingStatus = useSelector<AppRootStateType, string>(
    state => state.auth.loading,
  );

  const authStatus = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth);

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
      {authStatus ? (
        <>
          <AppRouters />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};
