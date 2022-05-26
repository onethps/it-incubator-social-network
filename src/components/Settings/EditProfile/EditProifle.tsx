import React, { ChangeEvent, FC, useState } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import s from './EditProifle.module.scss';

import { AppRootStateType } from 'store/store';

type EditProfile = {
  register: any;
};

const EditProifle: FC<EditProfile> = ({ register }) => {
  const name1 = useSelector<AppRootStateType, string>(state => state.profile.fullName);

  return (
    <div>
      <div className={s.editProfile}>
        <h3 className={s.editProfileTittle}>Edit Profile</h3>
        <input
          className={s.editProfileInputName}
          {...register('name')}
          placeholder="Name"
        />
        <input
          className={s.editProfileInputAboutMe}
          {...register('aboutMe')}
          placeholder="About Me"
        />
        <input
          className={s.editProfileInputJobDescription}
          placeholder="Job Description"
          {...register('jobDescription')}
        />

        <div className={s.editProfileCheckBox}>
          <div className={s.editProfileCheckBoxTitle}>Looking for a job</div>
          <label className={s.editProfileCheckBoxAgree}>
            <input type ="radio" {...register('jobStatus')} name="isLookingForJob" />
            <span>Yes</span>
          </label>

          <label className={s.editProfileCheckBoxDisagree}>
            <input type="radio" {...register('jobStatus')} name="isLookingForJob" />
            <span>No</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default EditProifle;
