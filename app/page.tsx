import Navbar from '@/components/navbar/Navbar';
import styles from './page.module.scss';
import TopStoryTeaser from '@/components/topstory/TopStoryTeaser';
import StoriesList from '@/components/storieslist/StoriesList';
import StoryError from '@/components/storyerror/StoryError';
import { getTenStories } from '@/api/stories/getTenStories';
import { story } from '@/types/story.types';

export default async function Home() {
	const stories: story[] = (await getTenStories()) || [];
	const topStory = stories.sort((a, b) => b.score - a.score)[0];

	return (
		<>
			<Navbar />
			<main className={styles.main}>
				{stories.length > 0 ? (
					<>
						<TopStoryTeaser topStory={topStory} />
						<StoriesList stories={stories} />
					</>
				) : (
					<StoryError />
				)}
			</main>
		</>
	);
}
