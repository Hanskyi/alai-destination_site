import React from 'react';

interface Props {
  data: string;
}

const Overview: React.FC<Props> = ({ data }) => {
  return (
    <div className="container">
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  );
};

export default Overview;
