import { Outlet } from 'react-router-dom';
// import DeviceNav from '../../components/Device/DeviceNav';
import Menu from '../../components/Menu/Menu';
import deviceMenuStyles from '../../components/Device/DeviceNav.module.scss';

// eslint-disable-next-line react/prop-types
export default function Technology({ devices }) {
	return (
		<section>
			<h2>Technology</h2>
			{/* <DeviceNav devices={devices} /> */}
			<Menu items={devices} title="Device Navigation" styles={deviceMenuStyles} />
			<Outlet />
		</section>
	);
}
