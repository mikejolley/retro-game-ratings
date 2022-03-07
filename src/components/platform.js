const Platform = ({ name }) => {
	const icons = {
		NES: 'nes.png',
		SNES: 'snes.png',
		'Mega Drive': 'md.png',
		GameCube: 'gamecube.png',
	};
	const altText = {
		NES: 'Nintendo Entertainment System',
		SNES: 'Super Nintendo',
		'Mega Drive': 'Sega Mega Drive / Genesis',
		GameCube: 'Nintendo GameCube',
	};
	return (
		<>
			<img
				src={`${process.env.PUBLIC_URL}/assets/${icons[name]}`}
				alt={altText[name]}
				title={altText[name]}
			/>{' '}
			{name}
		</>
	);
};

export default Platform;
