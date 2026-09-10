import "./_Rating.scss";

function Rating({ value }) {
  const rating = parseInt(value, 10);
  const stars = [1, 2, 3, 4, 5];

  const FullStar = () => (
    <svg viewBox="0 0 24 24" className="star-icon full">
      <path d="M12 .587l3.668 7.568L24 9.748l-6 5.848L19.335 24 12 19.897 4.665 24 6 15.596 0 9.748l8.332-1.593z" />
    </svg>
  );

  const EmptyStar = () => (
    <svg viewBox="0 0 24 24" className="star-icon empty">
      <path d="M12 .587l3.668 7.568L24 9.748l-6 5.848L19.335 24 12 19.897 4.665 24 6 15.596 0 9.748l8.332-1.593z" />
    </svg>
  );

  return (
    <div className="rating">
      {stars.map((star) =>
        star <= rating ? <FullStar key={star} /> : <EmptyStar key={star} />,
      )}
    </div>
  );
}
export default Rating;
