import React from 'react';
import style from './preloader.module.scss';

const Preloader = () => {
  return (
    <>
      <div className={style.preloaderContainer}>
        <div className={style.cloud}>
          <svg className={style.preloader}>
            <g>
              <path d="M 50,100 A 1,1 0 0 1 50,0" />
            </g>
            <g>
              <path d="M 50,75 A 1,1 0 0 0 50,-25" />
            </g>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#7df11d', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#e76767', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Preloader;
