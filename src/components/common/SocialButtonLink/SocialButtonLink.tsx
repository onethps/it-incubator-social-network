import { BsArrowRightCircleFill } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import {
  RiFacebookCircleFill,
  RiGithubFill,
  RiInstagramFill,
  RiVimeoFill,
  RiYoutubeFill,
} from 'react-icons/ri';

import s from './SocialButtonLink.module.scss';

const SocialButtonLink = ({ contact }: { contact: string }) => {
  const socialLinkIcons = [
    {
      name: 'facebook',
      icon: <RiFacebookCircleFill size="50px" color="#0E6DFD" />,
      color: 'blue',
    },
    {
      name: 'instagram',
      icon: <RiInstagramFill size="50px" color="red" />,
      color: 'red',
    },
    {
      name: 'github',
      icon: <RiGithubFill size="50px" color="black" />,
      color: 'black',
    },
    {
      name: 'vk',
      icon: <RiVimeoFill size="50px" color="blue" />,
      color: 'blue',
    },
    {
      name: 'twitter',
      icon: <FaTwitter size="50px" color="blue" />,
      color: 'blue',
    },
    {
      name: 'youtube',
      youtube: <RiYoutubeFill size="50px" color="red" />,
      color: 'red',
    },
    // {
    //   name: 'website',
    //   website: RiExternalLinkFill,
    //   color: 'blue',
    // },

    // {
    //   mainLink: RiLink,
    //   color: 'blue',
    // },
  ];

  const filteredLinks = socialLinkIcons.filter(contactStyle =>
    contact.includes(contactStyle.name!),
  );

  return (
    <>
      <div className={s.contactButton}>
        {filteredLinks.map(con => (
          <>
            {con.icon}
            <div className={s.contactButtonText}>
              <h3>{con.name}</h3>
              <span>{contact}</span>
            </div>
            <BsArrowRightCircleFill size="30px" />
          </>
        ))}
        {/*  <RiFacebookCircleFill size="50px" color="#0E6DFD" /> */}
        {/*  <div className={s.contactButtonText}> */}
        {/*    <h3>Facebook</h3> */}
        {/*    <span>{contact}</span> */}
        {/*  </div> */}
        {/*  <div /> */}
        {/*  <BsArrowRightCircleFill size="30px" /> */}
      </div>
    </>
  );
};

export default SocialButtonLink;
