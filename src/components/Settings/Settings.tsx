import React from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import s from './Settings.module.scss';

import EditProifle from 'components/Settings/EditProfile/EditProifle';
import EditSocialLinks from 'components/Settings/EditSocialLinks/EditSocialLinks';
import { PROFILE_ROUTE } from 'constants/base';
import { updateMyProfile } from 'store/reducers/profile';
import { AppDispatch, AppRootStateType } from 'store/store';
import { profileType } from 'types/profile';

const Settings = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const profile = useSelector<AppRootStateType, profileType>(state => state.profile);
  const myPId = useSelector<AppRootStateType, number | null>(state => state.auth.id);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<profileType | any>({
    defaultValues: {
      ...profile,
      lookingForJobValue: profile.lookingForAJob ? 'Yes' : 'No',
    },
  });
  const onSubmit: SubmitHandler<profileType | any> = ({
    aboutMe,
    lookingForAJobDescription,
    fullName,
    contacts,
    lookingForJobValue,
  }) => {
    // server accepts boolean type instead of string and we check if value from useForm Yes = return true, other = return false
    const fromValueToBoolean = lookingForJobValue === 'Yes';
    dispatch(
      updateMyProfile({
        aboutMe,
        lookingForAJob: fromValueToBoolean,
        lookingForAJobDescription,
        fullName,
        contacts: {
          ...contacts,
        },
      }),
    );
    navigate(`${PROFILE_ROUTE}/${myPId}`);
  };

  return (
    <>
      <div className={s.root}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <EditProifle register={register} />
          <EditSocialLinks register={register} />
          <div className={s.settingsButtonBlock}>
            <button type="submit" className={s.settingsSubmit}>
              SAVE
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Settings;
