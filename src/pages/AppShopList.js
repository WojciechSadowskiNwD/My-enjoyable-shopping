import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLogin } from "../contexsts/LoginProvider";
import { useLists } from "../contexsts/ListsProvider";
import CircleHeader from "../layout/components/CircleHeader";
import TopTextBar from "../layout/appShopList/TopTextBar";
import AppOptionsView from "../layout/appShopList/AppOptionsView";
import AddProductForm from "../layout/appShopList/AddProductForm";
import ShoppingListTopBar from "../layout/appShopList/ShoppingListTopBar";
import AllProducts from "../layout/appShopList/AllProducts";
import SummaryBar from "../layout/appShopList/SummaryBar";
import LogoutBtn from "../layout/components/LogoutBtn";


function AppShopList() {
	const location = useLocation();
	const { img, name } = location.state || {};
	const { state } = useLists();
	const navigate = useNavigate();
	const { isAuthenticated } = useLogin();
	const thisList = state[name];
	let totalProducts = thisList.shoppingList.length;
	const toCollected = thisList.shoppingList.filter(
		(item) => item.isCollected === false
	);

	// auto redirect from here to Homepage if false
	useEffect(() => {
		if (isAuthenticated === false) {
			navigate("/", { replace: true });
		}
	}, [isAuthenticated, navigate]);

	return (
		<div className="app">
			<div className="shadow_bg bg_shadow">
				<CircleHeader />
				<TopTextBar img={img} name={name} />
				<AppOptionsView>
					<AddProductForm thisList={thisList} />
					<ShoppingListTopBar />
				</AppOptionsView>
				<AllProducts listName={name} />
				<SummaryBar total={totalProducts} toCollected={toCollected} />
				<LogoutBtn />
			</div>
		</div>
	);
}

export default AppShopList;