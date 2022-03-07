const weights = {
	gameplay: 0.2,
	graphics: 0.2,
	music: 0.2,
	replay: 0.1,
	challenge: 0.1,
	slant: 0.2,
};

const getScore = (ratings) => {
	return Object.entries(ratings)
		.reduce(
			(currentScore, [key, value]) => currentScore + value * weights[key],
			0
		)
		.toFixed(2);
};

const RatingsList = ({ ratings, template: Item }) => {
	const scoredRatings = ratings.map((rating) => {
		return {
			...rating,
			score: getScore(rating.ratings),
		};
	});

	scoredRatings.sort(function (a, b) {
		return parseFloat(b.score) - parseFloat(a.score);
	});

	return scoredRatings.map((rating) => <Item rating={rating} />);
};

export default RatingsList;
