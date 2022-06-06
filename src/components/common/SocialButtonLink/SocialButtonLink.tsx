import { BsArrowRightCircleFill } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import { RiFacebookCircleFill, RiGithubFill, RiInstagramFill, RiVimeoFill, RiYoutubeFill, } from 'react-icons/ri';

import s from './SocialButtonLink.module.scss';

const SocialButtonLink = ({ link }: { link: string }) => {
  const socialIconsData = [
    {
      name: 'facebook',
      icon: <RiFacebookCircleFill size="50px" color="#0E6DFD" />,
    },
    {
      name: 'instagram',
      icon: <RiInstagramFill size="50px" color="red" />,
    },
    {
      name: 'github',
      icon: <RiGithubFill size="50px" color="black" />,
    },
    {
      name: 'vk',
      icon: <RiVimeoFill size="50px" color="blue" />,
    },
    {
      name: 'twitter',
      icon: <FaTwitter size="50px" color="blue" />,
    },
    {
      name: 'youtube',
      icon: <RiYoutubeFill size="50px" color="red" />,
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

  const checkLinkInIconData = socialIconsData.filter(iconItem =>
    link.includes(iconItem.name!),
  );

  return (
    <>
      {checkLinkInIconData.map((iconItem, i) => (
        <div key={iconItem.name[i]} className={s.currentButton}>
          {iconItem.icon}
          <div className={s.contactButtonText}>
            <h3>{iconItem.name}</h3>
            <span className={s.linkStyle}>{link}</span>
          </div>
          <BsArrowRightCircleFill size="30px" />
        </div>
      ))}
    </>
  );
};

export default SocialButtonLink;
