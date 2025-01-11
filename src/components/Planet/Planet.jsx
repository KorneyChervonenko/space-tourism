import PropTypes from 'prop-types';
import styles from './Planet.module.scss';

Planet.propTypes = {
	planet: PropTypes.object,
};

export default function Planet({ planet }) {
	const imgPng = `../src/assets/destination/image-${planet.name.toLowerCase()}.png`;
	const imgWebp = `../src/assets/destination/image-${planet.name.toLowerCase()}.webp`;
	return (
		<section className={styles.planet}>
			<picture className={styles.planetImage}>
				<source srcSet={imgWebp} type="image/webp" />
				<img src={imgPng} alt={planet.name} />
			</picture>
			<h3 className={styles.planetName}>{planet.name}</h3>
			<div className={styles.planetDescription}>
				{planet.description}
				<hr />
				<div className={styles.table}>
					<div className={styles.tableColumn}>
						<h4 className={styles.tableHeader}>AVG. DISTANCE</h4>
						<p className={styles.tableValue}>{planet.distance.toUpperCase()}</p>
					</div>

					<div className={styles.tableColumn}>
						<h4 className={styles.tableHeader}>EST. TRAVEL TIME</h4>
						<p className={styles.tableValue}>{planet.travel.toUpperCase()}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
