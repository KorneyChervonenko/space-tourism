import { Outlet } from 'react-router-dom';
import PlanetNav from '../../components/Planet/PlanetNav';

// eslint-disable-next-line react/prop-types
export default function Destinations({ planets }) {
	return (
		<section>
			<h2>Destinations</h2>
			<PlanetNav planets={planets} />
			<Outlet />
		</section>
	);
}
