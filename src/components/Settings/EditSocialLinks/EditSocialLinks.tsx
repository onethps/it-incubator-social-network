import React, { FC } from 'react';

import s from './EditSocialLinks.module.scss';

type EditSocialLinksType = {
  register: any;
};

const EditSocialLinks: FC<EditSocialLinksType> = ({ register }) => (
  <div className={s.editSocialLinks}>
    <h3 className={s.editSocialLinksTitle}>Edit Social Links</h3>
    <input
      {...register('contacts.facebook')}
      className={s.editSocialLinksFB}
      placeholder="Facebook"
    />
    <input
      {...register('contacts.instagram')}
      className={s.editSocialLinksFB}
      placeholder="Instagram"
    />
    <input
      {...register('contacts.website')}
      className={s.editSocialLinksFB}
      placeholder="WebSite"
    />
    <input
      {...register('contacts.twitter')}
      className={s.editSocialLinksFB}
      placeholder="Twitter"
    />
    <input
      {...register('contacts.youtube')}
      className={s.editSocialLinksFB}
      placeholder="Youtube"
    />
    <input
      {...register('contacts.github')}
      className={s.editSocialLinksFB}
      placeholder="GitHub"
    />
    <input
      {...register('contacts.vk')}
      className={s.editSocialLinksFB}
      placeholder="VK"
    />
    <input
      {...register('contacts.mainLink')}
      className={s.editSocialLinksFB}
      placeholder="ExternalLink"
    />
  </div>
);

export default EditSocialLinks;
