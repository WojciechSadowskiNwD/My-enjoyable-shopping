import { Link } from "react-router-dom";
import styles from "./LogoutBtn.module.scss";

export default function LogoutBtn() {
	return (
		<div className={styles.logout_box}>
			<Link to="/">
				<button className={styles.logout_btn}>Logout</button>
			</Link>
		</div>
	);
}
