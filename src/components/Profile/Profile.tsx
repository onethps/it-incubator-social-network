import React, { ChangeEvent, useEffect, useState } from 'react';

import { BsArrowRightCircleFill } from 'react-icons/bs';
import { RiFacebookCircleFill, RiSuitcaseFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import s from './Profile.module.scss';

import noUserIcon from 'assets/no-user.svg';
import { changeStatusTC, fetchStatusTC, setProfileTC } from 'store/reducers/profile';
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

  const { photos, aboutMe, fullName, lookingForAJob } = useSelector<
    AppRootStateType,
    profileType
  >(state => state.profile);

  useEffect(() => {
    dispatch(setProfileTC(profileId!));
    dispatch(fetchStatusTC(+id!));
  }, []);

  const [editMode, setEditMode] = useState(false);
  const [inputStatus, setInputStatus] = useState<string>(status!);

  const onChangeStatusInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputStatus(e.currentTarget.value);
  };

  const changeStatus = () => {
    dispatch(changeStatusTC(inputStatus));
    setEditMode(false);
  };

  return (
    <div className={s.root}>
      <div className={s.leftBlock}>
        <div className={s.profilePhotoAndStatusBlock}>
          <img className={s.profilePhoto} src={photos ? photos.small : noUserIcon} />
          <h3>{fullName}</h3>
          <span>id 2651</span>
          <div className={s.statusBlock}>
            {editMode ? (
              <input
                value={inputStatus}
                onChange={onChangeStatusInput}
                autoFocus
                onBlur={changeStatus}
              />
            ) : (
              <span onDoubleClick={() => setEditMode(true)}>{inputStatus}</span>
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
          <button>
            <RiSuitcaseFill size="30px" />
            <span>Download CV</span>
          </button>
        </div>
      </div>

      <div className={s.profileDescriptionAndContacts}>
        <h3 className={s.profileAboutMeTitle}>About Me</h3>
        <p>{aboutMe || 'No User Info...'}</p>

        <div className={s.contactButtonBlock}>
          <h3>Contacts</h3>

          {/* check if values available in object */}
          {Object.values(contacts).filter(f => f).length ? (
            // if available return jsx with  contact buttons
            Object.keys(contacts).map(contact => <div>{contacts[contact]}</div>)
          ) : (
            <div>No Links Provided</div>
          )}

          <div className={s.contactButton}>
            <RiFacebookCircleFill size="50px" color="#0E6DFD" />
            <div className={s.contactButtonText}>
              <h3>Facebook</h3>
              <span>https://facebook.com/122...</span>
            </div>
            <div />
            <BsArrowRightCircleFill size="30px" />
          </div>

          {/* ///hers DROP ANOTRED BUTTONS */}
        </div>
      </div>

      {/* <img alt="fb" src={fb} /> */}
      {/* <img alt="link" src={link} /> */}
      {/* <img alt="web" src={web} /> */}
      {/* <img alt="inst" src={inst} /> */}
      {/* <img alt="yt" src={yt} /> */}
      {/* <img alt="git" src={git} /> */}
      {/* <img alt="vk" src={vkk} /> */}
    </div>
  );
};

export default Profile;
