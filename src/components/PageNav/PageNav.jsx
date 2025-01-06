import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.scss';

export default function PageNav() {
	return (
		<nav className={styles.pageNav}>
			<img className={styles.logo} src="src/assets/shared/logo.svg" alt="" />
			<h2 className="visually-hidden">Page Navigation</h2>
			<ol start="0" role="menu" className={styles.horizontalMenu}>
				<li>
					<NavLink to="/home" className={styles.pageLink}>
						HOME
					</NavLink>
				</li>
				<li>
					<NavLink to="/destination" className={styles.pageLink}>
						DESTINATION
					</NavLink>
				</li>
				<li>
					<NavLink to="/crew" className={styles.pageLink}>
						CREW
					</NavLink>
				</li>
				<li>
					<NavLink to="/technology" className={styles.pageLink}>
						TECHNOLOGY
					</NavLink>
				</li>
			</ol>

			<details className={styles.dropDownMenu}>
				<summary className={styles.dropDownMenuIcon}>
					{/* <img src="src/assets/shared/icon-hamburger.svg" alt="" /> */}
				</summary>
				<ol start="0" role="menu" className={styles.verticalMenu}>
					<li>
						<NavLink to="/home" className={styles.pageLink}>
							HOME
						</NavLink>
					</li>
					<li>
						<NavLink to="/destination" className={styles.pageLink}>
							DESTINATION
						</NavLink>
					</li>
					<li>
						<NavLink to="/crew" className={styles.pageLink}>
							CREW
						</NavLink>
					</li>
					<li>
						<NavLink to="/technology" className={styles.pageLink}>
							TECHNOLOGY
						</NavLink>
					</li>
				</ol>
			</details>
		</nav>
	);
}
