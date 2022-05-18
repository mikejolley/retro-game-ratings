const Platform = ({ name }) => {
	const icons = {
		NES: 'nes.png',
		SNES: 'snes.png',
		'Mega Drive': 'md.png',
		GameCube: 'gamecube.png',
		"Sega Saturn": 'saturn.png',
		PLAYSTATION: 'playstation.png',
	};
	const altText = {
		NES: 'Nintendo Entertainment System',
		SNES: 'Super Nintendo',
		'Mega Drive': 'Sega Mega Drive / Genesis',
		GameCube: 'Nintendo GameCube',
		"Sega Saturn": 'Sega Saturn',
		PLAYSTATION: 'Sony Playstation',
	};
	return (
		<>
			<img
				src={`${process.env.PUBLIC_URL}/assets/${icons[name]}`}
				alt={altText[name]}
				title={altText[name]}
			/>
		</>
	);
};

export default Platform;
