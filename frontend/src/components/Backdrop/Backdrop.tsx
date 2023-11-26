import React from 'react';
import style from './Backdrop.module.scss';

interface Props {
  close: React.MouseEventHandler<HTMLDivElement>;
  background: string
}

const Backdrop: React.FC<Props> = ({ close, background }) => {
  return <div style={{background: `rgba(${background})`}} className={style.backdrop} onClick={close}></div>;
};

export default Backdrop;
