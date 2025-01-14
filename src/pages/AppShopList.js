import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLogin } from "../contexsts/LoginProvider";
import { useLists } from "../contexsts/ListsProvider";
import AppCircleHeader from "../components/App_components/AppCircleHeader";
import AppTopTextBar from "../components/App_components/AppTopTextBar";
import AddProductForm from "../components/App_components/AddProductForm";
import ShoppingListTopBar from "../components/App_components/ShoppingListTopBar";
import AllProducts from "../components/App_components/AllProducts";
import LogoutBtn from "../components/App_components/LogoutBtn";
import SummaryBar from "../components/App_components/SummaryBar";
import AppOptionsView from "../components/App_components/AppOptionsView";

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

	// automatic redirect from here to Homepage if false
	useEffect(() => {
		if (isAuthenticated === false) {
			navigate("/", { replace: true });
		}
	}, [isAuthenticated, navigate]);

	return (
		<div className="app">
			<div className="shadow_bg bg_shadow">
				<AppCircleHeader />
				<AppTopTextBar img={img} name={name} />
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
