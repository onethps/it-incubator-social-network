import React from 'react';

import s from './EditProifle.module.scss';

const EditProifle = () => (
  <div>
    <div className={s.editProfile}>
      <h3 className={s.editProfileTittle}>Edit Profile</h3>
      <input className={s.editProfileInputName} placeholder="Name" />
      <input className={s.editProfileInputAboutMe} placeholder="About Me" />
      <input className={s.editProfileInputJobDescription} placeholder="Job Description" />

      <div className={s.editProfileCheckBox}>
        <div className={s.editProfileCheckBoxTitle}>Looking for a job</div>
        <label className={s.editProfileCheckBoxAgree}>
          <input type="radio" name="isLookingForJob" />
          <span>Yes</span>
        </label>

        <label className={s.editProfileCheckBoxDisagree}>
          <input type="radio" name="isLookingForJob" />
          <span>No</span>
        </label>
      </div>
    </div>
  </div>
);

export default EditProifle;
