import PropTypes from 'prop-types';

Planet.propTypes = {
	planetName: PropTypes.string,
};

export default function Planet({ planetName }) {
	return (
		<section>
			<h3>{planetName}</h3>
		</section>
	);
}
