import { Outlet } from 'react-router-dom';
import styles from './Technology.module.scss';
import Menu from '../../components/Menu/Menu';
import deviceMenuStyles from '../../components/Device/DeviceNav.module.scss';

// eslint-disable-next-line react/prop-types
export default function Technology({ devices }) {
	return (
		<section className={styles.technologyPage}>
			<h2 className={styles.heading}>
				<span className={styles.headingNum}>03</span> SPACE LAUNCH 101
			</h2>
			<div className={styles.deviceMenu}>
				<Menu items={devices} title="Device Navigation" styles={deviceMenuStyles} />
			</div>
			<Outlet />
		</section>
	);
}
