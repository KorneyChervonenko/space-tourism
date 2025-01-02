import PropTypes from 'prop-types';

Device.propTypes = {
	device: PropTypes.object,
};

export default function Device({ device }) {
	return (
		<section>
			<h3>{device.name}</h3>
		</section>
	);
}
