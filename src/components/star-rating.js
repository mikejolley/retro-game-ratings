const StarRating = ({ rating }) => {
	return (
		<span className="star-rating" title={`${rating} stars`}>
			{Array.from({ length: rating }).map(() => (
				<span className="star">★</span>
			))}
			{Array.from({ length: 5 - rating }).map(() => (
				<span className="empty-star">☆</span>
			))}
		</span>
	);
};

export default StarRating;
