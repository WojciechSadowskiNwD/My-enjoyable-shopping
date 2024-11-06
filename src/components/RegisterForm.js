import { Link } from 'react-router-dom';
import ButtonLink from "./ButtonLink";
import styles from './Login_Register_Form.module.scss';

function RegisterForm() {
	return (
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
						<ButtonLink
							parameters={styles.button_parameters}
							btnSize={styles.btn_size}
						>
							Register
						</ButtonLink>
					</form>
	)
}

export default RegisterForm;