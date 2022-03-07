import { useState } from 'react';
import StarRating from './star-rating';
import Platform from './platform';
import classnames from 'classnames';

const RatingsItem = ({ rating }) => {
	const [breakdownToggled, setBreakdownToggled] = useState(false);
	const rowClass = classnames('review-row', {
		'show-breakdown': breakdownToggled,
	});

	return (
		<>
			<tr className={rowClass}>
				<th>
					{rating.shortName ? (
						<abbr title={rating.name}>{rating.shortName}</abbr>
					) : (
						rating.name
					)}
				</th>
				<td>
					<Platform name={rating.platform} />
				</td>
				<td>
					<button
						className="toggleBreakdown"
						onClick={() => setBreakdownToggled(!breakdownToggled)}
					>
						<StarRating rating={Math.round(rating.score)} />{' '}
						{rating.score}
					</button>
					<table className="breakdown">
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
								<StarRating rating={Math.round(rating.score)} />
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</>
	);
};

export default RatingsItem;
