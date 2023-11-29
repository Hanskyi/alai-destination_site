import React from 'react';
import SocialsItem from './SocialsItem';
import IconBlog from '../../../assets/icon/social/i_blog.png';
import IconFacebook from '../../../assets/icon/social/i_fb.png';
import IconInstagram from '../../../assets/icon/social/i_instagram.png';
import IconLinkedin from '../../../assets/icon/social/i_linkedin.png';
import IconTiktok from '../../../assets/icon/social/i_tiktok.png';
import IconTwitter from '../../../assets/icon/social/i_twitter.png';
import IconYoutube from '../../../assets/icon/social/i_youtube.png';
import footer from '../Footer.module.scss';
import { useAppSelector } from '@/store/hooks';
import { selectHFData } from '@/features/HeaderFooter/headerFooterSlice';

const socials = [
  IconBlog,
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconTiktok,
  IconTwitter,
  IconYoutube,
];

const Socials = () => {
  const hfData = useAppSelector(selectHFData);

  return (
    <div className={`${footer.social__list} d-flex`}>
      {hfData?.data.socialLinks.map((icon, idx) => (
        <SocialsItem key={idx} icon={icon} />
      ))}
    </div>
  );
};

export default Socials;
