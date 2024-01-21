import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import Rating from '../Rating/Rating';
import styles from './ReviewForm.module.scss';
import axiosApi from '@/axiosApi';
import { fetchReviewsForTour } from '../ClassificationReviews/TourReviewsThunk';
import { useAppDispatch } from '../../store/hooks';

interface Props {
  tourId: number;
}

const ReviewForm: React.FC<Props> = ({ tourId }) => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [displayName, setDisplayName] = useState('');
  const { data: session } = useSession();
  const [hasSubmittedReview, setHasSubmittedReview] = useState(false);
  const dispatch = useAppDispatch();

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleReviewChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(event.target.value);
  };

  const handleDisplayNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayName(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const dataToSend = {
        data: {
          review: review,
          rating: rating,
          displayName: displayName,
          tour: tourId,
          users_permissions_user: session?.user?.userId, // Use user ID from session
        },
      };

      await axiosApi.post('/reviews', dataToSend);

      // Reset fields
      setReview('');
      setRating(0);
      setDisplayName('');

      dispatch(fetchReviewsForTour(String(tourId)));
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  useEffect(() => {
    const fetchUserReview = async () => {
      try {
        if (session) {
          const response = await axiosApi.get(`tours/${tourId}`);
          const userReviews = response.data.data.reviews;

          const userSubmittedReview = Object.values(userReviews).find(
            (review: any) => review.users_permissions_user.id === session.user?.userId,
          );

          if (userSubmittedReview) {
            setHasSubmittedReview(true);
          }
        }
      } catch (error) {
        console.error('Error fetching user review:', error);
      }
    };

    if (session) {
      fetchUserReview();
    }
  }, [session, tourId, review]);

  if (!session) {
    return (
      <div className={styles.review_form}>
        <div className={styles.placeholder}>
          <p>Please log in to submit a review.</p>
        </div>
      </div>
    );
  }

  if (hasSubmittedReview) {
    return (
      <div className={styles.review_form}>
        <div className={styles.placeholder}>
          <p>You have already submitted a review for this tour.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.review_form}>
      <form onSubmit={handleSubmit}>
        <div className={styles.rate_block}>
          <span>Rate tour:</span>
          <Rating size={25} isEdit={true} onChange={handleRatingChange} value={rating} />
        </div>
        <input
          name="displayname"
          value={displayName}
          onChange={handleDisplayNameChange}
          placeholder="Enter your Name..."
        />
        <textarea
          name="review"
          value={review}
          onChange={handleReviewChange}
          placeholder="Enter your review..."
        />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
