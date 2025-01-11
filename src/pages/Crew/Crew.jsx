import { Outlet } from 'react-router-dom';
import Menu from '../../components/Menu/Menu';
import styles from './Crew.module.scss';
import crewMenuStyles from '../../components/Member/MemberNav.module.scss';

// eslint-disable-next-line react/prop-types
export default function Crew({ members }) {
	return (
		<section className={styles.crewPage}>
			<h2 className={styles.heading}>
				<span className={styles.headingNum}>02</span> MEET YOUR CREW
			</h2>
			<div className={styles.memberMenu}>
				<Menu items={members} title="Member Navigation" styles={crewMenuStyles} />
			</div>
			<Outlet />
		</section>
	);
}
