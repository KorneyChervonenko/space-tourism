import { Outlet } from 'react-router-dom';
// import MemberNav from '../../components/Member/MemberNav';
import Menu from '../../components/Menu/Menu';
import crewMenuStyles from '../../components/Member/MemberNav.module.scss';

// eslint-disable-next-line react/prop-types
export default function Crew({ members }) {
	return (
		<section>
			<h2>Crew</h2>
			{/* <MemberNav members={members} /> */}
			<Menu items={members} title="Member Navigation" styles={crewMenuStyles} />
			<Outlet />
		</section>
	);
}
