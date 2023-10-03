interface RatingProps {
  rating: number;
  currentRating?: boolean;
  setRating: (rating: number) => void;
}

export default function Rating({ rating, currentRating, setRating }: RatingProps) {
  return (
    <div
      onClick={() => setRating(rating)}
      className={`
      w-11 h-11 flex justify-center items-center rounded-full cursor-pointer
      ${currentRating ? 'text-white bg-rating' : 'text-content bg-rating/10'}
      hover:bg-button hover:text-white
      `}>
      { rating }
    </div>
  )
}