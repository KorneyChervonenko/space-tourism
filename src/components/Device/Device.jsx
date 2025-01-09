import PropTypes from 'prop-types';
import styles from './Device.module.scss';
// import { variables } from '../../styles/_vars.scss';

Device.propTypes = {
	device: PropTypes.object,
};

export default function Device({ device }) {
	const desktopWidth = getComputedStyle(document.documentElement).getPropertyValue(
		'--desktop-width'
	);
	// console.log(desktopWidth, Number(desktopWidth));

	const imagePath = '../src/assets/technology/';
	const imgPortrait = imagePath + device.images.portrait.split('/').at(-1);
	const imgLandscape = imagePath + device.images.landscape.split('/').at(-1);

	return (
		<section className={styles.device}>
			<picture className={styles.deviceImage}>
				{/* <source srcSet={imgWebp} type="image/webp" /> */}
				<source srcSet={imgPortrait} media={`(min-width: ${desktopWidth})`}></source>
				<source srcSet={imgLandscape} media={`(max-width: ${desktopWidth})`}></source>
				<img src={imgLandscape} alt={device.name} />
			</picture>
			<h3>{device.name}</h3>
		</section>
	);
}
