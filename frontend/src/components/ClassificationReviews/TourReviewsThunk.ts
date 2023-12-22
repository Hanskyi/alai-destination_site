import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '@/axiosApi';
import { TourDataDetailed, TourReview } from '../../type';

interface TData {
  data: {
    data: {
      data: TourDataDetailed[];
    };
  };
}

interface TourReviewData {
  data: {
    data: {
      reviews: TourReview[];
    };
  };
}

export const fetchReviewsForClassification = createAsyncThunk<TourReview[], { id: string }>(
  'reviews/fetchForClassification',
  async ({ id }) => {
    try {
      const responseEng = await axiosApi.get<any>(`classifications/${id}?_populate=tours`);

      console.log(responseEng);
      const tourData = responseEng.data.data;

      if (!tourData || !tourData?.tours) {
        throw new Error('No tour data found');
      }

      const tours = tourData.tours;
      const reviews: TourReview[] = [];

      for (const tour of tours) {
        const tourId = tour.id;
        const reviewsResponse = await axiosApi.get<any>(
          `tours/${tourId}?populate[reviews]=review,rating,createdAt,displayName`,
        );

        reviews.push(...reviewsResponse.data.data.reviews);
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
  async (id) => {
    try {
      const response = await axiosApi.get<any>(
        `tours/${id}?populate[reviews]=review,rating,createdAt,displayName`,
      );

      const fetchData = response.data.data.reviews;

      console.log(fetchData, 'fetchData');
      return fetchData;
    } catch (error) {
      console.error('Error fetching reviews for tour:', error);
      throw error;
    }
  },
);
