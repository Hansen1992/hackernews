import React from 'react';
import styles from './storiesList.module.scss';
import { story } from '@/types/story.types';
import Image from 'next/image';
import formatTimestamp from '@/utils/formatTimeStamp';

type Props = {
	stories: story[];
};

const StoriesList = ({ stories }: Props) => {
	const sortedStories = stories.sort((a, b) => a.score - b.score);

	return (
		<section className={styles.storiesWrapper}>
			<div>
				<h1 className={styles.header}>Latest Stories</h1>
				<p>Most recently published stories on Hacker News.</p>
				<div className={styles.cardListWrapper}>
					{sortedStories.map(
						({ id, url, title, type, time, by, score, karma }, index) => {
							const { day, month } = formatTimestamp(time);

							return (
								<div key={id} className={styles.cardWrapper}>
									<a href={url}>
										<div className={styles.imageWrapper}>
											<Image
												src={`/static/storyimages/image-${index}.jpg`}
												alt='stock-photo'
												fill
												className={styles.image}
											/>
										</div>

										<div className={styles.cardContent}>
											<h2 className={styles.title}>{title}</h2>
											<p className={styles.description}>
												Sed ut perspiciatis unde omnis iste natus error sit
												voluptatem accusantium doloremque laudantium, totam rem
												aperiam, eaque ipsa quae ab illo inventore veritatis et
												quasi architecto beatae vitae dicta sunt explicabo. Nemo
												enim ipsam voluptatem quia voluptas sit
											</p>
										</div>
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
												src={`/static/avatars/avatar-${index}.jpg`}
												className={styles.image}
												alt='avatar'
												fill
											/>
										</div>
										<div className={styles.contributorInfoWrapper}>
											<div className={styles.contributorInfoTitle}>
												<h3>{by}</h3>

												<Image
													src='/static/emojis/star.png'
													alt='star'
													width={14}
													height={14}
													className={styles.star}
												/>
												<span className={styles.karma}>{karma}</span>
											</div>
											<div className={styles.contributorInfo}>
												<span
													className={styles.publishDate}
												>{`${month} ${day}`}</span>
												<div className={styles.tag}>
													<span>{`# ${type}`}</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						}
					)}
				</div>
			</div>
		</section>
	);
};

export default StoriesList;
