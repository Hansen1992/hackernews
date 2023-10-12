import React from 'react';
import Image from 'next/image';
import styles from './topStoryTeaser.module.scss';
import formatTimestamp from '@/utils/formatTimeStamp';
import { story } from '@/types/story.types';

type Props = {
	topStory: story;
};

const TopStoryTeaser = ({ topStory }: Props) => {
	const { title, type, by, time, url, score } = topStory;
	const { day, month } = formatTimestamp(time);
	return (
		<section className={styles.storyWrapper}>
			<div>
				<h1 className={styles.header}>Top Story</h1>
				<p>Specially selected tale for your daily dose of inspiration.</p>
			</div>
			<a href={url}>
				<div className={styles.imageWrapper}>
					<Image
						src='/static/storyimages/image-9.jpg'
						className={styles.image}
						alt='stock photo'
						fill
					/>
				</div>

				<h2 className={styles.title}>{title}</h2>
				<p className={styles.description}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in
					elit sit amet elit tristique fermentum quis facilisis erat. Class
					aptent taciti sociosqu ad litora torquent per conubia nostra, per
					inceptos himenaeos.
				</p>
			</a>
			<div className={styles.reactionWrapper}>
				<ul className={styles.emojiWrapper}>
					<li className={styles.emojiListItem}>
						<Image
							src='/static/emojis/chock.svg'
							width={28}
							height={28}
							alt='chock emoji'
							className={styles.emoji}
						/>
					</li>
					<li className={styles.emojiListItem}>
						<Image
							src='/static/emojis/love.svg'
							width={28}
							height={28}
							alt='love emoji'
							className={styles.emoji}
						/>
					</li>
					<li className={styles.emojiListItem}>
						<Image
							src='/static/emojis/wink.svg'
							width={28}
							height={28}
							alt='wink emoji'
							className={styles.emoji}
						/>
					</li>
				</ul>

				<span className={styles.reaction}>{score} reactions</span>
			</div>
			<div className={styles.contributorWrapper}>
				<div className={styles.avatarImageWrapper}>
					<Image
						src='/static/avatars/avatar-9.jpg'
						className={styles.image}
						alt='avatar'
						fill
					/>
				</div>
				<div className={styles.contributorInfoWrapper}>
					<h3>{by}</h3>
					<div className={styles.contributorInfo}>
						<span className={styles.publishDate}>{`${month} ${day}`}</span>
						<div className={styles.tag}>
							<span>{`# ${type}`}</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TopStoryTeaser;
