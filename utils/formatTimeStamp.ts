const formatTimestamp = (timestamp: number) => {
	const date = new Date(timestamp * 1000);

	const day = date.getDate().toString().padStart(2, '0');
	const month = date.toLocaleDateString('en-US', { month: 'short' });

	return { day, month };
};

export default formatTimestamp;
