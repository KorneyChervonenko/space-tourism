import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MemberNav.module.scss';

MemberNav.propTypes = {
	members: PropTypes.arrayOf(PropTypes.object),
};

export default function MemberNav({ members }) {
	return (
		<nav>
			<h2 className="visually-hidden">Member Navigation</h2>
			<menu className={styles.memberMenu}>
				{members.map((member) => (
					<li key={member.url}>
						<NavLink to={member.url}>{member.name}</NavLink>
					</li>
				))}
			</menu>
		</nav>
	);
}
