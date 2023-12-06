import {useSession} from 'next-auth/react';
import React, {useState} from 'react';
import Rating from '../Rating/Rating';
import axiosApi from '../../axiosApi';
import styles from './ReviewForm.module.scss';

interface Props {
    tourId: number;
}

const ReviewForm: React.FC<Props> = ({tourId}) => {
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(1);
    const [displayName, setDisplayName] = useState('');
    const {data: session} = useSession();

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
                    tour: tourId,
                    displayName: displayName,
                    users_permissions_user: session?.user?.userId, // Use user ID from session
                },
            };
            const response = await axiosApi.post('/reviews', dataToSend);

            // Reset fields
            setReview('');
            setRating(1);
            setDisplayName('');
        } catch (error) {
            // Handle errors here
            console.error('Error submitting review:', error);
        }
    };

    if (!session) {
        return (
            <div className={styles.review_form}>
                <div className={styles.placeholder}>
                    <p>Please log in to submit a review.</p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.review_form}>
            <form onSubmit={handleSubmit}>

                <div className={styles.rate_block}>
                    <span>Rate tour:</span><
                    Rating size={25} isEdit={true} onChange={handleRatingChange} value={rating}/>
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
