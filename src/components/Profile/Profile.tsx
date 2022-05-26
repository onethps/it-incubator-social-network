import React, { useEffect } from 'react';

import { BsArrowRightCircleFill } from 'react-icons/bs';
import { RiFacebookCircleFill, RiSuitcaseFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';

import s from './Profile.module.scss';

import Spinner from 'components/common/Spinner/Spinner';
import { setProfileTC } from 'store/reducers/profile';
import { AppDispatch, AppRootStateType } from 'store/store';

const Profile = () => {
  const dispatch: AppDispatch = useDispatch();
  const profileId = useSelector<AppRootStateType, number | null>(state => state.auth.id);

  const { photos, contacts } = useSelector<AppRootStateType, any>(state => state.profile);

  const { large } = photos;

  // budem tut perepberat OBJECT
  for (const key in contacts) {
    if (contacts[key]) {
      console.log(key + contacts[key]);
    }
  }

  useEffect(() => {
    dispatch(setProfileTC(profileId!));
  }, []);

  if (!profileId) {
    return (
      <div className={s.spinnerBox}>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={s.root}>
      <div className={s.leftBlock}>
        <div className={s.profilePhotoAndStatusBlock}>
          <img className={s.profilePhoto} src={large} />
          <h3>Jessica Parker</h3>
          <span>id 2651</span>
          <div className={s.statusBlock}>
            <span>Its my new status</span>
          </div>
        </div>

        <div className={s.jobStatusBlock}>
          <h3>Job Status</h3>
          <span>Availible for Work</span>
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
        <p>
          Hi! My name is Jessica Parker. I am UI/UX designer, and I'm very passionate and
          dedicated to my work. With 20 years experience as a professional graphic
          designer, I have acquired the skills and knowledge necessary to make your
          project a success.
        </p>

        <div className={s.contactButtonBlock}>
          <h3>Contacts</h3>
          <div className={s.contactButton}>
            <RiFacebookCircleFill size="50px" color="#0E6DFD" />
            <div className={s.contactButtonText}>
              <h3>Facebook</h3>
              <span>https://facebook.com/122...</span>
            </div>
            <div></div>
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
