import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

export default function Footer() {
    const currentDate = new Date();
    const year = currentDate.getFullYear(); 
    const month = currentDate.getMonth()+1;

	return (
		<footer className={styles.footer}>
			<h2>My enjoyable shopping</h2>

			<div className={styles.bg_shadow}>
                <div className={styles.footer_box}>
					<h3>Quick links</h3>
                    <Link to="/login">Login</Link>
					<Link to="/orderPremium">Order Premium</Link>
					<Link to="/aboutUs">About us</Link>
					<Link to="/contact">Contact</Link>
				</div>
				<div className={styles.footer_box}>
					<h3>Find us on</h3>
                    <Link to="/">Facebook</Link>
                    <Link to="/">Twitter</Link>
                    <Link to="/">LinkedIn</Link>
				</div>
			</div>
            <div className={styles.footer_bottom}>
                <div className={styles.overline}></div>
                <p>Dev. Wojciech Sadowski - &copy; {`${month}.${year}`}</p> 
            </div>
		</footer>
	);
}
