import { useState } from 'react';
import StarRating from './star-rating';
import Platform from './platform';
import classnames from 'classnames';

const RatingsItem = ({ rating }) => {
	const [breakdownToggled, setBreakdownToggled] = useState(false);
	const bodyClassName = classnames('review-item', {
		'show-breakdown': breakdownToggled,
	});

	return (
		<tbody className={bodyClassName}>
			<tr className="review-row">
				<td className="game-platform">
					<Platform name={rating.platform} />
				</td>
				<td className="game-name">
					{rating.shortName ? (
						<abbr title={rating.name}>{rating.shortName}</abbr>
					) : (
						rating.name
					)}
				</td>
				<td className="game-rating">
					<button
						className="toggleBreakdown"
						onClick={() => setBreakdownToggled(!breakdownToggled)}
					>
						<StarRating rating={rating.score} showScore={true} />
					</button>
					
				</td>
			</tr>
			<tr className="breakdown-row">
				<td colSpan={3}>
					<table className="breakdown">
						<tbody>
							<tr>
								<th>Gameplay</th>
								<td>
									<StarRating rating={rating.ratings.gameplay} />
								</td>
							</tr>
							<tr>
								<th>Graphics / Animations</th>
								<td>
									<StarRating rating={rating.ratings.graphics} />
								</td>
							</tr>
							<tr>
								<th>Music / Sounds</th>
								<td>
									<StarRating rating={rating.ratings.music} />
								</td>
							</tr>
							<tr>
								<th>Replayability / Length</th>
								<td>
									<StarRating rating={rating.ratings.replay} />
								</td>
							</tr>
							<tr>
								<th>Challenge / Fairness</th>
								<td>
									<StarRating rating={rating.ratings.challenge} />
								</td>
							</tr>
							<tr>
								<th>Personal Slant</th>
								<td>
									<StarRating rating={rating.ratings.slant} />
								</td>
							</tr>
							<tr>
								<th>
									<strong>Total</strong>
								</th>
								<td>
									<StarRating rating={rating.score} />
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	);
};

export default RatingsItem;
