import React, { ChangeEvent, useEffect, useState } from 'react';

import { RiSuitcaseFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import s from './Profile.module.scss';

import noUserIcon from 'assets/no-user.svg';
import SocialButtonLink from 'components/common/SocialButtonLink/SocialButtonLink';
import Spinner from 'components/common/Spinner/Spinner';
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

  const loadingStatus = useSelector<AppRootStateType, string>(
    state => state.profile.loading,
  );
  const { aboutMe, fullName, lookingForAJob, lookingForAJobDescription } = useSelector<
    AppRootStateType,
    profileType
  >(state => state.profile);
  const photo = useSelector<AppRootStateType, any>(state => state.profile.photos);

  const checkId = profileId !== Number(id!) ? id : profileId;

  useEffect(() => {
    dispatch(setProfileDataTC(Number(checkId!)));
    dispatch(fetchStatusTC(Number(checkId!)));
  }, [id]);

  const [isEditStatusMode, setEditStatusMode] = useState(false);
  const [inputStatus, setInputStatus] = useState<string | undefined>(status);

  const onChangeStatusInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputStatus(e.currentTarget.value);
  };

  const changeStatus = () => {
    if (inputStatus) dispatch(setNewStatusTC(inputStatus));
    setEditStatusMode(false);
  };

  const onEditStatusModeHandle = () => setEditStatusMode(true);

  const filterCVLink = Object.keys(contacts).filter(link => link !== 'mainLink');
  const getValidLinks = filterCVLink.filter(link => contacts[link]);

  if (loadingStatus === 'loading') {
    return (
      <div
        style={{
          display: 'flex',
          gridArea: 'main',
          justifyContent: 'center',
          justifyItems: 'center',
          marginTop: '20%',
        }}
      >
        <Spinner />
      </div>
    );
  }

  return (
    <div className={s.root}>
      <div className={s.leftBlock}>
        <div className={s.profilePhotoAndStatusBlock}>
          <img className={s.profilePhoto} src={photo.small || noUserIcon} />
          <h3>{fullName}</h3>
          <span>id {id}</span>
          <div className={s.statusBlock}>
            {isEditStatusMode && profileId === Number(id) ? (
              <input
                value={inputStatus}
                onChange={onChangeStatusInput}
                autoFocus
                onBlur={changeStatus}
              />
            ) : (
              <span onDoubleClick={onEditStatusModeHandle}>{status || 'No Status'}</span>
            )}
          </div>
        </div>

        <div className={s.leftBottomBlock}>
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

      <div className={s.rightBlock}>
        <h3>About Me</h3>
        <p>{aboutMe || 'No User Info...'}</p>

        <h3>More Info</h3>
        <p>{lookingForAJobDescription || 'No More Info...'}</p>
        <div className={s.contactButtonBlock}>
          <h3>Contacts</h3>
          {getValidLinks.length ? (
            getValidLinks.map((link, i) => (
              <SocialButtonLink key={i} link={contacts[link]} />
            ))
          ) : (
            <span className={s.NoDataTextStyle}>No Data</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
