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
      youtube: <RiYoutubeFill size="50px" color="red" />,
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
      <div className={s.contactButton}>
        {checkLinkInIconData.map((iconItem, i) => (
          <>
            {iconItem.icon}
            <div key={i} className={s.contactButtonText}>
              <h3>{iconItem.name}</h3>
              <span>{link}</span>
            </div>
            <BsArrowRightCircleFill size="30px" />
          </>
        ))}
      </div>
    </>
  );
};

export default SocialButtonLink;
