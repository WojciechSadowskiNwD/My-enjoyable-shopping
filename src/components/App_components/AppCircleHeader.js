import styles from './AppCircleHeader.module.scss';
import { useLogin } from '../../contexsts/LoginProvider';
import AppLogo from './AppLogo';


function AppCircleHeader() {
	const {user} = useLogin();
 
	return (
		<header className={styles.app_header}>
			<div className={styles.green_circle}></div>
			<AppLogo/>
			<div className={styles.user_square}>
				<i class="fa-solid fa-user-large"></i>
				<p>Welcome {user}!</p>
			</div>
		</header>
	);
}


export default AppCircleHeader;