import styles from './LoadingIndicator.module.scss';

export default function LoadingIndicator() {
	console.log('Loading...');

	return <div className={styles.LoadingIndicator}>Loading...</div>;
}
