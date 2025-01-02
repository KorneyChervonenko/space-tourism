import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './DeviceNav.module.scss';

DeviceNav.propTypes = {
	devices: PropTypes.arrayOf(PropTypes.object),
};

export default function DeviceNav({ devices }) {
	return (
		<nav>
			<h2 className="visually-hidden">Device Navigation</h2>
			<menu className={styles.deviceMenu}>
				{devices.map((device) => (
					<li key={device.url}>
						<NavLink to={device.url}>{device.name}</NavLink>
					</li>
				))}
			</menu>
		</nav>
	);
}
