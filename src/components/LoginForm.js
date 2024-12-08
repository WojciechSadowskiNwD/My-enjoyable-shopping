import { useNavigate } from "react-router-dom";
import ButtonLink from "./ButtonLink";
import styles from "./Login_Register_Form.module.scss";
import { useEffect } from "react";
import { useLogin } from "../contexsts/LoginProvider";

function LoginForm() {
	const { login, password, onChangeLogin, onChangePass, loginWalidation, wrongData, isAuthenticated } =
		useLogin();

	const navigate = useNavigate();

	function handleSubmitLogin(e) {
		e.preventDefault();
		loginWalidation(login, password);
	}

	// automatic redirect from here to appStart if true, can be moved to homepage and will also work
	useEffect(()=>{
		if(isAuthenticated === true){
			navigate("../appStart", {replace: true})
		}
	},[isAuthenticated, navigate]);


	return (
		<form
			className={`${styles.form} ${styles.login_margin}`}
			onSubmit={handleSubmitLogin}
		>
			<h2 className={styles.padding_bottom}>Do you have an account?</h2>

			<input
				type="text"
				id="login"
				value={login}
				onChange={onChangeLogin}
				placeholder="Login"
			/>
			<input
				type="password"
				id="password"
				value={password}
				onChange={onChangePass}
				placeholder="Password"
			/>

			<label className={styles.forgot_password}>I forgot my password</label>

			{wrongData ? <p className={styles.wrong_Fill_Error}>Incorrect login or password information</p> : ''}

			<ButtonLink
				btnSize={styles.btn_size}
				positionClass={styles.position_Btn_Form_A}
				login={login}
				password={password}
			>
				Login
			</ButtonLink>
		</form>
	);
}

export default LoginForm;
