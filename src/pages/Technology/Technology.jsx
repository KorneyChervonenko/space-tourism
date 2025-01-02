import { Outlet } from 'react-router-dom';
import DeviceNav from '../../components/Device/DeviceNav';

// eslint-disable-next-line react/prop-types
export default function Technology({ devices }) {
	return (
		<section>
			<h2>Technology</h2>
			<DeviceNav devices={devices} />
			<Outlet />
		</section>
	);
}
