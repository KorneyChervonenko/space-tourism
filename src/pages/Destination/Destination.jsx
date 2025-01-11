import { Outlet } from 'react-router-dom';
// import PlanetNav from '../../components/Planet/PlanetNav';
import Menu from '../../components/Menu/Menu';
import styles from './Destination.module.scss';

import planetMenuStyles from '../../components/Planet/PlanetNav.module.scss';

// eslint-disable-next-line react/prop-types
export default function Destinations({ planets }) {
	return (
		<section className={styles.destinationPage}>
			<h2 className={styles.heading}>
				<span className={styles.headingNum}>01</span> PICK YOUR DESTINATION
			</h2>
			<div className={styles.planetMenu}>
				<Menu items={planets} title="Planet Navigation" styles={planetMenuStyles} />
			</div>
			<Outlet />
		</section>
	);
}
