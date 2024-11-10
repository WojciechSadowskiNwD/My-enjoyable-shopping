import styles from './LogoutBtn.module.scss';

export default function LogoutBtn() {
	return (
		<div className={styles.logout_box}>
			<button className={styles.logout_btn}>Logout</button>
		</div>
	);
}