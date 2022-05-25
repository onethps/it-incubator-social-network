import React from 'react';

import s from './EditSocialLinks.module.scss';

const EditSocialLinks = () => (
  <div className={s.editSocialLinks}>
    <h3 className={s.editSocialLinksTitle}>Edit Social Links</h3>
    <input className={s.editSocialLinksFB} placeholder="Facebook" />
    <input className={s.editSocialLinksFB} placeholder="Instagram" />
    <input className={s.editSocialLinksFB} placeholder="WebSite" />
    <input className={s.editSocialLinksFB} placeholder="Twitter" />
    <input className={s.editSocialLinksFB} placeholder="Youtube" />
    <input className={s.editSocialLinksFB} placeholder="GitHub" />
    <input className={s.editSocialLinksFB} placeholder="VK" />
    <input className={s.editSocialLinksFB} placeholder="ExternalLink" />
  </div>
);

export default EditSocialLinks;
