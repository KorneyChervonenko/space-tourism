import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
// import styles from './PlanetNav.module.scss';

Menu.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string,
	styles: PropTypes.object,
};

export default function Menu({ items, title, styles }) {
	// console.log(styles);

	return (
		// <nav>
		// 	<h3 className="visually-hidden">{title}</h3>
		// 	<menu className={styles.itemMenu}>
		// 		{items.map((item) => (
		// 			<li className={styles.item} key={item.url}>
		// 				<NavLink to={item.url}>{item.name}</NavLink>
		// 			</li>
		// 		))}
		// 	</menu>
		// </nav>
		<nav>
			<h3 className="visually-hidden">{title}</h3>
			<menu className={styles.itemMenu}>
				{items.map((item) => (
					<li className={styles.item} key={item.url}>
						<NavLink className={styles.pageLink} to={item.url}>
							{item.name}
						</NavLink>
					</li>
				))}
			</menu>
		</nav>
	);
}
