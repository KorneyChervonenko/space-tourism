import styles from './Member.module.scss';

import PropTypes from 'prop-types';
Member.propTypes = {
	member: PropTypes.object,
};

export default function Member({ member }) {
	// const imagePath = '../src/assets/crew/';
	// const imagePath = '../../public/assets/crew/';
	const imagePath = '/assets/crew/';
	const pngFileName = member.images.png.split('/').at(-1);
	const webpFileName = member.images.webp.split('/').at(-1);
	const imgPng = imagePath + pngFileName;
	const imgWebp = imagePath + webpFileName;

	return (
		<section className={styles.member}>
			<picture className={styles.memberImage}>
				<source srcSet={imgWebp} type="image/webp" />
				<img src={imgPng} alt={member.name} />
			</picture>
			<hr className={styles.horizontalLine} />

			<h3 className={styles.memberHeading}>
				<div className={styles.memberRole}>{member.role.toUpperCase()}</div>
				<div className={styles.memberName}>{member.name.toUpperCase()}</div>
			</h3>

			<div className={styles.memberBio}>{member.bio}</div>
		</section>
	);
}
