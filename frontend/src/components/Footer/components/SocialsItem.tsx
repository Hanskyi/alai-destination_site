import React from 'react';

interface Props {
    icon:string;
}

const SocialsItem:React.FC<Props> = ({icon}) => {

    return (
        <div className="social__list-item">
            <a href="/">
                <img src={icon.src} alt="social"/>
            </a>
        </div>
    );
};

export default SocialsItem;