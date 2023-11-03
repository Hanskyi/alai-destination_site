import React from 'react';
import SocialsItem from "./SocialsItem";
import IconBlog from "../../../assets/icon/social/i_blog.png";
import IconFacebook from "../../../assets/icon/social/i_fb.png";
import IconInstagram from "../../../assets/icon/social/i_instagram.png";
import IconLinkedin from "../../../assets/icon/social/i_linkedin.png";
import IconTiktok from "../../../assets/icon/social/i_tiktok.png";
import IconTwitter from "../../../assets/icon/social/i_twitter.png";
import IconYoutube from "../../../assets/icon/social/i_youtube.png";

const socials = [IconBlog, IconFacebook, IconInstagram, IconLinkedin, IconTiktok, IconTwitter, IconYoutube];

const Socials = () => {
    return (
        <div className="social__list d-flex">
            {socials.map(icon => (
                <SocialsItem key={icon.src} icon={icon}/>
            ))}
        </div>
    );
};

export default Socials;