const StarRating = ({ rating, showScore = false }) => {
	const stars = Math.round(rating);
	return (
		<span className="star-rating" title={`${stars} stars`}>
			{Array.from({ length: stars }).map(() => (
				<span className="star">★</span>
			))}
			{Array.from({ length: 5 - stars }).map(() => (
				<span className="empty-star">☆</span>
			))}{ showScore ? ' ' + rating : '' }
		</span>
	);
};

export default StarRating;
