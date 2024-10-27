import Logo from "../components/Logo";
import styles from "./Login.module.scss";
import logoStyles from "../components/Logo.module.scss";
import ButtonLink from "../components/ButtonLink";
import { Link } from "react-router-dom";
import PreviousPage from "../components/PreviousPage";
import Hollow from "../components/Hollow";

function Login() {
	return (
		<div className="pages_bgc">
			<div className="bg_shadow">
				<Logo 
					logoStyles={logoStyles.logo}
					details="logoDetails"
					imgSize={styles.imgSize}
				/>

				<form className={`${styles.form} ${styles.login_margin}`}>
					<h2 className={styles.padding_bottom}>Do you have an account?</h2>
					<input type="text" placeholder="Login" />
					<input type="password" placeholder="Password" />
					<label className={styles.forgot_password}>I forgot my password</label>
					<ButtonLink>Login</ButtonLink>
				</form>
				<form className={`${styles.form} ${styles.register_size}`}>
					<h2>First time here?</h2>
					<p className={styles.padding_bottom}>Create account</p>
					<input type="email" placeholder="Email" />
					<input type="text" placeholder="Name" />
					<input type="text" placeholder="Surname" />
					<input type="password" placeholder="Password*" />
					<input type="password" placeholder="Repeat Password*" />
					<div className={styles.section_margin}>
						<div className={styles.checkbox_box}>
							<input type="checkbox" />
							<label>
								Yes, I want to subscribe to the newsletter to keep up to date
								with news.
							</label>
						</div>
						<div className={styles.checkbox_box}>
							<input type="checkbox" className={styles.hidden_checkbox} />
							<span className={styles.checkmark}></span>
							<label>
								I accept and understand the <Link to="/">Privacy Policy</Link>
							</label>
						</div>
					</div>
					<ButtonLink parameters={styles.button_parameters}>
						Register
					</ButtonLink>
				</form>
				<Hollow height="80px"/>
				<PreviousPage />
			</div> 
		</div>
	);
}

export default Login;
