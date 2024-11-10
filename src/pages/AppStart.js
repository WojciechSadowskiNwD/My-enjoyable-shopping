import styles from "./AppStart.module.scss";
import AppCircleHeader from "../components/App_components/AppCircleHeader";
import NewListButton from "../components/App_components/NewListButton";
import OrangePillHeader from "../components/App_components/OrangePillHeader";
import AllShopLists from "../components/App_components/AllShopLists";
import LogoutBtn from "../components/App_components/LogoutBtn";

function AppStart() {
	return (
		<div className={styles.app}>
			<div className={`bg_shadow ${styles.shadow_bg}`}>
				<AppCircleHeader />
				<NewListButton />

				<div className={styles.app_main}>
					<OrangePillHeader />
					<AllShopLists />
				</div>

				<LogoutBtn/>
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
