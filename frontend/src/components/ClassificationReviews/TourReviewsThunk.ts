import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '@/axiosApi';
import { TourData, TourDataDetailed, TourReview } from '../../type';

interface IdArgument {
  id: string;
}

interface TData {
  data: {
    tours: TourDataDetailed[];
  };
}

export const fetchReviewsForClassification = createAsyncThunk<TourReview[], IdArgument>(
  'reviews/fetchForClassification',
  async ({ id }) => {
    try {
      const responseEng = await axiosApi.get<TData[]>(`classifications/${id}?_populate=tours`);
      const tourData = responseEng.data;

      if (!tourData || !tourData[0]?.data?.tours) {
        throw new Error('No tour data found');
      }

      const tours = tourData[0].data.tours;
      const reviews: TourReview[] = [];

      for (const tour of tours) {
        const tourId = tour.id;
        const reviewsResponse = await axiosApi.get<TourReview[]>(
          `tours/${tourId}?populate[reviews]=review,rating,createdAt,displayName`,
        );

        reviews.push(...reviewsResponse.data);
      }
      return reviews;
    } catch (error) {
      console.error('Error fetching reviews for classification:', error);
      throw error;
    }
  },
);

export const fetchReviewsForTour = createAsyncThunk<TourReview[], string>(
  'reviews/fetchForTour',
  async (tourId) => {
    try {
      const response = await axiosApi.get<TourReview[]>(
        `tours/${tourId}?populate[reviews]=review,rating,createdAt,displayName`,
      );

      return response.data;
    } catch (error) {
      console.error('Error fetching reviews for tour:', error);
      throw error;
    }
  },
);
