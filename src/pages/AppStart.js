import styles from "./AppStart.module.scss";
import AppCircleHeader from "../components/App_components/AppCircleHeader";
import NewListButton from "../components/App_components/NewListButton";
import OrangePillHeader from "../components/App_components/OrangePillHeader";
import AllShopLists from "../components/App_components/AllShopLists";
import LogoutBtn from "../components/App_components/LogoutBtn";
import CreateShopList from "../components/App_components/CreateShopList";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

function AppStart() {
	const [isClickCreate, setIsClickCreate] = useState(false);
	const [isExiting, setIsExiting] = useState(false);  //transition param.


	function handleChange() {
		if(isClickCreate) {
			setIsExiting(false);
		}
		setIsClickCreate((prev) => !prev);
	};

	return (
		<div className="app">
			<div className="bg_shadow shadow_bg">
				<AppCircleHeader />

				<div className={styles.section_addList}>
					<CSSTransition
						in={!isClickCreate && !isExiting}
						timeout={500}
						classNames="fade"
						unmountOnExit
						onExited={()=> {
							setIsClickCreate(true);
						}}
					>
						<NewListButton onChange={handleChange} />
					</CSSTransition>

					<CSSTransition
						in={isClickCreate}
						timeout={500}
						classNames="fade"
						unmountOnExit
						onExited={() => setIsExiting(false)}
					>
						<CreateShopList onChange={handleChange} />
					</CSSTransition>

				</div>

				<div className={styles.app_main}>
					<OrangePillHeader />
					<AllShopLists />
				</div>

				<LogoutBtn />
			</div>
		</div>
	);
}

export default AppStart;