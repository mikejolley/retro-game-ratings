import './App.scss';
import { useState, useRef } from 'react';
import RatingsWrapper from './components/ratings-wrapper';
import RatingsList from './components/ratings-list';
import RatingsItem from './components/ratings-item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTwitch,
	faTwitter,
	faReact,
	faFontAwesome,
} from '@fortawesome/free-brands-svg-icons';
import ratings from './ratings.json';
import { ReactComponent as Logo } from './components/logo.svg';
import { useScreenshot } from 'use-react-screenshot'
import classnames from 'classnames';

function App() {
	const [panelMode, setpanelMode] = useState( false );
	const appClass = classnames('site-wrapper', {
		'panel-mode': panelMode,
	});
	const ref = useRef(null)
  	const [image, takeScreenshot] = useScreenshot()
  	const getImage = () => takeScreenshot(ref.current)

	return (
		<div className={appClass} >
			<h1><Logo title="MuffinKiller" alt="MuffinKiller" className="logo" /></h1>

			<header className="site-header">
				<h2>About MuffinKiller</h2>
				<p>I'm a retro streamer on <a href="https://twitch.tv/muffinkiller">Twitch</a> who plays a plethora of retro video games on original consoles (including NES, SNES, GameCube and Mega Drive/Genesis).</p>
				<p>Below you'll find links to my channel and social media, as well as a list of reviews for all of the games I've played on Stream.</p>
				<ul className="links">
					<li className="twitch-button">
						<a href="https://twitch.tv/muffinkiller"><FontAwesomeIcon icon={faTwitch} /> Follow on Twitch</a>
					</li>
					<li className="twitter-button">
						<a href="https://twitter.com/muffinkiller86"><FontAwesomeIcon icon={faTwitter} /> Follow on Twitter</a>
					</li>
				</ul>
			</header>
			<div className="site-content" ref={ref}>
				<RatingsWrapper>
					<RatingsList
						ratings={ratings.ratingsList}
						template={RatingsItem}
					/>
				</RatingsWrapper>
				{ !! panelMode && (
					<span className="more">Click to see more!</span>
				)}
			</div>
			
			{ !! panelMode && (
				<div class="site-tools">
					<button style={{ marginBottom: '10px' }} onClick={getImage}>Take screenshot</button>
					{ !! image && ( <img src={image} alt={'Screenshot'} /> ) }
				</div>
			)}
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
					<li><button className={classnames('toggle-panel-button', {'on': panelMode})} onClick={()=>setpanelMode(!panelMode)}>Toggle panel mode</button></li>
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
