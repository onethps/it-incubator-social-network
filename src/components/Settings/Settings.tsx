import React from 'react';

import s from './Settings.module.scss';

import EditProifle from 'components/Settings/EditProfile/EditProifle';
import EditSocialLinks from 'components/Settings/EditSocialLinks/EditSocialLinks';

const Settings = () => (
  <div>
    <div className={s.settings}>
      <EditProifle />
      <EditSocialLinks />
      <div className={s.settingsButtonBlock}>
        <button className={s.settingsSubmit}>SAVE</button>
      </div>
    </div>
  </div>
);

export default Settings;
