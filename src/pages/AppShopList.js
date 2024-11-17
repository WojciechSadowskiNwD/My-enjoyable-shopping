import { useLocation } from "react-router-dom";
import AppCircleHeader from "../components/App_components/AppCircleHeader";
import AppTopTextBar from "../components/App_components/AppTopTextBar";

import styles from "./AppShopList.module.scss";


function AppShopList() {
	const location = useLocation();
	const { img, name } = location.state || {};

	return (
		<div className="app">
			<div className="shadow_bg bg_shadow">
				<AppCircleHeader />
                <AppTopTextBar img={img} name={name}/>




				<h1>SHOP LIST</h1>
				{/* <p>{name}</p> */}
				{/* <img src={img}></img> */}
			</div>
		</div>
	);
}

export default AppShopList;


