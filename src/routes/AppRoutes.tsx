import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import s from 'App.module.scss';
import LeftSideBlock from 'components/LeftSideBlock/LeftSideBlock';
import RightSideBlock from 'components/RightSideBlock/RightSideBlock';
import { RouteNames, routes } from 'routes/routes';

export const AppRouters = () => (
  <div className={s.appWrapper}>
    <LeftSideBlock />
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="/" element={<Navigate to={RouteNames.HOME1} />} />
    </Routes>
    <RightSideBlock />
  </div>
);

export default AppRouters;
