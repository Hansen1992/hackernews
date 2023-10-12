import React from 'react';
import styles from './navbar.module.scss';

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<span className={styles.logo}>Hacker news</span>
		</nav>
	);
};

export default Navbar;
