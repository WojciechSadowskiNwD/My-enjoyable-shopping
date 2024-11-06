import ButtonLink from './ButtonLink';
import styles from './Login_Register_Form.module.scss';


function LoginForm() {
	return (
		<form className={`${styles.form} ${styles.login_margin}`}>
			<h2 className={styles.padding_bottom}>Do you have an account?</h2>
			<input type="text" placeholder="Login" />
			<input type="password" placeholder="Password" />
			<label className={styles.forgot_password}>I forgot my password</label>
			<ButtonLink btnSize={styles.btn_size}>Login</ButtonLink>
		</form>
	);
}


export default LoginForm;