import { GetServerSideProps } from 'next';
import { TourDataDetailed } from '@/type';
import axiosApi from '../../axiosApi';
import TourPage from '../../features/TourPage/tour-detailed';

interface Props {
  tourData: TourDataDetailed | null;
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
    const { data } = await axiosApi.get<any>(`tours/${id}`);

    const tData = data.data;
    return {
      props: {
        tourData: tData,
        messages: (await import(`../../../lang/${context.locale}.json`)).default,
      },
    };
  } catch (error) {
    console.error('Error fetching tour data:', error);
    return {
      props: {
        tourData: null,
        messages: (await import(`../../../lang/${context.locale}.json`)).default,
      },
    };
  }
};
