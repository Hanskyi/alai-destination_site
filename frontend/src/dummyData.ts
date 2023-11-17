interface IReviewsCount {
  rating: number;
  count: number;
}

export interface IReviewTest {
  rating: number;
  author: string;
  tourDate: string;
  reviewText: string;
  creationDate: string;
}

export const REVIEWS_COUNT: IReviewsCount[] = [
  { rating: 5, count: 715 },
  { rating: 4, count: 38 },
  { rating: 3, count: 6 },
  { rating: 2, count: 4 },
  { rating: 1, count: 2 },
];
