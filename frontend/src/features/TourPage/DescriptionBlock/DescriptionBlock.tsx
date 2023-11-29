import React from 'react';
import descriptionStyle from './DescriptionBlock.module.scss';

interface Props {
  data: string;
}

const DescriptionBlock: React.FC<Props> = ({ data }) => {
  return (
    <div className={`${descriptionStyle.descriptionBlock} container`}>
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  );
};

export default DescriptionBlock;
