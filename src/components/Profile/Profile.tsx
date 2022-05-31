import React, { ChangeEvent, useEffect, useState } from 'react';

import { RiSuitcaseFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import s from './Profile.module.scss';

import noUserIcon from 'assets/no-user.svg';
import SocialButtonLink from 'components/common/SocialButtonLink/SocialButtonLink';
import { fetchStatusTC, setNewStatusTC, setProfileDataTC } from 'store/reducers/profile';
import { AppDispatch, AppRootStateType } from 'store/store';
import { profileType } from 'types';

const Profile = () => {
  const dispatch: AppDispatch = useDispatch();

  const { id } = useParams();

  const profileId = useSelector<AppRootStateType, number | null>(state => state.auth.id);
  const contacts = useSelector<AppRootStateType, any>(state => state.profile.contacts);
  const status = useSelector<AppRootStateType, string | undefined>(
    state => state.profile.status,
  );

  const { photos, aboutMe, fullName, lookingForAJob, lookingForAJobDescription } =
    useSelector<AppRootStateType, profileType>(state => state.profile);

  useEffect(() => {
    dispatch(setProfileDataTC(profileId!));
    dispatch(fetchStatusTC(+id!));
  }, []);

  const [isEditStatusMode, setEditStatusMode] = useState(false);
  const [inputStatus, setInputStatus] = useState<string>(status!);

  const onChangeStatusInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputStatus(e.currentTarget.value);
  };

  const changeStatus = () => {
    dispatch(setNewStatusTC(inputStatus));
    setEditStatusMode(false);
  };

  const filterCVLink = Object.keys(contacts).filter(link => link !== 'mainLink');
  const getValidLinks = filterCVLink.filter(link => contacts[link]);

  return (
    <div className={s.root}>
      <div className={s.leftBlock}>
        <div className={s.profilePhotoAndStatusBlock}>
          <img className={s.profilePhoto} src={photos ? photos.small : noUserIcon} />
          <h3>{fullName}</h3>
          <span>id 2651</span>
          <div className={s.statusBlock}>
            {isEditStatusMode ? (
              <input
                value={inputStatus}
                onChange={onChangeStatusInput}
                autoFocus
                onBlur={changeStatus}
              />
            ) : (
              <span onDoubleClick={() => setEditStatusMode(true)}>{inputStatus}</span>
            )}
          </div>
        </div>

        <div className={s.jobStatusBlock}>
          <h3>Job Status</h3>
          {lookingForAJob ? (
            <span className={s.activeJobStatus}>Available</span>
          ) : (
            <span className={s.inActiveJobStatus}>Not Available</span>
          )}
        </div>
        <div className={s.downloadCVButtonBlock}>
          {contacts.mainLink ? (
            <button className={s.activeCVButton}>
              <RiSuitcaseFill size="30px" />
              <a href={`https://${contacts.mainLink}`} target="_blank" rel="noreferrer">
                Download CV
              </a>
            </button>
          ) : (
            <div>
              <button className={s.inActiveCVButton}>
                <RiSuitcaseFill size="30px" />
                <span>Download CV</span>
              </button>
              <h4>No link provided</h4>
            </div>
          )}
        </div>
      </div>

      <div className={s.aboutMeBlock}>
        <h3>About Me</h3>
        <p>{aboutMe || 'No User Info...'}</p>

        <h3>More Info</h3>
        <p>{lookingForAJobDescription}</p>
        <div className={s.contactButtonBlock}>
          <h3>Contacts</h3>
          {getValidLinks.length ? (
            getValidLinks.map((link, i) => (
              <SocialButtonLink key={i} link={contacts[link]} />
            ))
          ) : (
            <div>No Data</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
