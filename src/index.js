import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Find all widget divs
const widgetDivs = document.querySelectorAll('.muffinkiller-ratings-widget');

widgetDivs.forEach((div) => {
	ReactDOM.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
		div
	);
});
