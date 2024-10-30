import { Link } from "react-router-dom";
import styles from "./NavigationBar.module.scss";

function NavigationBar() {
	return (
		<div className={styles.navigation_bar}>
			<div className={styles.link}>
				<Link to="/orderPremium">Order</Link>
			</div>
			<div className={styles.link}>
				<Link to="/aboutUs">About us</Link>
			</div>
			<div className={styles.link}>
				<Link to="/contact">Contact</Link>
			</div>
			<div className={styles.link}>
				<Link to="/login">Login</Link>
			</div>
		</div>
	);
}

export default NavigationBar;
