import styles from './Logo.module.scss';
import imgLogo from '../img/transparent_logo.png';

export default function Logo() {
	return (
		<div className={styles.logo}>
			<img className={styles.img_logo} src={imgLogo} alt="logo app"/>
			<h1>My enjoyable shopping</h1>
		</div>
	);
}