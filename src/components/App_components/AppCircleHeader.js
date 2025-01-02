import styles from './AppCircleHeader.module.scss';
import { useLogin } from '../../contexsts/LoginProvider';
import Logo from '../Logo';


function AppCircleHeader() {
	const {user} = useLogin();

	return (
		<header className={styles.app_header}>
			<div className={styles.green_circle}></div>
			<div className={styles.div_size}>
				<Logo details={styles.logo} imgSize={styles.imgSize} />
			</div>
			<div className={styles.user_square}>
				<i class="fa-solid fa-user-large"></i>
				<p>Welcome {user}!</p>
			</div>
		</header>
	);
}


export default AppCircleHeader;