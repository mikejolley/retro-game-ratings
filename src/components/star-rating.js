const roundHalf = ( num ) => {
	return Math.round( num * 2 ) / 2;
};

const StarRating = ( { rating, showScore = false } ) => {
	const roundedRating = roundHalf( rating );
	const isHalf = roundedRating % 0.5 === 0 && roundedRating % 1 !== 0;
	const stars = Math.floor( roundedRating );
	return (
		<span className="star-rating" title={ `${ rating } stars` }>
			{ Array.from( { length: stars } ).map( () => (
				<span className="star">★</span>
			) ) }
			{ !! isHalf && <span className="half-star">★</span> }
			{ Array.from( { length: 5 - ( isHalf ? stars + 1 : stars ) } ).map(
				() => (
					<span className="empty-star">☆</span>
				)
			) }
			<span className="score">{ showScore ? ' ' + rating : '' }</span>
		</span>
	);
};

export default StarRating;
