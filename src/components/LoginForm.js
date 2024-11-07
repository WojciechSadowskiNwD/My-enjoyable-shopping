import { Link } from "react-router-dom";
import ButtonLink from "./ButtonLink";
import styles from "./Login_Register_Form.module.scss";

function LoginForm() {
	return (
		<form className={`${styles.form} ${styles.login_margin}`}>
			<h2 className={styles.padding_bottom}>Do you have an account?</h2>
			<input type="text" placeholder="Login" />
			<input type="password" placeholder="Password" />
			<label className={styles.forgot_password}>I forgot my password</label>
			<Link to="/appStart">
				<ButtonLink btnSize={styles.btn_size} positionClass={styles.position_Btn_Form}>Login</ButtonLink>
			</Link>
		</form>
	);
}

export default LoginForm;
