import React from 'react';
import s from './Navbar.module.scss'

import NavLinks from 'components/Navbar/NavLinks';

const Navigation = () => {
  const a = true;
  return (
    <div className={s.Navigation}>
      <NavLinks />
    </div>
  );
};

export default Navigation;
