import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import Rating from '../Rating/Rating';
import axiosApi from '../../axiosApi';
import styles from './ReviewForm.module.scss';

interface Props {
  tourId: number;
}

const ReviewForm: React.FC<Props> = ({ tourId }) => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(1);
  const { data: session } = useSession();

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleReviewChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReview(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const dataToSend = {
        data: {
          review: review,
          rating: rating,
          tour: tourId,
          users_permissions_user: session?.user?.userId, // Use user ID from session
        },
      };
      const response = await axiosApi.post('/reviews', dataToSend);

      // Reset the form after submission (clear the input fields)
      setReview('');
      setRating(0);
    } catch (error) {
      // Handle errors here
      console.error('Error submitting review:', error);
    }
  };

  if (!session) {
    return (
      <div className={styles.placeholder}>
        <p>Please log in to submit a review.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <Rating size={25} isEdit={true} onChange={handleRatingChange} value={rating} />
      <input
        name="review"
        value={review}
        onChange={handleReviewChange}
        placeholder="Enter your review..."
      />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
