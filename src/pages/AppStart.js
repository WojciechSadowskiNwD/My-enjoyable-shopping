import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { useLogin } from "../contexsts/LoginProvider";
import CircleHeader from "../layout/components/CircleHeader";
import NewListButton from "../layout/appStart/NewListButton";
import CreateShopList from "../layout/appStart/CreateShopList";
import OrangePillHeader from "../layout/appStart/OrangePillHeader";
import AllShopLists from "../layout/components/AllShopLists";
import LogoutBtn from "../layout/components/LogoutBtn";
import styles from "../sass/AppStart.module.scss";

function AppStart() {
	const [isClickCreate, setIsClickCreate] = useState(false);
	const [isExiting, setIsExiting] = useState(false); //transition param.
	const navigate = useNavigate();
	const { isAuthenticated } = useLogin();

	function handleChange() {
		if (isClickCreate) {
			setIsExiting(false);
		}
		setIsClickCreate((prev) => !prev);
	}

	// automatic redirect from here to Homepage if false
	useEffect(() => {
		if (isAuthenticated === false) {
			navigate("/", { replace: true });
		}
	}, [isAuthenticated, navigate]);

	return (
		<div className="app">
			<div className="bg_shadow shadow_bg">
				<CircleHeader />

				<div className={styles.section_addList}>
					<CSSTransition
						in={!isClickCreate && !isExiting}
						timeout={500}
						classNames="fade"
						unmountOnExit
						onExited={() => {
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