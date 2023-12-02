import { GetServerSideProps } from 'next';
import { ITour, TourData } from '../../type'; // Import both interfaces
import axiosApi from '../../axiosApi';
import TourPage from '../tour-detailed';

type Props = {
  tourData: TourData | null; // Change the type to TourData here
};

const Tour = ({ tourData }: Props) => {
  // Check if tourData exists before accessing its properties
  return (
      <>
        {tourData && <TourPage tourData={tourData} />} {/* Pass tourData property */}
        {/* You might add conditional rendering or an error message for when tourData is null */}
      </>
  );
};

export default Tour;

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { id } = context.query || {};

  if (!id || Array.isArray(id)) {
    throw new Error('Param id must be a string');
  }

  try {
    const { data } = await axiosApi.get<ITour>(`tours/${id}`);
    return {
      props: {
        tourData: data ? data.tourData : null, // Pass the tourData property
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
