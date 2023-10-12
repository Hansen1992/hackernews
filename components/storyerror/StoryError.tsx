import React from 'react';
import styles from './storyError.module.scss';

const StoryError = () => {
	return (
		<div className={styles.errorWrapper}>
			<div className={styles.errorInfoWrapper}>
				<span>
					Unfortunately, we can not get access to any articles at the moment
				</span>
			</div>
		</div>
	);
};

export default StoryError;
