import { Outlet } from 'react-router-dom';
// import PlanetNav from '../../components/Planet/PlanetNav';
import Menu from '../../components/Menu/Menu';
import planetMenuStyles from '../../components/Planet/PlanetNav.module.scss';

// eslint-disable-next-line react/prop-types
export default function Destinations({ planets }) {
	return (
		<section>
			<h2>Destinations</h2>
			{/* <PlanetNav planets={planets} /> */}
			<Menu items={planets} title="Planet Navigation" styles={planetMenuStyles} />
			<Outlet />
		</section>
	);
}
