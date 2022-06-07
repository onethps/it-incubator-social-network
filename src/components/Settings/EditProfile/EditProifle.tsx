import React, { FC } from 'react';

import s from './EditProifle.module.scss';

type EditProfile = {
  register: any;
};

const EditProifle: FC<EditProfile> = ({ register }) => (
  <>
    <div className={s.root}>
      <h3 className={s.editProfileTittle}>Edit Profile</h3>
      <input
        className={s.editProfileInputName}
        {...register('fullName')}
        placeholder="fullName"
      />
      <textarea
        className={s.editProfileInputAboutMe}
        {...register('aboutMe')}
        placeholder="About Me"
      />
      <textarea
        className={s.editProfileInputJobDescription}
        placeholder="Job Description"
        {...register('lookingForAJobDescription')}
      />

      <div className={s.editProfileCheckBox}>
        <div className={s.editProfileCheckBoxTitle}>Job Status</div>

        <div className={s.editProfileCheckboxItems}>
          <div className="form-check">
            <label htmlFor="yes">
              <input
                {...register('lookingForJobValue', { required: true })}
                type="radio"
                name="lookingForJobValue"
                value="Yes"
                className="form-check-input"
                id="yes"
              />{' '}
              Available
            </label>
          </div>

          <div className="form-check">
            <label htmlFor="no">
              <input
                {...register('lookingForJobValue', { required: true })}
                type="radio"
                name="lookingForJobValue"
                value="No"
                className="form-check-input"
                id="no"
                defaultChecked
              />{' '}
              Not Available
            </label>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default EditProifle;
