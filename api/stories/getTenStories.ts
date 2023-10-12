import {
	API_URL_TOP_STORIES,
	API_URL_ITEM,
	API_URL_USER,
} from './config_stories';

export const getTenStories = async () => {
	const url = `${API_URL_TOP_STORIES}?print=pretty&limitToFirst=10&orderBy="$key"`;

	try {
		const response = await fetch(url);
		if (response.ok === false) {
			throw new Error(
				`Failed to fetch data from ${url}: ${response.status} ${response.statusText}`
			);
		}
		const json = await response.json();
		const promises = json.map(async (id: string) => {
			const itemResponse = await fetch(`${API_URL_ITEM}/${id}.json`);
			const itemData = await itemResponse.json();

			const userResponse = await fetch(`${API_URL_USER}/${itemData.by}.json`);
			const userData = await userResponse.json();
			const karma = userData.karma;

			const mergedData = {
				...itemData,
				karma,
			};

			return mergedData;
		});
		const result = await Promise.all(promises);
		return result;
	} catch (error) {
		console.error(`Error while fetching top stories: ${error}`);
	}
};
