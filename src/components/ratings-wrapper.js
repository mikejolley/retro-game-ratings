const RatingsWrapper = ({ children }) => {
	return (
		<table className="ratings" cellSpacing="0" cellPadding="0">
			<thead>
				<tr>
					<th>Game</th>
					<th>Platform</th>
					<th>Rating</th>
				</tr>
			</thead>
			<tbody>{children}</tbody>
		</table>
	);
};

export default RatingsWrapper;
