import { GetServerSideProps } from 'next';
import { TourData } from '../../type';
import axiosApi from '../../axiosApi';
import TourPage from '../tour-detailed';

interface Props {
  tourData: TourData | null;
}

const Tour = ({ tourData }: Props) => {
  return <>{tourData && <TourPage tourData={tourData} />}</>;
};

export default Tour;

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { id } = context.query || {};

  if (!id || Array.isArray(id)) {
    throw new Error('Param id must be a string');
  }

  try {
    const { data } = await axiosApi.get<TourData>(`tours/${id}`);
    return {
      props: {
        tourData: data,
      },
    };
  } catch (error) {
    console.error('Error fetching tour data:', error);
    return {
      props: {
        tourData: null,
      },
    };
  }
};
