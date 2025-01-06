import styles from "./LogoutBtn.module.scss";
import { useLogin } from "../../contexsts/LoginProvider";

export default function LogoutBtn() {
	const { dispatch } = useLogin();

	return (
		<div className={styles.logout_box}>
			<button
				className={styles.logout_btn}
				onClick={() => dispatch({ type: "logout" })}
			>
				Logout
			</button>
		</div>
	); 
}
