const RatingsWrapper = ({ children }) => {
	return (
		<table className="ratings" cellSpacing="0" cellPadding="0">
			<thead>
				<tr>
					<th className="game-name" colSpan={ 2 }>Game</th>
					<th className="game-rating">Rating</th>
				</tr>
			</thead>
			{children}
		</table>
	);
};

export default RatingsWrapper;
