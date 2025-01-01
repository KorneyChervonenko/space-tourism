import { NavLink } from 'react-router-dom';

import styles from './PageNav.module.scss';

export default function PageNav() {
	return (
		<nav>
			<h2 className="visually-hidden">Page Navigation</h2>
			<menu className={styles.mainMenu}>
				<li>
					<NavLink to="/home">Home</NavLink>
				</li>
				<li>
					<NavLink to="/destination">Destination</NavLink>
				</li>
				<li>
					<NavLink to="/crew">Crew</NavLink>
				</li>
				<li>
					<NavLink to="/technology">Technology</NavLink>
				</li>
			</menu>
		</nav>
	);
}
