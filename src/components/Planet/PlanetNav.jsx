import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './PlanetNav.module.scss';

PlanetNav.propTypes = {
	planets: PropTypes.arrayOf(PropTypes.object),
};

export default function PlanetNav({ planets }) {
	return (
		<nav>
			<h2 className="visually-hidden">Planet Navigation</h2>
			<menu className={styles.planetMenu}>
				{planets.map((planet) => (
					<li key={planet.url}>
						<NavLink to={planet.url}>{planet.name}</NavLink>
					</li>
				))}
			</menu>
		</nav>
	);
}
