import React from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import s from './Settings.module.scss';

import EditProifle from 'components/Settings/EditProfile/EditProifle';
import EditSocialLinks from 'components/Settings/EditSocialLinks/EditSocialLinks';
import { updateMyProfile } from 'store/reducers/profile';
import { AppDispatch, AppRootStateType } from 'store/store';
import { contactsType, photosType, profileType } from 'types/profile';

type Inputs = {
  fullName: string;
  aboutMe: string;
  jobDescription: string;
  jobStatus: string;
  fbLink: string;
  instLink: string;
  webLink: string;
  twitterLink: string;
  youtubeLink: string;
  gitLink: string;
  vkLink: string;
  externalLink: string;
};

const Settings = () => {
  const dispatch: AppDispatch = useDispatch();
  const profile = useSelector<AppRootStateType, profileType>(state => state.profile);
  const constacts = useSelector<AppRootStateType, contactsType>(
    state => state.profile.contacts,
  );
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
  };
  return (
    <div>
      <div className={s.settings}>
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
    </div>
  );
};

export default Settings;
