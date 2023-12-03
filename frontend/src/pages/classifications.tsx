import React from 'react';
import Classifications from '@/features/Classifications/Classifications';
import { wrapper } from '@/store/store';
import { fetchHomeData } from '@/features/Home/homeThunk';
import Home from '@/pages/index';

const ClassificationsPage = () => {
  return (
    <>
      <Classifications />
    </>
  );
};

export default ClassificationsPage;
