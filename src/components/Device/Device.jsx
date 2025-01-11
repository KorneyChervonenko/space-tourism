import PropTypes from 'prop-types';
import styles from './Device.module.scss';
// import { variables } from '../../styles/_vars.scss';

Device.propTypes = {
	device: PropTypes.object,
};

export default function Device({ device }) {
	const imagePath = '../src/assets/technology/';
	const imgPortrait = imagePath + device.images.portrait.split('/').at(-1);
	const imgLandscape = imagePath + device.images.landscape.split('/').at(-1);

	return (
		<section className={styles.device}>
			<picture className={styles.deviceImage}>
				<source srcSet={imgPortrait} media="(min-width: 90rem)"></source>
				<source srcSet={imgLandscape} media="(max-width: 89.99rem)"></source>
				<img src={imgLandscape} alt={device.name} />
			</picture>
			<h3 className={styles.deviceHeading}>
				<div className={styles.deviceSubHeader}>THE TERMINOLOGY...</div>
				<div className={styles.deviceName}>{device.name.toUpperCase()}</div>
			</h3>
			<div className={styles.deviceDescription}>{device.description}</div>
		</section>
	);
}
