import './App.scss';
import RatingsWrapper from './components/ratings-wrapper';
import RatingsList from './components/ratings-list';
import RatingsItem from './components/ratings-item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTwitch,
	faReact,
	faFontAwesome,
} from '@fortawesome/free-brands-svg-icons';
import ratings from './ratings.json';
import { ReactComponent as Logo } from './components/logo.svg';

function App() {
	return (
		<div className="App">
			<Logo title="MuffinKiller" className="logo" />

			<header className="site-header">
				<h1>Retro Game Ratings</h1>
				<div className="columns">
					<div className="about">
						<p>
							This is a collection of reviews for all of the games
							I've streamed on{' '}
							<a href="https://twitch.tv/muffinkiller">Twitch</a>!
						</p>
						<p>
							Each category is rated 1&mdash;5, "5" meaning{' '}
							<i>excellent</i>, and "1" meaning a{' '}
							<i>raging pile of 💩</i>.
						</p>
					</div>
					<div className="twitch-follow">
						<a
							href="https://twitch.tv/muffinkiller"
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon icon={faTwitch} /> MuffinKiller
						</a>
					</div>
				</div>
			</header>
			<div className="site-content">
				<RatingsWrapper>
					<RatingsList
						ratings={ratings.ratingsList}
						template={RatingsItem}
					/>
				</RatingsWrapper>
			</div>
			<footer className="site-footer">
				<ul>
					<li>
						Powered by{' '}
						<a href="https://reactjs.org/" rel="nofollow">
							<FontAwesomeIcon
								icon={faReact}
								aria-label={'React'}
							/>
						</a>
						<a
							href="https://fontawesome.com/license"
							rel="nofollow"
						>
							<FontAwesomeIcon
								icon={faFontAwesome}
								aria-label={'Font Awesome'}
							/>
						</a>
					</li>
					<li>
						<a
							href="https://mikejolley.com"
							title="Built by Mike Jolley"
						>
							<svg
								viewBox="0 0 188 90"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g fillRule="evenodd" opacity=".752">
									<path d="M52 0l51.962 90H.038z"></path>
									<path d="M92 0l51.962 90H40.038z"></path>
									<path d="M188 0v45c0 24.853-20.147 45-45 45-24.604 0-44.597-19.746-44.994-44.256L98 45h45V0h45z"></path>
								</g>
							</svg>
						</a>
					</li>
				</ul>
			</footer>
		</div>
	);
}

export default App;
