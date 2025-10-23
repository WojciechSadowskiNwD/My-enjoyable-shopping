import { useLogin } from "../../contexsts/LoginProvider";
import AppLogo from "./AppLogo";
import styles from "./CircleHeader.module.scss";

export default function CircleHeader() { 
	const { user } = useLogin();

	return (
		<header className={styles.app_header}>
			<div className={styles.green_circle}></div>
			<AppLogo />
			<div className={styles.user_square}>
				<i class="fa-solid fa-user-large"></i>
				<p>Welcome {user}!</p>
			</div>
		</header>
	);
}