import PropTypes from 'prop-types';

Member.propTypes = {
	member: PropTypes.object,
};

export default function Member({ member }) {
	return (
		<section>
			<h3>{member.name}</h3>
		</section>
	);
}
