import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '@/axiosApi';
import { TourReview } from '@/type';

export const fetchReviewsForClassification = createAsyncThunk<TourReview[], { id: string }>(
  'reviews/fetchForClassification',
  async ({ id }) => {
    try {
      const responseEng = await axiosApi<any>(`classifications/${id}?_populate=tours`)!;

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
