import { Link } from "react-router-dom";
import styles from './PreviousPage.module.scss';


export default function PreviousPage() {
	return (
		// <Link to="/" onClick={() => window.scrollTo(0, 0)}>
		<Link to="/">
			<div className={styles.button_back}>
                <i className={`fa-solid fa-arrow-left ${styles.arrow_icon}`}></i>
				<p>Back</p>
			</div>
		</Link>
	);
}