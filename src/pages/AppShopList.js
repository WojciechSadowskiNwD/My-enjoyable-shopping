import { useLocation } from "react-router-dom";
import AppCircleHeader from "../components/App_components/AppCircleHeader";
import AppTopTextBar from "../components/App_components/AppTopTextBar";

import styles from "./AppShopList.module.scss";
import NewProductForm from "../components/App_components/NewProductForm";


function AppShopList() {
	const location = useLocation();
	const { img, name } = location.state || {};

	return (
		<div className="app">
			<div className="shadow_bg bg_shadow">
				<AppCircleHeader />
                <AppTopTextBar img={img} name={name}/>
                <NewProductForm />

				<div className={styles.list_box}>
				<h2>SHOPPING LIST</h2>

					<div className={styles.products_card}>
						<h3 className={styles.card_title}>diary</h3>
						<p>Cheese</p>
						<p>Milk</p>
						<p>Cottage cheese</p>



					</div>

				</div>

			</div>
		</div>
	);
}

export default AppShopList;