import smallLogo from "../img/small_logo.png";
import styles from "./AppStart.module.scss";
import Logo from "../components/Logo";

function AppStart() {
	return (
		<div className={styles.app}>
			<div className={styles.bg_shadow}>
				<header className={styles.app_header}>
					<div className={styles.green_circle}></div>
					<div className={styles.div_size}>
						<Logo details={styles.logo} imgSize={styles.imgSize} />
					</div>
					<div className={styles.user_square}>
						<i class="fa-solid fa-user-large"></i>
						<p>Welcome David!</p>
					</div>
				</header>
				<div className={styles.app_section_button}>
					<div className={styles.button_box}>
						<p>Add a new store and create a shopping list inside</p>
						<button className={styles.addList_btn}>
							+ Add new shopping list
						</button>
					</div>
				</div>
				<div className={styles.app_main}>
					<div className={styles.app_title}>
						<h2>Or choose one of the existing store lists</h2>
					</div>
					<div className={styles.section_shop_lists}>
						<div className={styles.shop_square}>1</div>
						<div className={styles.shop_square}>2</div>
						<div className={styles.shop_square}>3</div>
						<div className={styles.shop_square}>4</div>
					</div>
				</div>

				<div className={styles.logout_box}>
					<button className={styles.logout_btn}>Logout</button>
				</div>
			</div>
		</div>
	);
}

export default AppStart;

// Layout:
// TOP:
// 1. UP --- LOGO!
// 2. BOTTOM -- WYLCOME USER
// MAIN:
// 3. Big button [ADD NEW SHOP & new list for that shop]
// DOWN:
// 4. Squares represent exist shop lists.
