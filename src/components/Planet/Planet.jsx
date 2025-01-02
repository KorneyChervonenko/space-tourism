import PropTypes from 'prop-types';

Planet.propTypes = {
	planet: PropTypes.object,
};

export default function Planet({ planet }) {
	return (
		<section>
			<h3>{planet.name}</h3>
		</section>
	);
}
