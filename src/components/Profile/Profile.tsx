import React from 'react';

import s from './Profile.module.scss';

import profilePhoto from 'assets/cat_ava.jpeg';
import fb from 'assets/icons/social_links/fb.svg';
import git from 'assets/icons/social_links/GitHub.svg';
import inst from 'assets/icons/social_links/Instagram.svg';
import link from 'assets/icons/social_links/Link.svg';
import vk from 'assets/icons/social_links/VK Circled.svg';
import web from 'assets/icons/social_links/web.svg';
import yt from 'assets/icons/social_links/YouTube.svg';

const Profile = () => (
  <div>
    <div className={s.profile}>
      <img className={s.profilePhoto} src={profilePhoto} />
      <h3 className={s.profileAboutMeTitle}>About Me</h3>
      <div className={s.profileAboutMeStatus}>Im a good Person ;)</div>
      <h3 className={s.profileContactsTitle}>Contacts</h3>
      <div className={s.profileContacts}>
        <img alt="fb" src={fb} />
        <img alt="link" src={link} />
        <img alt="web" src={web} />
        <img alt="inst" src={inst} />
        <img alt="yt" src={yt} />
        <img alt="git" src={git} />
        <img alt="vk" src={vk} />
      </div>
    </div>
      <div className={s.EditProfileButtonBlock}>
    <button className={s.EditProfileButton}>EDIT PROFILE</button>
      </div>
  </div>
);

export default Profile;
