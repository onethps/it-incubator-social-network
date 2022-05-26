import React from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';

import s from './Settings.module.scss';

import EditProifle from 'components/Settings/EditProfile/EditProifle';
import EditSocialLinks from 'components/Settings/EditSocialLinks/EditSocialLinks';

type Inputs = {
  name: string;
  aboutMe: string;
  jobDescription: string;
  jobStatus: string;
};

const Settings = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>();
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
