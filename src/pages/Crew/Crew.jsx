import { Outlet } from 'react-router-dom';
import MemberNav from '../../components/Member/MemberNav';

// eslint-disable-next-line react/prop-types
export default function Crew({ members }) {
	return (
		<section>
			<h2>Crew</h2>
			<MemberNav members={members} />
			<Outlet />
		</section>
	);
}
