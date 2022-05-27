import React from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import s from './Settings.module.scss';

import EditProifle from 'components/Settings/EditProfile/EditProifle';
import EditSocialLinks from 'components/Settings/EditSocialLinks/EditSocialLinks';
import { AppRootStateType } from 'store/store';

type Inputs = {
  name: string;
  aboutMe: string;
  jobDescription: string;
  jobStatus: string;
  asd:boolean
};

const Settings = () => {
  const name1 = useSelector<AppRootStateType, string>(state => state.profile.fullName);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: name1,
      aboutMe: '',
      jobDescription: '',
      jobStatus: '',
    },
  });
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <div>
      <div className={s.settings}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <EditProifle register={register} />
          <EditSocialLinks />
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
