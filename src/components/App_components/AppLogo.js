import styles from './AppLogo.module.scss';
import smallLogo from "../../img/small_logo.png";
import { Link } from "react-router-dom";

export default function Logo() {
	return (
		<Link to="/">
			<div className={styles.app_logo_container}>
                <div className={styles.img_left}>
				 
					<img
						className={styles.img_logo}
						src={smallLogo}
						alt="logo app"
					/>
				</div>
				<div className={styles.title_right}>
				<h1>My enjoyable shopping</h1>
				</div>
			</div>
		</Link>
	);
}
