import React, { useState } from 'react';

import { RiMenuFill } from 'react-icons/ri';

import s from './Navbar.module.scss';

import NavLinks from 'components/Navbar/NavLinks';

const MobileNavigation = () => {
  const [isOpen, setOpen] = useState(false);

  const onOpenSideHandler = () => setOpen(true);
  const onCloseSideHandler = () => setOpen(false);

  return (
    <div className={s.MobileNavigation}>
      {isOpen && (
        <div className={s.sidebar}>
          <div className={s.sideBarMobileNavItems}>
            <NavLinks />
          </div>
          <div className={`${s.sidebarBackground}`} onClick={onCloseSideHandler} />
        </div>
      )}

      <div className={s.MobileHeader}>
        <RiMenuFill size="50px" onClick={onOpenSideHandler} />
      </div>
    </div>
  );
};

export default MobileNavigation;
