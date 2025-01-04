import { useNavigate } from 'react-router-dom';
import styles from './Home.module.scss';

export default function Homepage() {
	const navigate = useNavigate();

	return (
		<section className={styles.homePage}>
			<h2 className="visually-hidden">Homepage</h2>
			<div className={styles.promo}>
				<h3 className={styles.heading}>
					SO, YOU WANT TO TRAVEL TO <br />
					<span className={styles.headingBigWord}>SPACE</span>
				</h3>
				<p className={styles.promoText}>
					Let’s face it; if you want to go to space, you might as well genuinely go to outer space
					and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a
					truly out of this world experience!
				</p>
			</div>
			<button className={styles.exploreBtn} type="button" onClick={() => navigate('/destination')}>
				EXPLORE
			</button>
		</section>
	);
}
